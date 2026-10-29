// src/sections/Header.jsx

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { socials } from "../constants/index.jsx";
import { CHATBOT_EVENT_MOBILE_MENU } from "../features/chatbot/chatbotConfig.js";
import { useTheme } from "../context/ThemeContext.jsx";

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const MenuIcon = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="16" height="2" rx="1" fill="currentColor" />
    <rect y="5" width="16" height="2" rx="1" fill="currentColor" />
    <rect y="10" width="16" height="2" rx="1" fill="currentColor" />
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 18 18 6M6 6l12 12" />
  </svg>
);

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const firstDesktopNavLinkRef = useRef(null);
  const firstMobileNavLinkRef = useRef(null);
  const headerRef = useRef(null);
  const mobilePanelRef = useRef(null);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      const inHeader = headerRef.current?.contains(e.target);
      const inPanel = mobilePanelRef.current?.contains(e.target);
      if (!inHeader && !inPanel) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent(CHATBOT_EVENT_MOBILE_MENU, { detail: { open: isOpen } })
    );
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    // Both the desktop and mobile nav are mounted at once and toggled purely
    // by CSS breakpoint, so pick whichever one is actually visible in the
    // current viewport (offsetParent is null for display:none elements).
    const target = firstDesktopNavLinkRef.current?.offsetParent
      ? firstDesktopNavLinkRef.current
      : firstMobileNavLinkRef.current;
    target?.focus();
  }, [isOpen]);

  const handleLogoClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "How It Works", href: "/#services" },
    { label: "Our Website Work", href: "/web-projects" },
    { label: "Small Business Websites", href: "/services/small-business" },
    { label: "Nonprofit Websites", href: "/services/nonprofits" },
    { label: "Grant Writing", href: "/services/grant-writing" },
    { label: "Entrepreneur Websites", href: "/services/entrepreneurs" },
    { label: "Tech Setup & CRM", href: "/tech-solutions" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ];

  const ThemeToggle = ({ className = "" }) => (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={clsx(
        "notch [--notch:9px] flex items-center justify-center w-11 h-11 bg-p1/15 text-p1 hover:bg-p1 hover:text-s1 transition-colors duration-200",
        className
      )}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );

  const MenuToggle = ({ className = "" }) => (
    <button
      className={clsx(
        "notch [--notch:9px] flex h-11 flex-shrink-0 items-center justify-center gap-2 bg-p1/15 px-5 text-sm font-bold uppercase tracking-[0.08em] text-p1 hover:bg-p1 hover:text-s1 transition-colors duration-200",
        className
      )}
      onClick={() => setIsOpen((prev) => !prev)}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="site-nav-desktop site-nav-mobile"
    >
      {isOpen ? (
        <CloseIcon />
      ) : (
        <>
          <span>Menu</span>
          <MenuIcon />
        </>
      )}
    </button>
  );

  return (
    <>
      <a href="#main-content" className="sr-only">Skip to main content</a>

      <header
        ref={headerRef}
        className={clsx(
          "w-full transition-all duration-500 max-lg:bg-s1",
          hasScrolled && "bg-black-100/90 backdrop-blur-[8px]"
        )}
      >
        <div className="container relative z-[110]">
          <div className="flex items-center justify-between py-2 sm:py-5">

            {/* Logo */}
            <Link
              to="/"
              onClick={handleLogoClick}
              className="flex items-center group flex-shrink-0"
              aria-label="Ella Tech Solutions, Home"
            >
              <img
                src="/images/ellalogo.png"
                alt=""
                aria-hidden="true"
                className="h-16 w-16 sm:h-24 sm:w-24 rounded-full object-cover ring-2 ring-p1/30 group-hover:ring-p1/70 group-hover:shadow-[0_0_20px_rgba(46,242,255,0.25)] transition-all duration-300 flex-shrink-0"
              />
            </Link>

            {/* Right: Theme toggle + Menu */}
            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />
              <MenuToggle />
            </div>
          </div>

          {/* Desktop dropdown menu */}
          {isOpen && (
            <div className="relative hidden xl:block">
              <div className="absolute right-0 top-2 w-[340px] rounded-[28px] border border-white/10 bg-s2/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <nav id="site-nav-desktop" aria-label="Desktop menu">
                  <ul className="space-y-2">
                    {navLinks.map(({ label, href }, i) => (
                      <li key={label}>
                        <a
                          ref={i === 0 ? firstDesktopNavLinkRef : null}
                          href={href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between rounded-2xl px-4 py-3 text-left text-lg font-semibold uppercase tracking-[0.04em] text-p4 transition-colors duration-300 hover:bg-white/5 hover:text-p1"
                        >
                          <span>{label}</span>
                          <span className="text-p1/70">+</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="my-5 h-px bg-white/10" />

                <div className="flex items-center gap-3">
                  {socials.map(({ id, url, icon, title }) => (
                    <a
                      key={id}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit Ella Tech Solutions on ${title}`}
                      className="social-icon flex h-10 w-10 items-center justify-center rounded-full bg-s3 hover:bg-s4 transition-all duration-300"
                    >
                      <img src={icon} alt="" aria-hidden="true" className="h-5 w-5 object-contain" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile menu panel, positioned below header (80px mobile, 136px sm+) + ContactBanner (48px mobile, 52px sm+) */}
      {isOpen && (
        <div
          ref={mobilePanelRef}
          className="fixed left-0 right-0 top-[128px] sm:top-[188px] max-h-[calc(100dvh-128px)] sm:max-h-[calc(100dvh-188px)] overflow-y-auto overscroll-contain z-[99] bg-s2/98 backdrop-blur-xl border-b border-white/10 shadow-2xl xl:hidden"
        >
          <div className="container py-4">
            <nav id="site-nav-mobile" aria-label="Mobile menu">
              <ul className="space-y-1">
                {navLinks.map(({ label, href }, i) => (
                  <li key={label}>
                    <a
                      ref={i === 0 ? firstMobileNavLinkRef : null}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-4 text-base font-semibold uppercase tracking-[0.06em] text-p4 transition-colors duration-200 hover:bg-white/5 hover:text-p1"
                    >
                      <span>{label}</span>
                      <span className="text-p1/60 text-lg">+</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-3 pt-4 border-t border-white/10 flex items-center gap-3">
              {socials.map(({ id, url, icon, title }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Ella Tech Solutions on ${title}`}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-s3 hover:bg-s4 transition-all duration-300 social-icon"
                >
                  <img src={icon} alt="" aria-hidden="true" className="w-5 h-5 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
