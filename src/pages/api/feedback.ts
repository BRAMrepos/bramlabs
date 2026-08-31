export const prerender = false;

import type { APIRoute } from "astro";
import { software } from "@/data/software";

const TO_EMAIL = "support@bramlabs.co";
const FROM_EMAIL = "BramLabs Feedback <noreply@bramlabs.co>";

const KINDS = ["bug", "feature", "question", "other"] as const;
type Kind = (typeof KINDS)[number];

const KIND_LABEL: Record<Kind, string> = {
  bug: "Bug report",
  feature: "Feature request",
  question: "Question",
  other: "Other",
};

const MAX_MESSAGE = 4000;
const MAX_FIELD = 200;

/** Slugs we accept, plus "site" for feedback about bramlabs.co itself. */
const VALID_PRODUCTS = new Set([...software.map((p) => p.slug), "site"]);

type FeedbackBody = {
  product: string;
  kind: string;
  message: string;
  email?: string;
  version?: string;
  environment?: string;
  website_hp?: string;
};

function json(payload: unknown, status: number): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Strips CR/LF so a submitted value cannot inject extra headers into the
 * outgoing mail, and trims to a sane length.
 */
function sanitizeLine(value: string, max = MAX_FIELD): string {
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

export const POST: APIRoute = async ({ request, locals }) => {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return json({ error: "Expected application/json" }, 400);
  }

  let body: Partial<FeedbackBody>;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const { website_hp } = body;

  // Honeypot: a bot filled the hidden field. Return success so it does not
  // learn anything, but send nothing.
  if (website_hp && website_hp.trim().length > 0) {
    return json({ ok: true }, 200);
  }

  const product = sanitizeLine(body.product ?? "", 60);
  const kind = sanitizeLine(body.kind ?? "", 20) as Kind;
  const message = (body.message ?? "").trim();
  const email = sanitizeLine(body.email ?? "");
  const version = sanitizeLine(body.version ?? "", 60);
  const environment = sanitizeLine(body.environment ?? "");

  if (!VALID_PRODUCTS.has(product)) {
    return json({ error: "Choose which product this is about." }, 422);
  }
  if (!KINDS.includes(kind)) {
    return json({ error: "Choose what kind of feedback this is." }, 422);
  }
  if (!message) {
    return json({ error: "Tell us what happened — the message is empty." }, 422);
  }
  if (message.length > MAX_MESSAGE) {
    return json(
      { error: `Message is too long. Keep it under ${MAX_MESSAGE} characters.` },
      422,
    );
  }
  // Email is optional — but if given it has to be usable, or a reply bounces.
  if (email && !isValidEmail(email)) {
    return json(
      { error: "That email address doesn't look right. Leave it blank to send anonymously." },
      422,
    );
  }

  const apiKey = (locals as { runtime?: { env?: Record<string, string> } })
    ?.runtime?.env?.RESEND_API_KEY ?? import.meta.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return json({ error: "Mail service is not configured." }, 500);
  }

  const productTitle =
    software.find((p) => p.slug === product)?.title ??
    (product === "site" ? "bramlabs.co" : product);

  const subject = `[${productTitle}] ${KIND_LABEL[kind]}`;

  const rows: [string, string][] = [
    ["Product", productTitle],
    ["Type", KIND_LABEL[kind]],
    ["From", email || "(not provided — no reply possible)"],
    ["Version", version || "—"],
    ["Environment", environment || "—"],
  ];

  const html = `
<table style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px;">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="padding:2px 12px 2px 0;color:#666;">${escapeHtml(k)}</td><td style="padding:2px 0;"><strong>${escapeHtml(v)}</strong></td></tr>`,
  )
  .join("\n")}
</table>
<hr style="border:0;border-top:1px solid #ddd;margin:16px 0;" />
<p style="white-space:pre-wrap;font-family:system-ui,sans-serif;font-size:14px;line-height:1.6;">${escapeHtml(message)}</p>
`.trim();

  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`;

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
        subject,
        html,
        text,
        // Only set reply_to when we actually have somewhere to reply.
        ...(email ? { reply_to: email } : {}),
      }),
    });

    if (!res.ok) {
      console.error("Resend error:", await res.text());
      return json({ error: "Couldn't send that. Please try again." }, 502);
    }

    return json({ ok: true }, 200);
  } catch (err) {
    console.error("Network error calling Resend:", err);
    return json({ error: "Network error. Please try again." }, 503);
  }
};
