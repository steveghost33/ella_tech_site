import Button from "../components/Button.jsx";
import { CONTACT_PHONE, CONTACT_PHONE_TEL } from "../data/site.js";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-40 max-lg:pt-14 max-lg:pb-36 max-md:pt-12 max-md:pb-32 overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/images/main-photo.webp" type="image/webp" />
          <img
            src="/images/main-photo.jpg"
            alt="Ella Tech Solutions, technology consulting for nonprofits, small businesses, and entrepreneurs"
            width="1920"
            height="1080"
            fetchPriority="high"
            className="w-full h-full object-cover"
            style={{ objectPosition: "25% 50%" }}
          />
        </picture>
        {/* Fade the photo into the background color under the text, left-to-right and top-to-bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-s1 via-s1/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-s1 via-s1/10 to-transparent" />
        <div className="absolute inset-0 lg:hidden bg-s1/55" />
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-start lg:items-center">
        {/* Text */}
        <div className="relative z-10 lg:w-1/2 max-w-512 max-lg:max-w-388 w-full">
          <img
            src="/images/ellalogo.svg"
            alt="Ella Tech Solutions"
            className="h-7 max-md:h-6 w-auto mb-5 max-lg:mb-6"
          />
          <div className="mb-3 text-[13px] font-semibold tracking-[0.15em] uppercase text-p3/70">
            Detroit-Based. Serving Local Businesses Nationwide.
          </div>
          <h1 className="mb-6 h1 text-p4 max-lg:mb-7 max-lg:text-5xl max-lg:leading-tight max-md:mb-4 max-md:text-4xl max-md:leading-tight max-sm:text-3xl">
            Get Found by Your Local Customers
          </h1>
          <p className="max-w-440 mb-6 body-1 max-md:mb-6 max-md:text-base max-md:leading-relaxed text-p5">
            We build websites and run the SEO that gets your business showing up, and getting calls, when people nearby search for what you do. Built for local service businesses, live in as little as two weeks.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button href="https://cal.com/ella-tech-7ze7wk" icon="/images/zap.svg">Get Found Locally</Button>
            <a
              href={`tel:${CONTACT_PHONE_TEL}`}
              className="text-p4 font-semibold text-base hover:underline"
            >
              Or call {CONTACT_PHONE}
            </a>
          </div>
          <p className="mt-5 text-sm text-p5">
            Live within 2 weeks, guaranteed &middot; Plans from $1,200 &middot; Free 30-minute consultation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
