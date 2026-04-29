-- Team Emmanuel Foundation Database Functions
-- Version: 1.0.0
-- Description: Helper functions and stored procedures

-- =====================================================
-- FUNCTION: Update donor statistics after donation
-- =====================================================
CREATE OR REPLACE FUNCTION update_donor_stats()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.donor_id IS NOT NULL AND NEW.status = 'completed' THEN
        UPDATE donors
        SET 
            total_donated = total_donated + NEW.amount,
            donation_count = donation_count + 1,
            last_donation_date = CURRENT_DATE,
            first_donation_date = COALESCE(first_donation_date, CURRENT_DATE)
        WHERE id = NEW.donor_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for updating donor stats
DROP TRIGGER IF EXISTS trigger_update_donor_stats ON donations;
CREATE TRIGGER trigger_update_donor_stats
AFTER INSERT ON donations
FOR EACH ROW
EXECUTE FUNCTION update_donor_stats();

-- =====================================================
-- FUNCTION: Update album image count
-- =====================================================
CREATE OR REPLACE FUNCTION update_album_image_count()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE gallery_albums
        SET image_count = image_count + 1
        WHERE id = NEW.album_id;
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE gallery_albums
        SET image_count = GREATEST(image_count - 1, 0)
        WHERE id = OLD.album_id;
        RETURN OLD;
    END IF;
END;
$$ LANGUAGE plpgsql;

-- Trigger for updating album image count
DROP TRIGGER IF EXISTS trigger_update_album_image_count ON gallery_images;
CREATE TRIGGER trigger_update_album_image_count
AFTER INSERT OR DELETE ON gallery_images
FOR EACH ROW
EXECUTE FUNCTION update_album_image_count();

-- =====================================================
-- FUNCTION: Update event registration count
-- =====================================================
CREATE OR REPLACE FUNCTION update_event_registration_count()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE events
        SET registered_count = registered_count + NEW.number_of_attendees
        WHERE id = NEW.event_id;
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE events
        SET registered_count = GREATEST(registered_count - OLD.number_of_attendees, 0)
        WHERE id = OLD.event_id;
        RETURN OLD;
    ELSIF TG_OP = 'UPDATE' THEN
        IF OLD.number_of_attendees != NEW.number_of_attendees THEN
            UPDATE events
            SET registered_count = registered_count - OLD.number_of_attendees + NEW.number_of_attendees
            WHERE id = NEW.event_id;
        END IF;
        RETURN NEW;
    END IF;
END;
$$ LANGUAGE plpgsql;

-- Trigger for updating event registration count
DROP TRIGGER IF EXISTS trigger_update_event_registration_count ON event_registrations;
CREATE TRIGGER trigger_update_event_registration_count
AFTER INSERT OR UPDATE OR DELETE ON event_registrations
FOR EACH ROW
EXECUTE FUNCTION update_event_registration_count();

-- =====================================================
-- FUNCTION: Get donation statistics
-- =====================================================
CREATE OR REPLACE FUNCTION get_donation_stats(
    start_date DATE DEFAULT NULL,
    end_date DATE DEFAULT NULL
)
RETURNS TABLE (
    total_amount DECIMAL(15,2),
    total_count BIGINT,
    mpesa_amount DECIMAL(15,2),
    mpesa_count BIGINT,
    card_amount DECIMAL(15,2),
    card_count BIGINT,
    average_donation DECIMAL(15,2)
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        COALESCE(SUM(d.amount), 0) as total_amount,
        COUNT(*) as total_count,
        COALESCE(SUM(CASE WHEN d.payment_method = 'mpesa' THEN d.amount ELSE 0 END), 0) as mpesa_amount,
        COUNT(CASE WHEN d.payment_method = 'mpesa' THEN 1 END) as mpesa_count,
        COALESCE(SUM(CASE WHEN d.payment_method = 'card' THEN d.amount ELSE 0 END), 0) as card_amount,
        COUNT(CASE WHEN d.payment_method = 'card' THEN 1 END) as card_count,
        COALESCE(AVG(d.amount), 0) as average_donation
    FROM donations d
    WHERE d.status = 'completed'
    AND (start_date IS NULL OR d.created_at >= start_date)
    AND (end_date IS NULL OR d.created_at <= end_date);
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- FUNCTION: Get monthly donation report
-- =====================================================
CREATE OR REPLACE FUNCTION get_monthly_donation_report(
    year_param INTEGER DEFAULT EXTRACT(YEAR FROM CURRENT_DATE)::INTEGER
)
RETURNS TABLE (
    month_number INTEGER,
    month_name TEXT,
    total_amount DECIMAL(15,2),
    donation_count BIGINT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        EXTRACT(MONTH FROM d.created_at)::INTEGER as month_number,
        TO_CHAR(d.created_at, 'Month') as month_name,
        COALESCE(SUM(d.amount), 0) as total_amount,
        COUNT(*) as donation_count
    FROM donations d
    WHERE d.status = 'completed'
    AND EXTRACT(YEAR FROM d.created_at) = year_param
    GROUP BY EXTRACT(MONTH FROM d.created_at), TO_CHAR(d.created_at, 'Month')
    ORDER BY month_number;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- FUNCTION: Get program impact summary
-- =====================================================
CREATE OR REPLACE FUNCTION get_program_impact_summary()
RETURNS TABLE (
    program_name VARCHAR(255),
    category VARCHAR(100),
    beneficiaries INTEGER,
    target INTEGER,
    progress_percentage DECIMAL(5,2),
    total_donations DECIMAL(15,2)
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        p.name as program_name,
        p.category,
        p.current_beneficiaries as beneficiaries,
        p.target_beneficiaries as target,
        CASE 
            WHEN p.target_beneficiaries > 0 
            THEN ROUND((p.current_beneficiaries::DECIMAL / p.target_beneficiaries) * 100, 2)
            ELSE 0
        END as progress_percentage,
        COALESCE(SUM(d.amount), 0) as total_donations
    FROM programs p
    LEFT JOIN donations d ON d.program_id = p.id AND d.status = 'completed'
    WHERE p.status = 'active'
    GROUP BY p.id, p.name, p.category, p.current_beneficiaries, p.target_beneficiaries
    ORDER BY p.current_beneficiaries DESC;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- FUNCTION: Search donors
-- =====================================================
CREATE OR REPLACE FUNCTION search_donors(
    search_term TEXT DEFAULT NULL,
    limit_count INTEGER DEFAULT 20,
    offset_count INTEGER DEFAULT 0
)
RETURNS TABLE (
    id UUID,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(50),
    total_donated DECIMAL(15,2),
    donation_count INTEGER,
    last_donation_date DATE
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        d.id,
        d.name,
        d.email,
        d.phone,
        d.total_donated,
        d.donation_count,
        d.last_donation_date
    FROM donors d
    WHERE 
        search_term IS NULL 
        OR d.name ILIKE '%' || search_term || '%'
        OR d.email ILIKE '%' || search_term || '%'
        OR d.phone ILIKE '%' || search_term || '%'
    ORDER BY d.total_donated DESC
    LIMIT limit_count
    OFFSET offset_count;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- FUNCTION: Create audit log entry
-- =====================================================
CREATE OR REPLACE FUNCTION create_audit_log(
    p_user_id UUID,
    p_action VARCHAR(100),
    p_entity_type VARCHAR(100),
    p_entity_id UUID,
    p_old_values JSONB DEFAULT NULL,
    p_new_values JSONB DEFAULT NULL,
    p_ip_address INET DEFAULT NULL
)
RETURNS UUID AS $$
DECLARE
    v_id UUID;
BEGIN
    INSERT INTO audit_logs (user_id, action, entity_type, entity_id, old_values, new_values, ip_address)
    VALUES (p_user_id, p_action, p_entity_type, p_entity_id, p_old_values, p_new_values, p_ip_address)
    RETURNING id INTO v_id;
    
    RETURN v_id;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- FUNCTION: Get dashboard summary
-- =====================================================
CREATE OR REPLACE FUNCTION get_dashboard_summary()
RETURNS TABLE (
    total_donations DECIMAL(15,2),
    total_donors BIGINT,
    total_beneficiaries BIGINT,
    active_programs BIGINT,
    upcoming_events BIGINT,
    pending_messages BIGINT,
    this_month_donations DECIMAL(15,2),
    last_month_donations DECIMAL(15,2)
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        (SELECT COALESCE(SUM(amount), 0) FROM donations WHERE status = 'completed') as total_donations,
        (SELECT COUNT(*) FROM donors) as total_donors,
        (SELECT COALESCE(SUM(current_beneficiaries), 0) FROM programs WHERE status = 'active') as total_beneficiaries,
        (SELECT COUNT(*) FROM programs WHERE status = 'active') as active_programs,
        (SELECT COUNT(*) FROM events WHERE status = 'upcoming') as upcoming_events,
        (SELECT COUNT(*) FROM contact_messages WHERE status = 'unread') as pending_messages,
        (SELECT COALESCE(SUM(amount), 0) FROM donations WHERE status = 'completed' AND created_at >= DATE_TRUNC('month', CURRENT_DATE)) as this_month_donations,
        (SELECT COALESCE(SUM(amount), 0) FROM donations WHERE status = 'completed' AND created_at >= DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month') AND created_at < DATE_TRUNC('month', CURRENT_DATE)) as last_month_donations;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- COMPLETION MESSAGE
-- =====================================================
DO $$
BEGIN
    RAISE NOTICE 'Team Emmanuel Foundation database functions created successfully!';
END;
$$;
