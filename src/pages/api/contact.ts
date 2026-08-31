export const prerender = false;

import type { APIRoute } from "astro";

const TO_EMAIL = "contact@bramlabs.co";
const FROM_EMAIL = "BramLabs Contact <noreply@bramlabs.co>";

type ContactBody = {
  name: string;
  email: string;
  topic: string;
  message: string;
  website_hp?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const POST: APIRoute = async ({ request, locals }) => {
  // Validate Content-Type
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return new Response(
      JSON.stringify({ error: "Expected application/json" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  let body: Partial<ContactBody>;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid JSON body" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const { name, email, topic, message, website_hp } = body;

  // Honeypot check: If filled, silently return success without sending email
  if (website_hp && website_hp.trim().length > 0) {
    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  }

  // Server-side validation
  if (!name?.trim() || !email?.trim() || !topic?.trim() || !message?.trim()) {
    return new Response(
      JSON.stringify({ error: "All fields are required." }),
      { status: 422, headers: { "Content-Type": "application/json" } },
    );
  }
  if (!isValidEmail(email)) {
    return new Response(
      JSON.stringify({ error: "Invalid email address." }),
      { status: 422, headers: { "Content-Type": "application/json" } },
    );
  }
  if (message.length > 4000) {
    return new Response(
      JSON.stringify({ error: "Message is too long." }),
      { status: 422, headers: { "Content-Type": "application/json" } },
    );
  }

  // On Cloudflare, dashboard-set secrets arrive on locals.runtime.env.
  // import.meta.env only covers build-time values, so try the runtime first.
  const apiKey =
    (locals as { runtime?: { env?: Record<string, string> } })?.runtime?.env
      ?.RESEND_API_KEY ?? import.meta.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return new Response(
      JSON.stringify({ error: "Mail service is not configured." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  const subject = `BramLabs — ${topic} — from ${name.trim()}`;
  const html = `
<p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
<p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
<p><strong>Topic:</strong> ${escapeHtml(topic.trim())}</p>
<hr />
<p style="white-space:pre-wrap;">${escapeHtml(message.trim())}</p>
`.trim();

  const text = `Name: ${name.trim()}\nEmail: ${email.trim()}\nTopic: ${topic.trim()}\n\n${message.trim()}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        reply_to: email.trim(),
        subject,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return new Response(
        JSON.stringify({ error: "Failed to send message. Please try again." }),
        { status: 502, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Network error calling Resend:", err);
    return new Response(
      JSON.stringify({ error: "Network error. Please try again." }),
      { status: 503, headers: { "Content-Type": "application/json" } },
    );
  }
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
