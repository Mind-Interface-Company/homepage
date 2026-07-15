import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(req: NextRequest) {
  let email: unknown;

  try {
    const body = await req.json();
    email = body?.email;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const normalizedEmail = email.trim().toLowerCase();
  const key = `waitlist/${Date.now()}-${randomUUID()}.json`;

  try {
    await put(
      key,
      JSON.stringify({
        email: normalizedEmail,
        submittedAt: new Date().toISOString(),
      }),
      {
        access: "private",
        contentType: "application/json",
        addRandomSuffix: false,
      }
    );
  } catch (err) {
    console.error("Failed to store waitlist signup:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
