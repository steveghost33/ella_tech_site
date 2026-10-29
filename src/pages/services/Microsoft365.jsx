import Button from "../../components/Button.jsx";
import PageSEO from "../../components/PageSEO.jsx";
import PageShell from "../../components/PageShell.jsx";
import { useScrollToHash } from "../../hooks/useScrollToHash.js";
import { SITE_URL } from "../../data/site.js";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Microsoft 365 Implementation for Nonprofits and Small Businesses",
  serviceType: "Technology Consulting",
  description:
    "Ella Tech Solutions implements Microsoft 365 for nonprofits and small businesses, including business email, Teams, SharePoint, and OneDrive, with permissions configuration and staff training so the tools are actually used after setup.",
  provider: {
    "@type": "LocalBusiness",
    name: "Ella Tech Solutions",
    url: SITE_URL,
  },
  areaServed: ["Detroit, MI", "Michigan", "United States"],
  url: `${SITE_URL}/services/microsoft-365`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does my nonprofit qualify for Microsoft 365 discounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Microsoft offers Microsoft 365 Business Basic at a significant discount for eligible nonprofits through Microsoft for Nonprofits. Eligibility requires 501(c)(3) status. Ella Tech Solutions can help verify eligibility and set up the nonprofit licensing as part of the implementation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Teams, SharePoint, and OneDrive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teams is the platform for communication and meetings. SharePoint is the platform for shared file storage, internal pages, and team collaboration. OneDrive is personal cloud storage for individual files. All three are connected: Teams channels store files in SharePoint, and OneDrive syncs to the desktop. Ella Tech Solutions sets them up to work together correctly from the start.",
      },
    },
    {
      "@type": "Question",
      name: "Can you set up Microsoft 365 for a team that has never used it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ella Tech Solutions handles full setup from scratch, including domain configuration, email migration from personal accounts or a previous provider, and staff onboarding. No prior Microsoft 365 experience is required.",
      },
    },
    {
      "@type": "Question",
      name: "Will staff need training after Microsoft 365 is set up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and training is included in every Microsoft 365 implementation. Staff need to understand how email, Teams, SharePoint, and OneDrive work together to use the platform effectively. Ella Tech Solutions delivers live training sessions and provides quick-reference guides for common tasks.",
      },
    },
    {
      "@type": "Question",
      name: "Can you migrate from Google Workspace to Microsoft 365?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ella Tech Solutions handles email and file migration from Google Workspace to Microsoft 365, including mapping existing folders, preserving email history, and updating DNS settings. Staff receive training specific to the transition.",
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
    { "@type": "ListItem", position: 3, name: "Microsoft 365", item: `${SITE_URL}/services/microsoft-365` },
  ],
};

function Microsoft365() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <PageSEO
        title="Microsoft 365 Implementation | Ella Tech Solutions"
        description="Ella Tech Solutions implements Microsoft 365 for nonprofits and small businesses: business email, Teams, SharePoint, and OneDrive setup with training."
        canonical={`${SITE_URL}/services/microsoft-365`}
        schema={[schema, faqSchema, breadcrumbSchema]}
      />

      <PageShell mainClassName="overflow-hidden pt-[140px] sm:pt-[200px] min-h-screen bg-s1">
        <section className="relative pt-16 pb-24 max-lg:pt-12 max-lg:pb-20 max-md:pt-10 max-md:pb-16 bg-s1 font-poppins text-p5">

          {/* Page Header */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <h1 className="h2 text-p4 mb-6">Microsoft 365 Implementation for Nonprofits and Small Businesses</h1>
            <p className="body-1 text-p5">
              Ella Tech Solutions implements Microsoft 365 for nonprofits and small businesses, including business email, Teams, SharePoint, and OneDrive, with permissions configuration and staff training so the tools are actually used after setup.
            </p>
          </div>

          {/* Who This Is For */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">Who this is for</h2>
              <ul className="list-disc pl-5 space-y-3 body-1 text-p5">
                <li>Nonprofits paying for a Microsoft 365 subscription but still using personal Gmail accounts for organizational work.</li>
                <li>Organizations using shared login credentials, personal Dropbox accounts, or scattered local drives instead of centralized shared storage.</li>
                <li>Small businesses with an incomplete Microsoft 365 setup where only email is configured and Teams, SharePoint, or OneDrive have never been set up.</li>
                <li>Teams who do not understand how Teams, SharePoint, and OneDrive work together or are using them in conflicting ways.</li>
              </ul>
            </div>
          </div>

          {/* What Is Included */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">What is included</h2>
              <ul className="list-disc pl-5 space-y-3 body-1 text-p5">
                <li>Microsoft 365 tenant setup from scratch, or remediation of an existing tenant that was set up incorrectly.</li>
                <li>Business email configuration with custom domain verification and migration from personal accounts or a previous provider.</li>
                <li>Teams structure and SharePoint site architecture designed around the organization's actual teams and workflows.</li>
                <li>OneDrive setup and desktop sync configuration for each staff member.</li>
                <li>Permissions and security configuration including user roles, shared drive access, and guest access policies.</li>
                <li>Staff training on email, Teams, SharePoint, and file management, plus administrator documentation for ongoing management.</li>
              </ul>
            </div>
          </div>

          {/* Engagement Length */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">Typical engagement length</h2>
              <p className="body-1 text-p5">
                A full Microsoft 365 implementation from scratch typically runs 3 to 5 weeks, including tenant setup, email migration, SharePoint architecture, OneDrive configuration, and staff training. Remediations of existing tenants that are partially configured run faster, typically 2 to 3 weeks depending on what needs to be corrected.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-6">Frequently asked questions</h2>
              <dl className="space-y-6">
                <div>
                  <dt className="h5 text-p4 mb-2">Does my nonprofit qualify for Microsoft 365 discounts?</dt>
                  <dd className="body-1 text-p5">Yes. Microsoft offers Microsoft 365 Business Basic at a significant discount for eligible nonprofits through Microsoft for Nonprofits. Eligibility requires 501(c)(3) status. Ella Tech Solutions can help verify eligibility and set up the nonprofit licensing as part of the implementation.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">What is the difference between Teams, SharePoint, and OneDrive?</dt>
                  <dd className="body-1 text-p5">Teams is the platform for communication and meetings. SharePoint is the platform for shared file storage, internal pages, and team collaboration. OneDrive is personal cloud storage for individual files. All three are connected: Teams channels store files in SharePoint, and OneDrive syncs to the desktop. Ella Tech Solutions sets them up to work together correctly from the start.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">Can you set up Microsoft 365 for a team that has never used it?</dt>
                  <dd className="body-1 text-p5">Yes. Ella Tech Solutions handles full setup from scratch, including domain configuration, email migration from personal accounts or a previous provider, and staff onboarding. No prior Microsoft 365 experience is required.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">Will staff need training after Microsoft 365 is set up?</dt>
                  <dd className="body-1 text-p5">Yes, and training is included in every Microsoft 365 implementation. Staff need to understand how email, Teams, SharePoint, and OneDrive work together to use the platform effectively. Ella Tech Solutions delivers live training sessions and provides quick-reference guides for common tasks.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">Can you migrate from Google Workspace to Microsoft 365?</dt>
                  <dd className="body-1 text-p5">Yes. Ella Tech Solutions handles email and file migration from Google Workspace to Microsoft 365, including mapping existing folders, preserving email history, and updating DNS settings. Staff receive training specific to the transition.</dd>
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

export default Microsoft365;
