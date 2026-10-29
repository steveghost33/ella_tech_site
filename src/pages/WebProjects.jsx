import { useState } from "react";
import Button from "../components/Button.jsx";
import PageSEO from "../components/PageSEO.jsx";
import PageShell from "../components/PageShell.jsx";
import {
  webProjectCapabilities,
  webProjects,
  webProjectsSchema,
} from "../data/webProjects.js";
import { useScrollToHash } from "../hooks/useScrollToHash.js";

function ProjectCard({ proj }) {
  const [skillsOpen, setSkillsOpen] = useState(false);
  const skillsPanelId = `skills-${proj.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div className="bg-s2 rounded-2xl shadow-lg overflow-hidden flex flex-col">
      <div className="w-full h-48 md:h-56 bg-s1 rounded-xl m-3 flex items-center justify-center">
        <img
          src={proj.img}
          alt={proj.title}
          className="max-w-[calc(100%-1.5rem)] max-h-[calc(100%-1.5rem)] object-contain"
        />
      </div>

      <div className="p-6 pt-3 flex-1 flex flex-col">
        <h3 className="h5 text-p4 mb-2">{proj.title}</h3>
        <p className="body-3 text-p5 flex-1 mb-4">{proj.desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {proj.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full border border-white/20 text-p3 uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Skills toggle */}
        {proj.skills && (
          <div className="mb-4">
            <button
              type="button"
              onClick={() => setSkillsOpen((o) => !o)}
              aria-expanded={skillsOpen}
              aria-controls={skillsPanelId}
              className="flex items-center gap-2 text-xs font-semibold text-p3 uppercase tracking-wide border border-white/20 rounded-full px-3 py-1 hover:bg-white/5 transition-colors"
            >
              Technical Skills
              <span className="text-base leading-none" aria-hidden="true">{skillsOpen ? "−" : "+"}</span>
            </button>

            {skillsOpen && (
              <div id={skillsPanelId} className="mt-4 space-y-4">
                {Object.entries(proj.skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-xs font-bold text-p4 uppercase tracking-wider mb-2">
                      {category}
                    </h4>
                    <ul className="space-y-1">
                      {items.map((item) => {
                        const colonIdx = item.indexOf(": ");
                        const label = colonIdx > -1 ? item.slice(0, colonIdx) : item;
                        const detail = colonIdx > -1 ? item.slice(colonIdx + 2) : null;
                        return (
                          <li key={label} className="text-xs text-p5 leading-relaxed">
                            <span className="font-semibold text-p3">{label}</span>
                            {detail && (
                              <span className="text-p5">: {detail}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {proj.internal ? (
          <Button
            to={proj.link}
            containerClassName="mt-auto self-start"
          >
            {proj.cta ?? "View Project"}
          </Button>
        ) : (
          <Button
            href={proj.link}
            containerClassName="mt-auto self-start"
          >
            View Project
          </Button>
        )}
      </div>
    </div>
  );
}

function WebProjects() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <PageSEO
        title="Web Design Projects | Ella Tech Solutions"
        description="Custom websites built for nonprofits, small businesses, and entrepreneurs. Detroit-founded, serving organizations nationwide with responsive, fast sites."
        canonical="https://www.ellatechsolutions.com/web-projects"
        schema={webProjectsSchema}
      />

      <PageShell mainClassName="overflow-hidden pt-[140px] sm:pt-[200px] min-h-screen bg-s1">
        <section
          id="hero"
          className="relative pt-16 pb-24 max-lg:pt-12 max-lg:pb-20 max-md:pt-10 max-md:pb-16 bg-s1 font-poppins text-p5"
        >
          {/* Hero Banner */}
          <div
            className="relative h-[350px] w-full overflow-hidden rounded-3xl mb-20"
            style={{
              backgroundImage: "url('/images/web-projects-hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 container h-full flex flex-col justify-center items-center text-center">
              <h1 className="h1 text-white drop-shadow-xl mb-4">
                Web Projects
              </h1>
              <p className="body-1 text-white drop-shadow-lg max-w-2xl">
                Custom websites built for nonprofits, small businesses, and mission-driven organizations, wherever you are.
              </p>
            </div>
          </div>

          {/* What we build */}
          <div className="container mb-20">
            <h2 className="h3 text-p4 mb-4 text-center">What We Build</h2>
            <p className="body-1 text-p5 text-center max-w-2xl mx-auto mb-12">
              Every site we build is responsive, fast, and designed so your team can manage it without calling a developer for every update. We do not use generic templates. We build around your audience, your mission, and your workflow.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {webProjectCapabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="bg-s2 rounded-2xl p-6 border border-white/10"
                >
                  <h3 className="h5 text-p4 mb-2">{cap.title}</h3>
                  <p className="body-3 text-p5">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Cards */}
          <div className="container mb-20">
            <h2 className="h3 text-p4 mb-10 text-center">Recent Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {webProjects.map((proj) => (
                <ProjectCard key={proj.title} proj={proj} />
              ))}
            </div>
          </div>

          <div className="container mb-20">
            <div className="bg-s2 rounded-3xl p-10 md:p-14 border border-white/10 max-w-3xl mx-auto text-center">
              <h2 className="h3 text-p4 mb-4">Mission-Driven Pricing Available</h2>
              <p className="body-1 text-p5 mb-2">
                We offer mission-driven pricing for verified 501(c)(3) nonprofits and community-based organizations. Every project is scoped and quoted based on your specific needs and organization type.
              </p>
              <p className="body-3 text-p5">
                Book a consultation to discuss your project and get a straightforward quote.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="container text-center mb-32">
            <h2 className="h4 mb-4">Ready to start your project?</h2>
            <p className="body-1 mb-6 max-w-2xl mx-auto text-p5">
              Book a consultation and we will map out what your website needs to do, who it needs to serve, and how to build it within your budget.
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

export default WebProjects;
