import { Element } from "react-scroll";
import { secondaryServices } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

function Services() {
  return (
    <section id="tech-services" className="py-16 bg-s1">
      <Element name="tech-services">
        <div className="container max-w-3xl mx-auto">
          {secondaryServices.map(({ id, caption, title, text, button }) => (
            <div
              key={id}
              className="rounded-3xl border-2 border-s3 g7 px-8 py-10 max-md:px-5 max-md:py-8"
            >
              <p className="caption text-p3 uppercase tracking-wider mb-4">{caption}</p>

              <h2 className="h4 text-p4 mb-5">{title}</h2>

              <p className="body-1 text-p5 mb-8">{text}</p>

              <Button
                to={button.path}
                containerClassName="self-start"
              >
                {button.title}
              </Button>
            </div>
          ))}
        </div>
      </Element>
    </section>
  );
}

export default Services;
