-- Team Emmanuel Foundation Seed Data
-- Version: 1.0.0
-- Description: Seeds initial data for the charity web application

-- =====================================================
-- SEED ADMIN USER
-- Password: admin123 (hashed with bcrypt)
-- =====================================================
INSERT INTO users (email, password_hash, name, role, status) VALUES
('admin@teamemmanuel.org', '$2b$10$rOvHEYFHQxLmJJH3rGrjHe3k3rJLkPdRzMdQnhqRTqG5xL6mO6lLe', 'Admin User', 'admin', 'active'),
('editor@teamemmanuel.org', '$2b$10$rOvHEYFHQxLmJJH3rGrjHe3k3rJLkPdRzMdQnhqRTqG5xL6mO6lLe', 'Sarah Njoroge', 'editor', 'active'),
('viewer@teamemmanuel.org', '$2b$10$rOvHEYFHQxLmJJH3rGrjHe3k3rJLkPdRzMdQnhqRTqG5xL6mO6lLe', 'Peter Ochieng', 'viewer', 'active')
ON CONFLICT (email) DO NOTHING;

-- =====================================================
-- SEED PROGRAMS
-- =====================================================
INSERT INTO programs (name, slug, description, short_description, category, target_beneficiaries, current_beneficiaries, budget, spent, status, is_featured) VALUES
(
    'Education for All',
    'education-for-all',
    'Our Education for All program provides quality education and school supplies to underprivileged children across Kenya. We believe every child deserves access to education regardless of their economic background. Through this program, we sponsor school fees, provide learning materials, and build educational infrastructure in underserved communities.',
    'Providing quality education and school supplies to underprivileged children',
    'Education',
    500,
    450,
    2500000,
    1800000,
    'active',
    true
),
(
    'Healthcare Initiative',
    'healthcare-initiative',
    'The Healthcare Initiative brings free medical services to rural communities through organized medical camps. Our team of volunteer doctors and nurses provide consultations, medications, and health education to communities with limited access to healthcare facilities.',
    'Free medical camps and healthcare services for rural communities',
    'Healthcare',
    400,
    320,
    1500000,
    1200000,
    'active',
    true
),
(
    'Food Security Program',
    'food-security-program',
    'Our Food Security Program ensures that vulnerable families have access to nutritious food. We conduct regular food distribution drives, establish community gardens, and provide nutrition education to families in need.',
    'Regular food distribution and nutrition support to families in need',
    'Food Aid',
    300,
    280,
    800000,
    650000,
    'active',
    false
),
(
    'Shelter & Housing',
    'shelter-housing',
    'The Shelter & Housing program focuses on building safe homes for homeless families and disaster victims. We work with local communities to construct durable, affordable housing using sustainable materials and methods.',
    'Building homes for homeless families and disaster victims',
    'Shelter',
    200,
    150,
    5000000,
    3500000,
    'active',
    false
),
(
    'Youth Skills Training',
    'youth-skills-training',
    'This program empowers young people with vocational skills and entrepreneurship training. We offer courses in carpentry, tailoring, computer skills, and business management to help youth become self-reliant.',
    'Vocational training and entrepreneurship programs for youth',
    'Skills Training',
    250,
    200,
    1200000,
    900000,
    'active',
    true
),
(
    'Clean Water Project',
    'clean-water-project',
    'The Clean Water Project focuses on providing clean, safe drinking water to rural communities. We install water wells, water purification systems, and conduct hygiene education programs.',
    'Installing water wells and purification systems in villages',
    'Water & Sanitation',
    1500,
    1200,
    3000000,
    2100000,
    'active',
    false
)
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- SEED EVENTS
-- =====================================================
INSERT INTO events (title, slug, description, short_description, location, event_type, start_date, end_date, capacity, registered_count, status, is_featured) VALUES
(
    'Annual Charity Gala 2026',
    'annual-charity-gala-2026',
    'Join us for our prestigious Annual Charity Gala, an evening of elegance, entertainment, and giving. This black-tie event brings together donors, volunteers, and community leaders to celebrate our achievements and raise funds for the coming year. Enjoy live music, a silent auction, and inspiring stories from our beneficiaries.',
    'A prestigious black-tie event to celebrate achievements and raise funds',
    'Nairobi Serena Hotel',
    'Fundraising',
    '2026-06-15 18:00:00+03',
    '2026-06-15 23:00:00+03',
    300,
    250,
    'upcoming',
    true
),
(
    'Community Health Camp',
    'community-health-camp-may-2026',
    'Our monthly community health camp provides free medical consultations, basic medications, and health screenings to community members. Services include general check-ups, dental care, eye examinations, and health education sessions.',
    'Free medical consultations and health screenings',
    'Kibera Community Center',
    'Healthcare',
    '2026-05-20 08:00:00+03',
    '2026-05-20 17:00:00+03',
    500,
    0,
    'upcoming',
    false
),
(
    'Youth Skills Workshop',
    'youth-skills-workshop-may-2026',
    'A week-long intensive training workshop for young people interested in learning practical skills. This session focuses on digital literacy, basic computer programming, and entrepreneurship fundamentals.',
    'Intensive training in digital literacy and entrepreneurship',
    'TEF Training Center, Westlands',
    'Training',
    '2026-05-01 08:00:00+03',
    '2026-05-05 17:00:00+03',
    50,
    45,
    'upcoming',
    true
),
(
    'Back to School Drive 2026',
    'back-to-school-drive-2026',
    'Our annual Back to School Drive provides school supplies, uniforms, and learning materials to children from low-income families. Join us as we prepare children for academic success.',
    'Providing school supplies and uniforms to children in need',
    'Multiple Locations, Nairobi',
    'Education',
    '2026-04-10 09:00:00+03',
    '2026-04-12 17:00:00+03',
    1000,
    1200,
    'completed',
    false
),
(
    'Food Distribution Day',
    'food-distribution-april-2026',
    'Monthly food distribution event providing essential food items to families in need. We distribute rice, maize flour, cooking oil, and other nutritious staples.',
    'Monthly distribution of essential food items to families in need',
    'Mathare Community Hall',
    'Food Aid',
    '2026-04-05 07:00:00+03',
    '2026-04-05 14:00:00+03',
    500,
    450,
    'completed',
    false
),
(
    'Volunteer Appreciation Day',
    'volunteer-appreciation-day-2026',
    'A special day to honor and celebrate our dedicated volunteers who make our work possible. Join us for food, fun, and recognition of outstanding service.',
    'Celebrating our dedicated volunteers',
    'TEF Headquarters, Karen',
    'Community',
    '2026-07-10 10:00:00+03',
    '2026-07-10 16:00:00+03',
    200,
    0,
    'upcoming',
    false
)
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- SEED GALLERY ALBUMS
-- =====================================================
INSERT INTO gallery_albums (title, slug, description, category, image_count, status, published_at) VALUES
(
    'Community Outreach 2026',
    'community-outreach-2026',
    'Photos from our community outreach programs conducted in early 2026',
    'Events',
    24,
    'published',
    '2026-04-20 10:00:00+03'
),
(
    'School Building Project',
    'school-building-project',
    'Documentation of our school construction projects across Kenya',
    'Programs',
    18,
    'published',
    '2026-04-15 14:30:00+03'
),
(
    'Healthcare Camp March 2026',
    'healthcare-camp-march-2026',
    'Photos from our healthcare camps and medical outreach',
    'Healthcare',
    32,
    'published',
    '2026-04-10 09:00:00+03'
),
(
    'Food Distribution April 2026',
    'food-distribution-april-2026',
    'Monthly food distribution event documentation',
    'Food Aid',
    15,
    'draft',
    NULL
),
(
    'Youth Training Workshop',
    'youth-training-workshop-2026',
    'Skills training and workshop sessions with youth',
    'Skills Training',
    20,
    'published',
    '2026-03-28 08:30:00+03'
),
(
    'Clean Water Initiative',
    'clean-water-initiative-2026',
    'Water well installations and clean water projects',
    'Programs',
    12,
    'published',
    '2026-03-20 15:00:00+03'
)
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- SEED NEWS POSTS
-- =====================================================
INSERT INTO news_posts (title, slug, excerpt, content, author_name, category, status, published_at, is_featured) VALUES
(
    'Annual Report 2025 Released',
    'annual-report-2025-released',
    'We are proud to share our annual report highlighting the impact of our programs in 2025.',
    '<p>We are delighted to release our Annual Report for 2025, documenting the incredible journey of growth, impact, and community transformation we have experienced together.</p><p>Key highlights include:</p><ul><li>Over 5,000 beneficiaries served across all programs</li><li>KES 15 million raised in donations</li><li>200+ active volunteers</li><li>6 new community projects launched</li></ul><p>We extend our heartfelt gratitude to all our donors, volunteers, and partners who made this possible.</p>',
    'Admin',
    'Announcements',
    'published',
    '2026-04-20 10:00:00+03',
    true
),
(
    'New School Building Completed in Kibera',
    'new-school-building-completed-kibera',
    'Thanks to generous donations, we have completed a new school building that will serve over 300 students.',
    '<p>We are thrilled to announce the completion of our newest school building in Kibera, one of the largest informal settlements in Africa.</p><p>This three-story facility features:</p><ul><li>12 classrooms with modern furniture</li><li>A fully equipped computer lab</li><li>A library with over 2,000 books</li><li>Clean water and sanitation facilities</li></ul><p>The school will accommodate 320 students and provide them with a safe, conducive learning environment.</p>',
    'Sarah Njoroge',
    'Projects',
    'published',
    '2026-04-18 14:30:00+03',
    true
),
(
    'Healthcare Camp Reaches 500 Residents',
    'healthcare-camp-reaches-500-residents',
    'Our recent healthcare camp in Mathare provided free medical services to over 500 community members.',
    '<p>Our medical team, comprising 15 volunteer doctors and 20 nurses, conducted a successful healthcare camp in Mathare last weekend.</p><p>Services provided included:</p><ul><li>General medical consultations</li><li>Free medications for common ailments</li><li>HIV/AIDS testing and counseling</li><li>Maternal and child health services</li><li>Health education sessions</li></ul><p>Special thanks to our medical volunteers and partners for making this possible.</p>',
    'Dr. Kamau',
    'Healthcare',
    'published',
    '2026-04-15 09:00:00+03',
    false
),
(
    'Volunteer Appreciation Day Announcement',
    'volunteer-appreciation-day-announcement',
    'Join us in celebrating our dedicated volunteers who make our work possible.',
    '<p>Mark your calendars! We will be hosting our annual Volunteer Appreciation Day on July 10th, 2026.</p><p>This special event will recognize the outstanding contributions of our volunteer family. Activities include:</p><ul><li>Awards ceremony</li><li>Team building activities</li><li>Networking lunch</li><li>Special performances</li></ul><p>More details coming soon!</p>',
    'Admin',
    'Events',
    'draft',
    NULL,
    false
),
(
    'Partnership with Local Schools Announced',
    'partnership-local-schools-announced',
    'We are excited to announce new partnerships with 10 local schools to expand our education programs.',
    '<p>Team Emmanuel Foundation has signed memoranda of understanding with 10 local schools across Nairobi County.</p><p>This partnership will enable us to:</p><ul><li>Provide learning materials to over 2,000 students</li><li>Offer teacher training programs</li><li>Establish computer labs in partner schools</li><li>Implement school feeding programs</li></ul><p>We are committed to ensuring every child has access to quality education.</p>',
    'Peter Ochieng',
    'Partnerships',
    'published',
    '2026-04-10 11:00:00+03',
    false
)
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- SEED SETTINGS
-- =====================================================
INSERT INTO settings (key, value, value_type, description, is_public) VALUES
('organization_name', 'Team Emmanuel Foundation', 'string', 'Organization name', true),
('organization_email', 'info@teamemmanuel.org', 'string', 'Primary contact email', true),
('organization_phone', '+254 700 000 000', 'string', 'Primary contact phone', true),
('organization_address', 'P.O. Box 12345, Nairobi, Kenya', 'string', 'Mailing address', true),
('mpesa_shortcode', '', 'string', 'M-Pesa Business Short Code', false),
('mpesa_passkey', '', 'string', 'M-Pesa Passkey', false),
('mpesa_consumer_key', '', 'string', 'M-Pesa Consumer Key', false),
('mpesa_consumer_secret', '', 'string', 'M-Pesa Consumer Secret', false),
('stripe_publishable_key', '', 'string', 'Stripe Publishable Key', false),
('stripe_secret_key', '', 'string', 'Stripe Secret Key', false),
('smtp_host', '', 'string', 'SMTP Server Host', false),
('smtp_port', '587', 'string', 'SMTP Server Port', false),
('smtp_username', '', 'string', 'SMTP Username', false),
('smtp_password', '', 'string', 'SMTP Password', false)
ON CONFLICT (key) DO NOTHING;

-- =====================================================
-- SEED SAMPLE DONORS
-- =====================================================
INSERT INTO donors (email, name, phone, total_donated, donation_count, first_donation_date, last_donation_date) VALUES
('john.kamau@example.com', 'John Kamau', '+254712345678', 25000, 5, '2025-06-15', '2026-04-25'),
('sarah.wanjiku@example.com', 'Sarah Wanjiku', '+254723456789', 75000, 3, '2025-08-20', '2026-04-25'),
('peter.ochieng@example.com', 'Peter Ochieng', '+254734567890', 15000, 4, '2025-10-10', '2026-04-24'),
('grace.muthoni@example.com', 'Grace Muthoni', '+254745678901', 50000, 2, '2026-01-05', '2026-04-24'),
('michael.njoroge@example.com', 'Michael Njoroge', '+254756789012', 100000, 8, '2025-03-01', '2026-04-23')
ON CONFLICT DO NOTHING;

-- =====================================================
-- COMPLETION MESSAGE
-- =====================================================
DO $$
BEGIN
    RAISE NOTICE 'Team Emmanuel Foundation seed data inserted successfully!';
END;
$$;
