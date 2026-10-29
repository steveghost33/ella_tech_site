import crypto from "crypto";

const timingSafeStringEqual = (a, b) => {
  const bufA = Buffer.from(String(a));
  const bufB = Buffer.from(String(b));
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
};

const hasValidAdminToken = (req) => {
  const token = req.headers["x-admin-token"] || req.query.token;
  const secret = process.env.ADMIN_SECRET;
  return Boolean(secret && token && timingSafeStringEqual(token, secret));
};

export const requireAdminToken = (req, res) => {
  if (hasValidAdminToken(req)) return true;
  res.status(401).json({ error: "Unauthorized." });
  return false;
};

// Per-lead signature embedded in the "Start Research" link emailed to the
// admin, so that link works without typing the admin token. It only unlocks
// research for that one lead.
export const signLeadLink = (leadId) => {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return "";
  return crypto.createHmac("sha256", secret).update(`research:${leadId}`).digest("hex").slice(0, 32);
};

// Returns "admin" (full token), "lead" (valid signed link for this lead), or
// null after sending a 401.
export const requireAdminOrLeadLink = (req, res, leadId) => {
  if (hasValidAdminToken(req)) return "admin";

  const sig = req.headers["x-lead-sig"] || req.query.sig;
  const expected = signLeadLink(leadId);
  if (leadId && sig && expected && timingSafeStringEqual(sig, expected)) return "lead";

  res.status(401).json({ error: "Unauthorized." });
  return null;
};
