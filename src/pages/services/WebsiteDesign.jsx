import Button from "../../components/Button.jsx";
import PageSEO from "../../components/PageSEO.jsx";
import PageShell from "../../components/PageShell.jsx";
import { useScrollToHash } from "../../hooks/useScrollToHash.js";
import { SITE_URL } from "../../data/site.js";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Creation and Redesign for Nonprofits and Small Businesses",
  serviceType: "Technology Consulting",
  description:
    "Ella Tech Solutions builds and redesigns websites for nonprofits and small businesses nationwide, creating fast, mobile-first sites that clearly communicate the organization's mission and convert visitors into donors, clients, or program participants.",
  provider: {
    "@type": "LocalBusiness",
    name: "Ella Tech Solutions",
    url: SITE_URL,
  },
  areaServed: ["Detroit, MI", "Michigan", "United States"],
  url: `${SITE_URL}/services/website-design`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a nonprofit website redesign cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing is scoped per project based on number of pages, custom functionality, and organization type. Ella Tech Solutions offers mission-driven pricing for verified 501(c)(3) nonprofits. Book a free consultation for a project quote.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use website templates or build custom sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ella Tech Solutions does not use generic templates. Every site is built to fit the organization's specific audience, content structure, and workflow. Custom builds take longer than templates but perform significantly better for donor acquisition and lead generation.",
      },
    },
    {
      "@type": "Question",
      name: "Can we update the website ourselves after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every website project includes staff training so the client can update content, add pages, and manage the site without calling a developer. Sites are built on platforms the client can manage independently.",
      },
    },
    {
      "@type": "Question",
      name: "Does the website project include SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project includes basic on-page SEO: page titles, meta descriptions, heading structure, image alt text, and page speed optimization. Ongoing SEO strategy is available as a separate service.",
      },
    },
    {
      "@type": "Question",
      name: "What information do we need before starting a website project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Before kickoff, clients should have a clear sense of their primary audience, the 3-5 main actions they want visitors to take, existing branding (logo, colors), and any must-have pages. Ella Tech Solutions provides a pre-project intake form to gather this information.",
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
    { "@type": "ListItem", position: 3, name: "Website Design", item: `${SITE_URL}/services/website-design` },
  ],
};

function WebsiteDesign() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <PageSEO
        title="Website Design &amp; Redesign | Ella Tech Solutions"
        description="Ella Tech Solutions builds and redesigns websites for nonprofits and small businesses: responsive design, donation flow integration, on-page SEO, training."
        canonical={`${SITE_URL}/services/website-design`}
        schema={[schema, faqSchema, breadcrumbSchema]}
      />

      <PageShell mainClassName="overflow-hidden pt-[148px] sm:pt-[200px] min-h-screen bg-s1">
        <section className="relative pt-16 pb-24 max-lg:pt-12 max-lg:pb-20 max-md:pt-10 max-md:pb-16 bg-s1 font-poppins text-p5">

          {/* Page Header */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <h1 className="h2 text-p4 mb-6">Website Creation and Redesign for Nonprofits and Small Businesses</h1>
            <p className="body-1 text-p5">
              Ella Tech Solutions builds and redesigns websites for nonprofits and small businesses nationwide, creating fast, mobile-first sites that clearly communicate the organization's mission and convert visitors into donors, clients, or program participants.
            </p>
          </div>

          {/* Who This Is For */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">Who this is for</h2>
              <ul className="list-disc pl-5 space-y-3 body-1 text-p5">
                <li>Nonprofits with outdated websites that no longer reflect the organization's current programs or branding.</li>
                <li>Organizations losing donors because the donation flow is broken, confusing, or not mobile-friendly.</li>
                <li>Small businesses with unprofessional or DIY websites that do not generate leads or accurately represent the business to prospective clients.</li>
                <li>Organizations whose websites are difficult for staff to update without calling a developer.</li>
              </ul>
            </div>
          </div>

          {/* What Is Included */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">What is included</h2>
              <ul className="list-disc pl-5 space-y-3 body-1 text-p5">
                <li>Discovery session to document audience, goals, content structure, and required functionality before any design work begins.</li>
                <li>Responsive design built to perform on mobile, tablet, and desktop without separate mobile builds.</li>
                <li>Donation form, lead capture, or program sign-up integration matched to the organization's existing payment processor or CRM tools.</li>
                <li>On-page SEO setup including page titles, meta descriptions, heading structure, and image alt text for every page.</li>
                <li>Staff training so the client can update content, add pages, and manage the site independently after launch.</li>
                <li>30 days of post-launch support to resolve issues, answer questions, and make minor adjustments.</li>
              </ul>
            </div>
          </div>

          {/* Engagement Length */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">Typical engagement length</h2>
              <p className="body-1 text-p5">
                Most website projects run 4 to 8 weeks from kickoff to launch, depending on the number of pages, the complexity of integrations, and how quickly the client can provide content, feedback, and approvals. Projects with a clear content plan and timely review cycles typically complete closer to the 4-week end of that range. Projects with more pages or custom functionality run closer to 8 weeks.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-6">Frequently asked questions</h2>
              <dl className="space-y-6">
                <div>
                  <dt className="h5 text-p4 mb-2">How much does a nonprofit website redesign cost?</dt>
                  <dd className="body-1 text-p5">Pricing is scoped per project based on number of pages, custom functionality, and organization type. Ella Tech Solutions offers mission-driven pricing for verified 501(c)(3) nonprofits. Book a free consultation for a project quote.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">Do you use website templates or build custom sites?</dt>
                  <dd className="body-1 text-p5">Ella Tech Solutions does not use generic templates. Every site is built to fit the organization's specific audience, content structure, and workflow. Custom builds take longer than templates but perform significantly better for donor acquisition and lead generation.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">Can we update the website ourselves after launch?</dt>
                  <dd className="body-1 text-p5">Yes. Every website project includes staff training so the client can update content, add pages, and manage the site without calling a developer. Sites are built on platforms the client can manage independently.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">Does the website project include SEO?</dt>
                  <dd className="body-1 text-p5">Every project includes basic on-page SEO: page titles, meta descriptions, heading structure, image alt text, and page speed optimization. Ongoing SEO strategy is available as a separate service.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">What information do we need before starting a website project?</dt>
                  <dd className="body-1 text-p5">Before kickoff, clients should have a clear sense of their primary audience, the 3 to 5 main actions they want visitors to take, existing branding (logo, colors), and any must-have pages. Ella Tech Solutions provides a pre-project intake form to gather this information.</dd>
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

export default WebsiteDesign;
