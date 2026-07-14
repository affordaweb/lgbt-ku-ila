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

function saveReferences(refs: string[]) {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(refs, null, 2), "utf-8");
}

export async function POST(request: NextRequest) {
  try {
    const { reference, name, email } = await request.json();

    if (!reference || typeof reference !== "string") {
      return NextResponse.json({ error: "Reference number is required" }, { status: 400 });
    }

    const refs = getReferences();
    const trimmed = reference.trim();

    if (refs.includes(trimmed)) {
      return NextResponse.json({ error: "Reference number already exists", exists: true }, { status: 409 });
    }

    refs.push(trimmed);
    saveReferences(refs);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
