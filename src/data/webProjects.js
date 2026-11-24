import { BUSINESS_NAME, SITE_URL } from "./site.js";

export const webProjectsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Work",
  description:
    "Websites and systems built by Steven Bowman of Ella Tech Solutions, plus a clearly labeled demonstration build.",
  publisher: {
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    url: SITE_URL,
  },
  url: `${SITE_URL}/web-projects`,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/web-projects` },
    ],
  },
};

// Each entry: what was built, what it does, what comes next.
// `published: false` keeps an entry off the live site until it is confirmed.
export const workEntries = [
  {
    id: "team-cabin",
    published: true,
    title: "Team Cabin website",
    img: "/images/projects/teamcabin.png",
    imgAlt: "Screenshot of the Team Cabin band website",
    link: "https://weareteamcabin.com",
    linkLabel: "Visit weareteamcabin.com",
    built: "A single page website for Team Cabin, my band, built with React and Vite.",
    does: "Gives fans one place to find the band's music on streaming services and see upcoming shows.",
    next:
      "Add an email signup so fans hear about new shows. Connect the show list to a shared calendar so the band can update dates without editing the site. Add a short page for venues with photos and a bio.",
  },
  {
    id: "demo-facility-rentals",
    // Hidden until the demo exists and works. Set to true once confirmed.
    published: false,
    label: "Demonstration build. Not a client project.",
    title: "Facility rentals and volunteer waivers",
    builtPlaceholder:
      "a working demo of a facility rental request, staff approval, then Stripe payment flow, plus a signed volunteer waiver, once built",
    does:
      "A sample system that shows how a parks conservancy or community organization could handle facility rentals and volunteer waivers online. A renter submits a request, a staff member approves or declines it, and the renter pays by card through Stripe. Volunteers sign a waiver online, and the signed copy is saved with their record. It runs on test data only.",
  },
];

export const publishedWork = workEntries.filter((e) => e.published);
