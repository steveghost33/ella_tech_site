import Button from "../components/Button.jsx";
import PageSEO from "../components/PageSEO.jsx";
import PageShell from "../components/PageShell.jsx";
import { techServices, techSolutionsSchema } from "../data/techSolutions.js";
import { useScrollToHash } from "../hooks/useScrollToHash.js";

function TechSolutions() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <PageSEO
        title="Tech Solutions & Training | CRM, AI, LMS | Detroit"
        description="CRM setup, AI automation, LMS development, HRIS, and staff training for small businesses and nonprofits. Detroit-based, serving clients nationwide."
        canonical="https://www.ellatechsolutions.com/tech-solutions"
        schema={techSolutionsSchema}
      />

      <PageShell mainClassName="overflow-hidden pt-[140px] sm:pt-[200px] min-h-screen bg-s1">
        <section
          id="hero"
          className="relative pt-16 pb-24 max-lg:pt-12 max-lg:pb-20 max-md:pt-10 max-md:pb-16 bg-s1 font-poppins text-p5"
        >
          {/* Hero Banner */}
          <div
            className="relative w-full overflow-hidden rounded-3xl mb-20 min-h-[440px] sm:min-h-[380px] md:h-[350px] md:min-h-0"
            style={{
              backgroundImage: "url('/images/tech-training-hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 container flex flex-col justify-center items-center text-center px-4 py-12 md:h-full md:py-0">
              <h1 className="h1 text-white drop-shadow-xl mb-4">
                Tech Solutions & Training
              </h1>
              <p className="body-1 text-white drop-shadow-lg max-w-2xl">
                Practical technology implementation for small businesses, nonprofits, and entrepreneurs. We build systems your team will actually use.
              </p>
            </div>
          </div>

          {/* Intro */}
          <div className="container mb-20 max-w-3xl mx-auto text-center">
            <h2 className="h3 text-p4 mb-4">The problem is not the tool. It is the implementation.</h2>
            <p className="body-1 text-p5">
              Most organizations do not need better software. They need better systems. The Ella Tech team has spent 15 years building technology infrastructure inside nonprofits, small businesses, and growing organizations. We know what it takes to get tools adopted, not just installed.
            </p>
          </div>

          {/* Services, alternating layout */}
          {techServices.map((service, idx) => (
            <div
              key={service.id}
              className="container grid md:grid-cols-2 gap-12 mb-24 items-center"
            >
              {/* Image: alternates left/right */}
              <div className={idx % 2 !== 0 ? "order-2 md:order-1" : ""}>
                <img
                  src={service.img}
                  alt={service.alt}
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>

              {/* Text */}
              <div className={idx % 2 !== 0 ? "order-1 md:order-2" : ""}>
                <h2 className="h3 text-p4 mb-4">{service.title}</h2>
                <p className="body-1 mb-6 text-p5">{service.description}</p>
                <ul className="list-disc pl-5 space-y-2 body-3 text-p5">
                  {service.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Digital Strategy Consulting, full width callout */}
          <div className="container mb-24">
            <div className="bg-s2 rounded-3xl p-10 md:p-14 border border-white/10">
              <div className="max-w-2xl">
                <h2 className="h3 text-p4 mb-4">Digital Strategy Consulting</h2>
                <p className="body-1 text-p5 mb-6">
                  Not sure where to start? Book a free 30-minute consultation and we will give you a clear picture of your technology gaps and the best next steps. No commitment required.
                </p>
                <ul className="list-disc pl-5 space-y-2 body-3 text-p5 mb-8">
                  <li>Technology audit and gap analysis</li>
                  <li>Vendor selection and implementation planning</li>
                  <li>Flexible options for nonprofits, small businesses, and entrepreneurs</li>
                  <li>No long-term commitment required to start</li>
                </ul>
                <Button href="https://cal.com/ella-tech-7ze7wk" containerClassName="inline-block">
                  Book a Free Consultation
                </Button>
              </div>
            </div>
          </div>

          {/* Grant Writing callout */}
          <div className="container mb-24">
            <div className="bg-s2 rounded-3xl p-10 md:p-14 border border-white/10">
              <div className="max-w-2xl">
                <h2 className="h3 text-p4 mb-4">Grant Writing & Grant Readiness</h2>
                <p className="body-1 text-p5 mb-6">
                  Nonprofit and small business clients also come to us for grant funding help: research, proposal writing, and the readiness work that gets you funder-ready before applying. We build the reporting systems that keep grants in compliance after they're awarded, too.
                </p>
                <Button href="/services/grant-writing" containerClassName="inline-block">
                  See Grant Writing Services
                </Button>
              </div>
            </div>
          </div>

          {/* Nonprofit note */}
          <div className="container mb-20 max-w-3xl mx-auto">
            <div className="border border-white/10 rounded-2xl p-8 text-center">
              <h3 className="h4 text-p4 mb-3">Pricing Scoped to Your Organization</h3>
              <p className="body-1 text-p5">
                Ella Tech Solutions offers mission-driven pricing for verified 501(c)(3) nonprofits and community-based organizations, and straightforward project-based pricing for small businesses and entrepreneurs. Book a consultation to discuss your project and what it would cost.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="container text-center mb-32">
            <h2 className="h4 mb-6">Ready to build systems your team will actually use?</h2>
            <p className="body-1 mb-8 max-w-2xl mx-auto text-p5">
              Book a consultation and we will identify where technology can save your team time, reduce overhead, and help you focus on the work that matters.
            </p>
            <Button href="https://cal.com/ella-tech-7ze7wk" containerClassName="inline-block mx-auto">
              Book a Consultation
            </Button>
          </div>
        </section>
      </PageShell>
    </>
  );
}

export default TechSolutions;
