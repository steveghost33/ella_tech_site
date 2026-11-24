const TESTIMONIALS = [
  {
    name: "Erica",
    title: "Executive Director",
    org: "Metro Detroit Nonprofit",
    quote:
      "We had years of donor data living in spreadsheets and no consistent way to track touchpoints. Ella Tech walked us through three CRM options based on our actual budget and team size. We went with Bloomerang, and they handled the full migration, cleaned our data, and trained the whole team. We closed our last campaign with better tracking than we'd had in ten years of operations.",
  },
  {
    name: "Jason",
    title: "Operations Director",
    org: "Michigan Services Company",
    quote:
      "Our team was using personal Gmail accounts and a shared hosting email that went down every few months. Ella Tech migrated us to Microsoft 365 in about three weeks with zero lost email. The SharePoint setup alone changed how we collaborate, files are actually where they're supposed to be now.",
  },
  {
    name: "Lisa",
    title: "Development Director",
    org: "Detroit-Area Nonprofit",
    quote:
      "Our old website hadn't been touched in four years and it showed, grant reviewers were looking at it. They rebuilt it from scratch: clean, fast, and it actually explains what we do in the first sentence. Two funders have mentioned the website specifically in conversations since we launched.",
  },
  {
    name: "Marcus",
    title: "Program Director",
    org: "Southeast Michigan Nonprofit",
    quote:
      "Our staff was nervous about AI tools, some people thought it was going to replace them. Ella Tech ran a half-day training that met people where they were, addressed the real concerns, and showed specific tools that cut admin work. Three months later our program team is drafting grant narratives and meeting summaries in half the time.",
  },
  {
    name: "Rachel",
    title: "Founder",
    org: "Detroit Consulting Firm",
    quote:
      "I'd been handling everything myself, website, systems, tools, and it was slowing down the business. What I needed wasn't someone to fix problems as they came up. I needed someone to look at the whole picture and tell me what to build next. That's what Ella Tech does. They think like a strategic partner, not a vendor.",
  },
  {
    name: "Sarah",
    title: "HR Manager",
    org: "Michigan Nonprofit",
    quote:
      "We had no consistent way to onboard new staff, everyone learned the job differently depending on who trained them. Ella Tech built us an LMS that houses our orientation materials, policy trainings, and program documentation. New hires now go through the same process every time, and managers aren't starting from scratch with each person.",
  },
];

function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="py-20 bg-s1">
      <div className="container">
        <p className="caption text-p3 uppercase tracking-wider mb-4 text-center">What clients say</p>
        <h2 className="h3 max-md:h5 text-p4 mb-12 text-center">Results from organizations like yours</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ name, title, org, quote }) => (
            <div
              key={name}
              className="rounded-2xl border-2 border-s3 g7 p-8 flex flex-col"
            >
              <p className="body-1 text-p5 italic mb-8 flex-1">&ldquo;{quote}&rdquo;</p>
              <div className="border-t border-s3/40 pt-5">
                <p className="text-p4 font-semibold text-sm">{name}</p>
                <p className="text-p5/60 text-xs mt-0.5">{title}, {org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
