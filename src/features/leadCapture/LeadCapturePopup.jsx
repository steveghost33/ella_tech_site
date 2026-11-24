import { useState, useEffect, useCallback, useRef } from "react";
import DownloadSuccess from "../../components/LandingPages/DownloadSuccess.jsx";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
const STORAGE_KEY = "ella_lead_popup_dismissed";
const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const COOLDOWN_MS = 14 * 24 * 60 * 60 * 1000;
const NO_POPUP_PATHS = ["/admin", "/crm-checklist", "/tech-health-check"];

const hasDismissed = () => {
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    if (!val) return false;
    const { reason, at } = JSON.parse(val);
    return reason === "subscribed" || Date.now() - at < COOLDOWN_MS;
  } catch {
    return false;
  }
};

const markDismissed = (reason = "dismissed") => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ reason, at: Date.now() }));
  } catch {}
};

const BIZ_TYPES = [
  "Retail / E-commerce",
  "Service Business (cleaning, landscaping, salon, etc.)",
  "Healthcare / Wellness",
  "Restaurant / Food & Beverage",
  "Professional Services (law, accounting, consulting)",
  "Nonprofit Organization",
  "Education / Training",
  "Real Estate",
  "Construction / Trades",
  "Other",
];

const TEAM_SIZES = [
  "Just me (solopreneur)",
  "2–5 people",
  "6–20 people",
  "21–50 people",
  "50+ people",
];

const CHALLENGES = [
  "Getting found online / local search",
  "Managing customers and follow-ups (CRM)",
  "My team doesn't use our tools effectively",
  "Need a website or redesign",
  "Setting up AI tools and automation",
  "Microsoft 365 or Google Workspace setup",
  "Applying for grants or funding",
  "Something else",
];

const selectClass = (hasError) =>
  `w-full rounded-xl border px-4 py-3 text-slate-800 text-[15px] outline-none transition focus:ring-2 focus:ring-blue-500/40 disabled:opacity-50 bg-white appearance-none cursor-pointer ${
    hasError ? "border-red-400 bg-red-50" : "border-slate-200"
  }`;

const inputClass = (hasError) =>
  `w-full rounded-xl border px-4 py-3 text-slate-800 text-[15px] outline-none transition focus:ring-2 focus:ring-blue-500/40 disabled:opacity-50 ${
    hasError ? "border-red-400 bg-red-50" : "border-slate-200"
  }`;

const ChevronDown = () => (
  <svg
    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const LeadCapturePopup = () => {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bizType, setBizType] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [challenge, setChallenge] = useState("");
  const [triedBefore, setTriedBefore] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const bizTypeRef = useRef(null);
  const teamSizeRef = useRef(null);
  const challengeRef = useRef(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  useEffect(() => {
    if (hasDismissed()) return;
    if (NO_POPUP_PATHS.some((p) => window.location.pathname.startsWith(p))) return;

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      cleanup();
      setVisible(true);
      requestAnimationFrame(() => setAnimateIn(true));
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max > 0.6) show();
    };
    const onMouseOut = (e) => {
      if (!e.relatedTarget && e.clientY <= 0) show();
    };
    const timer = setTimeout(show, 10000);
    function cleanup() {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseout", onMouseOut);

    return cleanup;
  }, []);

  const close = useCallback((reason) => {
    setAnimateIn(false);
    markDismissed(reason === "subscribed" ? "subscribed" : "dismissed");
    setTimeout(() => setVisible(false), 300);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const handler = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [visible, close]);

  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [visible]);

  useEffect(() => {
    if (visible) {
      previouslyFocusedRef.current = document.activeElement;
      const raf = requestAnimationFrame(() => {
        (nameRef.current || closeButtonRef.current)?.focus();
      });
      return () => cancelAnimationFrame(raf);
    }
    previouslyFocusedRef.current?.focus?.();
    previouslyFocusedRef.current = null;
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const handler = (e) => {
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [visible]);

  if (!visible) return null;

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const nameVal = (nameRef.current?.value || name).trim();
    const emailVal = (emailRef.current?.value || email).trim().toLowerCase();
    const bizTypeVal = (bizTypeRef.current?.value || bizType).trim();
    const teamSizeVal = (teamSizeRef.current?.value || teamSize).trim();
    const challengeVal = (challengeRef.current?.value || challenge).trim();

    const e = {};
    if (!nameVal) e.name = "Name is required.";
    if (!emailVal) e.email = "Email is required.";
    else if (!isValidEmail(emailVal)) e.email = "Please enter a valid email.";
    if (!bizTypeVal) e.biz_type = "Please select your business type.";
    if (!teamSizeVal) e.team_size = "Please select your team size.";
    if (!challengeVal) e.challenge = "Please select your biggest challenge.";
    if (Object.keys(e).length) { setErrors(e); return; }

    setErrors({});
    setServerError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameVal,
          email: emailVal,
          biz_type: bizTypeVal,
          team_size: teamSizeVal,
          challenge: challengeVal,
          tried_before: triedBefore.trim() || undefined,
          source: "lead-capture-popup",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setSuccess(true);
      markDismissed("subscribed");
    } catch (err) {
      setServerError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${animateIn ? "opacity-100" : "opacity-0"}`}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        className="fixed inset-0 z-[999] overflow-y-auto overscroll-contain"
      >
        <div
          onClick={(ev) => { if (ev.target === ev.currentTarget) close(); }}
          className="min-h-full flex items-center justify-center p-4 sm:p-6"
        >
          <div
            className={`w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ${
              animateIn ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 px-6 pt-8 pb-6 text-center">
              <button
                ref={closeButtonRef}
                onClick={() => close()}
                aria-label="Close"
                className="absolute top-4 right-4 text-white/60 hover:text-white transition"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center p-2">
                  <img
                    src="/images/ella-badge-icon.png"
                    alt="Ella Tech Solutions"
                    className="h-full w-full object-contain rounded-full"
                  />
                </div>
              </div>

              <span className="inline-block rounded-full bg-white/15 text-white/90 text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-3">
                Free Personalized Snapshot
              </span>
              <h2 id="popup-title" className="text-xl font-black text-white leading-snug">
                Let&rsquo;s see where your tech is holding you back
              </h2>
              <p className="text-blue-100 text-sm mt-1.5 leading-relaxed">
                Answer 5 quick questions and get a free, personalized look at what&rsquo;s costing you time and customers.
              </p>
            </div>

            {/* Body */}
            <div className="px-6 py-6">
              {success ? (
                <DownloadSuccess name={name} onBookSession={() => close("dismissed")} />
              ) : (
                <>
                  <form onSubmit={handleSubmit} noValidate className="space-y-3">
                    {/* Name */}
                    <div>
                      <label htmlFor="popup-name" className="sr-only">Your first name</label>
                      <input
                        id="popup-name" ref={nameRef} type="text" autoComplete="given-name"
                        value={name} onChange={(e) => setName(e.target.value)}
                        disabled={loading} placeholder="Your first name"
                        aria-invalid={errors.name ? "true" : undefined}
                        aria-describedby={errors.name ? "popup-name-error" : undefined}
                        className={inputClass(errors.name)}
                      />
                      {errors.name && <p id="popup-name-error" role="alert" className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="popup-email" className="sr-only">Email address</label>
                      <input
                        id="popup-email" ref={emailRef} type="email" autoComplete="email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        disabled={loading} placeholder="Email address"
                        aria-invalid={errors.email ? "true" : undefined}
                        aria-describedby={errors.email ? "popup-email-error" : undefined}
                        className={inputClass(errors.email)}
                      />
                      {errors.email && <p id="popup-email-error" role="alert" className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    {/* Business type */}
                    <div className="relative">
                      <label htmlFor="popup-biz-type" className="sr-only">What type of business do you run?</label>
                      <select
                        id="popup-biz-type" ref={bizTypeRef}
                        value={bizType} onChange={(e) => setBizType(e.target.value)}
                        disabled={loading}
                        aria-invalid={errors.biz_type ? "true" : undefined}
                        aria-describedby={errors.biz_type ? "popup-biz-type-error" : undefined}
                        className={selectClass(errors.biz_type)}
                      >
                        <option value="">What type of business do you run?</option>
                        {BIZ_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <ChevronDown />
                      {errors.biz_type && <p id="popup-biz-type-error" role="alert" className="mt-1 text-xs text-red-500">{errors.biz_type}</p>}
                    </div>

                    {/* Team size */}
                    <div className="relative">
                      <label htmlFor="popup-team-size" className="sr-only">How many people work in your business?</label>
                      <select
                        id="popup-team-size" ref={teamSizeRef}
                        value={teamSize} onChange={(e) => setTeamSize(e.target.value)}
                        disabled={loading}
                        aria-invalid={errors.team_size ? "true" : undefined}
                        aria-describedby={errors.team_size ? "popup-team-size-error" : undefined}
                        className={selectClass(errors.team_size)}
                      >
                        <option value="">How many people work in your business?</option>
                        {TEAM_SIZES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <ChevronDown />
                      {errors.team_size && <p id="popup-team-size-error" role="alert" className="mt-1 text-xs text-red-500">{errors.team_size}</p>}
                    </div>

                    {/* Biggest challenge */}
                    <div className="relative">
                      <label htmlFor="popup-challenge" className="sr-only">What&apos;s your biggest tech challenge right now?</label>
                      <select
                        id="popup-challenge" ref={challengeRef}
                        value={challenge} onChange={(e) => setChallenge(e.target.value)}
                        disabled={loading}
                        aria-invalid={errors.challenge ? "true" : undefined}
                        aria-describedby={errors.challenge ? "popup-challenge-error" : undefined}
                        className={selectClass(errors.challenge)}
                      >
                        <option value="">What&apos;s your biggest tech challenge?</option>
                        {CHALLENGES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <ChevronDown />
                      {errors.challenge && <p id="popup-challenge-error" role="alert" className="mt-1 text-xs text-red-500">{errors.challenge}</p>}
                    </div>

                    {/* What have you tried (optional) */}
                    <div>
                      <label htmlFor="popup-tried" className="sr-only">What have you already tried? (optional)</label>
                      <textarea
                        id="popup-tried"
                        value={triedBefore} onChange={(e) => setTriedBefore(e.target.value)}
                        disabled={loading}
                        placeholder="What have you already tried? (optional — tools, services, approaches)"
                        rows={2}
                        maxLength={300}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 text-[15px] outline-none transition focus:ring-2 focus:ring-blue-500/40 disabled:opacity-50 resize-none"
                      />
                    </div>

                    {serverError && (
                      <p role="alert" className="rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-600">{serverError}</p>
                    )}

                    <button
                      type="submit" disabled={loading}
                      className="w-full notch [--notch:10px] bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wide py-3 text-[15px] transition disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending…
                        </>
                      ) : "Get my free snapshot"}
                    </button>
                  </form>

                  <div className="mt-3 pt-3 border-t border-slate-100 text-center">
                    <p className="text-xs text-slate-400 mb-1">Or take 5 minutes for a free self-check</p>
                    <a
                      href="/tech-health-check"
                      onClick={() => close()}
                      className="text-sm font-semibold text-blue-600 hover:underline transition"
                    >
                      Try the Free Tech Health Check
                    </a>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xs text-slate-400">No spam. Unsubscribe anytime.</p>
                    <button
                      onClick={() => close()}
                      className="text-xs text-slate-400 hover:text-slate-600 underline transition"
                    >
                      No thanks
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadCapturePopup;
