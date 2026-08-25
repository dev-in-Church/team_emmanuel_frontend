const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<ApiResponse<T>> {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    };

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        return { error: data.error || data.message || "An error occurred" };
      }

      return { data };
    } catch (error) {
      console.error("API Error:", error);
      return { error: "Network error. Please try again." };
    }
  }

  // Programs
  async getPrograms() {
    return this.request<{
      programs: Array<{
        id: number;
        name: string;
        description: string;
        status: string;
        goal_amount: number;
        current_amount: number;
        image_url: string;
      }>;
    }>("/programs");
  }

  async getProgram(id: number) {
    return this.request<{
      program: {
        id: number;
        name: string;
        description: string;
        status: string;
        goal_amount: number;
        current_amount: number;
        image_url: string;
        start_date: string;
        end_date: string;
      };
    }>(`/programs/${id}`);
  }

  // Events
  async getEvents(params?: { upcoming?: boolean }) {
    const searchParams = new URLSearchParams();
    if (params?.upcoming) searchParams.set("upcoming", "true");

    return this.request<{
      events: Array<{
        id: number;
        title: string;
        description: string;
        location: string;
        event_date: string;
        image_url: string;
        status: string;
      }>;
    }>(`/events?${searchParams.toString()}`);
  }

  async getEvent(id: number) {
    return this.request<{
      event: {
        id: number;
        title: string;
        description: string;
        location: string;
        event_date: string;
        end_date: string;
        image_url: string;
        status: string;
      };
    }>(`/events/${id}`);
  }

  // Gallery
  async getGalleryImages(params?: { category?: string; album_id?: number }) {
    const searchParams = new URLSearchParams();
    if (params?.category) searchParams.set("category", params.category);
    if (params?.album_id)
      searchParams.set("album_id", params.album_id.toString());

    return this.request<{
      images: Array<{
        id: number;
        title: string;
        description: string;
        image_url: string;
        album_name: string;
        category: string;
        created_at: string;
      }>;
    }>(`/gallery?${searchParams.toString()}`);
  }

  async getGalleryAlbums() {
    return this.request<{
      albums: Array<{
        id: number;
        name: string;
        description: string;
        image_count: number;
        cover_image: string;
      }>;
    }>("/gallery/albums");
  }

  // News
  async getNews(params?: { page?: number; limit?: number }) {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.set("page", params.page.toString());
    if (params?.limit) searchParams.set("limit", params.limit.toString());

    return this.request<{
      news: Array<{
        id: number;
        title: string;
        content: string;
        excerpt: string;
        image_url: string;
        author_name: string;
        created_at: string;
      }>;
      pagination: { page: number; limit: number; total: number; pages: number };
    }>(`/news?${searchParams.toString()}`);
  }

  async getNewsArticle(slug: string) {
    return this.request<{
      news: {
        id: number;
        title: string;
        content: string;
        excerpt: string;
        image_url: string;
        author_name: string;
        created_at: string;
      };
    }>(`/news/${slug}`);
  }

  // Donations
  async createDonation(data: {
    amount: number;
    currency: string;
    payment_method: "mpesa" | "card" | "bank_transfer";
    donor_name: string;
    donor_email: string;
    donor_phone?: string;
    message?: string;
    is_anonymous?: boolean;
    program_id?: number;
  }) {
    return this.request<{
      donation: {
        id: number;
        amount: number;
        currency: string;
        status: string;
      };
      message: string;
    }>("/donations", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // M-Pesa STK Push
  async initiateMpesaPayment(data: {
    donation_id: number;
    phone_number: string;
    amount: number;
  }) {
    return this.request<{
      CheckoutRequestID: string;
      MerchantRequestID: string;
      ResponseDescription: string;
      message: string;
    }>("/payments/mpesa/stk-push", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // Stripe Payment
  async createStripeSession(data: {
    donation_id: number;
    success_url: string;
    cancel_url: string;
  }) {
    return this.request<{
      sessionId: string;
      url: string;
    }>("/payments/stripe/create-session", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // Contact Form
  async submitContactForm(data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }) {
    return this.request<{
      message: string;
      contact: { id: number };
    }>("/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // Newsletter subscription
  async subscribeNewsletter(email: string) {
    return this.request<{
      message: string;
    }>("/contact/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
  }
}

export const api = new ApiService();
export default api;
