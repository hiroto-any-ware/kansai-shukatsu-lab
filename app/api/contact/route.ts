import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const CONSULTATION_TYPES = ["取材について", "イベントについて", "その他"] as const;

interface ContactPayload {
  consultationType: string;
  companyName: string;
  contactName: string;
  email: string;
  phone?: string;
  message: string;
}

function isValidPayload(body: unknown): body is ContactPayload {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.consultationType === "string" &&
    (CONSULTATION_TYPES as readonly string[]).includes(b.consultationType) &&
    typeof b.companyName === "string" &&
    b.companyName.trim().length > 0 &&
    typeof b.contactName === "string" &&
    b.contactName.trim().length > 0 &&
    typeof b.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.message === "string" &&
    b.message.trim().length > 0 &&
    (b.phone === undefined || typeof b.phone === "string")
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;

  if (!apiKey || !recipient) {
    console.error(
      "[contact] RESEND_API_KEY または CONTACT_RECIPIENT_EMAIL が未設定です。"
    );
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  const { consultationType, companyName, contactName, email, phone, message } =
    body;

  try {
    const { error } = await resend.emails.send({
      from: "関西就活ラボ 企業窓口 <onboarding@resend.dev>",
      to: recipient,
      replyTo: email,
      subject: `【企業様からのご相談：${consultationType}】${companyName}様`,
      text: [
        `ご相談の種類：${consultationType}`,
        `企業名：${companyName}`,
        `ご担当者名：${contactName}`,
        `メールアドレス：${email}`,
        `電話番号：${phone?.trim() || "（未入力）"}`,
        "",
        "お問い合わせ内容：",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend送信エラー:", error);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] 予期しないエラー:", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
