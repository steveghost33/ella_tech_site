import Button from "../components/Button.jsx";

const services = [
  "Website redesign",
  "CRM strategy and setup",
  "Staff technology training",
  "AI workflow integration",
];

function NonprofitBand() {
  return (
    <section id="nonprofits" className="py-16 bg-s2 scroll-mt-[140px]">
      <div className="container max-w-4xl mx-auto">
        <p className="caption text-p3 uppercase tracking-wider mb-4">For Detroit nonprofits</p>
        <h2 className="h3 max-md:h5 text-p4 mb-5">
          Your website, records and staff tools, fixed one at a time
        </h2>
        <p className="body-1 text-p5 mb-8">
          Outdated website, donor and volunteer records in three different places, software your staff doesn&rsquo;t use, and no plan for AI. I help small teams fix those, one at a time, starting with what matters most to your organization.
        </p>
        <ul className="grid sm:grid-cols-2 gap-3 mb-10">
          {services.map((s) => (
            <li key={s} className="rounded-xl border border-s3/50 bg-s1/60 px-5 py-4 text-p4 font-semibold">
              {s}
            </li>
          ))}
        </ul>
        <Button to="/services/nonprofits">See how I work with nonprofits</Button>
      </div>
    </section>
  );
}

export default NonprofitBand;
