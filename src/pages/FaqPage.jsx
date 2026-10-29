import PageSEO from "../components/PageSEO.jsx";
import PageShell from "../components/PageShell.jsx";
import { faq } from "../constants/index.jsx";
import { useScrollToHash } from "../hooks/useScrollToHash.js";
import { SITE_URL } from "../data/site.js";
import Button from "../components/Button.jsx";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
  ],
};

function FaqPage() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <PageSEO
        title="FAQ | Nonprofit &amp; Small Business Tech Consulting"
        description="Answers to common questions about CRM setup, technology consulting, AI workflow training, website projects, and working with Ella Tech Solutions."
        canonical={`${SITE_URL}/faq`}
        schema={[schema, breadcrumbSchema]}
      />

      <PageShell mainClassName="overflow-hidden pt-[140px] sm:pt-[200px] min-h-screen bg-s1">
        <section className="relative pt-16 pb-24 max-lg:pt-12 max-lg:pb-20 bg-s1 font-poppins text-p5">
          <div className="container max-w-3xl mx-auto">

            <p className="caption text-p3 uppercase tracking-wider mb-4 text-center">Frequently Asked Questions</p>
            <h1 className="h2 text-p4 mb-4 text-center">
              Questions about working with Ella Tech Solutions
            </h1>
            <p className="body-1 text-p5 text-center mb-16 max-w-2xl mx-auto">
              Common questions from nonprofits and small businesses about setting up contact management systems, technology consulting, AI training for staff, website projects, and how to get started.
            </p>

            <dl className="space-y-8">
              {faq.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-s3/40 bg-s2/50 p-8"
                >
                  <dt className="h5 text-p4 mb-4">{item.question}</dt>
                  <dd className="body-1 text-p5 leading-relaxed">{item.answer}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-20 text-center">
              <h2 className="h4 text-p4 mb-4">Have a question not listed here?</h2>
              <p className="body-1 text-p5 mb-8 max-w-xl mx-auto">
                Book a free 30-minute consultation. We will review your situation and answer any questions about working together.
              </p>
              <Button href="https://cal.com/ella-tech-7ze7wk" containerClassName="inline-block mx-auto">
                Book a free consultation
              </Button>
            </div>

          </div>
        </section>
      </PageShell>
    </>
  );
}

export default FaqPage;
