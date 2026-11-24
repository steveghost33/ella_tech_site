import Button from "../components/Button.jsx";
import PageSEO from "../components/PageSEO.jsx";
import PageShell from "../components/PageShell.jsx";
import WorkEntry from "../components/WorkEntry.jsx";
import { publishedWork, webProjectsSchema } from "../data/webProjects.js";
import { BOOKING_PATH } from "../data/site.js";
import { useScrollToHash } from "../hooks/useScrollToHash.js";

function WebProjects() {
  useScrollToHash({ defaultToTop: true });

  return (
    <>
      <PageSEO
        title="Work | Ella Tech Solutions"
        description="Websites and systems built by Steven Bowman of Ella Tech Solutions in Detroit, including the Team Cabin band website."
        canonical="https://www.ellatechsolutions.com/web-projects"
        schema={webProjectsSchema}
      />

      <PageShell mainClassName="overflow-hidden pt-[128px] sm:pt-[188px] min-h-screen bg-s1">
        <section className="relative pt-12 pb-24 max-md:pt-8 max-md:pb-16 bg-s1 font-poppins text-p5">
          <div className="container max-w-5xl mx-auto mb-12">
            <h1 className="h1 text-p4 mb-5 max-lg:text-5xl max-md:text-4xl">Work</h1>
            <p className="body-1 text-p5 max-w-3xl">
              Ella Tech Solutions is a new firm, so this page is short and honest. It shows a site I built and, once it is ready, a demonstration build that shows the kind of system nonprofits ask me about. It does not include client projects yet.
            </p>
          </div>

          <div className="container max-w-5xl mx-auto mb-20 space-y-6">
            {publishedWork.map((entry) => (
              <WorkEntry key={entry.id} entry={entry} />
            ))}
          </div>

          <div className="container text-center mb-16">
            <h2 className="h4 mb-4 text-p4">Have a project in mind?</h2>
            <p className="body-1 mb-8 max-w-2xl mx-auto text-p5">
              Start with a free conversation about what your website or systems need to do.
            </p>
            <Button href={BOOKING_PATH} containerClassName="inline-block mx-auto">
              Book a free conversation
            </Button>
          </div>
        </section>
      </PageShell>
    </>
  );
}

export default WebProjects;
