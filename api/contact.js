export default async function handler(request, response) {
  if (request.method !== "POST") return response.status(405).json({ error: "Method not allowed" });
  const { name, email, social = "", siteType, message } = request.body || {};
  if (![name, email, siteType, message].every((value) => typeof value === "string" && value.trim())) {
    return response.status(400).json({ error: "필수 항목을 확인해 주세요." });
  }
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL || !process.env.CONTACT_TO_EMAIL) {
    return response.status(503).json({ error: "문의 전송 설정이 아직 완료되지 않았습니다." });
  }
  const resend = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      reply_to: email.trim(),
      subject: `[WebCanBe] ${siteType} 제작 상담 — ${name.trim()}`,
      text: `이름 / 활동명: ${name}\n이메일: ${email}\n유튜브 또는 SNS: ${social || "미입력"}\n사이트 유형: ${siteType}\n\n프로젝트 설명:\n${message}`
    })
  });
  if (!resend.ok) return response.status(502).json({ error: "이메일 전송 서비스 오류" });
  return response.status(200).json({ ok: true });
}
