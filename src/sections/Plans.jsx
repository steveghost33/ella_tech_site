import { Element } from "react-scroll";
import { plans } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const pricingPromises = [
  {
    title: "One flat price",
    text: "A single set fee to build, then one flat monthly care plan. No hourly billing.",
  },
  {
    title: "In writing, up front",
    text: "You get a clear, written quote on a free 30-minute call before you commit to anything.",
  },
  {
    title: "No surprises",
    text: "Hosting, monitoring, and updates are included. No hidden add-on fees, ever.",
  },
];

function Plans() {
  return (
    <Element name="plans">
      <section id="plans" className="py-16 bg-s1 scroll-mt-[140px]">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-sm md:text-base text-p3 font-medium tracking-wide">
              For local businesses
            </div>
            <h2 className="mt-2 font-bold text-p4 uppercase text-4xl md:text-5xl max-md:text-3xl">
              Three Ways to Get Found
            </h2>
            <p className="mt-4 text-p5 max-w-2xl mx-auto body-1">
              Simple, flat-fee plans. Pick the level that matches how fast you want to be the obvious local choice, and we&rsquo;ll give you one clear price for it.
            </p>
          </div>

          {/* Cards, 3-column grid on large screens, 2-column on medium, 1-column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 max-w-6xl mx-auto">
            {plans.map(({ id, title, bestFor, description, details }) => {
              return (
                <div
                  key={id}
                  className="relative w-full overflow-hidden rounded-[2rem] shadow-2xl bg-gradient-to-br from-s2 to-s1"
                >
                  <div className="absolute inset-0 z-0 rounded-[2rem] border border-white/15 pointer-events-none" />
                  <div className="absolute inset-0 z-0 rounded-[2rem] ring-1 ring-inset ring-white/10 pointer-events-none" />

                  <div className="relative z-10 p-6 flex flex-col min-h-[300px] transition-all duration-300 ease-in-out">
                    <h3 className="text-p4 uppercase font-bold text-xl mb-1 tracking-wide">
                      {title}
                    </h3>
                    <p className="text-p3 font-semibold text-sm mb-3">{bestFor}</p>

                    <div className="mt-1 flex-1 pr-1">
                      <p className="text-p5">{description}</p>

                      {details && (
                        <ul className="mt-4 list-disc list-inside text-p5 space-y-1">
                          {details.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Flat-fee pricing promise, replaces published price ranges */}
          <div className="max-w-4xl mx-auto mb-10 rounded-[2rem] border border-white/15 bg-s2/60 p-6 md:p-8">
            <h3 className="text-center text-p4 uppercase font-bold text-xl md:text-2xl tracking-wide mb-6">
              How Our Pricing Works
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
              {pricingPromises.map(({ title, text }) => (
                <li key={title}>
                  <p className="text-p3 font-semibold mb-1">{title}</p>
                  <p className="text-p5 text-sm">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div id="guarantee" className="max-w-3xl mx-auto mb-10 rounded-[2rem] border border-p1/30 bg-s2/60 p-6 md:p-8 scroll-mt-[160px]">
            <h3 className="text-p4 font-bold text-xl md:text-2xl mb-4">
              Live in 2 weeks, or your first month of monitoring is free.
            </h3>
            <dl className="space-y-3 text-p5">
              <div>
                <dt className="font-semibold text-p4">What &ldquo;live&rdquo; means</dt>
                <dd>Your new site is published at your own web address and works on phones and computers, and your Google Business Profile is set up and submitted to Google for verification. Google decides how long verification takes.</dd>
              </div>
              <div>
                <dt className="font-semibold text-p4">What you provide</dt>
                <dd>Your business details and hours, your services and service area, your logo and photos, any text you want used, and access to your domain and Google account.</dd>
              </div>
              <div>
                <dt className="font-semibold text-p4">When the 2 weeks starts</dt>
                <dd>The day I have everything on that list. From then, your site is live within 14 calendar days. If I am waiting on your feedback, the clock pauses until you reply.</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm text-p5/80">This guarantee applies to the local business plans. Nonprofit projects are scoped in a written proposal.</p>
          </div>

          {/* Two paths: ready to talk, or not ready yet */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 mb-4">
            <Button href="https://cal.com/ella-tech-7ze7wk">Get My Flat-Fee Quote</Button>
            <Button to="/tech-health-check">Take the Free Health Check</Button>
          </div>

          <p className="text-center text-p5 mt-4">
            Not ready to talk yet? The 5-minute Tech Health Check shows what is costing you calls, free, and you can book a quote whenever you are ready.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-20 bg-s2">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-bold text-p4 uppercase text-3xl md:text-4xl mb-4">
            Not sure which plan fits?
          </h2>
          <p className="text-p5 body-1 mb-10">
            Book a free 30 minute call. I will tell you which plan fits your business and give you one flat price in writing.
          </p>
          <Button href="https://cal.com/ella-tech-7ze7wk" containerClassName="inline-block mx-auto">
            Get Found Locally
          </Button>
        </div>
      </section>
    </Element>
  );
}

export default Plans;
