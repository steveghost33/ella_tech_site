import { useState, useRef, useCallback } from "react";
import PageShell from "../PageShell.jsx";
import PageSEO from "../PageSEO.jsx";
import { SITE_URL, CONTACT_EMAIL, BOOKING_PATH } from "../../data/site.js";

const SECTIONS = [
  {
    id: "get-found",
    title: "Get Found",
    items: [
      "Google Business Profile is claimed and complete (hours, services, photos, accurate phone).",
      "Your website loads fast and looks good on a phone.",
      "Your phone number and a clear call to action are visible without scrolling.",
      "You regularly ask customers for reviews and reply to them.",
    ],
    lowTip:
      "Your online presence has gaps that make it harder for local customers to find and contact you. Start by claiming your Google Business Profile and making sure your phone number is easy to spot on your website.",
  },
  {
    id: "ai-search",
    title: "AI and Search",
    items: [
      "You have asked an AI tool to recommend a business like yours in your area and checked whether you appear.",
      "Your website clearly says what you do, who you serve, and where.",
    ],
    lowTip:
      "AI-powered search is changing how people find local services. Make sure your website answers the basics: what you do, who you help, and where you are.",
  },
  {
    id: "leads",
    title: "Leads and Follow-Up",
    items: [
      "Every call, form, and message lands in one place where nothing gets lost.",
      "New leads get a reply within a day, ideally automatically.",
      "You can see who contacted you and what happened next (a CRM or simple tracker).",
    ],
    lowTip:
      "Leads slipping through the cracks is one of the most common and costly problems for small businesses. Even a simple spreadsheet or a free CRM can make a big difference here.",
  },
  {
    id: "staying-safe",
    title: "Staying Safe",
    items: [
      "Multi-factor authentication is on for email and key accounts.",
      "You use a password manager or at least unique passwords.",
      "Your team knows how to spot scam texts and fake invoices.",
      "Important files are backed up.",
    ],
    lowTip:
      "Basic security steps protect your business and your customers. Multi-factor authentication and regular backups are the two highest-impact things you can do right now.",
  },
  {
    id: "your-tools",
    title: "Your Tools",
    items: [
      "Your email and Microsoft 365 or Google accounts are set up the way you actually work.",
      "Your team is trained on the tools you pay for.",
      "Repetitive tasks (follow-ups, reminders, intake) are automated where it makes sense.",
    ],
    lowTip:
      "Most businesses pay for tools they underuse. A short review of your current setup can save money and free up time you are spending on manual work.",
  },
];

const ANSWER_SCORE = { yes: 2, "not-sure": 1, no: 0 };
const ANSWER_LABEL = { yes: "Yes", "not-sure": "Not sure", no: "No" };

function getSectionScore(sectionId, itemCount, answers) {
  let total = 0;
  let answered = 0;
  for (let i = 0; i < itemCount; i++) {
    const v = answers[`${sectionId}-${i}`];
    if (v !== undefined) {
      total += ANSWER_SCORE[v];
      answered++;
    }
  }
  return { total, answered, max: itemCount * 2 };
}

function getScoreLabel(total, max) {
  if (max === 0) return "Start here";
  const pct = (total / max) * 100;
  if (pct >= 75) return "Strong";
  if (pct >= 50) return "Needs attention";
  return "Start here";
}

const LABEL_STYLES = {
  Strong: {
    badge: "bg-green-500/15 text-green-400 border border-green-500/30",
    dot: "bg-green-400",
  },
  "Needs attention": {
    badge: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
    dot: "bg-amber-400",
  },
  "Start here": {
    badge: "bg-red-500/15 text-red-400 border border-red-500/30",
    dot: "bg-red-400",
  },
};

function buildMailtoBody(answers) {
  const lines = [
    "Hi Ella,",
    "",
    "I just completed the Free Tech Health Check on your website and would love a personal review.",
    "",
    "Business name: ",
    "Website: ",
    "Google Business Profile link: ",
    "My top tech frustration: ",
    "",
  ];

  const hasAnyAnswer = Object.keys(answers).length > 0;
  if (hasAnyAnswer) {
    lines.push("My checklist results:");
    let grandTotal = 0;
    let grandMax = 0;
    SECTIONS.forEach((s) => {
      const { total, answered, max } = getSectionScore(s.id, s.items.length, answers);
      grandTotal += total;
      grandMax += max;
      if (answered > 0) {
        const label = getScoreLabel(total, max);
        lines.push(`- ${s.title}: ${total}/${max} (${label})`);
      }
    });
    if (grandMax > 0) {
      lines.push("");
      lines.push(`Overall: ${grandTotal}/${grandMax}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

function AnswerButton({ option, selected, onClick }) {
  const baseStyle =
    "min-h-[44px] min-w-[72px] px-3 py-2 rounded-lg text-sm font-semibold border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-p1";
  const activeStyle =
    option === "yes"
      ? "bg-green-600 border-green-600 text-white"
      : option === "not-sure"
      ? "bg-amber-500 border-amber-500 text-white"
      : "bg-slate-500 border-slate-500 text-white";
  const inactiveStyle = "border-white/20 text-p5 hover:bg-white/10";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`${baseStyle} ${selected ? activeStyle : inactiveStyle}`}
    >
      {ANSWER_LABEL[option]}
    </button>
  );
}

function ChecklistSection({ section, answers, onAnswer }) {
  return (
    <div className="bg-s2 rounded-2xl border border-white/10 overflow-hidden">
      <div className="px-5 py-4 sm:px-6 border-b border-white/10">
        <h2 className="text-lg font-bold text-p4">{section.title}</h2>
      </div>
      <ul className="divide-y divide-white/10" role="list">
        {section.items.map((item, idx) => {
          const key = `${section.id}-${idx}`;
          const value = answers[key];
          return (
            <li key={idx} className="px-5 py-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <p className="flex-1 text-p5 text-[15px] leading-relaxed">{item}</p>
                <div
                  className="flex gap-2 flex-shrink-0"
                  role="group"
                  aria-label={`Answer for: ${item}`}
                >
                  {["yes", "not-sure", "no"].map((option) => (
                    <AnswerButton
                      key={option}
                      option={option}
                      selected={value === option}
                      onClick={() => onAnswer(key, option)}
                    />
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function TechHealthCheckLanding() {
  const [answers, setAnswers] = useState({});
  const checklistRef = useRef(null);
  const resultsRef = useRef(null);

  const handleAnswer = useCallback((key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }, []);

  const scrollToChecklist = () => {
    checklistRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToResults = () => {
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const totalAnswered = Object.keys(answers).length;
  const totalItems = SECTIONS.reduce((sum, s) => sum + s.items.length, 0);
  const hasAnswers = totalAnswered > 0;

  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Tech Health Check request"
  )}&body=${encodeURIComponent(buildMailtoBody(answers))}`;

  const sectionResults = SECTIONS.map((s) => {
    const score = getSectionScore(s.id, s.items.length, answers);
    const label = getScoreLabel(score.total, score.max);
    return { ...s, score, label };
  });

  const sectionsWithAnswers = sectionResults.filter((s) => s.score.answered > 0);
  const lowSections = sectionsWithAnswers.filter(
    (s) => s.label === "Needs attention" || s.label === "Start here"
  );

  return (
    <>
      <PageSEO
        title="Free Tech Health Check | Ella Tech Solutions"
        description="A free 5-minute self-check for small business owners and nonprofit leaders. Find out what is helping your business and what is quietly costing you leads."
        canonical={`${SITE_URL}/tech-health-check`}
      />

      <PageShell mainClassName="overflow-hidden pt-[160px] md:pt-[180px] min-h-screen bg-s1">
        {/* Hero */}
        <section className="relative py-16 md:py-24 bg-s1" aria-labelledby="hero-heading">
          <div className="container max-w-3xl mx-auto text-center">
            <span className="caption text-p3 uppercase tracking-wider mb-4 block">
              Free Resource
            </span>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl font-black text-p4 leading-tight mb-5"
            >
              Free Tech Health Check
            </h1>
            <p className="text-p5 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Find out in 5 minutes what is helping your business and what is quietly costing
              you leads.
            </p>
            <button
              type="button"
              onClick={scrollToChecklist}
              className="notch [--notch:10px] inline-flex items-center gap-2 bg-p1 text-s1 font-bold uppercase tracking-wide px-8 py-4 text-[15px] transition hover:bg-p4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-p1"
            >
              Start the check
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 16 16"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="square"
              >
                <path d="M8 2v11M2.5 8 8 13.5 13.5 8" />
              </svg>
            </button>
          </div>
        </section>

        {/* Checklist */}
        <section
          ref={checklistRef}
          id="checklist"
          aria-label="Tech Health Check checklist"
          className="py-12 md:py-16 bg-s1"
        >
          <div className="container max-w-3xl mx-auto space-y-6">
            {SECTIONS.map((section) => (
              <ChecklistSection
                key={section.id}
                section={section}
                answers={answers}
                onAnswer={handleAnswer}
              />
            ))}

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <p className="text-p5/70 text-sm">
                {totalAnswered} of {totalItems} items answered
              </p>
              <button
                type="button"
                onClick={scrollToResults}
                disabled={!hasAnswers}
                className="notch [--notch:10px] inline-flex items-center gap-2 bg-p1 text-s1 font-bold uppercase tracking-wide px-6 py-3.5 text-[14px] transition hover:bg-p4 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-p1"
              >
                See my results
              </button>
            </div>
          </div>
        </section>

        {/* Results */}
        <section
          ref={resultsRef}
          id="results"
          aria-label="Your checklist results"
          className="py-12 md:py-16 bg-s2 border-t border-white/10"
        >
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-p4 mb-2 text-center">Your Results</h2>
            <p className="text-p5/70 text-sm text-center mb-8">
              {hasAnswers
                ? "Based on your answers so far. Complete any remaining items for a fuller picture."
                : "Answer the checklist above to see your results here."}
            </p>

            {!hasAnswers ? (
              <div className="bg-s1 rounded-2xl border border-white/10 px-6 py-10 text-center">
                <p className="text-p5/50 text-[15px]">
                  Your section scores will appear here as you answer the checklist.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {sectionResults.map((s) => {
                  if (s.score.answered === 0) return null;
                  const styles = LABEL_STYLES[s.label];
                  const isComplete = s.score.answered === s.items.length;
                  return (
                    <div
                      key={s.id}
                      className="bg-s1 rounded-2xl border border-white/10 px-5 py-5 sm:px-6"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-block h-2 w-2 rounded-full flex-shrink-0 ${styles.dot}`}
                            aria-hidden="true"
                          />
                          <h3 className="font-bold text-p4 text-[15px]">{s.title}</h3>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          {!isComplete && (
                            <span className="text-xs text-p5/50">
                              {s.score.answered}/{s.items.length} answered
                            </span>
                          )}
                          <span
                            className={`text-xs font-bold px-3 py-1 rounded-full ${styles.badge}`}
                          >
                            {s.label}
                          </span>
                        </div>
                      </div>
                      {s.label !== "Strong" && (
                        <p className="text-p5/80 text-sm leading-relaxed mt-2 pl-4">
                          {s.lowTip}
                        </p>
                      )}
                    </div>
                  );
                })}

                {lowSections.length === 0 && sectionsWithAnswers.length > 0 && (
                  <div className="rounded-2xl bg-green-500/10 border border-green-500/20 px-6 py-4 text-center">
                    <p className="text-green-400 font-semibold text-[15px]">
                      Looking strong across the board. A personal review can help you spot
                      anything that is not visible from the outside.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Next step */}
        <section
          id="next-step"
          aria-labelledby="next-step-heading"
          className="py-16 md:py-20 bg-s1 border-t border-white/10"
        >
          <div className="container max-w-2xl mx-auto text-center">
            <span className="caption text-p3 uppercase tracking-wider mb-4 block">
              Next step
            </span>
            <h2
              id="next-step-heading"
              className="text-2xl sm:text-3xl font-black text-p4 mb-4 leading-tight"
            >
              Want a personal review of your results?
            </h2>
            <p className="text-p5 text-[16px] leading-relaxed mb-8 max-w-xl mx-auto">
              Share your checklist with me and I will send you a short, plain-English summary
              of what to focus on and why.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={mailtoHref}
                className="notch [--notch:10px] inline-flex items-center gap-2 bg-p1 text-s1 font-bold uppercase tracking-wide px-7 py-4 text-[14px] transition hover:bg-p4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-p1 w-full sm:w-auto justify-center"
              >
                Email me for my personal Tech Health Check
              </a>

              <a
                href={BOOKING_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="notch [--notch:10px] inline-flex items-center gap-2 bg-s2 text-p4 border border-white/20 font-bold uppercase tracking-wide px-7 py-4 text-[14px] transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-p1 w-full sm:w-auto justify-center"
              >
                Book a free 30 minute call
              </a>
            </div>

            <p className="mt-5 text-p5/60 text-sm">
              No pitch, no pressure. I will send you a short, plain-English review.
            </p>
          </div>
        </section>

        {/* Who this is for */}
        <section
          aria-label="Who this is for"
          className="py-10 bg-s2 border-t border-white/10 text-center"
        >
          <div className="container max-w-2xl mx-auto">
            <p className="text-p5/70 text-sm leading-relaxed">
              Built for small businesses, nonprofits, and entrepreneurs. Detroit-based and
              serving clients nationwide.
            </p>
          </div>
        </section>
      </PageShell>
    </>
  );
}
