import Button from "../../components/Button.jsx";
import PageSEO from "../../components/PageSEO.jsx";
import PageShell from "../../components/PageShell.jsx";
import { useScrollToHash } from "../../hooks/useScrollToHash.js";
import { SITE_URL } from "../../data/site.js";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Staff Technology Training for Nonprofits and Small Businesses",
  serviceType: "Technology Consulting",
  description:
    "Ella Tech Solutions delivers live and self-paced technology training for nonprofit and small business staff on the tools their organizations already use, in plain language without assuming a technical background.",
  provider: {
    "@type": "LocalBusiness",
    name: "Ella Tech Solutions",
    url: SITE_URL,
  },
  areaServed: ["Detroit, MI", "Michigan", "United States"],
  url: `${SITE_URL}/services/staff-training`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you train staff who are not tech-savvy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ella Tech Solutions trains staff at all skill levels. Sessions are designed in plain language and focus on practical tasks rather than technical concepts. The goal is confident, independent use of the tools, not deep technical knowledge.",
      },
    },
    {
      "@type": "Question",
      name: "What tools do you train on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ella Tech Solutions trains staff on whatever tools the organization uses, including Microsoft 365 (Teams, SharePoint, Outlook, OneDrive), CRM platforms, LMS platforms, and AI tools. Training is always tailored to the specific software version and configuration the client has in place.",
      },
    },
    {
      "@type": "Question",
      name: "Is training included in other Ella Tech services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every technology implementation Ella Tech Solutions completes includes staff training at no additional charge. This applies to CRM setup, LMS development, Microsoft 365 implementation, and AI workflow integration.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between live training and self-paced training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Live training is a scheduled session where staff learn together and can ask questions in real time. Self-paced training is recorded content staff can access anytime, useful for teams with varying schedules or for reinforcing skills after a live session. Ella Tech Solutions can provide one or both formats depending on what works for the team.",
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
    { "@type": "ListItem", position: 3, name: "Staff Training", item: `${SITE_URL}/services/staff-training` },
  ],
};

function StaffTraining() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <PageSEO
        title="Staff Technology Training | Ella Tech Solutions"
        description="Ella Tech Solutions delivers live and self-paced technology training for nonprofit and small business staff, in plain language, no tech background required."
        canonical={`${SITE_URL}/services/staff-training`}
        schema={[schema, faqSchema, breadcrumbSchema]}
      />

      <PageShell mainClassName="overflow-hidden pt-[148px] sm:pt-[200px] min-h-screen bg-s1">
        <section className="relative pt-16 pb-24 max-lg:pt-12 max-lg:pb-20 max-md:pt-10 max-md:pb-16 bg-s1 font-poppins text-p5">

          {/* Page Header */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <h1 className="h2 text-p4 mb-6">Staff Technology Training for Nonprofits and Small Businesses</h1>
            <p className="body-1 text-p5">
              Ella Tech Solutions delivers live and self-paced technology training for nonprofit and small business staff on the tools their organizations already use, in plain language without assuming a technical background.
            </p>
          </div>

          {/* Who This Is For */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">Who this is for</h2>
              <ul className="list-disc pl-5 space-y-3 body-1 text-p5">
                <li>Nonprofits where staff use tools inconsistently, creating gaps in data, communication, and file management.</li>
                <li>Organizations rolling out new software and need structured onboarding before staff attempt to use it independently.</li>
                <li>Small businesses with employees using personal email accounts, personal file storage, or other workarounds instead of shared organizational systems.</li>
                <li>HR directors and operations managers who need documented training materials for onboarding new staff to their technology stack.</li>
              </ul>
            </div>
          </div>

          {/* What Is Included */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">What is included</h2>
              <ul className="list-disc pl-5 space-y-3 body-1 text-p5">
                <li>Needs assessment before training is designed to confirm which tools, skill levels, and workflows to cover.</li>
                <li>Live group training sessions in half-day or full-day formats with time for questions and hands-on practice.</li>
                <li>Self-paced video content for staff who cannot attend live sessions or need to revisit material after training.</li>
                <li>Quick-reference guides summarizing the key steps for each task covered in training.</li>
                <li>Written documentation for each tool so the organization has a permanent reference after the engagement ends.</li>
              </ul>
            </div>
          </div>

          {/* Engagement Length */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-4">Typical engagement length</h2>
              <p className="body-1 text-p5">
                Single-tool workshops run 1 week of preparation time plus the delivery day. Larger programs that include custom content development, multiple tools, or both live and self-paced formats run 4 to 8 weeks from the initial needs assessment through final delivery. Timeline depends on the number of tools covered, the number of staff, and whether video content needs to be produced.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="container mb-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-s3/40 bg-s2/50 p-8">
              <h2 className="h3 text-p4 mb-6">Frequently asked questions</h2>
              <dl className="space-y-6">
                <div>
                  <dt className="h5 text-p4 mb-2">Can you train staff who are not tech-savvy?</dt>
                  <dd className="body-1 text-p5">Yes. Ella Tech Solutions trains staff at all skill levels. Sessions are designed in plain language and focus on practical tasks rather than technical concepts. The goal is confident, independent use of the tools, not deep technical knowledge.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">What tools do you train on?</dt>
                  <dd className="body-1 text-p5">Ella Tech Solutions trains staff on whatever tools the organization uses, including Microsoft 365 (Teams, SharePoint, Outlook, OneDrive), CRM platforms, LMS platforms, and AI tools. Training is always tailored to the specific software version and configuration the client has in place.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">Is training included in other Ella Tech services?</dt>
                  <dd className="body-1 text-p5">Yes. Every technology implementation Ella Tech Solutions completes includes staff training at no additional charge. This applies to CRM setup, LMS development, Microsoft 365 implementation, and AI workflow integration.</dd>
                </div>
                <div>
                  <dt className="h5 text-p4 mb-2">What is the difference between live training and self-paced training?</dt>
                  <dd className="body-1 text-p5">Live training is a scheduled session where staff learn together and can ask questions in real time. Self-paced training is recorded content staff can access anytime, useful for teams with varying schedules or for reinforcing skills after a live session. Ella Tech Solutions can provide one or both formats depending on what works for the team.</dd>
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

export default StaffTraining;
