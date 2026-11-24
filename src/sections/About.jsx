import Button from "../components/Button.jsx";
import { BOOKING_PATH } from "../data/site.js";

function About() {
  return (
    <section id="about" className="py-20 bg-s1 scroll-mt-[140px]">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <img
            src="/images/steven-bowman.jpg"
            alt="Steven Bowman, founder of Ella Tech Solutions"
            width="400"
            height="400"
            loading="lazy"
            className="h-32 w-32 md:h-40 md:w-40 flex-shrink-0 rounded-full object-cover border-2 border-p1/40"
          />
          <div>
            <p className="caption text-p3 uppercase tracking-wider mb-4">About</p>
            <h2 className="h3 max-md:h5 text-p4 mb-6">I&rsquo;m Steven Bowman, and I run Ella Tech Solutions from Detroit.</h2>
            <p className="body-1 text-p5 mb-5">
              I spent 15 years working in education, learning design and technology. I led learning systems for a large school district, and I directed learning and development at a Detroit nonprofit. Much of that work came down to the same job: choosing tools that fit how people actually work, setting them up, and teaching staff to use them with confidence.
            </p>
            <p className="body-1 text-p5 mb-8">
              That is the work I do now, for nonprofits, community organizations and local businesses. When you reach out, you talk with me.
            </p>
            <Button href={BOOKING_PATH}>Book a free conversation</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
