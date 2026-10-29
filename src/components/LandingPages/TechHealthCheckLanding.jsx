import { useState } from "react";
import DownloadSuccess from "./DownloadSuccess.jsx";
import PageSEO from "../PageSEO.jsx";
import { SITE_URL } from "../../data/site.js";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const symptoms = [
  "Staff spending hours on tasks that should be automatic",
  "Tools that don't talk to each other (data lives in five places)",
  "No clear picture of donors, clients, or volunteers in one spot",
  "Microsoft 365 licenses you're paying for but barely using",
  "Website that's hard to update and doesn't convert visitors",
];

const TechHealthCheckLanding = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Name is required.";
    if (!email.trim()) e.email = "Email is required.";
    else if (!isValidEmail(email)) e.email = "Please enter a valid email.";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setServerError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim().toLowerCase(), source: "tech-health-check" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setSuccess(true);
    } catch (err) {
      setServerError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col text-white">
      <PageSEO
        title="Free Tech Health Check | Ella Tech Solutions"
        description="A free assessment of your organization's technology setup: CRM, Microsoft 365, website, and automation, with a prioritized list of what to fix first."
        canonical={`${SITE_URL}/tech-health-check`}
      />
      <header className="py-5 px-6 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <a href="/"><img src="/images/ellalogo.png" alt="Ella Tech Solutions" className="h-8 brightness-0 invert" /></a>
        </div>
      </header>

      <main className="flex-1 flex items-center py-16 px-6">
        <div className="max-w-5xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

          {/* Value prop */}
          <div>
            <span className="inline-block rounded-full bg-white/10 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 mb-6 border border-white/10">
              Free Assessment
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              Is Your Tech Working For You, or Against You?
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              The Tech Health Check is a free assessment that shows you exactly where
              your systems are holding you back, and what to fix first.
            </p>

            <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">
              Built for teams that recognize these:
            </p>
            <ul className="space-y-3 mb-8">
              {symptoms.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 h-2 w-2 rounded-full bg-blue-400" />
                  <span className="text-slate-300 leading-relaxed text-[15px]">{s}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                After you download the assessment, you'll also get the{" "}
                <span className="text-white font-semibold">CRM Setup Checklist</span>, the
                most-requested resource from Ella Tech clients.
              </p>
            </div>
          </div>

          {/* Form / success */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
            {success ? (
              <DownloadSuccess name={name} />
            ) : (
              <>
                <h2 className="text-xl font-black text-slate-900 mb-1">Get both resources free</h2>
                <p className="text-slate-400 text-sm mb-6">Tech Health Check + CRM Setup Checklist, instant download.</p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor="th-name" className="block text-sm font-semibold text-slate-700 mb-1">First name</label>
                    <input
                      id="th-name" type="text" autoComplete="given-name"
                      value={name} onChange={(e) => setName(e.target.value)}
                      disabled={loading} placeholder="Sarah"
                      aria-invalid={errors.name ? "true" : undefined}
                      aria-describedby={errors.name ? "th-name-error" : undefined}
                      className={`w-full rounded-xl border px-4 py-3 text-slate-800 text-[15px] outline-none transition focus:ring-2 focus:ring-blue-500/40 disabled:opacity-50 ${errors.name ? "border-red-400 bg-red-50" : "border-slate-200"}`}
                    />
                    {errors.name && <p id="th-name-error" role="alert" className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="th-email" className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
                    <input
                      id="th-email" type="email" autoComplete="email"
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      disabled={loading} placeholder="sarah@yourorg.org"
                      aria-invalid={errors.email ? "true" : undefined}
                      aria-describedby={errors.email ? "th-email-error" : undefined}
                      className={`w-full rounded-xl border px-4 py-3 text-slate-800 text-[15px] outline-none transition focus:ring-2 focus:ring-blue-500/40 disabled:opacity-50 ${errors.email ? "border-red-400 bg-red-50" : "border-slate-200"}`}
                    />
                    {errors.email && <p id="th-email-error" role="alert" className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                  {serverError && (
                    <p role="alert" className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">{serverError}</p>
                  )}
                  <button
                    type="submit" disabled={loading}
                    className="w-full notch [--notch:10px] bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wide py-3.5 text-[15px] transition disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending…
                      </>
                    ) : "Send me both resources"}
                  </button>
                  <p className="text-center text-xs text-slate-400">No spam. Unsubscribe anytime.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </main>

      <footer className="py-6 px-6 border-t border-white/10 text-center">
        <p className="text-slate-500 text-xs">
          © {new Date().getFullYear()} Ella Tech Solutions ·{" "}
          <a href="/legal" className="hover:underline text-slate-400">Privacy</a>
        </p>
      </footer>
    </div>
  );
};

export default TechHealthCheckLanding;
