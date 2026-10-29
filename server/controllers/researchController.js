import pool from "../db/pool.js";
import { requireAdminToken, requireAdminOrLeadLink } from "../lib/adminAuth.js";

export const getResearchForm = async (req, res) => {
  const { lead_id } = req.query;
  if (lead_id) {
    if (!requireAdminOrLeadLink(req, res, lead_id)) return;
  } else if (!requireAdminToken(req, res)) {
    return;
  }

  try {

    if (lead_id) {
      // Fetch specific lead for pre-filled form
      const result = await pool.query(
        "SELECT id, name, email, business_name, business_location, service_type, research_status FROM subscribers WHERE id = $1",
        [lead_id]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({ error: "Lead not found." });
      }

      return res.json({ success: true, lead: result.rows[0] });
    }

    // Get all pending research leads
    const result = await pool.query(
      "SELECT id, name, email, business_name, business_location, created_at FROM subscribers WHERE research_status = 'pending' ORDER BY created_at DESC LIMIT 50"
    );

    return res.json({ success: true, leads: result.rows });
  } catch (err) {
    console.error("getResearchForm error:", err.message);
    return res.status(500).json({ error: "Failed to fetch research data." });
  }
};

export const submitResearch = async (req, res) => {
  const { lead_id, gbp_completeness_score, gbp_rating, gbp_review_count, website_issues, competitors, quick_wins, summary } = req.body;

  if (!lead_id) return res.status(400).json({ error: "Lead ID is required." });
  const access = requireAdminOrLeadLink(req, res, lead_id);
  if (!access) return;

  try {
    // A signed link can only submit once, so a forwarded or reused link can't
    // re-send the audit email to the lead.
    if (access === "lead") {
      const current = await pool.query("SELECT research_status FROM subscribers WHERE id = $1", [lead_id]);
      if (current.rows[0]?.research_status === "completed") {
        return res.status(409).json({ error: "Research was already submitted for this lead." });
      }
    }

    const research_data = {
      gbp_completeness_score: parseInt(gbp_completeness_score) || 0,
      gbp_rating: parseFloat(gbp_rating) || 0,
      gbp_review_count: parseInt(gbp_review_count) || 0,
      website_issues: Array.isArray(website_issues) ? website_issues : [],
      competitors: Array.isArray(competitors) ? competitors : [],
      quick_wins: Array.isArray(quick_wins) ? quick_wins : [],
      summary: summary || "",
    };

    // Update subscriber with research data
    const result = await pool.query(
      "UPDATE subscribers SET research_status = $1, research_data = $2, research_completed_at = NOW() WHERE id = $3 RETURNING id, name, email, business_name, business_location",
      ["completed", JSON.stringify(research_data), lead_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Lead not found." });
    }

    const lead = result.rows[0];
    console.log(`Research submitted for: ${lead.name} <${lead.email}>`);

    // Trigger audit email sequence (generates PDF, sends Email 1, schedules Emails 2-4)
    const { scheduleAuditEmailSequence } = await import("../services/emailService.js");
    scheduleAuditEmailSequence({
      id: lead.id,
      name: lead.name,
      email: lead.email,
      businessName: lead.business_name,
      businessLocation: lead.business_location,
      research_data
    }).catch((err) =>
      console.error("Failed to send audit email:", err.message)
    );

    return res.status(200).json({
      success: true,
      message: "Research submitted. Audit email sending to lead...",
      lead,
    });
  } catch (err) {
    console.error("submitResearch error:", err.message);
    return res.status(500).json({ error: "Failed to submit research." });
  }
};

export const skipResearch = async (req, res) => {
  const { lead_id } = req.body;

  if (!lead_id) return res.status(400).json({ error: "Lead ID is required." });
  if (!requireAdminOrLeadLink(req, res, lead_id)) return;

  try {
    await pool.query(
      "UPDATE subscribers SET research_status = $1 WHERE id = $2",
      ["skipped", lead_id]
    );

    return res.json({ success: true, message: "Lead marked as skipped." });
  } catch (err) {
    console.error("skipResearch error:", err.message);
    return res.status(500).json({ error: "Failed to skip lead." });
  }
};
