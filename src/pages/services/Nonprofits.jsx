import Button from "../../components/Button.jsx";
import PageSEO from "../../components/PageSEO.jsx";
import PageShell from "../../components/PageShell.jsx";
import { useScrollToHash } from "../../hooks/useScrollToHash.js";
import { NONPROFIT_BOOKING_URL, SITE_URL } from "../../data/site.js";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Nonprofit Technology Consulting",
  serviceType: "Technology Consulting",
  description:
    "Website redesign, CRM strategy and setup, staff technology training, and AI workflow integration for Detroit area nonprofits and community organizations.",
  provider: {
    "@type": "LocalBusiness",
    name: "Ella Tech Solutions",
    url: SITE_URL,
  },
  areaServed: ["Detroit, MI", "Michigan"],
  url: `${SITE_URL}/services/nonprofits`,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Nonprofits", item: `${SITE_URL}/services/nonprofits` },
    ],
  },
};

const painPoints = [
  "Our website is out of date, and only one person knows how to change it.",
  "Donors are in one system, volunteers are in a spreadsheet, and event signups are in someone's email.",
  "We pay for software that most of our staff don't use.",
  "Everyone is talking about AI. We don't have a plan, or a policy, for how we use it.",
];

const services = [
  {
    title: "Website redesign",
    description:
      "A new website that says clearly what you do, who you serve and how people can help. It works on phones, loads quickly, and is built so your staff can update programs, events and news without calling a developer. Donation, volunteer and contact forms send information to your records instead of sitting in someone's inbox.",
    details: [
      "A review of your current site and what visitors need to find",
      "A new page structure, with the writing done for you or your existing text edited, whichever you prefer",
      "Donation, volunteer signup and contact forms",
      "Accessibility basics: readable text and contrast, image descriptions, and keyboard friendly navigation",
      "Training for the staff who will keep the site updated",
    ],
  },
  {
    title: "CRM strategy and setup",
    description:
      "One place for donors, volunteers, members and partners. I help you decide what you need a CRM to do, choose a system that fits your budget or set up the one you already have, move your records out of spreadsheets, and organize it around how your team actually works.",
    details: [
      "A review of where your records live today",
      "A recommendation on which system to use, including the one you already have",
      "Cleanup and import of your existing records",
      "Setup for gifts, volunteer hours, events and the reports your board asks for",
      "Written instructions for your team",
    ],
  },
  {
    title: "Staff technology training",
    description:
      "Training built around your staff's real tasks, not a tour of every button. Short sessions, practice with real work, and simple guides people can come back to. This is the part of the work I know best: I spent 15 years in education and learning design before starting Ella Tech.",
    details: [
      "Sessions grouped by role, so people learn what they will use",
      "Step by step guides and short recordings",
      "In person in Detroit or online, whichever works for your team",
      "A follow up check in about a month later to answer new questions",
    ],
  },
  {
    title: "AI workflow integration",
    description:
      "A practical plan for AI that your staff and board can understand. We look at where staff spend time on repeat tasks, such as drafting thank you letters, summarizing meeting notes or pulling reports. We decide together where AI tools can help and where they should not be used. Then I set up the workflows, draft a simple AI use policy with you, and train staff to use the tools carefully.",
    details: [
      "A review of repeat tasks across your staff",
      "A plain language AI use policy draft for your board",
      "Setup using tools you already pay for, where possible",
      "Guidance on keeping donor, family and student information private",
    ],
  },
];

const nonprofitSteps = [
  {
    title: "Free conversation",
    text: "A 20 minute call. You tell me what isn't working, and I tell you honestly whether I can help.",
  },
  {
    title: "Paid strategy session",
    text: (
      <>
        A working session where we go through your website, tools and records in detail and agree on priorities. The strategy session is $250 and takes about 90 minutes. If you go ahead with a project within 30 days, the full $250 is credited toward it.
      </>
    ),
  },
  {
    title: "Written proposal",
    text: (
      <>
        You get a written proposal with the scope, timeline and price, in a form you can share with your board, within 5 business days of the strategy session.
      </>
    ),
  },
  {
    title: "Build and training",
    text: (
      <>
        I do the work, keep you updated along the way, and train your staff before handoff so the work keeps going after I&rsquo;m done. You get a short written update every week and a check in call at each milestone.
      </>
    ),
  },
];

function Nonprofits() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <PageSEO
        title="Nonprofit Websites, CRM and Staff Training in Detroit | Ella Tech Solutions"
        description="Website redesign, CRM setup, staff technology training and practical AI help for Detroit area nonprofits and community organizations. Start with a free 20 minute conversation."
        canonical={`${SITE_URL}/services/nonprofits`}
        schema={schema}
      />

      <PageShell mainClassName="overflow-hidden pt-[128px] sm:pt-[188px] min-h-screen bg-s1">
        <section className="relative pt-8 pb-24 max-md:pb-16 bg-s1 font-poppins text-p5">

          {/* Hero */}
          <div className="container mb-16 max-md:mb-12">
            <div
              className="relative w-full overflow-hidden rounded-3xl"
              style={{
                backgroundImage: "url('/images/ai-workshop-1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
              }}
            >
              <div className="absolute inset-0 bg-black/70" />
              <div className="relative z-10 flex flex-col items-center text-center px-6 py-14 md:py-20 max-md:px-4 max-md:py-10">
                <p className="text-p1 text-sm font-semibold uppercase tracking-[0.15em] mb-4 max-md:text-xs">
                  For Detroit nonprofits and community organizations
                </p>
                <h1 className="h1 text-white drop-shadow-xl mb-5 max-w-4xl max-lg:text-5xl max-lg:leading-tight max-md:text-3xl">
                  Your website, donor records and staff tools, working together
                </h1>
                <p className="body-1 text-white/90 drop-shadow-lg max-w-2xl mb-8 max-md:text-base">
                  I help Detroit area nonprofits rebuild their websites, get donor and volunteer records into one place, train staff on the tools they already pay for, and make a practical plan for AI.
                </p>
                <Button href={NONPROFIT_BOOKING_URL} containerClassName="inline-block">
                  Book a free 20 minute conversation
                </Button>
              </div>
            </div>
          </div>

          {/* Who this is for */}
          <div className="container mb-16 max-w-3xl mx-auto text-center">
            <h2 className="h4 text-p4 mb-4">Who this is for</h2>
            <p className="body-1 text-p5">
              Organizations with annual budgets of about $500,000 to $5 million: parks conservancies, community organizations, small charter schools, and other Detroit area nonprofits with a small staff and no one whose full time job is technology.
            </p>
          </div>

          {/* Pain points */}
          <div className="container mb-20 max-w-3xl mx-auto">
            <h2 className="h4 text-p4 mb-6 text-center">Does this sound like your organization?</h2>
            <ul className="space-y-3">
              {painPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-s3/40 bg-s2/50 px-6 py-4 body-1 text-p5 max-md:px-4 max-md:text-base"
                >
                  {point}
                </li>
              ))}
            </ul>
            <p className="body-1 text-p5 mt-6 text-center">
              Often the fix starts with the tools you already have.
            </p>
          </div>

          {/* Services */}
          <div className="container mb-20">
            <h2 className="h3 text-p4 mb-10 text-center max-md:h4">What I do</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-s3/40 bg-s2/50 p-8 max-md:p-6"
                >
                  <h3 className="h5 text-p4 mb-4 max-md:text-2xl">{service.title}</h3>
                  <p className="body-2 mb-5 text-p5">{service.description}</p>
                  <ul className="list-disc pl-5 space-y-2 body-3 text-p5">
                    {service.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="body-3 text-p5 text-center mt-8 max-w-2xl mx-auto">
              Also available: <a href="/services/grant-writing" className="text-p1 font-semibold hover:underline">grant writing and grant readiness</a>, Microsoft 365 setup, and learning platforms for staff onboarding.
            </p>
          </div>

          {/* How it works */}
          <div id="how-it-works" className="container mb-20 scroll-mt-[160px]">
            <div className="max-w-4xl mx-auto">
              <h2 className="h3 text-p4 mb-10 text-center max-md:h4">How it works</h2>
              <ol className="grid md:grid-cols-2 gap-6">
                {nonprofitSteps.map((step, i) => (
                  <li key={step.title} className="rounded-2xl border border-s3/40 bg-s2/50 p-6">
                    <p className="text-p4 font-bold text-lg mb-2">
                      {i + 1}. {step.title}
                    </p>
                    <p className="body-3 text-p5">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Pricing */}
          <div id="pricing" className="container mb-20 scroll-mt-[160px]">
            <div className="bg-s2 rounded-3xl p-10 md:p-14 max-md:p-6 border border-white/10 max-w-4xl mx-auto">
              <h2 className="h4 text-p4 mb-4">What it costs</h2>
              <p className="body-1 text-p5 mb-4">
                A standard nonprofit website build is $2,500 to $5,000. A standard build includes up to 8 pages, writing or editing of the page text, donation, volunteer and contact forms connected to the tools you already use, accessibility basics, and a training session for the staff who will keep the site updated.
              </p>
              <p className="body-1 text-p5 mb-4">
                Larger builds, such as sites with online payments, facility rentals or a connection to your CRM, are quoted after the strategy session. CRM setup, staff training and AI work are also quoted after the strategy session, because the right scope depends on your size and the tools you already have.
              </p>
              <p className="body-1 text-p5">
                These prices are set with nonprofit budgets in mind. Every project gets a written, fixed price before any work starts.
              </p>
            </div>
          </div>

          {/* Closing CTA */}
          <div className="container text-center mb-16">
            <h2 className="h4 mb-4 text-p4">Start with a free 20 minute conversation</h2>
            <p className="body-1 mb-8 max-w-2xl mx-auto text-p5">
              Tell me what isn&rsquo;t working. If I&rsquo;m not the right fit for what you need, I&rsquo;ll tell you that too.
            </p>
            <Button href={NONPROFIT_BOOKING_URL} containerClassName="inline-block mx-auto">
              Book a free 20 minute conversation
            </Button>
          </div>
        </section>
      </PageShell>
    </>
  );
}

export default Nonprofits;
