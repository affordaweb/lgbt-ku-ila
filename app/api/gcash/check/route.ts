import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "gcash-references.json");

function getReferences(): string[] {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function POST(request: NextRequest) {
  try {
    const { reference } = await request.json();

    if (!reference || typeof reference !== "string") {
      return NextResponse.json({ error: "Reference number is required" }, { status: 400 });
    }

    const refs = getReferences();
    const exists = refs.includes(reference.trim());

    return NextResponse.json({ exists });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
