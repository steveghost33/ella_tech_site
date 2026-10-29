import Button from "../../components/Button.jsx";
import PageSEO from "../../components/PageSEO.jsx";
import PageShell from "../../components/PageShell.jsx";
import { useScrollToHash } from "../../hooks/useScrollToHash.js";
import { SITE_URL } from "../../data/site.js";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CRM Setup and Strategy for Nonprofits and Small Businesses",
  serviceType: "Technology Consulting",
  description:
    "Ella Tech Solutions implements CRM (Customer Relationship Management) systems for nonprofits and small businesses, handling platform selection, configuration, data migration from spreadsheets or a previous system, and staff training so the system is actually adopted.",
  provider: {
    "@type": "LocalBusiness",
    name: "Ella Tech Solutions",
    url: SITE_URL,
  },
  areaServed: ["Detroit, MI", "Michigan", "United States"],
  url: `${SITE_URL}/services/crm-setup`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What CRM should a small nonprofit use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The right CRM depends on your budget, team size, and what you're tracking. For small nonprofits, Bloomerang and HubSpot are often a strong fit. For larger nonprofits with complex program tracking, Salesforce Nonprofit Success Pack (NPSP) is more appropriate. Ella Tech Solutions recommends the simplest platform that meets your actual requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Why do most nonprofit CRM implementations fail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most nonprofit CRM implementations fail because the system is configured around an ideal workflow rather than how work actually happens. Staff adoption breaks down when the CRM adds friction instead of reducing it. Ella Tech Solutions configures systems around real workflows, not software defaults, and includes training to ensure adoption sticks.",
      },
    },
    {
      "@type": "Question",
      name: "Can you migrate our existing donor data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Data migration from spreadsheets, Excel, Google Sheets, or a previous CRM is included in every CRM implementation. The firm maps existing data fields to the new system, cleans duplicates, and verifies accuracy before go-live.",
      },
    },
    {
      "@type": "Question",
      name: "How long does CRM implementation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most CRM implementations for nonprofits and small businesses take 6 to 12 weeks from contract to staff training completion. The timeline depends on the volume and complexity of existing data, the number of staff to train, and how many custom workflows need to be configured.",
      },
    },
    {
      "@type": "Question",
      name: "What platforms does Ella Tech Solutions work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ella Tech Solutions works with Salesforce Nonprofit Success Pack (NPSP), HubSpot, Bloomerang, and other platforms matched to each client's needs. The firm evaluates platforms based on the client's budget, team size, and program requirements.",
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
    { "@type": "ListItem", position: 3, name: "CRM Setup", item: `${SITE_URL}/services/crm-setup` },
  ],
};

function CrmSetup() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <PageSEO
        title="CRM Setup for Nonprofits &amp; Small Business | Ella Tech"
        description="Ella Tech Solutions implements CRM systems for nonprofits and small businesses: platform selection, configuration, data migration, and staff training."
        canonical={`${SITE_URL}/services/crm-setup`}
        schema={[schema, faqSchema, breadcrumbSchema]}
      />

      <PageShell mainClassName="overflow-hidden pt-[140px] sm:pt-[200px] min-h-screen bg-s1">
        <section className="relative pt-16 pb-24 max-lg:pt-12 max-lg:pb-20 max-md:pt-10 max-md:pb-16 bg-s1 font-poppins text-p5">

          {/* Page Header */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <h1 className="h2 text-p4 mb-6">CRM Setup and Strategy for Nonprofits and Small Businesses</h1>
            <p className="body-1 text-p5">
              Ella Tech Solutions implements CRM (Customer Relationship Management) systems for nonprofits and small businesses, handling platform selection, configuration, data migration from spreadsheets or a previous system, and staff training so the system is actually adopted.
            </p>
          </div>

          {/* Who This Is For */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">Who this is for</h2>
              <ul className="list-disc pl-5 space-y-3 body-1 text-p5">
                <li>Nonprofits tracking donors, volunteers, or program participants in spreadsheets with no centralized contact history.</li>
                <li>Organizations that purchased a CRM but stopped using it within the first year because it was not configured to match how the team works.</li>
                <li>Small businesses losing leads because contacts are scattered across email inboxes and personal notes with no follow-up system.</li>
                <li>Organizations that need to generate grant reports or board-level reports from contact and program data stored in the CRM.</li>
              </ul>
            </div>
          </div>

          {/* What Is Included */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">What is included</h2>
              <ul className="list-disc pl-5 space-y-3 body-1 text-p5">
                <li>CRM platform evaluation and selection based on budget, team size, and specific program or sales workflows.</li>
                <li>System configuration built around the organization's actual workflows, not software defaults.</li>
                <li>Data migration from spreadsheets, Excel, Google Sheets, or a previous CRM, including field mapping, duplicate cleanup, and pre-launch accuracy verification.</li>
                <li>Staff training with written documentation so the team can use and maintain the system independently.</li>
                <li>Administrator setup including user roles, permissions, and basic reporting configuration.</li>
              </ul>
            </div>
          </div>

          {/* Engagement Length */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">Typical engagement length</h2>
              <p className="body-1 text-p5">
                Most CRM implementations take 6 to 12 weeks from contract to staff training completion. The timeline depends on the volume and complexity of existing data, the number of staff members to be trained, and how many custom workflows need to be configured. Implementations with clean, well-organized existing data and a small team run closer to 6 weeks. Implementations involving large datasets, duplicate cleanup, or complex reporting requirements run closer to 12 weeks.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-6">Frequently asked questions</h2>
              <dl className="space-y-6">
                <div>
                  <dt className="h5 text-p4 mb-2">What CRM should a small nonprofit use?</dt>
                  <dd className="body-1 text-p5">The right CRM depends on your budget, team size, and what you're tracking. For small nonprofits, Bloomerang and HubSpot are often a strong fit. For larger nonprofits with complex program tracking, Salesforce Nonprofit Success Pack (NPSP) is more appropriate. Ella Tech Solutions recommends the simplest platform that meets your actual requirements.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">Why do most nonprofit CRM implementations fail?</dt>
                  <dd className="body-1 text-p5">Most nonprofit CRM implementations fail because the system is configured around an ideal workflow rather than how work actually happens. Staff adoption breaks down when the CRM adds friction instead of reducing it. Ella Tech Solutions configures systems around real workflows, not software defaults, and includes training to ensure adoption sticks.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">Can you migrate our existing donor data?</dt>
                  <dd className="body-1 text-p5">Yes. Data migration from spreadsheets, Excel, Google Sheets, or a previous CRM is included in every CRM implementation. The firm maps existing data fields to the new system, cleans duplicates, and verifies accuracy before go-live.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">How long does CRM implementation take?</dt>
                  <dd className="body-1 text-p5">Most CRM implementations for nonprofits and small businesses take 6 to 12 weeks from contract to staff training completion. The timeline depends on the volume and complexity of existing data, the number of staff to train, and how many custom workflows need to be configured.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">What platforms does Ella Tech Solutions work with?</dt>
                  <dd className="body-1 text-p5">Ella Tech Solutions works with Salesforce Nonprofit Success Pack (NPSP), HubSpot, Bloomerang, and other platforms matched to each client's needs. The firm evaluates platforms based on the client's budget, team size, and program requirements.</dd>
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

export default CrmSetup;
