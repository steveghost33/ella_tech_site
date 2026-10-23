import { Element } from "react-scroll";
import CalInlineEmbed from "../components/CalInlineEmbed.jsx";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL } from "../data/site.js";

const deliverables = [
  "A quick look at where you currently show up, and don't, in local search",
  "A clear recommendation on which tier (Get Found, Get Called, or Own the Area) fits your business",
  "Next steps and a straightforward quote, no pressure",
];

const Contact = () => {
  return (
    <Element name="contact">
      <section
        id="contact"
        className="relative scroll-mt-[140px] pt-20 pb-20 max-md:pt-14 max-md:pb-8"
      >
        {/* Subtle ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-s4/20 blur-[160px] -z-10"
        />

        <div className="container">
          {/* Section label */}
          <p className="caption text-center mb-4">Free Consultation</p>

          {/* Main headline */}
          <h2 className="text-center h3 max-md:text-4xl max-md:leading-tight text-p4 uppercase font-black mb-4 max-w-3xl mx-auto">
            See Which Tier Gets You Found
          </h2>
          <p className="text-center text-p5 body-1 max-w-xl mx-auto mb-14 max-md:mb-10">
            30 minutes to see where your business shows up online today and what it would take to start getting calls from local search.
          </p>
          <p className="text-center text-p5/70 text-sm mb-10 -mt-8 max-md:-mt-4">
            Have a specific tech question instead? <a href="/tech-solutions" className="text-p1 font-semibold hover:underline">We handle that too</a>.
          </p>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-14 items-start max-w-[1100px] mx-auto">

            {/* LEFT, Copy */}
            <div className="w-full lg:w-5/12 flex-shrink-0">

              {/* Who you'll meet */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="/images/steven-bowman.jpg"
                  alt="Steven Bowman, founder of Ella Tech Solutions"
                  width="400"
                  height="400"
                  loading="lazy"
                  className="h-20 w-20 flex-shrink-0 rounded-full object-cover border-2 border-p1/40"
                />
                <div>
                  <p className="text-p4 font-bold text-lg leading-tight">Steven Bowman</p>
                  <p className="text-p1 text-sm font-semibold uppercase tracking-wider">
                    Founder &amp; CTO
                  </p>
                  <p className="text-p5/70 text-sm mt-1">
                    You'll talk with me directly. 15 years of IT leadership in Michigan.
                  </p>
                </div>
              </div>

              {/* Who this is for */}
              <div className="mb-8">
                <p className="text-p5 leading-relaxed text-[17px]">
                  A working session for nonprofits, small businesses, and teams
                  ready to improve their digital systems. We'll cover your
                  current tools, what's slowing you down, and what to fix first.
                  No sales pressure, just clarity.
                </p>
              </div>

              {/* What you'll get */}
              <div className="mb-8">
                <h3 className="text-p4 font-bold text-lg uppercase tracking-wide mb-4">
                  What you'll get
                </h3>
                <ol className="space-y-3">
                  {deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-p1/15 border border-p1/40 flex items-center justify-center text-p1 text-xs font-bold">
                        {i + 1}
                      </span>
                      <span className="text-p5 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Before you book */}
              <div className="rounded-2xl border border-s3/50 bg-s2/50 px-6 py-5 mb-6">
                <h3 className="text-p4 font-bold text-sm uppercase tracking-wider mb-2">
                  Before you book
                </h3>
                <p className="text-p5 text-[15px] leading-relaxed">
                  You'll be asked a few quick questions so the session can be
                  focused and useful from the first minute.
                </p>
              </div>

              {/* Contact fallback, desktop only (left column) */}
              <div className="hidden lg:block">
                <p className="text-p5/70 text-sm uppercase tracking-wider font-semibold mb-3">
                  Prefer to reach out directly?
                </p>
                <div className="space-y-2">
                  <a
                    href={`tel:${CONTACT_PHONE_TEL}`}
                    className="flex items-center gap-3 rounded-xl bg-s3/20 hover:bg-s3/40 transition-colors px-4 py-3 text-p5 text-[15px] font-medium"
                  >
                    <img src="/images/phone.svg" alt="" aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
                    {CONTACT_PHONE}
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-3 rounded-xl bg-s3/20 hover:bg-s3/40 transition-colors px-4 py-3 text-p5 text-[15px] font-medium"
                  >
                    <img src="/images/email.svg" alt="" aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT, Scheduler */}
            <div className="w-full lg:flex-1">
              {/* Framing line */}
              <p className="text-p5/60 text-sm text-center mb-4 italic">
                Consultation windows are opened weekly and intentionally limited
                so each session gets proper preparation.
              </p>

              {/* Scheduler card */}
              <div id="booking-embed" className="relative rounded-[28px] border border-s3/50 bg-s2/60 shadow-500 overflow-hidden">
                {/* Subtle top accent line */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-p1/40 to-transparent"
                />

                <div className="p-4 max-sm:p-2">
                  <CalInlineEmbed className="min-h-[680px] w-full" />
                </div>
              </div>

              <p className="text-p5/50 text-xs text-center mt-3">
                We reply to all booking confirmations within one business day.
              </p>

              {/* Contact fallback, mobile only (below embed) */}
              <div className="mt-6 lg:hidden">
                <p className="text-p5/70 text-sm uppercase tracking-wider font-semibold mb-3">
                  Prefer to reach out directly?
                </p>
                <div className="space-y-2">
                  <a
                    href={`tel:${CONTACT_PHONE_TEL}`}
                    className="flex items-center gap-3 rounded-xl bg-s3/20 hover:bg-s3/40 transition-colors px-4 py-3 text-p5 text-[15px] font-medium"
                  >
                    <img src="/images/phone.svg" alt="" aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
                    {CONTACT_PHONE}
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-3 rounded-xl bg-s3/20 hover:bg-s3/40 transition-colors px-4 py-3 text-p5 text-[15px] font-medium"
                  >
                    <img src="/images/email.svg" alt="" aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
