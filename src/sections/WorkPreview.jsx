import { Link } from "react-router-dom";
import WorkEntry from "../components/WorkEntry.jsx";
import { publishedWork } from "../data/webProjects.js";

function WorkPreview() {
  return (
    <section id="work" className="py-20 bg-s2 scroll-mt-[140px]">
      <div className="container max-w-5xl mx-auto">
        <p className="caption text-p3 uppercase tracking-wider mb-4">Work</p>
        <h2 className="h3 max-md:h5 text-p4 mb-4">What I&rsquo;ve built</h2>
        <p className="body-1 text-p5 mb-10 max-w-3xl">
          Ella Tech Solutions is a new firm, so this section is short. It does not include client projects yet.
        </p>
        <div className="space-y-6">
          {publishedWork.map((entry) => (
            <WorkEntry key={entry.id} entry={entry} />
          ))}
        </div>
        <p className="mt-8">
          <Link to="/web-projects" className="text-p1 font-semibold text-sm uppercase tracking-wide hover:underline">
            See the full Work page &rarr;
          </Link>
        </p>
      </div>
    </section>
  );
}

export default WorkPreview;
