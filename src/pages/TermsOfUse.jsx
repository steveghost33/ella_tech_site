import { Helmet } from "react-helmet-async";
import PageShell from "../components/PageShell.jsx";
import { CONTACT_EMAIL } from "../data/site.js";
import { useScrollToHash } from "../hooks/useScrollToHash.js";

function TermsOfUse() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <Helmet>
        <title>Terms of Use | Ella Tech Solutions</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <PageShell mainClassName="overflow-hidden pt-[140px] sm:pt-[200px] min-h-screen bg-s1">
        <section className="relative py-16 max-md:py-12 font-poppins text-p5">
          <div className="container max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="h1 text-p4 mb-4">Terms of Use</h1>
              <p className="body-2 text-p5 opacity-70">Last Updated: December 2025</p>
            </div>

            <div className="mb-12">
              <p className="body-1 text-p5 leading-relaxed">
                Welcome to Ella Tech Solutions. By accessing or using our website, services, or materials, you agree to follow and be bound by the following Terms of Use.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="h4 text-p4 mb-4">Acceptance of Terms</h2>
              <p className="body-1 text-p5 leading-relaxed">
                By visiting this website or using any services offered by Ella Tech Solutions, you confirm that you are at least eighteen years old and legally able to enter into agreements.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="h4 text-p4 mb-4">Services Provided</h2>
              <p className="body-1 text-p5 leading-relaxed">
                Ella Tech Solutions offers website development, technology consulting, digital strategy support, and training services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="h4 text-p4 mb-4">Intellectual Property</h2>
              <p className="body-1 text-p5 leading-relaxed">
                All content on this website is the property of Ella Tech Solutions and is protected under United States and international copyright, trademark, and intellectual property laws.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="h4 text-p4 mb-4">Governing Law</h2>
              <p className="body-1 text-p5 leading-relaxed">
                These Terms of Use are governed by the laws of the State of Michigan.
              </p>
            </div>

            <div className="mb-12 p-8 bg-s2 rounded-2xl">
              <h2 className="h4 text-p4 mb-4">Contact Information</h2>
              <p className="font-semibold text-p3">Ella Tech Solutions</p>
              <p className="text-p5">Detroit, Michigan</p>
              <p className="text-p5">
                Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-p1 hover:text-p3">{CONTACT_EMAIL}</a>
              </p>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}

export default TermsOfUse;
