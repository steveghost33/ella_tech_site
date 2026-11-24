import Button from "../components/Button.jsx";

function AboutFounder() {
  return (
    <section className="py-20 bg-s1">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <p className="caption text-p3 uppercase tracking-wider mb-4 text-center">About the firm</p>
          <h2 className="h3 max-md:h5 text-p4 mb-8 text-center">
            Built by Someone Who Has Done This Work
          </h2>

          <div className="rounded-3xl border-2 border-s3 g7 p-10 max-md:p-6">
            <p className="body-1 text-p5 mb-5">
              Ella Tech Solutions was founded after approximately 15 years of working as an IT leader and program director inside nonprofits and large organizations across Michigan. That experience includes hands-on CRM implementations, learning platform builds, Microsoft 365 environments, and staff training inside organizations where budgets are limited and technology decisions have real operational consequences.
            </p>
            <p className="body-1 text-p5 mb-5">
              The firm operates as a fractional CTO and strategic technology partner, providing senior-level technology strategy directly to each client. That means you get experienced leadership on your actual technology decisions — without the cost of a full-time hire.
            </p>
            <p className="body-1 text-p5 mb-8">
              Based in Detroit, Michigan. Working with nonprofits, small businesses, and entrepreneurs across the United States.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="https://cal.com/ella-tech-7ze7wk" containerClassName="inline-block">
                Book a free consultation
              </Button>
              <a
                href="https://www.linkedin.com/company/ella-tech-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-s3 rounded-2xl px-6 py-3 text-p5 text-sm font-semibold hover:border-p1 transition-colors"
              >
                <img src="/images/socials/linkedin.svg" alt="" aria-hidden="true" className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFounder;
