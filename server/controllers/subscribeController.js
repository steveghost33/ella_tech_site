import pool from "../db/pool.js";
import { sendAdminNotification } from "../services/emailService.js";
import { runDueEmailSequence } from "../lib/emailSequence.js";
import { requireAdminToken } from "../lib/adminAuth.js";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const normalizeField = (value, maxLength = 255) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export const subscribe = async (req, res) => {
  const name = normalizeField(req.body?.name, 120);
  const email = normalizeField(req.body?.email, 254).toLowerCase();
  const businessName = normalizeField(req.body?.business_name, 255);
  const businessLocation = normalizeField(req.body?.business_location, 255);
  const serviceType = normalizeField(req.body?.service_type, 100);
  const source = normalizeField(req.body?.source, 100) || "local-seo-audit-popup";

  if (!name) return res.status(400).json({ error: "Name is required." });
  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: "A valid email address is required." });
  }

  try {
    const existing = await pool.query("SELECT id FROM subscribers WHERE email = $1", [email]);

    if (existing.rows.length > 0) {
      await pool.query(
        "UPDATE subscribers SET name = $1, business_name = $2, business_location = $3, service_type = $4 WHERE email = $5",
        [name, businessName, businessLocation, serviceType, email]
      );
      return res.json({
        success: true,
        isReturning: true,
        message: "You're already on the list — research underway.",
      });
    }

    // For local SEO audit: don't send email immediately, wait for research to be completed
    // sequence_step 0 = awaiting research
    const inserted = await pool.query(
      "INSERT INTO subscribers (name, email, business_name, business_location, service_type, source, sequence_step, research_status) VALUES ($1, $2, $3, $4, $5, $6, 0, $7) RETURNING id",
      [name, email, businessName, businessLocation, serviceType, source, "pending"],
    );

    console.log(`New subscriber: ${name} <${email}> [${source}] - Business: ${businessName}, ${businessLocation}`);

    // Send admin notification to Steven about new lead
    sendAdminNotification({ id: inserted.rows[0].id, name, email, businessName, businessLocation }).catch((err) =>
      console.error("Admin notification failed:", err.message),
    );

    return res.status(201).json({
      success: true,
      isReturning: false,
      message: "Research underway — you'll get your personalized audit within 2 hours.",
    });
  } catch (err) {
    console.error("Subscribe error:", err.message);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

export const processEmailSequence = async (req, res) => {
  if (!requireAdminToken(req, res)) return;

  try {
    const result = await runDueEmailSequence();
    return res.json({ success: true, ...result });
  } catch (err) {
    console.error("processEmailSequence error:", err.message);
    return res.status(500).json({ error: "Failed to process email sequence." });
  }
};

export const getSubscribers = async (req, res) => {
  if (!requireAdminToken(req, res)) return;

  try {
    const result = await pool.query("SELECT * FROM subscribers ORDER BY created_at DESC");
    return res.json({ count: result.rowCount, subscribers: result.rows });
  } catch (err) {
    console.error("getSubscribers error:", err.message);
    return res.status(500).json({ error: "Failed to fetch subscribers." });
  }
};

export const clearSubscribers = async (req, res) => {
  if (!requireAdminToken(req, res)) return;
  try {
    const result = await pool.query("DELETE FROM subscribers");
    console.log(`Cleared ${result.rowCount} subscribers.`);
    return res.json({ success: true, deleted: result.rowCount });
  } catch (err) {
    console.error("clearSubscribers error:", err.message);
    return res.status(500).json({ error: "Failed to clear subscribers." });
  }
};

export const markContacted = async (req, res) => {
  if (!requireAdminToken(req, res)) return;

  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE subscribers SET contacted = true, contacted_at = NOW() WHERE id = $1 RETURNING *",
      [id],
    );
    if (result.rowCount === 0) return res.status(404).json({ error: "Subscriber not found." });
    return res.json({ success: true, subscriber: result.rows[0] });
  } catch (err) {
    console.error("markContacted error:", err.message);
    return res.status(500).json({ error: "Failed to update subscriber." });
  }
};

export const deleteSubscriber = async (req, res) => {
  if (!requireAdminToken(req, res)) return;

  const id = Number.parseInt(req.params.id, 10);
  if (!Number.isInteger(id)) return res.status(400).json({ error: "Invalid subscriber id." });

  try {
    const result = await pool.query("DELETE FROM subscribers WHERE id = $1 RETURNING id, email", [id]);
    if (result.rowCount === 0) return res.status(404).json({ error: "Subscriber not found." });
    console.log(`Deleted subscriber ${result.rows[0].id}.`);
    return res.json({ success: true, deleted: result.rows[0] });
  } catch (err) {
    console.error("deleteSubscriber error:", err.message);
    return res.status(500).json({ error: "Failed to delete subscriber." });
  }
};
