// src/constants/index.jsx

export const services = [
  {
    id: "0",
    icon: "/images/feature-1.png",
    caption: "Your online presence, finally working.",
    title: "Website Build and CRM Setup",
    text: "Stop sending people to a site that does not reflect your organization. We build clean, fast websites and set up a CRM (Customer Relationship Management system) so your team can track donors, clients, and contacts without living in spreadsheets.",
    button: {
      icon: "/images/magictouch.svg",
      title: "View Web Projects",
      path: "/web-projects",
    },
  },
  {
    id: "1",
    icon: "/images/feature-2.png",
    caption: "Tech your staff will actually use.",
    title: "Training, Automation, and Learning Systems",
    text: "We set up Microsoft 365, build staff training platforms using an LMS (Learning Management System), and automate the repetitive tasks eating your team's time. Every implementation includes hands-on training so nothing sits unused.",
    button: {
      icon: "/images/docs.svg",
      title: "See Tech Solutions",
      path: "/tech-solutions",
    },
  },
];

export const details = [
  {
    id: "0",
    icon: "/images/detail-1.png",
    title: "CRM Setup and Training",
  },
  {
    id: "1",
    icon: "/images/detail-2.png",
    title: "Microsoft 365 Onboarding",
  },
  {
    id: "2",
    icon: "/images/detail-3.png",
    title: "LMS Development",
  },
  {
    id: "3",
    icon: "/images/detail-4.png",
    title: "AI Workflow Automation",
  },
];

export const faq = [
  {
    id: "0",
    question: "What is the actual difference between Get Found, Get Called, and Own the Area?",
    answer:
      "Get Found gets your business a website and an optimized Google Business Profile so people searching nearby can find you. Get Called adds expanded local SEO and AEO (AI answer engine optimization), so you also show up when people use AI tools to find a business like yours, plus a review generation strategy. Own the Area builds on both with ongoing content, competitor tracking, and monthly reporting so you stay ahead of competitors over time, not just at launch. The monthly care plan scales with the tier too, since the amount of ongoing work scales with it.",
  },
  {
    id: "1",
    question: "What does \"AEO\" mean, and why does it matter for a local business?",
    answer:
      "AEO stands for AI answer engine optimization. When someone asks an AI tool like ChatGPT or Google's AI Overviews to recommend a business near them, AEO is what makes sure your business shows up in that answer with the right hours, service area, and phone number. More customers are starting their search in an AI chat instead of typing into Google, and a site that is not set up correctly simply will not get mentioned.",
  },
  {
    id: "2",
    question: "What is the 2-week guarantee?",
    answer:
      "If your site and Google Business Profile are not live within 2 weeks of you providing the content we ask for (your business info, photos, and any text you want included), you get a free month of monitoring. The clock starts once we have what we need from you, so the fastest way to launch fast is to send your content right away.",
  },
  {
    id: "3",
    question: "How much does this cost?",
    answer:
      "Every plan is flat-fee: one set price to build, then one flat monthly care plan. No hourly billing and no surprise add-ons. Because every business needs something a little different, we don't post a one-size-fits-all number. Book a free 30-minute call (or take the free Tech Health Check first) and you'll get a clear, written flat-fee quote before you commit to anything.",
  },
  {
    id: "4",
    question: "I already have a website. Do I need a new one, or can you just fix my SEO?",
    answer:
      "It depends on what is underneath your current site. Some sites just need the SEO and Google Business Profile work, others are built in a way that makes good SEO impossible without a rebuild. On the consultation call, we will look at your current site and tell you honestly which is the case before recommending anything.",
  },
  {
    id: "5",
    question: "What kind of businesses do you work with?",
    answer:
      "Local, service-based businesses, plumbers, HVAC, auto repair, towing, salons, and similar trades that depend on people nearby finding them and calling. If you rely on local search and phone calls to bring in customers, this is built for you.",
  },
  {
    id: "6",
    question: "How long does it take from start to launch?",
    answer:
      "Most sites are live within 2 weeks of us receiving your content, that is the guarantee. The timeline depends on how quickly you can send your business details, photos, and any text you want on the site. The faster you provide that, the faster you are live.",
  },
  {
    id: "7",
    question: "What happens after my site launches? Is there ongoing cost?",
    answer:
      "Yes, and it's one flat monthly fee. Every plan includes a care plan that covers hosting, monitoring, and keeping your Google Business Profile and SEO work current. The monthly fee is locked in on your written quote, scales with how much ongoing work your plan includes, and never comes with surprise add-on fees.",
  },
  {
    id: "8",
    question: "Do you offer anything besides websites and SEO?",
    answer:
      "Yes. We help with lead routing automation, CRM setup, Microsoft 365, and staff training for anyone who needs it, not just website clients. That said, if you do not have leads coming in yet, we will usually recommend starting with your site and local search, since automation only pays off once you have inquiries to manage.",
  },
  {
    id: "9",
    question: "How do I get started?",
    answer:
      "Book a free 30-minute consultation. We will look at where your business currently shows up, or does not, in local search, recommend which plan fits, and give you a clear, written flat-fee quote. No pressure to move forward.",
  },
];

export const plans = [
  {
    id: "get-found",
    title: "Get Found",
    bestFor: "Best for: getting on the map",
    description:
      "Show up when someone nearby searches for what you do. A fast, mobile-friendly website and a fully optimized Google Business Profile, built so local customers can find you and call.",
    details: [
      "Mobile-friendly website built around local search",
      "Google Business Profile setup and optimization",
      "Local SEO foundation: location pages, listings, structured data",
      "Live within 2 weeks of receiving your content, guaranteed",
    ],
  },
  {
    id: "get-called",
    title: "Get Called",
    bestFor: "Best for: turning searches into calls",
    description:
      "Rank locally and show up in AI answer engines. Everything in Get Found, plus the SEO and AEO work that puts you in front of customers searching on Google and asking AI tools for a recommendation.",
    details: [
      "Everything in Get Found",
      "Expanded local SEO across more search terms and service areas",
      "AEO (AI answer engine optimization) so AI tools surface your business",
      "Review generation strategy to build local trust signals",
    ],
  },
  {
    id: "own-the-area",
    title: "Own the Area",
    bestFor: "Best for: staying ahead of competitors",
    description:
      "Be the obvious local choice, consistently. Everything in Get Called, plus the ongoing content and optimization that keeps you ahead of competitors in your service area month after month.",
    details: [
      "Everything in Get Called",
      "Ongoing content built to target more local searches over time",
      "Competitor monitoring and rank tracking for your service area",
      "Priority support and monthly performance reporting",
    ],
  },
];

export const secondaryServices = [
  {
    id: "0",
    icon: "/images/feature-2.png",
    caption: "Already have leads coming in?",
    title: "Tech Setup and CRM Automation",
    text: "We also handle the tech side once leads start coming in: automating lead routing, setting up a CRM to track every call and contact, building follow-up sequences so nothing falls through the cracks, plus Microsoft 365 setup, staff training, and workflow automation. If your site is already pulling in leads, or you just have a specific tech question, we handle that too.",
    button: {
      icon: "/images/docs.svg",
      title: "Not Sure if You Need This Yet? Start With Your Site First",
      path: "/tech-solutions",
    },
  },
];

export const socials = [
  { id: "1", title: "LinkedIn", icon: "/images/socials/linkedin.svg", url: "https://www.linkedin.com/company/ella-tech-solutions" },
  { id: "2", title: "Instagram", icon: "/images/socials/instagram.svg", url: "https://www.instagram.com/ellatechdetroit/" },
  { id: "3", title: "Discord", icon: "/images/socials/discord.svg", url: "https://discord.gg/4tkGK7YE" },
];
