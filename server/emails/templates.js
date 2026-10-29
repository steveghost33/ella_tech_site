import { escapeHtml } from "../lib/htmlEscape.js";

const SITE_URL = process.env.SITE_URL || "https://www.ellatechsolutions.com";
const BOOKING_URL = `${SITE_URL}/#contact`;

const base = (content) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ella Tech Solutions</title>
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

          <!-- Logo bar -->
          <tr>
            <td style="padding-bottom:24px;">
              <img src="https://www.ellatechsolutions.com/images/ellalogo.png" alt="Ella Tech Solutions" width="120" style="display:block;" />
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#ffffff;border-radius:16px;border:1px solid #e2e8f0;padding:36px 40px;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:24px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.6;">
                Ella Tech Solutions · Detroit, MI<br/>
                You're receiving this because you requested a local search audit from
                <a href="${SITE_URL}" style="color:#94a3b8;">ellatechsolutions.com</a>.<br/>
                No spam — ever. Reply to this email to unsubscribe.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

const btn = (href, label) =>
  `<a href="${href}" style="display:inline-block;background:#1d4ed8;color:#ffffff;font-weight:700;font-size:15px;padding:13px 28px;border-radius:10px;text-decoration:none;margin-top:8px;">${label}</a>`;

const divider = `<hr style="border:none;border-top:1px solid #f1f5f9;margin:24px 0;" />`;

// ── Email 1 — Immediate: Local Search Visibility Audit ─────────────────────
export const email1 = (name, research_data) => {
  const research = research_data || {};

  return {
    subject: `Here's your Local Search Visibility Audit, ${name}`,
    html: base(`
      <h1 style="margin:0 0 8px;font-size:22px;font-weight:800;color:#0f172a;line-height:1.3;">
        Your local search audit is ready, ${escapeHtml(name)}
      </h1>
      <p style="margin:0 0 20px;font-size:15px;color:#475569;line-height:1.7;">
        I've analyzed your online presence — where you show up, where you don't, and what's holding you back in local search. The full audit PDF is attached.
      </p>

      <div style="background:#f0f4ff;border-left:4px solid #1d4ed8;padding:16px;margin:20px 0;border-radius:6px;">
        <p style="margin:0 0 12px;font-size:14px;font-weight:700;color:#0f172a;">
          Here's what jumped out:
        </p>
        <p style="margin:0;font-size:14px;color:#475569;">
          ${escapeHtml(research.summary) || "Your business has opportunities in local search ranking, Google Business Profile optimization, and website visibility."}
        </p>
      </div>

      ${divider}

      <p style="margin:0 0 12px;font-size:14px;font-weight:700;color:#0f172a;">What to do next:</p>
      <ol style="margin:0 0 20px;padding-left:20px;font-size:14px;color:#475569;line-height:1.9;">
        <li>Download the full audit PDF — it has the details and scoring</li>
        <li>Look for "Quick Wins" section — those are things you can tackle yourself right away</li>
        <li>The bigger gaps? That's where professional help makes the biggest difference</li>
      </ol>

      <p style="margin:0;font-size:14px;color:#475569;line-height:1.7;">
        Tomorrow I'll send a specific walkthrough of your #1 priority — the one thing that'll move the needle fastest for you.
      </p>

      ${divider}

      <p style="margin:0;font-size:14px;color:#64748b;line-height:1.7;">
        — Steven<br/>
        <span style="color:#94a3b8;">Ella Tech Solutions</span>
      </p>
    `),
  };
};

// ── Email 2 — Day 2: Action Guide for #1 Issue ────────────────────────────
export const email2 = (name, research_data) => {
  const research = research_data || {};
  const issues = Array.isArray(research.website_issues) ? research.website_issues : [];
  const topIssue = issues[0] || "Improve your local search visibility";
  const quickWins = Array.isArray(research.quick_wins) ? research.quick_wins : [];
  const firstWin = quickWins[0] || "Start with your Google Business Profile";

  return {
    subject: `How to fix your #1 local search issue`,
    html: base(`
      <h1 style="margin:0 0 8px;font-size:22px;font-weight:800;color:#0f172a;line-height:1.3;">
        Your #1 priority: ${escapeHtml(topIssue)}
      </h1>
      <p style="margin:0 0 20px;font-size:15px;color:#475569;line-height:1.7;">
        Hey ${escapeHtml(name)}, from your audit, this one thing will have the biggest impact on your local search results and customer visibility. Here's how to fix it:
      </p>

      <div style="background:#f0f4ff;border-left:4px solid #1d4ed8;padding:16px;margin:20px 0;border-radius:6px;">
        <p style="margin:0;font-size:14px;color:#475569;line-height:1.7;">
          ${escapeHtml(firstWin)}
        </p>
      </div>

      ${divider}

      <p style="margin:0 0 8px;font-size:14px;font-weight:700;color:#0f172a;">Why this matters:</p>
      <p style="margin:0 0 20px;font-size:14px;color:#475569;line-height:1.7;">
        This directly impacts whether local customers find you when they search for what you do. It's also something most local businesses miss — which means it's a competitive advantage if you get it right.
      </p>

      ${divider}

      <p style="margin:0 0 8px;font-size:14px;font-weight:700;color:#0f172a;">Want help with the other issues?</p>
      <p style="margin:0;font-size:14px;color:#475569;line-height:1.7;">
        That's where consulting comes in. We can tackle all of them together and have you showing up correctly in local search within weeks, not months.
      </p>

      ${btn(BOOKING_URL, "Book a free 30-min strategy call →")}

      ${divider}

      <p style="margin:0;font-size:14px;color:#64748b;line-height:1.7;">
        — Steven<br/>
        <span style="color:#94a3b8;">Ella Tech Solutions</span>
      </p>
    `),
  };
};

// ── Email 3 — Day 5: Personal check-in ───────────────────────────────────
export const email3 = (name) => ({
  subject: `Did you get a chance to tackle that?`,
  html: base(`
    <p style="margin:0 0 20px;font-size:15px;color:#0f172a;line-height:1.7;">
      Hey ${escapeHtml(name)},
    </p>
    <p style="margin:0 0 20px;font-size:15px;color:#475569;line-height:1.7;">
      I'm curious if you've had a chance to work through your audit and that #1 issue I sent over.
    </p>
    <p style="margin:0 0 20px;font-size:15px;color:#475569;line-height:1.7;">
      If you got stuck, or if you want to talk through the bigger strategy of how to actually own local search (instead of just scraping by), that's exactly what the free 30-minute session is for.
    </p>
    <p style="margin:0 0 20px;font-size:15px;color:#475569;line-height:1.7;">
      No pressure — I just hate to see a business miss opportunities because the technical stuff gets in the way.
    </p>

    ${btn(BOOKING_URL, "Book your free 30-min call →")}

    ${divider}

    <p style="margin:0;font-size:14px;color:#64748b;line-height:1.7;">
      Either way, feel free to reply here — I read every message.<br/><br/>
      — Steven<br/>
      <span style="color:#94a3b8;">Ella Tech Solutions</span>
    </p>
  `),
});

// ── Email 4 — Day 8: Final push ──────────────────────────────────────────
export const email4 = (name) => ({
  subject: `One more thing about your local search…`,
  html: base(`
    <p style="margin:0 0 20px;font-size:15px;color:#0f172a;line-height:1.7;">
      Hey ${escapeHtml(name)},
    </p>
    <p style="margin:0 0 20px;font-size:15px;color:#475569;line-height:1.7;">
      Last note from me — I don't want to clutter your inbox.
    </p>
    <p style="margin:0 0 20px;font-size:15px;color:#475569;line-height:1.7;">
      If you've looked at your audit and the priorities are clear but the execution feels overwhelming, that's when a solid strategy call makes all the difference. We can map out the exact path forward and what's realistic for your situation.
    </p>
    <p style="margin:0 0 24px;font-size:15px;color:#475569;line-height:1.7;">
      No pressure either way — but if you want clarity before you move forward, here's the link:
    </p>

    ${btn(BOOKING_URL, "Book my free strategy session →")}

    ${divider}

    <p style="margin:0;font-size:14px;color:#64748b;line-height:1.7;">
      — Steven<br/>
      <span style="color:#94a3b8;">Ella Tech Solutions</span>
    </p>

    <p style="margin:16px 0 0;font-size:12px;color:#94a3b8;">
      This is the last email in this sequence. Reply anytime if you want to reconnect later.
    </p>
  `),
});
