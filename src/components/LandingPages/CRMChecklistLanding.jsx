import { useState } from "react";
import DownloadSuccess from "./DownloadSuccess.jsx";
import PageSEO from "../PageSEO.jsx";
import { SITE_URL } from "../../data/site.js";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const benefits = [
  "Avoid the 3 most common CRM adoption mistakes nonprofits make",
  "Know exactly which CRM fits your team size and budget",
  "Launch in 3 weeks with clear processes your team will actually use",
];

const CRMChecklistLanding = () => {
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
        body: JSON.stringify({ name: name.trim(), email: email.trim().toLowerCase(), source: "crm-setup-checklist" }),
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      <PageSEO
        title="Free CRM Setup Checklist | Ella Tech Solutions"
        description="A free, step-by-step checklist for choosing and implementing a CRM in 3 weeks, built for nonprofits and small businesses."
        canonical={`${SITE_URL}/crm-checklist`}
      />
      <header className="py-5 px-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <a href="/"><img src="/images/ellalogo.png" alt="Ella Tech Solutions" className="h-8" /></a>
        </div>
      </header>

      <main className="flex-1 flex items-center py-16 px-6">
        <div className="max-w-5xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

          {/* Value prop */}
          <div>
            <span className="inline-block rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 mb-6">
              Free Resource
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-5">
              Get the Free CRM Setup Checklist
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Step-by-step guide to choose and implement a CRM in 3 weeks —
              without the chaos, the wrong tool, or the adoption problems.
            </p>
            <ul className="space-y-4 mb-8">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                    <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-slate-700 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-400 text-sm flex items-center gap-2">
              <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              No spam. Practical CRM advice. Unsubscribe anytime.
            </p>
          </div>

          {/* Form / success */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 lg:p-10">
            {success ? (
              <DownloadSuccess name={name} />
            ) : (
              <>
                <h2 className="text-xl font-black text-slate-900 mb-1">Get instant access</h2>
                <p className="text-slate-400 text-sm mb-6">We'll also send the Tech Health Check, free.</p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor="cl-name" className="block text-sm font-semibold text-slate-700 mb-1">First name</label>
                    <input
                      id="cl-name" type="text" autoComplete="given-name"
                      value={name} onChange={(e) => setName(e.target.value)}
                      disabled={loading} placeholder="Sarah"
                      aria-invalid={errors.name ? "true" : undefined}
                      aria-describedby={errors.name ? "cl-name-error" : undefined}
                      className={`w-full rounded-xl border px-4 py-3 text-slate-800 text-[15px] outline-none transition focus:ring-2 focus:ring-blue-500/40 disabled:opacity-50 ${errors.name ? "border-red-400 bg-red-50" : "border-slate-200"}`}
                    />
                    {errors.name && <p id="cl-name-error" role="alert" className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="cl-email" className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
                    <input
                      id="cl-email" type="email" autoComplete="email"
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      disabled={loading} placeholder="sarah@yourorg.org"
                      aria-invalid={errors.email ? "true" : undefined}
                      aria-describedby={errors.email ? "cl-email-error" : undefined}
                      className={`w-full rounded-xl border px-4 py-3 text-slate-800 text-[15px] outline-none transition focus:ring-2 focus:ring-blue-500/40 disabled:opacity-50 ${errors.email ? "border-red-400 bg-red-50" : "border-slate-200"}`}
                    />
                    {errors.email && <p id="cl-email-error" role="alert" className="mt-1 text-xs text-red-500">{errors.email}</p>}
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
                    ) : "Send me the free resources"}
                  </button>
                  <p className="text-center text-xs text-slate-400">No spam. Unsubscribe anytime.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </main>

      <footer className="py-6 px-6 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-xs">
          © {new Date().getFullYear()} Ella Tech Solutions ·{" "}
          <a href="/legal" className="hover:underline">Privacy</a>
        </p>
      </footer>
    </div>
  );
};

export default CRMChecklistLanding;
