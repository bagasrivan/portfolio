import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json().catch(() => ({}));

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL,
      reply_to: email,
      subject: `Pesan baru dari ${name.slice(0, 100)}`,
      text: `Dari: ${name} (${email})\n\n${message.slice(0, 2000)}`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}