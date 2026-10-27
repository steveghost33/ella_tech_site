import { BUSINESS_NAME, SITE_URL } from "./site.js";

export const webProjectsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Creation & CRM Strategy",
  serviceType: "Website Design and CRM Implementation",
  description:
    "Custom websites and CRM systems built for nonprofits, small businesses, and mission-driven organizations.",
  provider: {
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    url: SITE_URL,
  },
  areaServed: ["Detroit, MI", "United States", "International"],
  url: `${SITE_URL}/web-projects`,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Web Projects",
        item: `${SITE_URL}/web-projects`,
      },
    ],
  },
};

export const webProjects = [
  {
    title: "Ella Tech Solutions Website",
    img: "/images/projects/ellatech.png",
    desc:
      "A modern SaaS-style website built for a technology consulting firm. Showcases services, pricing, and client intake - optimized for nonprofit and small business audiences.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "/",
    internal: true,
    skills: {
      Languages: [
        "JavaScript (JSX): all React components, pages, sections, hooks, and utilities",
        "CSS: global styles and design tokens via src/index.css",
        "HTML: index.html entry point and semantic markup",
        "JSON: config files and contacts.json data store",
      ],
      Frontend: [
        "React 19: UI framework powering all components and pages",
        "React Router DOM v7: client-side routing across all pages",
        "Tailwind CSS v3: utility-first styling with PostCSS and Autoprefixer",
        "React Helmet Async: per-page SEO meta tags",
        "Axios: HTTP requests for contact form and lead capture",
        "Cal.com embed: booking widget integration",
        "react-scroll: smooth scroll-to-section behavior",
        "clsx: conditional className utility",
        "Vite: dev server, HMR, and optimized production builds",
      ],
      Backend: [
        "Node.js / Express: REST API server (server/index.js)",
        "PostgreSQL (pg): database for contacts and leads",
        "Nodemailer / Resend: transactional email delivery",
        "fs-extra: file system operations with contacts.json fallback",
        "CORS: cross-origin request handling",
      ],
      "SEO / Tooling": [
        "JSON-LD structured data: schemas for Organization, Service, Article, FAQPage, BreadcrumbList",
        "Sitemap & robots.txt: search engine crawl configuration",
        "ESLint: linting with React-specific plugins",
        "Netlify: deployment with _headers and _redirects configuration",
      ],
    },
  },
  {
    title: "Build by Steven",
    img: "/images/projects/build-by-steven.png",
    desc:
      "A personal brand and portfolio website focused on clear project presentation, responsive performance, and a polished client-facing experience.",
    tags: ["React", "Tailwind CSS", "Vite"],
    link: "https://www.buildbysteven.com",
    internal: false,
    skills: {
      Languages: [
        "JavaScript (JSX): all source code: components, pages, sections, and data",
        "CSS: global styles via src/index.css",
        "HTML: index.html entry point",
        "SVG / XML: icons, social logos, and background graphics",
      ],
      "Frameworks & Libraries": [
        "React 19: UI framework",
        "React Router DOM v7: client-side routing",
        "Tailwind CSS v3: utility-first styling",
        "react-scroll: smooth in-page anchor scrolling",
        "clsx: conditional className utility",
      ],
      "Build & Tooling": [
        "Vite 6: dev server and bundler",
        "PostCSS + Autoprefixer: CSS processing pipeline",
        "ESLint: code linting and style enforcement",
      ],
      Architecture: [
        "Fully static frontend: no backend, no database, pure SPA",
        "Component library: Button, ProjectCard, SectionHeading, SocialLink, ThemeToggle, and more",
        "Static data layer: all content sourced from src/data/portfolio.js",
      ],
    },
  },
  {
    title: "Tone Finder",
    img: "/images/projects/tone-finder.png",
    desc:
      "A mobile app for live sound that gives musicians exact amp, drum, vocal, and room settings from a short questionnaire, then listens through the mic and suggests what to change. Currently in TestFlight beta.",
    tags: ["React Native", "Expo", "TypeScript"],
    link: "/#contact",
    internal: true,
    cta: "Ask About It",
    skills: {
      Languages: [
        "TypeScript: app screens, the tone-matching engine, and the audio analysis code",
      ],
      "Mobile Frontend": [
        "React Native 0.81 + Expo SDK 54: cross-platform app with an iOS TestFlight beta",
        "Expo Router: file-based navigation across tabs, questionnaire, and results screens",
        "NativeWind (Tailwind CSS): shared styling tokens and a dark theme",
        "Reanimated and React Native SVG: animated knob and gauge visuals",
      ],
      "Audio & Engine": [
        "expo-audio: records mic clips for Sound Check and Tone Snapshots",
        "Pure-TypeScript FFT: octave-band balance and resonant peak detection with no native audio dependency",
        "Rule-based settings engine: amp knobs, drum tuning, and PA channel strips from 8 questions",
      ],
      "Data & Services": [
        "Zustand: questionnaire, profile, and settings state",
        "expo-sqlite and AsyncStorage: offline tone profiles saved on device",
        "RevenueCat (react-native-purchases): in-app purchase for the Pro tier",
        "Claude API via a small proxy server: optional AI sound engineer that never ships an API key in the app",
      ],
      "Release & Tooling": [
        "EAS Build and EAS Update: TestFlight builds and over-the-air JavaScript updates",
        "Node test runner with tsx: unit tests for the engine",
      ],
    },
  },
  {
    title: "Team Cabin",
    img: "/images/projects/teamcabin.png",
    desc:
      "A website for an indie music band built with visitor engagement at the center. Features an interactive game so fans can connect with the brand beyond just listening.",
    tags: ["Web Design", "Music", "Interactive"],
    link: "https://weareteamcabin.com",
    internal: false,
    skills: {
      Frontend: [
        "React 18: component-based UI with custom hooks (useMobile, useFullscreen), responsive layout switching between mobile and desktop views",
        "Vite: modern build tooling and dev server setup",
        "Vanilla CSS: design system using CSS variables, modular per-component stylesheets, responsive design",
        "HTML5 Canvas / Game Development: built a browser game (GameEngine.js, renderer.js, sprites.js) from scratch with a custom game loop, sprite rendering, and pixel art characters",
      ],
      Backend: [
        "Python / Flask: REST API with two endpoints (POST /scores, GET /scores, GET /high-score)",
        "SQLite: relational database schema design, parameterized queries (safe from SQL injection)",
        "Flask-CORS: cross-origin resource sharing for decoupled frontend/backend",
        "Gunicorn: production WSGI server configuration for deployment",
      ],
      "DevOps / Platform": [
        "Vercel: frontend deployment with custom headers (_headers) and routing config (vercel.json)",
        "Render: backend deployment with environment variable configuration",
        "SEO: sitemap.xml, robots.txt, canonical URL, apple-touch-icon for discoverability and PWA readiness",
      ],
      Architecture: [
        "Full-stack separation: decoupled SPA frontend + stateless REST API backend",
        "Mobile-first responsive design: dedicated mobile layout with fullscreen game support",
        "In-game leaderboard: real-time score persistence and retrieval across sessions",
      ],
    },
  },
];

export const webProjectCapabilities = [
  {
    title: "Nonprofit Websites",
    desc: "Designed for lean teams and limited budgets. We build sites your staff can update and your donors can trust. Mission-driven pricing available.",
  },
  {
    title: "Small Business Sites",
    desc: "Clean, fast, mobile-first websites that generate leads and reflect your brand. Book a consultation to discuss scope and pricing.",
  },
  {
    title: "CRM Integration",
    desc: "We connect your website to your CRM (Customer Relationship Management) system so contact forms, intake flows, and donor tracking actually work together.",
  },
  {
    title: "Ongoing Support",
    desc: "Retainer options available so your site stays updated, secure, and working after launch. Book a consultation to discuss support plans.",
  },
];
