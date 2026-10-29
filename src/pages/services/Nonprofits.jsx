import { Link } from "react-router-dom";
import Button from "../../components/Button.jsx";
import PageSEO from "../../components/PageSEO.jsx";
import PageShell from "../../components/PageShell.jsx";
import { useScrollToHash } from "../../hooks/useScrollToHash.js";
import { SITE_URL } from "../../data/site.js";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Nonprofit Technology Consulting",
  serviceType: "Technology Consulting",
  description:
    "Website builds, CRM setup, LMS development, HRIS implementation, staff training, and grant writing for nonprofit organizations. Mission-driven pricing available.",
  provider: {
    "@type": "LocalBusiness",
    name: "Ella Tech Solutions",
    url: SITE_URL,
  },
  areaServed: ["Detroit, MI", "Michigan", "United States"],
  url: `${SITE_URL}/services/nonprofits`,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/tech-solutions` },
      { "@type": "ListItem", position: 3, name: "Nonprofits", item: `${SITE_URL}/services/nonprofits` },
    ],
  },
};

const services = [
  {
    title: "Website Design for Nonprofits",
    description:
      "Donors, volunteers, and grant-makers look at your website before they look at anything else. We build clean, fast sites that tell your story clearly and make it easy for people to give, sign up, and get involved.",
    details: [
      "Responsive design built for donors and program participants",
      "Donation flow and volunteer signup integration",
      "Clear program descriptions and impact storytelling",
      "Mission-driven pricing available for 501(c)(3) organizations",
    ],
  },
  {
    title: "CRM Setup & Training",
    description:
      "Most nonprofits have bought a CRM, and stopped using it within six months. We configure your CRM around how your organization actually operates, migrate your donor and contact data, and train your staff so adoption sticks.",
    details: [
      "CRM selection based on your budget, team size, and program needs",
      "Data migration from spreadsheets or a previous system",
      "Workflow configuration for donor management, case tracking, and reporting",
      "Staff training and administrator documentation included",
    ],
  },
  {
    title: "LMS & Staff Training Development",
    description:
      "If your onboarding lives in a folder no one can find and your compliance training is a printout, we can help. We build and implement learning platforms and create short, focused training content your staff can actually finish.",
    details: [
      "LMS platform selection and full setup",
      "Micro-learning course development in Articulate 360 or Rise",
      "SCORM-compliant packaging for compliance and grant reporting",
      "Administrator training so the system runs without outside help",
    ],
  },
  {
    title: "HRIS & Microsoft 365 Implementation",
    description:
      "Nonprofit HR teams are often running on spreadsheets, shared inboxes, and tribal knowledge. We implement HRIS platforms and set up Microsoft 365 properly so your team operates like the professional organization you are.",
    details: [
      "HRIS selection, configuration, and staff record migration",
      "Microsoft 365 setup including Teams, SharePoint, and business email",
      "Onboarding workflows and permissions configured end to end",
      "Staff training in plain language, no IT background required",
    ],
  },
  {
    title: "AI Workflow Automation",
    description:
      "Nonprofit staff wear too many hats to spend hours on repetitive admin work. We identify where AI can save real time, grant reporting, donor follow-ups, scheduling, data entry, and implement automations your team will actually trust.",
    details: [
      "Workflow audit to identify the highest-impact automation opportunities",
      "Implementation using tools your organization already has",
      "AI literacy training so staff understands and can confidently use the tools",
      "No hype, no tools your team won't touch six months from now",
    ],
  },
  {
    title: "Grant Writing & Grant Readiness",
    description:
      "Funding doesn't stop at the proposal. We research opportunities, write and edit proposals, and get your organization grant-ready, then build the reporting systems that keep you in compliance once the award lands.",
    details: [
      "Grant research matched to your mission and program size",
      "Grant readiness review: case for support, outcomes, financials, board documentation",
      "Full proposal writing, editing, and letters of inquiry",
      "Outcome tracking and reporting systems for after the award",
    ],
    link: "/services/grant-writing",
    linkLabel: "See grant writing services",
  },
];

function Nonprofits() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <PageSEO
        title="Nonprofit Tech Consulting & Grant Writing | Ella Tech Solutions"
        description="Website builds, CRM setup, LMS development, staff training, and grant writing for nonprofits. Mission-driven pricing available. Ella Tech Solutions, Detroit-based, nationwide."
        canonical={`${SITE_URL}/services/nonprofits`}
        schema={schema}
      />

      <PageShell mainClassName="overflow-hidden pt-[148px] sm:pt-[200px] min-h-screen bg-s1">
        <section className="relative pt-16 pb-24 max-lg:pt-12 max-lg:pb-20 max-md:pt-10 max-md:pb-16 bg-s1 font-poppins text-p5">

          {/* Hero Banner */}
          <div
            className="relative w-full overflow-hidden rounded-3xl mb-20 min-h-[440px] sm:min-h-[380px] md:h-[350px] md:min-h-0"
            style={{
              backgroundImage: "url('/images/ai-workshop-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          >
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative z-10 container flex flex-col justify-center items-center text-center px-4 py-12 md:h-full md:py-0">
              <p className="text-p1 text-sm font-semibold uppercase tracking-[0.18em] mb-4">Nonprofit Technology</p>
              <h1 className="h1 text-white drop-shadow-xl mb-4">
                Technology built around your nonprofit's real needs.
              </h1>
              <p className="body-1 text-white/90 drop-shadow-lg max-w-2xl">
                We've spent 15 years implementing technology inside nonprofits. We know the budget constraints, the board requirements, and why most tools go unused.
              </p>
            </div>
          </div>

          {/* Intro */}
          <div className="container mb-20 max-w-3xl mx-auto text-center">
            <h2 className="h3 text-p4 mb-4">The problem isn't the tools. It's that nobody set them up right.</h2>
            <p className="body-1 text-p5">
              Nonprofits don't have a technology shortage, they have an implementation problem. Staff are busy, budgets are tight, and most vendors sell software without providing the training or configuration it takes to get it used. We do both. Every engagement includes full setup and hands-on training, so the tools we implement actually become part of how your organization works.
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
                  <p className="caption text-p3 mb-3 uppercase tracking-wide">What we've seen</p>
                  <p className="body-1 text-p5 italic">
                    {idx === 0 && '"Our website looked like it was built in 2009. Donors would go to our site and we\'d lose them before they ever saw our programs."'}
                    {idx === 1 && '"We paid for Salesforce for two years and used maybe 10% of it. Staff were still keeping donor notes in a shared spreadsheet."'}
                    {idx === 2 && '"Our onboarding was a 60-page PDF. New hires couldn\'t find anything and we were training the same things over and over."'}
                    {idx === 3 && '"Our HR director was managing staff records in Google Sheets. We had no idea what we were paying for in Microsoft 365."'}
                    {idx === 4 && '"Our executive director was spending three hours every Friday pulling the same donor report by hand."'}
                    {idx === 5 && '"We won the grant and then realized nobody had a way to track the outcomes it required us to report on."'}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Mission-Driven Pricing */}
          <div className="container mb-24">
            <div className="bg-s2 rounded-3xl p-10 md:p-14 border border-white/10">
              <div className="max-w-2xl">
                <h2 className="h3 text-p4 mb-4">Mission-Driven Pricing</h2>
                <p className="body-1 text-p5 mb-6">
                  Ella Tech Solutions offers discounted pricing for verified 501(c)(3) nonprofits and community-based organizations with demonstrated community impact. Quality technology consulting should not be out of reach for organizations doing important work.
                </p>
                <ul className="space-y-3 body-1 text-p5 mb-8">
                  <li className="flex gap-3">
                    <span className="text-p1 font-bold flex-shrink-0">—</span>
                    <span>Available to all verified 501(c)(3) organizations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-p1 font-bold flex-shrink-0">—</span>
                    <span>Scoped per project, no hidden fees or hourly overruns</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-p1 font-bold flex-shrink-0">—</span>
                    <span>Training and documentation included in every engagement</span>
                  </li>
                </ul>
                <Button href="https://cal.com/ella-tech-7ze7wk" containerClassName="inline-block">
                  Book a Free Consultation
                </Button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="container text-center mb-32">
            <h2 className="h4 mb-6 text-p4">Ready to build systems your team will actually use?</h2>
            <p className="body-1 mb-8 max-w-2xl mx-auto text-p5">
              Book a free 30-minute consultation. We'll review your current technology, identify the gaps, and give you a prioritized list of what to fix first, no commitment required.
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

export default Nonprofits;
