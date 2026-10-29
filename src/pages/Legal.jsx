import { Helmet } from "react-helmet-async";
import PageShell from "../components/PageShell.jsx";
import { CONTACT_EMAIL } from "../data/site.js";
import { useScrollToHash } from "../hooks/useScrollToHash.js";

function Legal() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Ella Tech Solutions</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <PageShell mainClassName="overflow-hidden pt-[148px] sm:pt-[200px] min-h-screen bg-s1">
        <section className="relative py-16 max-md:py-12 font-poppins text-p5">
          <div className="container max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="h1 text-p4 mb-4">Privacy Policy</h1>
              <p className="body-2 text-p5 opacity-70">Effective December 2025</p>
            </div>

            <div className="mb-12">
              <h2 className="h4 text-p4 mb-4">Introduction</h2>
              <p className="body-1 text-p5 leading-relaxed">
                Ella Tech Solutions LLC respects your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have.
              </p>
            </div>

            <div className="mb-12 p-8 bg-s2 rounded-2xl">
              <h2 className="h4 text-p4 mb-4">Who We Are</h2>
              <p className="font-semibold text-p3">Ella Tech Solutions LLC</p>
              <p className="text-p5">Technology consulting, web development, digital training and automation services</p>
              <p className="text-p5">Based in Detroit, Michigan</p>
              <p className="text-p5">
                Contact: <a href={`mailto:${CONTACT_EMAIL}`} className="text-p1 hover:text-p3">{CONTACT_EMAIL}</a>
              </p>
            </div>

            <div className="mb-12">
              <h2 className="h4 text-p4 mb-4">Information We Collect</h2>
              <p className="body-1 text-p5 leading-relaxed mb-4">We collect information in three ways:</p>
              <ul className="space-y-2 ml-6">
                <li className="text-p5 flex items-start gap-3">
                  <span className="text-p1">•</span>
                  Information you provide (contact forms, booking details)
                </li>
                <li className="text-p5 flex items-start gap-3">
                  <span className="text-p1">•</span>
                  Information collected automatically (device info, cookies)
                </li>
                <li className="text-p5 flex items-start gap-3">
                  <span className="text-p1">•</span>
                  Information from third party services (analytics, social media)
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="h4 text-p4 mb-4">Sharing Your Information</h2>
              <p className="body-1 text-p5 leading-relaxed font-semibold text-p3 mb-2">
                We do not sell your personal information.
              </p>
              <p className="body-1 text-p5 leading-relaxed">
                We may share limited information only with service providers that support our business operations.
              </p>
            </div>

            <div className="mb-12 p-8 bg-s2 rounded-2xl">
              <h2 className="h4 text-p4 mb-4">Contact Us</h2>
              <p className="body-1 text-p5 leading-relaxed mb-4">
                If you have questions about this Privacy Policy, contact us at:
              </p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-p1 hover:text-p3 text-lg font-semibold">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}

export default Legal;
