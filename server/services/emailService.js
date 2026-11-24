import { Resend } from "resend";
import { email1, email2, email3, email4 } from "../emails/templates.js";
import { generateAuditPdf } from "./auditPdfService.js";
import { escapeHtml } from "../lib/htmlEscape.js";
import { signLeadLink } from "../lib/adminAuth.js";

const FROM = `Steven at Ella Tech <info@ellatechsolutions.com>`;
let resendClient = null;

const getResendClient = () => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set.");
  }

  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }

  return resendClient;
};

export const sendEmail = async ({ to, subject, html, attachments }) => {
  console.log(`Attempting to send email to ${to} — subject: ${subject}`);
  const resend = getResendClient();
  const { error } = await resend.emails.send({ from: FROM, to, subject, html, attachments });
  if (error) throw new Error(error.message);
  console.log(`Email sent successfully to ${to}`);
};

export const scheduleAuditEmailSequence = async ({
  id,
  name,
  email,
  businessName,
  businessLocation,
  research_data,
}) => {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — skipping audit email sequence.");
    return;
  }
  console.log(`Starting audit email sequence for ${email}`);

  const template = email1(name, research_data);
  const pdfBuffer = await generateAuditPdf({
    businessName,
    businessLocation,
    research_data,
  });

  await sendEmail({
    to: email,
    subject: template.subject,
    html: template.html,
    attachments: [
      {
        filename: `${(businessName || "local-search-audit").replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase() || "local-search-audit"}.pdf`,
        content: pdfBuffer,
      },
    ],
  });

  // Update sequence_step to 1 (next email in 2 days)
  const pool = (await import("../db/pool.js")).default;
  await pool.query(
    "UPDATE subscribers SET sequence_step = 1, next_email_at = NOW() + INTERVAL '2 days', research_status = $1 WHERE id = $2",
    ["completed", id]
  );
};

export const sendAdminNotification = async ({ id, name, email, bizType, teamSize, challenge, triedBefore }) => {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — skipping admin notification.");
    return;
  }

  const adminEmail = process.env.ADMIN_EMAIL || "steven@ellatechsolutions.com";
  const siteUrl = process.env.SITE_URL || "https://www.ellatechsolutions.com";
  const researchUrl = id
    ? `${siteUrl}/admin/research-form?lead_id=${id}&sig=${signLeadLink(id)}`
    : `${siteUrl}/admin/research-form`;

  const row = (label, value) =>
    value
      ? `<tr><td style="padding:6px 0;font-size:14px;color:#64748b;width:140px;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 0;font-size:14px;color:#0f172a;font-weight:600;">${escapeHtml(value)}</td></tr>`
      : "";

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Lead - Research Needed</title>
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
          <tr>
            <td style="background:#ffffff;border-radius:16px;border:1px solid #e2e8f0;padding:36px 40px;">
              <h2 style="margin:0 0 4px;font-size:20px;font-weight:800;color:#0f172a;">
                New lead: ${escapeHtml(name)}
              </h2>
              <p style="margin:0 0 24px;font-size:14px;color:#64748b;">
                <a href="mailto:${encodeURIComponent(email)}" style="color:#1d4ed8;">${escapeHtml(email)}</a>
              </p>
              <table cellpadding="0" cellspacing="0" style="width:100%;border-top:1px solid #e2e8f0;margin-bottom:24px;">
                <tbody>
                  ${row("Business type", bizType)}
                  ${row("Team size", teamSize)}
                  ${row("Biggest challenge", challenge)}
                  ${triedBefore ? row("What they've tried", triedBefore) : ""}
                </tbody>
              </table>
              <a href="${researchUrl}" style="display:inline-block;background:#1d4ed8;color:#ffffff;font-weight:700;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;">
                Start Research →
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  await sendEmail({
    to: adminEmail,
    subject: `New lead: ${name} — ${challenge || "Research needed"}`,
    html,
  });
};

export { email2, email3, email4 };
