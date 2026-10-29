import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageSEO from "../components/PageSEO.jsx";
import PageShell from "../components/PageShell.jsx";
import Button from "../components/Button.jsx";
import { getPostBySlug, getRelatedPosts } from "../data/blogPosts.js";
import { SITE_URL } from "../data/site.js";
import { useScrollToHash } from "../hooks/useScrollToHash.js";

function formatDate(dateStr) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  useScrollToHash({ defaultToTop: true });

  if (!post) {
    return (
      <PageShell mainClassName="overflow-hidden pt-[140px] sm:pt-[200px] min-h-screen bg-s1">
        <div className="container max-w-3xl mx-auto px-6 py-20 text-center font-poppins">
          <p className="text-p1 text-sm font-semibold uppercase tracking-widest mb-4">404</p>
          <h1 className="h2 text-p4 mb-6">Post not found</h1>
          <p className="body-1 text-p5 mb-8">
            The post you're looking for doesn't exist or has been moved.
          </p>
          <Button to="/blog" containerClassName="inline-block mx-auto">
            Back to Blog
          </Button>
        </div>
      </PageShell>
    );
  }

  const relatedPosts = getRelatedPosts(post);
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE_URL}${post.featuredImage}`,
    datePublished: `${post.publishDate}T00:00:00-04:00`,
    dateModified: `${post.updatedDate}T00:00:00-04:00`,
    author: {
      "@type": "Person",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Ella Tech Solutions",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/ellalogo.png`,
      },
    },
    url: canonicalUrl,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl },
      ],
    },
  };

  return (
    <>
      <PageSEO
        title={`${post.title} | Ella Tech Solutions`}
        description={post.metaDescription}
        canonical={canonicalUrl}
        ogImage={`${SITE_URL}${post.featuredImage}`}
        schema={schema}
      />
      <Helmet>
        <meta property="og:type" content="article" />
        <meta name="keywords" content={post.tags.join(", ")} />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:modified_time" content={post.updatedDate} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
      </Helmet>

      <PageShell mainClassName="overflow-hidden pt-[140px] sm:pt-[200px] min-h-screen bg-s1">
        <article className="relative pt-12 pb-32 bg-s1 font-poppins">
          <div className="container max-w-3xl mx-auto px-6">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-p5/60 mb-8 flex-wrap">
              <Link to="/" className="hover:text-p1 transition-colors">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/blog" className="hover:text-p1 transition-colors">Blog</Link>
              <span aria-hidden="true">/</span>
              <span className="text-p5/40 truncate max-w-[180px] sm:max-w-xs">{post.title}</span>
            </nav>

            {/* Category + meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-p1 bg-p1/10 border border-p1/20 rounded-full px-3 py-1">
                {post.category}
              </span>
              <span className="text-sm text-p5/50">{formatDate(post.publishDate)}</span>
              <span className="text-p5/30" aria-hidden="true">·</span>
              <span className="text-sm text-p5/50">{post.readingTime} min read</span>
              <span className="text-p5/30" aria-hidden="true">·</span>
              <span className="text-sm text-p5/50">By {post.author}</span>
            </div>

            {/* Title */}
            <h1 className="h2 text-p4 mb-8 leading-tight">{post.title}</h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-s3/30">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-p5/60 bg-s2/70 border border-s3/40 rounded-full px-3 py-1"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Post content */}
            <div
              className="blog-content mb-16"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA block */}
            <div className="rounded-3xl border border-p1/30 bg-s2/60 p-8 md:p-10 mb-16 text-center">
              <p className="text-p1 font-semibold uppercase tracking-wide text-xs mb-3">
                Work With Us
              </p>
              <h2 className="h4 text-p4 mb-4">{post.ctaHeading}</h2>
              <p className="body-1 text-p5 max-w-xl mx-auto mb-8">{post.ctaBody}</p>
              <Button href="https://cal.com/ella-tech-7ze7wk" containerClassName="inline-block mx-auto">
                {post.ctaButton}
              </Button>
            </div>

            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <div>
                <h2 className="h4 text-p4 mb-6">Related Reading</h2>
                <div className="space-y-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/blog/${related.slug}`}
                      className="block rounded-2xl border border-s3/40 bg-s2/50 p-6 hover:border-p1/40 transition-colors group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-p1 bg-p1/10 border border-p1/20 rounded-full px-3 py-1">
                          {related.category}
                        </span>
                        <span className="text-xs text-p5/50">{related.readingTime} min read</span>
                      </div>
                      <h3 className="font-semibold text-p4 group-hover:text-p1 transition-colors leading-snug mb-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-p5/70 line-clamp-2">{related.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
        </article>
      </PageShell>
    </>
  );
}

export default BlogPost;
