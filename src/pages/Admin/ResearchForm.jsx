import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
const ADMIN_TOKEN_STORAGE_KEY = "admin_token";

const parseCompetitors = (value) =>
  value
    .split("\n")
    .map((line) => {
      const [name, rank] = line.split(",").map((part) => part.trim());
      return { name, ranking_position: rank ? parseInt(rank, 10) : null };
    })
    .filter((entry) => entry.name);

const ResearchForm = () => {
  const [leadId, setLeadId] = useState(null);
  // Signed one-click link from the new-lead email; replaces the admin token.
  const [sig, setSig] = useState("");
  const [lead, setLead] = useState(null);
  const [pendingLeads, setPendingLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem(ADMIN_TOKEN_STORAGE_KEY) || "");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Form state
  const [gbpScore, setGbpScore] = useState(75);
  const [gbpRating, setGbpRating] = useState(4.5);
  const [gbpReviews, setGbpReviews] = useState(0);
  const [websiteIssues, setWebsiteIssues] = useState("");
  const [competitors, setCompetitors] = useState("");
  const [quickWins, setQuickWins] = useState("");
  const [summary, setSummary] = useState("");

  // Load lead data on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("lead_id");
    setLeadId(id);
    setSig(params.get("sig") || "");
  }, []);

  const hasAccess = Boolean(token || sig);

  const getAuthHeaders = () => ({
    "Content-Type": "application/json",
    "x-admin-token": token,
    "x-lead-sig": sig,
  });

  const fetchLeadData = useCallback(async (id) => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(`${API_BASE}/api/admin/research-form?lead_id=${id}`, {
        headers: { "x-admin-token": token, "x-lead-sig": sig },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load lead");
      if (data.success && data.lead) {
        setLead(data.lead);
      }
    } catch (err) {
      setError("Failed to load lead: " + err.message);
    } finally {
      setLoading(false);
    }
  }, [token, sig]);

  const fetchPendingLeads = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(`${API_BASE}/api/admin/research-form`, {
        headers: { "x-admin-token": token },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load leads");
      setPendingLeads(Array.isArray(data.leads) ? data.leads : []);
    } catch (err) {
      setError("Failed to load leads: " + err.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (!hasAccess) return;

    if (leadId) {
      fetchLeadData(leadId);
      return;
    }

    if (token) fetchPendingLeads();
  }, [fetchLeadData, fetchPendingLeads, leadId, token, hasAccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!hasAccess) {
      setError("Admin token required");
      return;
    }
    if (!leadId) {
      setError("Lead ID required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const issuesArray = websiteIssues
        .split("\n")
        .map((i) => i.trim())
        .filter(Boolean);
      const winsArray = quickWins
        .split("\n")
        .map((w) => w.trim())
        .filter(Boolean);
      const competitorsArray = parseCompetitors(competitors);

      const res = await fetch(`${API_BASE}/api/admin/research-submit`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          lead_id: leadId,
          gbp_completeness_score: parseInt(gbpScore, 10),
          gbp_rating: parseFloat(gbpRating),
          gbp_review_count: parseInt(gbpReviews, 10),
          website_issues: issuesArray,
          competitors: competitorsArray,
          quick_wins: winsArray,
          summary,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit");

      setSuccess(true);
      setTimeout(() => {
        window.location.href = "/admin/research-form";
      }, 1800);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTokenChange = (value) => {
    setToken(value);
    localStorage.setItem(ADMIN_TOKEN_STORAGE_KEY, value);
  };

  const handleLeadSelect = (id) => {
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("lead_id", id);
    window.location.href = nextUrl.toString();
  };

  const noindexTag = (
    <Helmet>
      <title>Local Search Audit Research | Ella Tech Solutions</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
  );

  if (!hasAccess || (!token && !leadId)) {
    return (
      <>
        {noindexTag}
        <div className="min-h-screen bg-slate-50 p-4 py-12">
          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-8">
              <h1 className="text-3xl font-black text-white mb-2">Local Search Audit Research</h1>
              <p className="text-blue-100">Enter your admin token to load pending leads</p>
            </div>
            <div className="p-8 space-y-4">
              <label htmlFor="admin-token-gate" className="block text-sm font-semibold text-slate-700">
                Admin Token
              </label>
              <input
                id="admin-token-gate"
                type="password"
                value={token}
                onChange={(e) => handleTokenChange(e.target.value)}
                placeholder="Enter admin token"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <p className="text-sm text-slate-500">
                This protects lead data and the research workflow.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!leadId) {
    return (
      <>
        {noindexTag}
        <div className="min-h-screen bg-slate-50 p-4 py-12">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-8">
              <h1 className="text-3xl font-black text-white mb-2">Pending Audit Leads</h1>
              <p className="text-blue-100">Choose a lead to research and send the first audit email</p>
            </div>
            <div className="p-8">
              {error && (
                <div role="alert" className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {loading ? (
                <p className="text-slate-600">Loading pending leads...</p>
              ) : pendingLeads.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                  <h2 className="text-lg font-bold text-slate-900 mb-2">No leads waiting right now</h2>
                  <p className="text-slate-600">New popup signups will show up here once they come in.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {pendingLeads.map((pendingLead) => (
                    <button
                      key={pendingLead.id}
                      type="button"
                      onClick={() => handleLeadSelect(pendingLead.id)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-left hover:border-blue-300 hover:bg-blue-50 transition"
                    >
                      <p className="text-sm text-slate-500 mb-1">
                        Lead #{pendingLead.id} · {new Date(pendingLead.created_at).toLocaleString()}
                      </p>
                      <p className="text-lg font-bold text-slate-900">{pendingLead.business_name}</p>
                      <p className="text-slate-600">{pendingLead.name} · {pendingLead.email}</p>
                      <p className="text-slate-500 text-sm">{pendingLead.business_location}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  if (success) {
    return (
      <>
        {noindexTag}
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
            <div className="mb-4 flex justify-center">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Research submitted!</h2>
            <p className="text-slate-600 mb-4">The audit email is being sent now. Redirecting...</p>
          </div>
        </div>
      </>
    );
  }

  if (!lead && leadId) {
    return (
      <>
        {noindexTag}
        <div className="min-h-screen bg-slate-50 p-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow p-8 text-center">
              {loading ? (
                <p className="text-slate-600">Loading lead data...</p>
              ) : (
                <>
                  <h2 className="text-lg font-bold text-red-600 mb-2">Lead not found</h2>
                  <p className="text-slate-600">Check the lead ID and try again.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {noindexTag}
      <div className="min-h-screen bg-slate-50 p-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-8">
            <h1 className="text-3xl font-black text-white mb-2">Local Search Audit Research</h1>
            <p className="text-blue-100">Complete the research findings for this lead</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Lead Info */}
            {lead && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-slate-600 mb-1">
                  <span className="font-semibold">{lead.name}</span> · {lead.email}
                </p>
                <p className="text-lg font-bold text-slate-900">{lead.business_name}</p>
                <p className="text-slate-600">{lead.business_location}</p>
              </div>
            )}

            {/* Admin Token (not needed when opened from the emailed link) */}
            {!sig && (
            <div>
              <label htmlFor="admin-token" className="block text-sm font-semibold text-slate-700 mb-2">
                Admin Token *
              </label>
              <input
                id="admin-token"
                type="password"
                value={token}
                onChange={(e) => handleTokenChange(e.target.value)}
                placeholder="Enter admin token"
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            )}

            {/* GBP Metrics */}
            <div className="border-t pt-6">
              <h3 className="font-bold text-slate-900 mb-4">Google Business Profile</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="gbp-score" className="block text-sm font-semibold text-slate-700 mb-2">
                    Completeness Score (0-100)
                  </label>
                  <input
                    id="gbp-score"
                    type="number"
                    min="0"
                    max="100"
                    value={gbpScore}
                    onChange={(e) => setGbpScore(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="gbp-rating" className="block text-sm font-semibold text-slate-700 mb-2">
                    Rating
                  </label>
                  <input
                    id="gbp-rating"
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    value={gbpRating}
                    onChange={(e) => setGbpRating(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="gbp-reviews" className="block text-sm font-semibold text-slate-700 mb-2">
                    Review Count
                  </label>
                  <input
                    id="gbp-reviews"
                    type="number"
                    min="0"
                    value={gbpReviews}
                    onChange={(e) => setGbpReviews(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Website Issues */}
            <div className="border-t pt-6">
              <label htmlFor="website-issues" className="block text-sm font-semibold text-slate-700 mb-2">
                Website Issues (one per line)
              </label>
              <textarea
                id="website-issues"
                value={websiteIssues}
                onChange={(e) => setWebsiteIssues(e.target.value)}
                placeholder="e.g., Slow page speed&#10;Missing mobile optimization&#10;No schema markup"
                rows="4"
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm"
              />
            </div>

            {/* Competitors */}
            <div className="border-t pt-6">
              <label htmlFor="competitors" className="block text-sm font-semibold text-slate-700 mb-2">
                Competitors (name, ranking - one per line)
              </label>
              <textarea
                id="competitors"
                value={competitors}
                onChange={(e) => setCompetitors(e.target.value)}
                placeholder="e.g., ABC Plumbing, 1&#10;XYZ Plumbing, 2"
                rows="3"
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm"
              />
            </div>

            {/* Quick Wins */}
            <div className="border-t pt-6">
              <label htmlFor="quick-wins" className="block text-sm font-semibold text-slate-700 mb-2">
                Quick Wins (one per line)
              </label>
              <textarea
                id="quick-wins"
                value={quickWins}
                onChange={(e) => setQuickWins(e.target.value)}
                placeholder="e.g., Claim and complete GBP profile&#10;Add high-quality photos&#10;Improve mobile site speed"
                rows="3"
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm"
              />
            </div>

            {/* Summary */}
            <div className="border-t pt-6">
              <label htmlFor="summary" className="block text-sm font-semibold text-slate-700 mb-2">
                Summary
              </label>
              <textarea
                id="summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Brief summary of their local search situation..."
                rows="3"
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Error */}
            {error && (
              <div role="alert" className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Submit */}
            <div className="border-t pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold py-3 px-4 rounded-lg transition"
              >
                {loading ? "Submitting..." : "Submit Research & Send Audit Email"}
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default ResearchForm;
