import Hero from "../sections/Hero.jsx";
import Plans from "../sections/Plans.jsx";
import CaseStudy from "../sections/CaseStudy.jsx";
import Services from "../sections/Services.jsx";
import Faq from "../sections/Faq.jsx";
import Contact from "../sections/Contact.jsx";
import PageSEO from "../components/PageSEO.jsx";
import PageShell from "../components/PageShell.jsx";
import { faq } from "../constants/index.jsx";
import { useScrollToHash } from "../hooks/useScrollToHash.js";

const faqSchema = {
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

function Home() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <PageSEO
        title="Ella Tech Solutions | Websites &amp; Local SEO, Detroit MI"
        description="Ella Tech Solutions builds websites and runs the SEO and AEO work that helps local service businesses get found and get called. Detroit-based."
        canonical="https://www.ellatechsolutions.com/"
        schema={faqSchema}
      />
      <PageShell
        mainClassName="overflow-hidden pt-[120px] sm:pt-[172px]"
        showMobileBookingBar
      >
        <Hero />
        <Plans />
        <CaseStudy />
        <Services />
        <Faq />
        <Contact />
      </PageShell>
    </>
  );
}

export default Home;
