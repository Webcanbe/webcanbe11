const deliveredRequests = new Map();
const DUPLICATE_WINDOW_MS = 10 * 60 * 1000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value) => String(value)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/\"/g, "&quot;")
  .replace(/'/g, "&#039;");
const clean = (value, maxLength) => typeof value === "string" ? value.trim().slice(0, maxLength) : "";

const sendWithResend = async (apiKey, payload) => {
  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!resendResponse.ok) throw new Error(`Resend returned ${resendResponse.status}`);
};

const pruneDeliveredRequests = (now) => {
  deliveredRequests.forEach((createdAt, key) => {
    if (now - createdAt > DUPLICATE_WINDOW_MS) deliveredRequests.delete(key);
  });
};

export default async function handler(request, response) {
  if (request.method !== "POST") return response.status(405).json({ error: "Method not allowed" });

  const name = clean(request.body?.name, 120);
  const email = clean(request.body?.email, 254).toLowerCase();
  const social = clean(request.body?.social, 300);
  const siteType = clean(request.body?.siteType, 120);
  const message = clean(request.body?.message, 5000);
  const suppliedKey = clean(request.body?.idempotencyKey, 100);
  if (!name || !email || !siteType || !message) return response.status(400).json({ error: "Please complete the required fields." });
  if (!EMAIL_PATTERN.test(email)) return response.status(400).json({ error: "Please enter a valid email address." });

  const apiKey = process.env.RESEND_API_KEY;
  const configuredFrom = clean(process.env.RESEND_FROM_EMAIL, 254);
  const configuredTo = clean(process.env.CONTACT_TO_EMAIL, 254).toLowerCase();
  if (!apiKey || !configuredFrom || !configuredTo) {
    return response.status(503).json({ error: "Project inquiries are not configured yet. Please email creator@webcanbe.com." });
  }
  if (configuredTo !== "creator@webcanbe.com") {
    return response.status(503).json({ error: "Project inquiries are temporarily unavailable. Please email creator@webcanbe.com." });
  }

  const now = Date.now();
  pruneDeliveredRequests(now);
  const duplicateKey = suppliedKey || `${email}|${siteType}|${message}`;
  if (deliveredRequests.has(duplicateKey)) {
    return response.status(409).json({ error: "This project inquiry was already submitted. Please wait before sending it again." });
  }
  deliveredRequests.set(duplicateKey, now);

  const from = configuredFrom.includes("<") ? configuredFrom : `WebCanBe <${configuredFrom}>`;
  const firstName = name.split(/\s+/)[0];
  const projectDetails = [
    ["Name", name], ["Email", email], ["Website / channel", social || "Not provided"],
    ["Project type", siteType], ["Project details", message]
  ];
  const internalText = projectDetails.map(([label, value]) => `${label}:\n${value}`).join("\n\n");
  const internalHtml = projectDetails.map(([label, value]) => `<p><strong>${escapeHtml(label)}</strong><br>${escapeHtml(value).replace(/\n/g, "<br>")}</p>`).join("");
  const acknowledgementText = `Hi ${firstName},\n\nThanks for reaching out to WebCanBe.\n\nWe've received your project details and will review them before getting back to you.\n\nProjects are handled asynchronously, so the next step will usually be a short written brief or follow-up questions rather than a meeting.\n\nWebCanBe\nPremium websites for creator-led businesses.\nhttps://webcanbe.com`;
  const acknowledgementHtml = `<p>Hi ${escapeHtml(firstName)},</p><p>Thanks for reaching out to WebCanBe.</p><p>We've received your project details and will review them before getting back to you.</p><p>Projects are handled asynchronously, so the next step will usually be a short written brief or follow-up questions rather than a meeting.</p><p>WebCanBe<br>Premium websites for creator-led businesses.<br><a href="https://webcanbe.com">https://webcanbe.com</a></p>`;

  try {
    await sendWithResend(apiKey, {
      from, to: ["creator@webcanbe.com"], reply_to: email,
      subject: `[WebCanBe] ${siteType} inquiry — ${name}`,
      text: internalText, html: internalHtml
    });
    await sendWithResend(apiKey, {
      from, to: [email], subject: "We received your project inquiry — WebCanBe",
      text: acknowledgementText, html: acknowledgementHtml
    });
  } catch (error) {
    return response.status(502).json({ error: "The email service could not complete this inquiry." });
  }

  return response.status(200).json({ ok: true });
}
