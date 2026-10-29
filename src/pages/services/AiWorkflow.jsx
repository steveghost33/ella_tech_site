import Button from "../../components/Button.jsx";
import PageSEO from "../../components/PageSEO.jsx";
import PageShell from "../../components/PageShell.jsx";
import { useScrollToHash } from "../../hooks/useScrollToHash.js";
import { SITE_URL } from "../../data/site.js";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Workflow Integration and AI Literacy Training",
  serviceType: "Technology Consulting",
  description:
    "Ella Tech Solutions audits organizational workflows to identify where AI tools can reduce repetitive administrative tasks, implements the automations using tools the organization already has, and delivers AI literacy training so staff can use the tools confidently.",
  provider: {
    "@type": "LocalBusiness",
    name: "Ella Tech Solutions",
    url: SITE_URL,
  },
  areaServed: ["Detroit, MI", "Michigan", "United States"],
  url: `${SITE_URL}/services/ai-workflow`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What AI tools do nonprofits actually use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most practical AI tools for nonprofits are already inside platforms many organizations pay for: Microsoft 365 Copilot, Google Workspace AI features, and Zapier or Make for workflow automation. Ella Tech Solutions focuses on tools the organization already has access to rather than introducing new subscriptions.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe for nonprofits to use AI with donor data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on how the tools are configured. Ella Tech Solutions reviews data privacy settings as part of every AI workflow engagement and trains staff on responsible use guidelines, including what data should and should not be processed by AI tools.",
      },
    },
    {
      "@type": "Question",
      name: "What does AI literacy training cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI literacy training covers what AI tools actually do, how to use them for specific work tasks, responsible use boundaries, and how to evaluate AI output for accuracy. Sessions are practical, not conceptual, and use tools the organization already has access to.",
      },
    },
    {
      "@type": "Question",
      name: "How much time can AI automation save for a nonprofit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Results vary by organization, but most nonprofits identify 3 to 5 hours per staff member per week in repetitive tasks that can be automated or accelerated with AI tools. Ella Tech Solutions quantifies the potential time savings during the initial workflow audit before any implementation begins.",
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
    { "@type": "ListItem", position: 3, name: "AI Workflow Integration", item: `${SITE_URL}/services/ai-workflow` },
  ],
};

function AiWorkflow() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <PageSEO
        title="AI Workflow &amp; Literacy Training | Ella Tech Solutions"
        description="Ella Tech Solutions identifies where AI tools can reduce repetitive work, implements the automations, and trains staff to use them confidently."
        canonical={`${SITE_URL}/services/ai-workflow`}
        schema={[schema, faqSchema, breadcrumbSchema]}
      />

      <PageShell mainClassName="overflow-hidden pt-[140px] sm:pt-[200px] min-h-screen bg-s1">
        <section className="relative pt-16 pb-24 max-lg:pt-12 max-lg:pb-20 max-md:pt-10 max-md:pb-16 bg-s1 font-poppins text-p5">

          {/* Page Header */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <h1 className="h2 text-p4 mb-6">AI Workflow Integration and AI Literacy Training for Nonprofits and Small Businesses</h1>
            <p className="body-1 text-p5">
              Ella Tech Solutions audits organizational workflows to identify where AI tools can reduce repetitive administrative tasks, implements the automations using tools the organization already has, and delivers AI literacy training so staff can use the tools confidently.
            </p>
          </div>

          {/* Who This Is For */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">Who this is for</h2>
              <ul className="list-disc pl-5 space-y-3 body-1 text-p5">
                <li>Nonprofits where staff spend significant time on repetitive administrative tasks that do not require human judgment.</li>
                <li>Organizations that are curious about AI tools but are not sure which ones are appropriate or where to start.</li>
                <li>Small businesses with AI features already included in tools they pay for but have never configured or used.</li>
                <li>Executive directors and operations staff who need faster reporting, drafting, or data summarization without adding headcount.</li>
              </ul>
            </div>
          </div>

          {/* What Is Included */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">What is included</h2>
              <ul className="list-disc pl-5 space-y-3 body-1 text-p5">
                <li>Workflow audit identifying the 3 to 5 highest-impact automation opportunities for the specific organization.</li>
                <li>Implementation of automations using tools the organization already has access to, including Microsoft 365 Copilot, Zapier, Make, and ChatGPT.</li>
                <li>AI literacy training sessions covering responsible use, practical application, and output evaluation.</li>
                <li>Written playbooks documenting each automation so staff can maintain and modify them independently.</li>
                <li>30-day post-implementation check-in to confirm automations are working and address any staff questions.</li>
              </ul>
            </div>
          </div>

          {/* Engagement Length */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">Typical engagement length</h2>
              <p className="body-1 text-p5">
                Workflow audit and implementation typically runs 4 to 6 weeks, depending on the number of automations and the complexity of the tools involved. AI literacy training is delivered in 1 to 3 sessions scheduled around the team's availability. Training-only engagements without implementation can be completed in 1 to 2 weeks.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-6">Frequently asked questions</h2>
              <dl className="space-y-6">
                <div>
                  <dt className="h5 text-p4 mb-2">What AI tools do nonprofits actually use?</dt>
                  <dd className="body-1 text-p5">The most practical AI tools for nonprofits are already inside platforms many organizations pay for: Microsoft 365 Copilot, Google Workspace AI features, and Zapier or Make for workflow automation. Ella Tech Solutions focuses on tools the organization already has access to rather than introducing new subscriptions.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">Is it safe for nonprofits to use AI with donor data?</dt>
                  <dd className="body-1 text-p5">It depends on how the tools are configured. Ella Tech Solutions reviews data privacy settings as part of every AI workflow engagement and trains staff on responsible use guidelines, including what data should and should not be processed by AI tools.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">What does AI literacy training cover?</dt>
                  <dd className="body-1 text-p5">AI literacy training covers what AI tools actually do, how to use them for specific work tasks, responsible use boundaries, and how to evaluate AI output for accuracy. Sessions are practical, not conceptual, and use tools the organization already has access to.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">How much time can AI automation save for a nonprofit?</dt>
                  <dd className="body-1 text-p5">Results vary by organization, but most nonprofits identify 3 to 5 hours per staff member per week in repetitive tasks that can be automated or accelerated with AI tools. Ella Tech Solutions quantifies the potential time savings during the initial workflow audit before any implementation begins.</dd>
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

export default AiWorkflow;
