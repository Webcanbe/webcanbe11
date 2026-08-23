export default async function handler(request, response) {
  if (request.method !== "POST") return response.status(405).json({ error: "Method not allowed" });
  const { name, email, social = "", siteType, message } = request.body || {};
  if (![name, email, siteType, message].every((value) => typeof value === "string" && value.trim())) {
    return response.status(400).json({ error: "Please complete the required fields." });
  }
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL || !process.env.CONTACT_TO_EMAIL) {
    return response.status(503).json({ error: "Project inquiries are not configured yet. Please email creator@webcanbe.com." });
  }
  const resend = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      reply_to: email.trim(),
      subject: `[WebCanBe] ${siteType} inquiry — ${name.trim()}`,
      text: `Name: ${name}\nEmail: ${email}\nWebsite / channel: ${social || "Not provided"}\nProject type: ${siteType}\n\nProject details:\n${message}`
    })
  });
  if (!resend.ok) return response.status(502).json({ error: "The email service could not send this inquiry." });
  return response.status(200).json({ ok: true });
}
