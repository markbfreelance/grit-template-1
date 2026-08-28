const API_BASE = "https://admin-grit-digital-performance.vercel.app/api";
const ORG_SLUG = "macoy-games";
const ORG_API_KEY = "org_1774647032737_ltv8m5yvr";

const headers = {
  "Content-Type": "application/json",
  "x-api-key": ORG_API_KEY,
};

export type Category = {
  id: string;
  name: string;
  slug?: string;
  description?: string;
};

export type Event = {
  id: string;
  name: string;
  description: string;
  date: string;
  end_date: string;
  location: string;
  max_participants: number | null;
  current_participants: number;
  registration_status: "open" | "closed" | "full";
  registration_deadline: string;
  entry_fee: number;
  category?: { id: string; name: string } | null;
  organization: {
    id: string;
    name: string;
    slug: string;
  };
};

export type RegistrationPayload = {
  organization_slug: string;
  event_id: string;
  name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  emergency_contact: string;
  emergency_phone: string;
};

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(
      `${API_BASE}/organizations/${ORG_SLUG}/categories`,
      { headers, next: { revalidate: 300 } }
    );
    if (!res.ok) return [];
    const json = await res.json();
    return json?.data ?? [];
  } catch {
    return [];
  }
}

export async function getEvents(categoryId?: string): Promise<Event[]> {
  try {
    const url = new URL(`${API_BASE}/events/public`);
    url.searchParams.set("organization_slug", ORG_SLUG);
    if (categoryId) url.searchParams.set("category_id", categoryId);

    const res = await fetch(url.toString(), {
      headers,
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json?.data?.events ?? [];
  } catch {
    return [];
  }
}

export async function registerForEvent(
  payload: RegistrationPayload
): Promise<{ success: boolean; data?: unknown; error?: string }> {
  try {
    // POST to our own Next.js proxy route to avoid CORS — the API key is added server-side
    const res = await fetch("/api/register-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    if (!res.ok) {
      return { success: false, error: json?.error ?? `Error ${res.status}` };
    }
    return { success: true, data: json?.data };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Network error",
    };
  }
}

export { ORG_SLUG };
