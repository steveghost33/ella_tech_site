import Button from "../../components/Button.jsx";
import PageSEO from "../../components/PageSEO.jsx";
import PageShell from "../../components/PageShell.jsx";
import { useScrollToHash } from "../../hooks/useScrollToHash.js";
import { SITE_URL } from "../../data/site.js";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Grant Writing & Grant Readiness Services for Nonprofits and Small Businesses",
  serviceType: "Grant Writing",
  description:
    "Ella Tech Solutions provides grant research, proposal writing, and grant readiness consulting for nonprofits and small businesses, plus the reporting systems and data infrastructure that keep grants in compliance after they're awarded.",
  provider: {
    "@type": "LocalBusiness",
    name: "Ella Tech Solutions",
    url: SITE_URL,
  },
  areaServed: ["Detroit, MI", "Michigan", "United States"],
  url: `${SITE_URL}/services/grant-writing`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you only write grants, or do you also help find them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. Ella Tech Solutions can research and identify grant opportunities that match your organization's mission and programs, or a small business's industry, location, and ownership profile, and write proposals for opportunities you've already identified. Many clients start with a grant readiness review to see what needs to be in place before they apply.",
      },
    },
    {
      "@type": "Question",
      name: "Do you write grants for small businesses, or only nonprofits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. Ella Tech Solutions writes grants for nonprofits applying to foundations and government funders, and for small businesses applying to SBA, state, local, and economic development grant programs, including opportunities targeted at minority-owned and women-owned businesses. The research and writing process is similar; the eligibility criteria and funder expectations differ, and we scope the work accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "What is grant readiness, and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grant readiness means having the documents, data, and systems funders expect to see before you apply: a clear case for support, program outcomes you can actually report on, current financials, and board documentation. Nonprofits that skip this step often lose grants not because the writing was weak, but because the organization wasn't ready to show funders what they needed to see.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with grant reporting after we're awarded funding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Because Ella Tech Solutions also builds CRM and data systems for nonprofits and small businesses, we can set up the tracking your organization needs to report outcomes accurately and on time, not just write the original proposal. This is often the part that causes the most stress after an award, and it's where our technology background helps most.",
      },
    },
    {
      "@type": "Question",
      name: "Do you charge per grant or on retainer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both options are available. Some clients want a single proposal written for a specific opportunity, others want ongoing grant research and writing support across the year. Pricing is scoped to the engagement and discussed on the initial consultation, with mission-driven pricing available for verified 501(c)(3) organizations and straightforward project pricing for small businesses.",
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
    { "@type": "ListItem", position: 3, name: "Grant Writing", item: `${SITE_URL}/services/grant-writing` },
  ],
};

function GrantWriting() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <PageSEO
        title="Grant Writing & Grant Readiness | Ella Tech Solutions"
        description="Grant research, proposal writing, and grant readiness consulting for nonprofits and small businesses, plus the reporting systems that keep awarded grants in compliance. Detroit-based."
        canonical={`${SITE_URL}/services/grant-writing`}
        schema={[schema, faqSchema, breadcrumbSchema]}
      />

      <PageShell mainClassName="overflow-hidden pt-[140px] sm:pt-[200px] min-h-screen bg-s1">
        <section className="relative pt-16 pb-24 max-lg:pt-12 max-lg:pb-20 max-md:pt-10 max-md:pb-16 bg-s1 font-poppins text-p5">

          {/* Page Header */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <p className="text-p1 text-sm font-semibold uppercase tracking-[0.18em] mb-4">Nonprofit &amp; Small Business Services</p>
            <h1 className="h2 text-p4 mb-6">Grant Writing & Grant Readiness for Nonprofits and Small Businesses</h1>
            <p className="body-1 text-p5">
              Ella Tech Solutions provides grant research, proposal writing, and grant readiness consulting for nonprofits and small businesses, plus the reporting systems and data infrastructure that keep grants in compliance after they're awarded. Most grant writers stop once the proposal is submitted. We stay involved because the technology side, tracking outcomes, pulling reports, documenting impact, is usually where organizations and businesses struggle most.
            </p>
          </div>

          {/* Who This Is For */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">Who this is for</h2>
              <ul className="list-disc pl-5 space-y-3 body-1 text-p5">
                <li>Nonprofits that know they need grant funding but don't have a dedicated grant writer on staff.</li>
                <li>Small business owners applying to SBA, state, local, or economic development grant programs, including opportunities for minority-owned and women-owned businesses.</li>
                <li>Organizations or businesses that have been turned down for grants and want an honest look at what's missing before applying again.</li>
                <li>Anyone who needs help finding funding opportunities that actually match their mission or business, not just a list of every grant that exists.</li>
                <li>Grant recipients who now need a way to track and report outcomes without it falling on one overloaded staff member or owner.</li>
              </ul>
            </div>
          </div>

          {/* What Is Included */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">What is included</h2>
              <ul className="list-disc pl-5 space-y-3 body-1 text-p5">
                <li>Grant research to identify funding opportunities that fit your mission, programs, industry, or business size.</li>
                <li>Grant readiness review covering your case for support or business narrative, outcomes, financials, and required documentation.</li>
                <li>Full proposal writing and editing, including narrative, budget justification, and required attachments.</li>
                <li>Letters of inquiry and concept papers for funders that require a shorter first step before a full proposal.</li>
                <li>Outcome tracking and reporting systems, built on the same CRM and data tools we set up for our clients, so post-award reporting doesn't become its own crisis.</li>
              </ul>
            </div>
          </div>

          {/* Why this pairs with our tech work */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl bg-s3/10 border border-s3/20 p-8">
              <p className="caption text-p3 mb-3 uppercase tracking-wide">Why we do this alongside CRM and data work</p>
              <p className="body-1 text-p5">
                Most grant writers hand you a submitted proposal and disappear. We've spent 15 years building the CRM and reporting systems nonprofits and small businesses use to track donors, customers, programs, and outcomes, so when a grant gets awarded, we already know how to set up the tracking a funder expects. The writing gets you the grant. The systems keep you in compliance and in a strong position for the next one.
              </p>
            </div>
          </div>

          {/* Engagement Length */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">Typical engagement length</h2>
              <p className="body-1 text-p5">
                A single proposal typically takes 2 to 4 weeks depending on the funder's deadline and how much program data is already documented. Grant readiness reviews run 1 to 2 weeks and produce a written checklist of what to fix before applying. Ongoing grant research and writing support is available on a retainer basis for organizations applying to multiple funders throughout the year.
              </p>
            </div>
          </div>

          {/* Pricing */}
          <div className="container mb-16">
            <div className="bg-s2 rounded-3xl p-10 md:p-14 border border-white/10 max-w-3xl mx-auto">
              <h2 className="h3 text-p4 mb-4">Pricing Scoped to You</h2>
              <p className="body-1 text-p5 mb-6">
                Ella Tech Solutions offers mission-driven, discounted pricing for verified 501(c)(3) nonprofits and community-based organizations with demonstrated community impact. Small businesses get straightforward, project-based pricing scoped to the grant opportunity and the amount of writing and research involved. Either way, grant writing support should not be out of reach.
              </p>
              <Button href="https://cal.com/ella-tech-7ze7wk" containerClassName="inline-block">
                Book a Free Consultation
              </Button>
            </div>
          </div>

          {/* FAQ */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-6">Frequently asked questions</h2>
              <dl className="space-y-6">
                <div>
                  <dt className="h5 text-p4 mb-2">Do you only write grants, or do you also help find them?</dt>
                  <dd className="body-1 text-p5">Both. Ella Tech Solutions can research and identify grant opportunities that match your organization's mission and programs, or a small business's industry, location, and ownership profile, and write proposals for opportunities you've already identified. Many clients start with a grant readiness review to see what needs to be in place before they apply.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">Do you write grants for small businesses, or only nonprofits?</dt>
                  <dd className="body-1 text-p5">Both. Ella Tech Solutions writes grants for nonprofits applying to foundations and government funders, and for small businesses applying to SBA, state, local, and economic development grant programs, including opportunities targeted at minority-owned and women-owned businesses. The research and writing process is similar; the eligibility criteria and funder expectations differ, and we scope the work accordingly.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">What is grant readiness, and why does it matter?</dt>
                  <dd className="body-1 text-p5">Grant readiness means having the documents, data, and systems funders expect to see before you apply: a clear case for support or business narrative, outcomes you can actually report on, current financials, and required documentation. Applicants who skip this step often lose grants not because the writing was weak, but because they weren't ready to show funders what they needed to see.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">Can you help with grant reporting after we're awarded funding?</dt>
                  <dd className="body-1 text-p5">Yes. Because Ella Tech Solutions also builds CRM and data systems for nonprofits and small businesses, we can set up the tracking you need to report outcomes accurately and on time, not just write the original proposal. This is often the part that causes the most stress after an award, and it's where our technology background helps most.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">Do you charge per grant or on retainer?</dt>
                  <dd className="body-1 text-p5">Both options are available. Some clients want a single proposal written for a specific opportunity, others want ongoing grant research and writing support across the year. Pricing is scoped to the engagement and discussed on the initial consultation, with mission-driven pricing available for verified 501(c)(3) organizations and straightforward project pricing for small businesses.</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* CTA */}
          <div className="container text-center mb-32 max-w-3xl mx-auto">
            <h2 className="h4 mb-6 text-p4">Ready to strengthen your grant pipeline?</h2>
            <p className="body-1 mb-8 max-w-2xl mx-auto text-p5">
              Book a free 30-minute consultation. We'll look at your current grant funding, identify gaps in readiness, and tell you honestly where writing support or better systems would help most.
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

export default GrantWriting;
