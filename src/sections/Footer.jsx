import { socials } from "../constants/index.jsx";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL } from "../data/site.js";

// Never earlier than the launch year, then follows the calendar on its own.
const currentYear = Math.max(2026, new Date().getFullYear());

const Footer = () => {
  return (
    <footer>
      {/* Secondary CTA row */}
      <div className="border-t border-s3/40 bg-s2/30">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-p4 font-semibold text-lg mb-1">Ready to get found locally? Book a free consultation.</p>
            <p className="text-p5 text-sm opacity-70">30 minutes. No pitch. Just a clear look at where you stand in local search.</p>
          </div>
          <a
            href="https://cal.com/ella-tech-7ze7wk"
            className="btn-ella group whitespace-nowrap"
          >
            Get Found Locally
            <svg className="btn-ella-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="square" aria-hidden="true">
              <path d="M2 8h11M9 3.5 13.5 8 9 12.5" />
            </svg>
          </a>
        </div>
      </div>

      {/* Audience nav row */}
      <div className="border-t border-s3/20">
        <div className="container py-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a href="/web-projects" className="text-p5 text-sm opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap">See Our Website Work</a>
          <span className="opacity-20 text-p5 hidden sm:block">|</span>
          <a href="/services/small-business" className="text-p5 text-sm opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap">Small Business Websites</a>
          <span className="opacity-20 text-p5 hidden sm:block">|</span>
          <a href="/services/nonprofits" className="text-p5 text-sm opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap">Nonprofit Websites</a>
          <span className="opacity-20 text-p5 hidden sm:block">|</span>
          <a href="/services/grant-writing" className="text-p5 text-sm opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap">Grant Writing</a>
          <span className="opacity-20 text-p5 hidden sm:block">|</span>
          <a href="/services/entrepreneurs" className="text-p5 text-sm opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap">Entrepreneur Websites</a>
          <span className="opacity-20 text-p5 hidden sm:block">|</span>
          <a href="/tech-solutions" className="text-p5 text-sm opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap">Tech Setup &amp; CRM</a>
          <span className="opacity-20 text-p5 hidden sm:block">|</span>
          <a href="/blog" className="text-p5 text-sm opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap">Blog</a>
        </div>
      </div>

      {/* Contact info row */}
      <div className="border-t border-s3/30">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <a
            href={`tel:${CONTACT_PHONE_TEL}`}
            className="text-p5 text-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            {CONTACT_PHONE}
          </a>
          <span className="opacity-30 text-p5 hidden sm:block">|</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-p5 text-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-s3/20">
        <div className="container py-6 lg:pb-6 pb-24">
          <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:gap-4">
            {/* Copyright */}
            <div className="small-compact flex flex-col items-center justify-center lg:flex-1 lg:items-start gap-1">
              <p className="opacity-70">&copy; {currentYear} ELLA TECH SOLUTIONS LLC</p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="/legal"
                className="whitespace-nowrap text-p5 transition-all duration-500 hover:text-p1 cursor-pointer"
              >
                Privacy Policy
              </a>
              <span className="text-p5 opacity-50">•</span>
              <a
                href="/terms-of-use"
                className="whitespace-nowrap text-p5 transition-all duration-500 hover:text-p1 cursor-pointer"
              >
                Terms of Use
              </a>
            </div>

            {/* Location and Socials */}
            <div className="flex items-center justify-center gap-4 lg:flex-1 lg:justify-end">
              <p className="opacity-70 text-p5 text-sm whitespace-nowrap">
                Detroit, MI
              </p>
              <span className="opacity-30 text-p5">|</span>
              <ul className="flex gap-3">
                {socials.map(({ id, url, icon, title }) => (
                  <li key={id}>
                    <a href={url} className="social-icon">
                      <img
                        src={icon}
                        alt={title}
                        className="size-1/3 object-contain"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
