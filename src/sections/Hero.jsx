import { Link } from "react-router-dom";
import { CONTACT_PHONE, CONTACT_PHONE_TEL } from "../data/site.js";

const paths = [
  {
    title: "For nonprofits and community organizations",
    text: "Website rebuilds, donor and volunteer records in one place, staff training, and a practical plan for AI.",
    cta: "See nonprofit services",
    to: "/services/nonprofits",
  },
  {
    title: "For local businesses",
    text: "A website and Google Business Profile built so people nearby can find you and call.",
    cta: "See local business plans",
    to: "/#plans",
  },
];

const Hero = () => {
  return (
    <section className="relative pt-16 pb-24 max-lg:pt-10 max-lg:pb-16 max-md:pt-5 max-md:pb-10 overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/images/main-photo.webp" type="image/webp" />
          <img
            src="/images/main-photo.jpg"
            alt=""
            aria-hidden="true"
            width="1920"
            height="1080"
            fetchPriority="high"
            className="w-full h-full object-cover"
            style={{ objectPosition: "25% 50%" }}
          />
        </picture>
        <div className="hero-fade-x absolute inset-0 bg-gradient-to-r from-s1 via-s1/80 to-transparent" />
        <div className="hero-fade-y absolute inset-0 bg-gradient-to-t from-s1 via-s1/10 to-transparent" />
        <div className="hero-fade-mobile absolute inset-0 lg:hidden bg-s1/70" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <p className="mb-3 text-[13px] max-md:text-[11px] font-semibold tracking-[0.15em] uppercase text-p3/80">
            Detroit technology consulting
          </p>
          <h1 className="mb-5 h1 text-p4 lg:text-6xl lg:leading-tight max-lg:text-5xl max-lg:leading-tight max-md:mb-3 max-md:text-[28px] max-md:leading-tight">
            Websites, systems and training for Detroit organizations
          </h1>
          <p className="max-w-2xl mb-8 body-1 max-md:mb-5 max-md:text-[15px] max-md:leading-snug text-p5">
            I&rsquo;m Steven Bowman. I build websites, set up the systems behind them, and train staff to use them. Choose the path that fits you.
          </p>
        </div>

        {/* Two audience paths */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl">
          {paths.map(({ title, text, cta, to }) => (
            <Link
              key={title}
              to={to}
              className="group block rounded-2xl border-2 border-s3 bg-s2/80 backdrop-blur-sm p-6 max-md:px-4 max-md:py-3 transition-colors hover:border-p1"
            >
              <h2 className="text-p4 font-bold text-xl max-md:text-base leading-snug mb-2">{title}</h2>
              <p className="text-p5 body-3 mb-4 max-sm:hidden max-md:mb-2 max-md:text-sm max-md:leading-snug max-md:tracking-normal">{text}</p>
              <span className="text-p1 font-semibold text-sm uppercase tracking-wide group-hover:underline">
                {cta} &rarr;
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-6 max-md:mt-4 text-p5">
          Or call{" "}
          <a href={`tel:${CONTACT_PHONE_TEL}`} className="text-p4 font-semibold hover:underline">
            {CONTACT_PHONE}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
