import Button from "../../components/Button.jsx";
import PageSEO from "../../components/PageSEO.jsx";
import PageShell from "../../components/PageShell.jsx";
import { useScrollToHash } from "../../hooks/useScrollToHash.js";
import { SITE_URL } from "../../data/site.js";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Strategy Consulting Sessions for Nonprofits and Small Businesses",
  serviceType: "Technology Consulting",
  description:
    "Ella Tech Solutions delivers focused digital strategy sessions for nonprofits and small businesses, providing a technology audit, gap analysis, and prioritized action plan in a 30-to-60 minute consultation with no long-term commitment required.",
  provider: {
    "@type": "LocalBusiness",
    name: "Ella Tech Solutions",
    url: SITE_URL,
  },
  areaServed: ["Detroit, MI", "Michigan", "United States"],
  url: `${SITE_URL}/services/digital-strategy`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is a digital strategy session different from a sales call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A strategy session is a working session focused on your organization's actual technology situation. Ella Tech Solutions reviews your current tools, identifies gaps, and delivers specific recommendations. It is not a product demo or a pitch. There is no obligation to hire the firm after the session.",
      },
    },
    {
      "@type": "Question",
      name: "What should I bring to a strategy session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Come prepared to describe your current tools, your biggest operational pain points, and any technology decisions you are currently trying to make. It helps to have a rough sense of your annual budget for technology. Ella Tech Solutions sends a pre-session intake form to structure the conversation in advance.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a strategy session before committing to a larger project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many clients begin with a strategy session before deciding whether to proceed with a CRM implementation, website build, or other project. The session is designed to give you enough clarity to make that decision confidently.",
      },
    },
    {
      "@type": "Question",
      name: "Do you charge for the initial consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The initial 30-minute consultation is free. Paid strategy sessions are longer (60 minutes) and include a written deliverable summarizing findings and recommendations. Pricing for paid sessions is discussed during the initial free consultation.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/tech-solutions` },
    { "@type": "ListItem", position: 3, name: "Digital Strategy", item: `${SITE_URL}/services/digital-strategy` },
  ],
};

function DigitalStrategy() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <PageSEO
        title="Digital Strategy Sessions | Ella Tech Solutions"
        description="Ella Tech Solutions delivers focused digital strategy sessions for nonprofits and small businesses: technology audit, gap analysis, and an action plan."
        canonical={`${SITE_URL}/services/digital-strategy`}
        schema={[schema, faqSchema, breadcrumbSchema]}
      />

      <PageShell mainClassName="overflow-hidden pt-[148px] sm:pt-[200px] min-h-screen bg-s1">
        <section className="relative pt-16 pb-24 max-lg:pt-12 max-lg:pb-20 max-md:pt-10 max-md:pb-16 bg-s1 font-poppins text-p5">

          {/* Page Header */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <h1 className="h2 text-p4 mb-6">Digital Strategy Consulting Sessions for Nonprofits and Small Businesses</h1>
            <p className="body-1 text-p5">
              Ella Tech Solutions delivers focused digital strategy sessions for nonprofits and small businesses, providing a technology audit, gap analysis, and prioritized action plan in a 30-to-60 minute consultation with no long-term commitment required.
            </p>
          </div>

          {/* Who This Is For */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">Who this is for</h2>
              <ul className="list-disc pl-5 space-y-3 body-1 text-p5">
                <li>Nonprofits that know technology is a problem but do not know which issue to address first or where the highest-impact gaps are.</li>
                <li>Small business owners who want an outside perspective on their current tech stack before making a purchasing decision.</li>
                <li>Organizations evaluating a vendor proposal and wanting an independent second opinion before signing a contract.</li>
                <li>Leaders who need a prioritized, written action plan they can bring to a board or leadership team for budget approval.</li>
              </ul>
            </div>
          </div>

          {/* What Is Included */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">What is included</h2>
              <ul className="list-disc pl-5 space-y-3 body-1 text-p5">
                <li>Pre-session intake form so the consultation time is spent on analysis and recommendations rather than basic information gathering.</li>
                <li>30-to-60 minute focused consultation covering the organization's current tools, gaps, and near-term technology decisions.</li>
                <li>Written summary of technology gaps identified during the session, delivered after the consultation.</li>
                <li>Prioritized list of 3 to 5 next steps with honest assessments of cost, complexity, and expected impact.</li>
                <li>Vendor selection guidance if the session identifies a tool purchase decision that needs to be made.</li>
              </ul>
            </div>
          </div>

          {/* Engagement Length */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">Typical engagement length</h2>
              <p className="body-1 text-p5">
                One session. The written deliverable is delivered within 2 business days of the consultation. There is no obligation to continue with any additional services after the session. Clients who choose to proceed with an implementation project after the strategy session receive a credit toward the project engagement fee.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-6">Frequently asked questions</h2>
              <dl className="space-y-6">
                <div>
                  <dt className="h5 text-p4 mb-2">How is a digital strategy session different from a sales call?</dt>
                  <dd className="body-1 text-p5">A strategy session is a working session focused on your organization's actual technology situation. Ella Tech Solutions reviews your current tools, identifies gaps, and delivers specific recommendations. It is not a product demo or a pitch. There is no obligation to hire the firm after the session.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">What should I bring to a strategy session?</dt>
                  <dd className="body-1 text-p5">Come prepared to describe your current tools, your biggest operational pain points, and any technology decisions you are currently trying to make. It helps to have a rough sense of your annual budget for technology. Ella Tech Solutions sends a pre-session intake form to structure the conversation in advance.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">Can I book a strategy session before committing to a larger project?</dt>
                  <dd className="body-1 text-p5">Yes. Many clients begin with a strategy session before deciding whether to proceed with a CRM implementation, website build, or other project. The session is designed to give you enough clarity to make that decision confidently.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">Do you charge for the initial consultation?</dt>
                  <dd className="body-1 text-p5">The initial 30-minute consultation is free. Paid strategy sessions are longer (60 minutes) and include a written deliverable summarizing findings and recommendations. Pricing for paid sessions is discussed during the initial free consultation.</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* CTA */}
          <div className="container text-center mb-32 max-w-3xl mx-auto">
            <Button href="https://cal.com/ella-tech-7ze7wk" containerClassName="inline-block mx-auto">
              Book a free consultation
            </Button>
          </div>

        </section>
      </PageShell>
    </>
  );
}

export default DigitalStrategy;
