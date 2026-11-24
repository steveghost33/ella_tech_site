import Placeholder from "./Placeholder.jsx";

function WorkEntry({ entry }) {
  const { label, title, img, imgAlt, link, linkLabel, built, builtPlaceholder, does, next, nextPlaceholder } = entry;

  return (
    <article className="bg-s2 rounded-2xl border border-white/10 overflow-hidden flex flex-col md:flex-row">
      {img && (
        <div className="md:w-2/5 bg-s1 flex items-center justify-center p-4">
          <img src={img} alt={imgAlt ?? ""} loading="lazy" className="max-h-64 w-auto object-contain rounded-lg" />
        </div>
      )}
      <div className="p-6 md:p-8 flex-1">
        {label && (
          <p className="inline-block mb-3 rounded-full border border-p3/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-p3">
            {label}
          </p>
        )}
        <h3 className="h5 text-p4 mb-4">{title}</h3>
        <dl className="space-y-3 body-3 text-p5">
          <div>
            <dt className="font-semibold text-p4">What I built</dt>
            <dd>
              {built} {builtPlaceholder && <Placeholder>{builtPlaceholder}</Placeholder>}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-p4">What it does</dt>
            <dd>{does}</dd>
          </div>
          {next && (
            <div>
              <dt className="font-semibold text-p4">What I&rsquo;d do next</dt>
              <dd>
                {next} {nextPlaceholder && <Placeholder>{nextPlaceholder}</Placeholder>}
              </dd>
            </div>
          )}
        </dl>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 text-p1 font-semibold text-sm uppercase tracking-wide hover:underline"
          >
            {linkLabel} &rarr;
          </a>
        )}
      </div>
    </article>
  );
}

export default WorkEntry;
