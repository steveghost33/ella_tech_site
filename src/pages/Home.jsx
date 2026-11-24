import Hero from "../sections/Hero.jsx";
import NonprofitBand from "../sections/NonprofitBand.jsx";
import Plans from "../sections/Plans.jsx";
import WorkPreview from "../sections/WorkPreview.jsx";
import About from "../sections/About.jsx";
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
        title="Ella Tech Solutions | Websites, CRM and Training for Detroit Nonprofits and Local Businesses"
        description="Detroit technology consulting. Website redesign, CRM setup, staff training and AI help for nonprofits and community organizations, plus websites and local search for local businesses."
        canonical="https://www.ellatechsolutions.com/"
        schema={faqSchema}
      />
      <PageShell mainClassName="overflow-hidden pt-[128px] sm:pt-[188px]">
        <Hero />
        <NonprofitBand />
        <Plans />
        <WorkPreview />
        <About />
        <Services />
        <Faq />
        <Contact />
      </PageShell>
    </>
  );
}

export default Home;
