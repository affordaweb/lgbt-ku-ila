import { NextRequest, NextResponse } from "next/server";

const validSlug = (slug: string) => /^[a-z0-9-]+$/.test(slug);

function kvConfig() {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  return url?.startsWith("https://") && token ? { url, token } : null;
}

async function kvRequest(path: string, init?: RequestInit) {
  const config = kvConfig();
  if (!config) return null;
  const response = await fetch(`${config.url}${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${config.token}`, ...init?.headers },
    cache: "no-store",
  });
  if (!response.ok) throw new Error("KV request failed");
  return response.json() as Promise<{ result?: number | string | null }>;
}

export async function GET(_: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!validSlug(slug)) return NextResponse.json({ error: "Invalid member" }, { status: 400 });
  try {
    const result = await kvRequest(`/get/member-likes:${encodeURIComponent(slug)}`);
    if (!result) return NextResponse.json({ error: "Likes are not configured" }, { status: 503 });
    return NextResponse.json({ count: Number(result.result ?? 0) || 0 });
  } catch {
    return NextResponse.json({ error: "Could not load likes" }, { status: 503 });
  }
}

export async function POST(_: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!validSlug(slug)) return NextResponse.json({ error: "Invalid member" }, { status: 400 });
  try {
    const result = await kvRequest(`/incr/member-likes:${encodeURIComponent(slug)}`, { method: "POST" });
    if (!result) return NextResponse.json({ error: "Likes are not configured" }, { status: 503 });
    return NextResponse.json({ count: Number(result.result ?? 0) || 0 });
  } catch {
    return NextResponse.json({ error: "Could not save your like" }, { status: 503 });
  }
}
