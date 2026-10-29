import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import PageSEO from "../components/PageSEO.jsx";
import PageShell from "../components/PageShell.jsx";
import { blogPosts } from "../data/blogPosts.js";
import { useScrollToHash } from "../hooks/useScrollToHash.js";
import { SITE_URL } from "../data/site.js";

function formatDate(dateStr) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Ella Tech Solutions Blog",
  description:
    "Technology strategy and diagnostic insights for nonprofits, small businesses, and entrepreneurs. CRM readiness, website effectiveness, and digital infrastructure, in plain language.",
  url: `${SITE_URL}/blog`,
  publisher: {
    "@type": "Organization",
    name: "Ella Tech Solutions",
    url: SITE_URL,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    ],
  },
};

function Blog() {
  useScrollToHash({ defaultToTop: true });

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
  );

  return (
    <>
      <PageSEO
        title="Tech Strategy Blog | Ella Tech Solutions"
        description="Technology strategy insights for nonprofits, small businesses, and entrepreneurs: CRM readiness, website effectiveness, and digital infrastructure."
        canonical={`${SITE_URL}/blog`}
        schema={schema}
      />

      <PageShell mainClassName="overflow-hidden pt-[148px] sm:pt-[200px] min-h-screen bg-s1">
        <section className="relative pt-16 pb-32 bg-s1 font-poppins text-p5">
          <div className="container max-w-4xl mx-auto px-6">

            {/* Header */}
            <div className="mb-16">
              <p className="text-p1 text-sm font-semibold uppercase tracking-[0.18em] mb-4">
                Resources
              </p>
              <h1 className="h2 text-p4 mb-4">
                Diagnostic thinking for nonprofit and small business technology.
              </h1>
              <p className="body-1 text-p5 max-w-2xl">
                Not tutorials. Not vendor reviews. Practical diagnostic insights on why technology
                initiatives fail, and what the real problem usually is.
              </p>
            </div>

            {/* Posts listing */}
            <div className="space-y-8">
              {sortedPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-2xl border border-s3/40 bg-s2/50 p-8 hover:border-p1/30 transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-p1 bg-p1/10 border border-p1/20 rounded-full px-3 py-1">
                      {post.category}
                    </span>
                    <span className="text-sm text-p5/50">{formatDate(post.publishDate)}</span>
                    <span className="text-p5/30" aria-hidden="true">·</span>
                    <span className="text-sm text-p5/50">{post.readingTime} min read</span>
                  </div>
                  <h2 className="h4 text-p4 mb-3 leading-snug">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-p1 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="body-1 text-p5/80 mb-5">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-p5/50 bg-s2/70 border border-s3/30 rounded-full px-3 py-1"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-p1 hover:text-p2 transition-colors whitespace-nowrap"
                    >
                      Read post →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-20">
              <h2 className="h4 mb-4 text-p4">Have a technology question we haven't covered?</h2>
              <p className="body-1 mb-8 max-w-xl mx-auto text-p5">
                Book a free 30-minute consultation. We'll address your specific situation and give
                you a clear path forward, no blog post required.
              </p>
              <Button href="https://cal.com/ella-tech-7ze7wk" containerClassName="inline-block mx-auto">
                Book a Free Consultation
              </Button>
            </div>

          </div>
        </section>
      </PageShell>
    </>
  );
}

export default Blog;
