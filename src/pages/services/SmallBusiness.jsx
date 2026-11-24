import { Link } from "react-router-dom";
import Button from "../../components/Button.jsx";
import PageSEO from "../../components/PageSEO.jsx";
import PageShell from "../../components/PageShell.jsx";
import { useScrollToHash } from "../../hooks/useScrollToHash.js";
import { SITE_URL } from "../../data/site.js";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tech Consulting for Small Businesses",
  serviceType: "Technology Consulting",
  description:
    "Website design, CRM setup, Microsoft 365 onboarding, AI automation, staff training, and grant writing for small businesses in Detroit and nationwide.",
  provider: {
    "@type": "LocalBusiness",
    name: "Ella Tech Solutions",
    url: SITE_URL,
  },
  areaServed: ["Detroit, MI", "Michigan", "United States"],
  url: `${SITE_URL}/services/small-business`,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/tech-solutions` },
      { "@type": "ListItem", position: 3, name: "Small Business", item: `${SITE_URL}/services/small-business` },
    ],
  },
};

const services = [
  {
    title: "Website Design & CRM Setup",
    description:
      "Your website is the first thing potential customers see. We build clean, fast sites that convert visitors into leads, then set up a CRM so you never lose track of a prospect, customer, or follow-up again.",
    details: [
      "Professional website built for speed, mobile, and search",
      "CRM selection, configuration, and data migration from spreadsheets",
      "Training so your team can manage contacts without outside help",
      "Clear calls to action that turn visitors into booked calls",
    ],
  },
  {
    title: "Microsoft 365 Setup & Staff Training",
    description:
      "If your team is using personal email accounts, working out of separate inboxes, or ignoring tools you're already paying for, we fix that. We set up Microsoft 365 properly and train your staff in plain language.",
    details: [
      "Business email, Teams, SharePoint, and OneDrive configured from scratch",
      "Permissions and shared drives set up so nothing falls through the cracks",
      "Staff training that doesn't assume a tech background",
      "Ongoing support so you're not stuck when something breaks",
    ],
  },
  {
    title: "AI Workflow Automation",
    description:
      "Small business owners spend hours on tasks a computer could handle. We identify the repetitive work eating your time, email, scheduling, reporting, data entry, and automate it using tools you already have access to.",
    details: [
      "Workflow audit to find where automation saves the most time",
      "Implementation using Microsoft 365, Zapier, Make, or similar tools",
      "Staff training so your team uses (and trusts) the automations",
      "No subscriptions to tools you don't need",
    ],
  },
  {
    title: "Digital Strategy Consulting",
    description:
      "Not sure where to start? A 30-minute strategy session gives you a clear picture of your technology gaps and a prioritized list of what to fix first. No jargon, no upsell, just a straight answer about what your business actually needs.",
    details: [
      "Tech audit covering your website, CRM, email, and operations tools",
      "Prioritized recommendations with honest cost estimates",
      "Vendor selection guidance so you buy the right tools, not the most expensive",
      "No long-term commitment required",
    ],
  },
  {
    title: "Grant Writing & Grant Readiness",
    description:
      "There's real money available for small businesses through SBA, state, local, and economic development grant programs, including opportunities for minority-owned and women-owned businesses. We research the opportunities that fit your business, write and edit the proposal, and set up the systems you need to track and report if you're awarded.",
    details: [
      "Grant research matched to your industry, location, and business profile",
      "Grant readiness review of your business narrative, financials, and documentation",
      "Full proposal writing, editing, and required attachments",
      "Outcome tracking systems for after the award, so reporting doesn't fall through the cracks",
    ],
    link: "/services/grant-writing",
    linkLabel: "See grant writing services",
  },
];

function SmallBusiness() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <PageSEO
        title="Tech Consulting for Small Businesses | Ella Tech"
        description="Website design, CRM setup, Microsoft 365, and AI automation for small businesses nationwide. Ella Tech Solutions, practical tech that actually drives growth."
        canonical={`${SITE_URL}/services/small-business`}
        schema={schema}
      />

      <PageShell mainClassName="overflow-hidden pt-[148px] sm:pt-[200px] min-h-screen bg-s1">
        <section className="relative pt-16 pb-24 max-lg:pt-12 max-lg:pb-20 max-md:pt-10 max-md:pb-16 bg-s1 font-poppins text-p5">

          {/* Hero Banner */}
          <div
            className="relative w-full overflow-hidden rounded-3xl mb-20 min-h-[440px] sm:min-h-[380px] md:h-[350px] md:min-h-0"
            style={{
              backgroundImage: "url('/images/consulting-session.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative z-10 container flex flex-col justify-center items-center text-center px-4 py-12 md:h-full md:py-0">
              <p className="text-p1 text-sm font-semibold uppercase tracking-[0.18em] mb-4">Small Business Technology</p>
              <h1 className="h1 text-white drop-shadow-xl mb-4">
                Technology that helps your small business grow.
              </h1>
              <p className="body-1 text-white/90 drop-shadow-lg max-w-2xl">
                We handle the tools, training, and setup, so you can focus on running the business, not troubleshooting it.
              </p>
            </div>
          </div>

          {/* Intro */}
          <div className="container mb-20 max-w-3xl mx-auto text-center">
            <h2 className="h3 text-p4 mb-4">The problem isn't the software. It's the implementation.</h2>
            <p className="body-1 text-p5">
              Most small business owners have bought tools they barely use, a CRM that's still empty, a Microsoft 365 subscription nobody's fully set up, an email system that's a mess. We fix that. We handle selection, setup, and training end to end so you get technology that works from day one.
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
                  {service.link && (
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 mt-6 text-p1 font-semibold text-sm uppercase tracking-wide hover:underline"
                    >
                      {service.linkLabel} &rarr;
                    </Link>
                  )}
                </div>
              </div>

              <div className={`flex flex-col justify-center ${idx % 2 !== 0 ? "order-1 md:order-2" : ""}`}>
                <div className="rounded-2xl bg-s3/10 border border-s3/20 p-8">
                  <p className="caption text-p3 mb-3 uppercase tracking-wide">Who this is for</p>
                  <p className="body-1 text-p5">
                    {idx === 0 && "Small business owners who are sending people to an embarrassing website, losing leads in spreadsheets, or tracking customers by memory."}
                    {idx === 1 && "Business owners paying for Microsoft 365 but running on personal Gmail, shared login credentials, and folders nobody can find."}
                    {idx === 2 && "Owners spending hours each week on tasks that should take minutes, scheduling, follow-ups, data entry, status updates."}
                    {idx === 3 && "Business owners who know they need better tech but don't know where to start, what to buy, or what order to do things in."}
                    {idx === 4 && "Business owners who qualify for grant funding but don't have time to research programs, write a competitive proposal, or track outcomes after an award."}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Why Ella Tech */}
          <div className="container mb-24">
            <div className="bg-s2 rounded-3xl p-10 md:p-14 border border-white/10">
              <div className="max-w-2xl">
                <h2 className="h3 text-p4 mb-4">Why small businesses work with Ella Tech</h2>
                <ul className="space-y-4 body-1 text-p5">
                  <li className="flex gap-3">
                    <span className="text-p1 font-bold flex-shrink-0">01</span>
                    <span><strong className="text-p4">We don't sell you tools we don't need.</strong> Every recommendation is based on your actual workflow, not a vendor's sales pitch.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-p1 font-bold flex-shrink-0">02</span>
                    <span><strong className="text-p4">Training is included, always.</strong> We don't install software and disappear. Every implementation includes training for you and your team.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-p1 font-bold flex-shrink-0">03</span>
                    <span><strong className="text-p4">Straightforward pricing.</strong> We scope the work before we start. No surprises, no hourly rates that balloon.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-p1 font-bold flex-shrink-0">04</span>
                    <span><strong className="text-p4">Detroit-based, available everywhere.</strong> We work with small businesses across the United States via remote sessions.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="container text-center mb-32">
            <h2 className="h4 mb-6 text-p4">Ready to get your tech working for you?</h2>
            <p className="body-1 mb-8 max-w-2xl mx-auto text-p5">
              Book a free 30-minute consultation. We'll review your current tools, identify what's slowing you down, and give you a clear picture of what to fix first, no commitment required.
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

export default SmallBusiness;
