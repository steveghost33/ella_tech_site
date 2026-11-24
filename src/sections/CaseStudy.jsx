import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";

const REASONS = [
  {
    title: "Senior-level work, not a template",
    text: "15 years of IT and program leadership experience goes into every site, not a drag-and-drop builder and a generic checklist.",
  },
  {
    title: "Built around how people actually search",
    text: "Your site and Google Business Profile are built around the searches your real customers use, like \"[service] near me,\" not just what looks good.",
  },
  {
    title: "The guarantee protects you, not us",
    text: "If your site and Google Business Profile aren't live within 2 weeks of you providing content, you get a free month of monitoring. No fine print.",
  },
];

function CaseStudy() {
  return (
    <Element name="why-us">
      <section id="why-us" className="py-20 bg-s2">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="caption text-p3 uppercase tracking-wider mb-4">Why work with us</p>
          <h2 className="h3 max-md:h5 text-p4 mb-4">
            Be the Business We Build Our Reputation On
          </h2>
          <p className="body-1 text-p5 max-w-2xl mx-auto mb-12">
            We are taking on a small number of local service businesses right now to prove this works, in detail, in your service area. That means more direct attention on your project, not less.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left mb-14">
            {REASONS.map(({ title, text }) => (
              <div key={title} className="rounded-2xl border-2 border-s3 g7 p-6">
                <h3 className="text-p4 font-bold text-base mb-3">{title}</h3>
                <p className="body-3 text-p5">{text}</p>
              </div>
            ))}
          </div>

          <Button href="https://cal.com/ella-tech-7ze7wk" containerClassName="inline-block mx-auto">
            Get Found Locally
          </Button>

          <p className="mt-6">
            <Link
              to="/web-projects"
              className="text-p1 font-semibold text-sm uppercase tracking-wide hover:underline"
            >
              See examples of our website work &rarr;
            </Link>
          </p>
        </div>
      </section>
    </Element>
  );
}

export default CaseStudy;
