import Button from "../../components/Button.jsx";
import PageSEO from "../../components/PageSEO.jsx";
import PageShell from "../../components/PageShell.jsx";
import { useScrollToHash } from "../../hooks/useScrollToHash.js";
import { SITE_URL } from "../../data/site.js";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tech Consulting for Entrepreneurs",
  serviceType: "Technology Consulting",
  description:
    "Website design, CRM setup, and AI workflow automation for entrepreneurs and solopreneurs nationwide. Ella Tech Solutions.",
  provider: {
    "@type": "LocalBusiness",
    name: "Ella Tech Solutions",
    url: SITE_URL,
  },
  areaServed: ["Detroit, MI", "Michigan", "United States"],
  url: `${SITE_URL}/services/entrepreneurs`,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/tech-solutions` },
      { "@type": "ListItem", position: 3, name: "Entrepreneurs", item: `${SITE_URL}/services/entrepreneurs` },
    ],
  },
};

const services = [
  {
    title: "Professional Website That Works While You Work",
    description:
      "As a founder, your website is your best salesperson. We build fast, professional sites that establish credibility, capture leads, and convert visitors, without making you learn a website builder or manage a developer relationship for the rest of your life.",
    details: [
      "Clean, fast site designed to convert visitors into clients",
      "Lead capture built in, contact forms, booking links, email opt-ins",
      "Easy for you to update without touching code",
      "SEO-optimized so people can find you when they search your services",
    ],
  },
  {
    title: "CRM Setup for One-Person Teams",
    description:
      "Entrepreneurs lose deals by not following up. Not because they don't care, because they're running everything at once and things fall through the cracks. We set up a lightweight CRM that keeps your pipeline visible without adding another thing to manage.",
    details: [
      "CRM selection matched to your budget and complexity",
      "Pipeline setup, contact import, and workflow automation",
      "Email integration so every conversation is tracked automatically",
      "Training so you're confident using it from day one",
    ],
  },
  {
    title: "AI Automation for Founders",
    description:
      "The most valuable thing you have is your time. We automate the admin tasks that consume it, email triage, follow-up sequences, proposal generation, scheduling, social media, so you can focus on building, selling, and delivering.",
    details: [
      "Audit of where your time goes and where automation helps most",
      "Implementation using tools you likely already subscribe to",
      "Email and calendar automation, lead nurturing, and reporting",
      "Simple enough that you can adjust it yourself as your business changes",
    ],
  },
  {
    title: "Tech Stack Audit & Roadmap",
    description:
      "Founders often accumulate subscriptions they don't fully use and miss tools that would genuinely save them hours. We audit what you have, cut what you don't need, and build you a tech stack that scales with your business.",
    details: [
      "Full review of current tools, subscriptions, and workflows",
      "Honest assessment of what to keep, cut, and add",
      "Prioritized implementation roadmap with cost estimates",
      "One-time session or ongoing advisory, your choice",
    ],
  },
];

function Entrepreneurs() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <PageSEO
        title="Tech Consulting for Entrepreneurs | Ella Tech"
        description="Website design, CRM setup, and AI automation for entrepreneurs and solopreneurs nationwide. Ella Tech Solutions, start small, scale fast."
        canonical={`${SITE_URL}/services/entrepreneurs`}
        schema={schema}
      />

      <PageShell mainClassName="overflow-hidden pt-[148px] sm:pt-[200px] min-h-screen bg-s1">
        <section className="relative pt-16 pb-24 max-lg:pt-12 max-lg:pb-20 max-md:pt-10 max-md:pb-16 bg-s1 font-poppins text-p5">

          {/* Hero Banner */}
          <div
            className="relative w-full overflow-hidden rounded-3xl mb-20 min-h-[440px] sm:min-h-[380px] md:h-[350px] md:min-h-0"
            style={{
              backgroundImage: "url('/images/screen.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative z-10 container flex flex-col justify-center items-center text-center px-4 py-12 md:h-full md:py-0">
              <p className="text-p1 text-sm font-semibold uppercase tracking-[0.18em] mb-4">Entrepreneur Technology</p>
              <h1 className="h1 text-white drop-shadow-xl mb-4">
                Tech that keeps up when you're building fast.
              </h1>
              <p className="body-1 text-white/90 drop-shadow-lg max-w-2xl">
                You're running the whole operation. We handle the tools, the setup, and the systems, so your technology works as hard as you do.
              </p>
            </div>
          </div>

          {/* Intro */}
          <div className="container mb-20 max-w-3xl mx-auto text-center">
            <h2 className="h3 text-p4 mb-4">You don't need enterprise software. You need the right setup.</h2>
            <p className="body-1 text-p5">
              Most entrepreneurs overpay for tools they underuse, or skip tools entirely and lose hours to manual work. We help you find the right balance, a lean, functional tech stack that fits where you are now and can grow with you. No bloat, no subscriptions you won't touch, no tools that require a full-time IT person to manage.
            </p>
          </div>

          {/* Services */}
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="container grid md:grid-cols-2 gap-12 mb-24 items-start"
            >
              <div className={idx % 2 !== 0 ? "order-2 md:order-1" : ""}>
                <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8 h-full">
                  <h2 className="h3 text-p4 mb-4">{service.title}</h2>
                  <p className="body-1 mb-6 text-p5">{service.description}</p>
                  <ul className="list-disc pl-5 space-y-2 body-3 text-p5">
                    {service.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`flex flex-col justify-center ${idx % 2 !== 0 ? "order-1 md:order-2" : ""}`}>
                <div className="rounded-2xl bg-s3/10 border border-s3/20 p-8">
                  <p className="caption text-p3 mb-3 uppercase tracking-wide">Sound familiar?</p>
                  <p className="body-1 text-p5 italic">
                    {idx === 0 && '"I\'ve been sending people to a site I built myself three years ago. I know it\'s costing me clients but I don\'t have time to deal with it."'}
                    {idx === 1 && '"I have leads in my inbox, leads in a spreadsheet, and leads in my head. I know I\'m losing follow-ups but there\'s no system."'}
                    {idx === 2 && '"I spend Sunday nights doing things that should take 20 minutes but take two hours because I\'m doing them manually."'}
                    {idx === 3 && '"I\'m paying for four tools that overlap and I have no idea which one I actually need. I just keep adding subscriptions."'}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* How we work with founders */}
          <div className="container mb-24">
            <div className="bg-s2 rounded-3xl p-10 md:p-14 border border-white/10">
              <div className="max-w-2xl">
                <h2 className="h3 text-p4 mb-4">How we work with entrepreneurs</h2>
                <p className="body-1 text-p5 mb-6">
                  We know you don't have time for a six-month engagement. We scope work in tight, deliverable phases, start with a website or a CRM, add automation when you're ready. No long-term contract required to get started.
                </p>
                <ul className="space-y-4 body-1 text-p5">
                  <li className="flex gap-3">
                    <span className="text-p1 font-bold flex-shrink-0">01</span>
                    <span><strong className="text-p4">Free 30-minute consultation.</strong> We review your current tools and workflow, identify the highest-impact fix, and give you a clear proposal.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-p1 font-bold flex-shrink-0">02</span>
                    <span><strong className="text-p4">Scoped, fixed-price project.</strong> You know exactly what you're getting and what it costs before we start.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-p1 font-bold flex-shrink-0">03</span>
                    <span><strong className="text-p4">Handoff and training.</strong> When we're done, you own it. We hand over documentation and training so you're not dependent on us going forward.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-p1 font-bold flex-shrink-0">04</span>
                    <span><strong className="text-p4">Add more when you're ready.</strong> When your business grows and you need the next layer, we're here. No pressure, no retainer required.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="container text-center mb-32">
            <h2 className="h4 mb-6 text-p4">Let's get your tech out of your way.</h2>
            <p className="body-1 mb-8 max-w-2xl mx-auto text-p5">
              Book a free 30-minute consultation. We'll identify the one thing slowing you down the most and tell you exactly what it would take to fix it.
            </p>
            <Button href="https://cal.com/ella-tech-7ze7wk" containerClassName="inline-block mx-auto">
              Book a Free Consultation
            </Button>
          </div>
        </section>
      </PageShell>
    </>
  );
}

export default Entrepreneurs;
