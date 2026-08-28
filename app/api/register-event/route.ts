import { NextRequest, NextResponse } from "next/server";

const API_BASE = "https://admin-grit-digital-performance.vercel.app/api";
const ORG_API_KEY = "org_1774647032737_ltv8m5yvr";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const res = await fetch(`${API_BASE}/events/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ORG_API_KEY,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => ({}));

    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}
