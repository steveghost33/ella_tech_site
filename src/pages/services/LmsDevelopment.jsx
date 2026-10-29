import Button from "../../components/Button.jsx";
import PageSEO from "../../components/PageSEO.jsx";
import PageShell from "../../components/PageShell.jsx";
import { useScrollToHash } from "../../hooks/useScrollToHash.js";
import { SITE_URL } from "../../data/site.js";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "LMS and Microlearning Development for Nonprofits and Small Businesses",
  serviceType: "Technology Consulting",
  description:
    "Ella Tech Solutions selects and implements Learning Management Systems (LMS) for nonprofits and small businesses, builds SCORM-compliant microlearning content using Articulate 360, and trains administrators to manage the platform independently.",
  provider: {
    "@type": "LocalBusiness",
    name: "Ella Tech Solutions",
    url: SITE_URL,
  },
  areaServed: ["Detroit, MI", "Michigan", "United States"],
  url: `${SITE_URL}/services/lms-development`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Learning Management System?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An LMS (Learning Management System) is the platform organizations use to deliver, track, and report on staff training. Staff log in to complete assigned courses, and administrators can see who has completed what. Common platforms include TalentLMS, Absorb LMS, and Canvas. Ella Tech Solutions selects the platform that fits the organization's team size, budget, and reporting requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What is SCORM and why does it matter for nonprofits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SCORM (Sharable Content Object Reference Model) is a technical standard that allows training content to communicate with an LMS to track completion, quiz scores, and time spent. For nonprofits, SCORM compliance is often required for grant reporting and compliance documentation. Ella Tech Solutions packages all course content to SCORM standards.",
      },
    },
    {
      "@type": "Question",
      name: "What tools do you use to build training content?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ella Tech Solutions builds training content primarily using Articulate 360 (including Articulate Rise for web-based microlearning and Articulate Storyline for interactive simulations). Content is exported in SCORM or xAPI format for deployment in any compatible LMS.",
      },
    },
    {
      "@type": "Question",
      name: "Can we add our own courses after the LMS is launched?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every LMS implementation includes administrator training so internal staff can upload new content, create courses, assign learners, and run reports without outside help. Ella Tech Solutions provides written documentation covering all common administrative tasks.",
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
    { "@type": "ListItem", position: 3, name: "LMS Development", item: `${SITE_URL}/services/lms-development` },
  ],
};

function LmsDevelopment() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <PageSEO
        title="LMS &amp; Microlearning Development | Ella Tech Solutions"
        description="Ella Tech Solutions selects and implements Learning Management Systems for nonprofits and small businesses. SCORM-compliant course development included."
        canonical={`${SITE_URL}/services/lms-development`}
        schema={[schema, faqSchema, breadcrumbSchema]}
      />

      <PageShell mainClassName="overflow-hidden pt-[140px] sm:pt-[200px] min-h-screen bg-s1">
        <section className="relative pt-16 pb-24 max-lg:pt-12 max-lg:pb-20 max-md:pt-10 max-md:pb-16 bg-s1 font-poppins text-p5">

          {/* Page Header */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <h1 className="h2 text-p4 mb-6">LMS and Microlearning Development for Nonprofits and Small Businesses</h1>
            <p className="body-1 text-p5">
              Ella Tech Solutions selects and implements Learning Management Systems (LMS) for nonprofits and small businesses, builds SCORM-compliant microlearning content using Articulate 360, and trains administrators to manage the platform independently.
            </p>
          </div>

          {/* Who This Is For */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">Who this is for</h2>
              <ul className="list-disc pl-5 space-y-3 body-1 text-p5">
                <li>Nonprofits with informal or inconsistent staff onboarding that relies on printed materials or one-on-one walkthroughs that do not scale.</li>
                <li>Organizations that need to document and track compliance training completions for grant reporting or regulatory requirements.</li>
                <li>Small businesses where staff need to complete training modules without pulling managers away from other work.</li>
                <li>HR directors building a structured training library the organization can maintain and expand over time.</li>
              </ul>
            </div>
          </div>

          {/* What Is Included */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">What is included</h2>
              <ul className="list-disc pl-5 space-y-3 body-1 text-p5">
                <li>LMS platform selection from options including TalentLMS, Absorb LMS, Canvas, or a comparable platform matched to the organization's team size, budget, and reporting requirements.</li>
                <li>Full platform setup and configuration including user roles, course categories, and reporting dashboards.</li>
                <li>Microlearning course development using Articulate 360 or Rise, designed for focused 5 to 15-minute completion times.</li>
                <li>SCORM packaging so all course content communicates completion, quiz scores, and time-on-task data to the LMS.</li>
                <li>Administrator training so internal staff can upload content, assign learners, and run reports without outside help.</li>
                <li>Learner onboarding documentation so staff know how to log in, access assigned courses, and track their own completions.</li>
              </ul>
            </div>
          </div>

          {/* Engagement Length */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">Typical engagement length</h2>
              <p className="body-1 text-p5">
                LMS platform selection and setup typically takes 3 to 4 weeks. Course content development in Articulate 360 runs 2 to 4 weeks per module depending on the length, interactivity level, and amount of subject matter review required. Organizations developing multiple courses can stagger production to maintain a faster overall delivery schedule.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-6">Frequently asked questions</h2>
              <dl className="space-y-6">
                <div>
                  <dt className="h5 text-p4 mb-2">What is a Learning Management System?</dt>
                  <dd className="body-1 text-p5">An LMS (Learning Management System) is the platform organizations use to deliver, track, and report on staff training. Staff log in to complete assigned courses, and administrators can see who has completed what. Common platforms include TalentLMS, Absorb LMS, and Canvas. Ella Tech Solutions selects the platform that fits the organization's team size, budget, and reporting requirements.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">What is SCORM and why does it matter for nonprofits?</dt>
                  <dd className="body-1 text-p5">SCORM (Sharable Content Object Reference Model) is a technical standard that allows training content to communicate with an LMS to track completion, quiz scores, and time spent. For nonprofits, SCORM compliance is often required for grant reporting and compliance documentation. Ella Tech Solutions packages all course content to SCORM standards.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">What tools do you use to build training content?</dt>
                  <dd className="body-1 text-p5">Ella Tech Solutions builds training content primarily using Articulate 360 (including Articulate Rise for web-based microlearning and Articulate Storyline for interactive simulations). Content is exported in SCORM or xAPI format for deployment in any compatible LMS.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">Can we add our own courses after the LMS is launched?</dt>
                  <dd className="body-1 text-p5">Yes. Every LMS implementation includes administrator training so internal staff can upload new content, create courses, assign learners, and run reports without outside help. Ella Tech Solutions provides written documentation covering all common administrative tasks.</dd>
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

export default LmsDevelopment;
