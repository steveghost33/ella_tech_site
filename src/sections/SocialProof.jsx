const stats = [
  {
    value: "15+",
    label: "Years in tech\nleadership",
  },
  {
    value: "100%",
    label: "Remote-capable,\nnationwide",
  },
  {
    value: "Mission\nDriven",
    label: "Nonprofits and\nsmall businesses",
  },
];

const SocialProof = () => {
  return (
    <section className="py-16 bg-s1">
      <div className="container">
        <div className="relative flex md:flex-row flex-col gap-4 border-2 border-s3 rounded-7xl md:overflow-hidden g7 max-md:border-none max-md:rounded-none max-md:g0">
          {stats.map(({ value, label }, i) => (
            <div
              key={i}
              className={`flex-1 flex flex-col items-center justify-center text-center px-8 py-10 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl ${
                i < stats.length - 1
                  ? "md:border-r-2 md:border-r-s3"
                  : ""
              }`}
            >
              <p className="h3 text-p4 mb-3 whitespace-pre-line leading-tight">
                {value}
              </p>
              <p className="caption text-p3 whitespace-pre-line leading-snug">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
