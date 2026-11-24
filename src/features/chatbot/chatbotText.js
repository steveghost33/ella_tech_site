import {
  BOOKING_ONLY_CTA,
  CONTACT_ONLY_CTA,
  ETS_EMAIL,
  ETS_PHONE,
} from "./chatbotConfig.js";

export const normalizeTel = (phone) => {
  const digitsOnly = String(phone || "").replace(/[^\d]/g, "");
  if (!digitsOnly) return "";
  return digitsOnly.length === 10 ? `+1${digitsOnly}` : `+${digitsOnly}`;
};

export const makeSpacing = (text) =>
  String(text || "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

export const stripContactArtifacts = (text) => {
  let value = String(text || "");
  value = value.replace(/^\s*#contact\s*$/gim, "");
  value = value.replace(/https?:\/\/\S*#contact\b/gi, "");
  value = value.replace(/\s#contact\b/gi, "");
  value = value.replace(/#contact\b/gi, "");
  return makeSpacing(value);
};

export const stripChatgptArtifacts = (text) => {
  let value = String(text || "");
  value = value.replace(/https?:\/\/(?:chat\.openai\.com|chatgpt\.com)\S*/gi, "");
  value = value.replace(/\bChatGPT\b/gi, "this assistant");
  value = value.replace(/\bOpenAI\b/gi, "");
  value = value.replace(/\bGPT\b/gi, "");
  value = value.replace(/\(\s*\)/g, "");
  value = value.replace(/[ \t]{2,}/g, " ");
  return makeSpacing(value);
};

export const ensureQuestionMarks = (text) => {
  const lines = String(text || "").split("\n");
  const fixed = lines.map((line) => {
    const trimmed = line.trim();
    if (!trimmed) return line;

    const looksLikeQuestion =
      /^(what|which|who|when|where|why|how|do you|are you|can you|could you|would you|is it|are there|does|did)\b/i.test(
        trimmed
      );
    const alreadyHasQuestionMark = trimmed.endsWith("?");
    const endsWithPunctuation = /[.:]$/.test(trimmed);

    if (looksLikeQuestion && !alreadyHasQuestionMark && !endsWithPunctuation) {
      return `${trimmed}?`;
    }

    return line;
  });

  return fixed.join("\n");
};

export const cleanBotText = (text) =>
  makeSpacing(ensureQuestionMarks(stripChatgptArtifacts(stripContactArtifacts(text))));

const normalize = (text) => String(text || "").toLowerCase().trim();
const containsAny = (text, phrases) => phrases.some((phrase) => text.includes(phrase));

export const userAskedForPhoneOrEmail = (text) => {
  const normalized = normalize(text);
  return containsAny(normalized, [
    "phone",
    "call",
    "telephone",
    "number",
    "email",
    "e-mail",
    "contact",
    "reach you",
    "reach out",
    "how do i contact",
    "how can i contact",
  ]);
};

export const intentFromText = (text) => {
  const normalized = normalize(text);

  const hasAI =
    normalized.includes("ai") ||
    normalized.includes("artificial intelligence") ||
    normalized.includes("automation") ||
    normalized.includes("workflow") ||
    normalized.includes("automate") ||
    normalized.includes("copilot") ||
    normalized.includes("chatgpt") ||
    normalized.includes("zapier") ||
    normalized.includes("make.com") ||
    normalized.includes("ai literacy") ||
    normalized.includes("ai tool");
  const hasM365 =
    normalized.includes("microsoft") ||
    normalized.includes("microsoft 365") ||
    normalized.includes("m365") ||
    normalized.includes("office 365") ||
    normalized.includes("teams") ||
    normalized.includes("sharepoint") ||
    normalized.includes("onedrive") ||
    normalized.includes("outlook");
  const hasCRM =
    normalized.includes("crm") ||
    normalized.includes("donor") ||
    normalized.includes("volunteer") ||
    normalized.includes("contact management") ||
    normalized.includes("database") ||
    normalized.includes("salesforce") ||
    normalized.includes("hubspot") ||
    normalized.includes("airtable") ||
    normalized.includes("bloomerang") ||
    normalized.includes("little green light") ||
    normalized.includes("client tracking") ||
    normalized.includes("donor management");
  const hasWebsite =
    normalized.includes("website") ||
    normalized.includes("web site") ||
    normalized.includes("web design") ||
    normalized.includes("redesign") ||
    normalized.includes("landing page") ||
    normalized.includes("wordpress") ||
    normalized.includes("squarespace") ||
    normalized.includes("webflow") ||
    normalized.includes("web page") ||
    normalized.includes("site build") ||
    normalized.includes("build a site");
  const hasLMS =
    normalized.includes("lms") ||
    normalized.includes("learning management") ||
    normalized.includes("e-learning") ||
    normalized.includes("elearning") ||
    normalized.includes("scorm") ||
    normalized.includes("articulate") ||
    normalized.includes("talentlms") ||
    normalized.includes("canvas") ||
    normalized.includes("absorb") ||
    normalized.includes("micro-learning") ||
    normalized.includes("microlearning") ||
    normalized.includes("course content") ||
    normalized.includes("training platform") ||
    normalized.includes("learning platform") ||
    normalized.includes("online training") ||
    normalized.includes("learning system");
  const hasHRIS =
    normalized.includes("hris") ||
    normalized.includes("human resources information") ||
    normalized.includes("hr system") ||
    normalized.includes("hr software") ||
    normalized.includes("hr platform") ||
    normalized.includes("hr records") ||
    normalized.includes("payroll system") ||
    normalized.includes("time off") ||
    normalized.includes("pto tracking") ||
    normalized.includes("employee records") ||
    normalized.includes("onboarding system") ||
    normalized.includes("performance management") ||
    normalized.includes("bamboohr") ||
    normalized.includes("gusto") ||
    normalized.includes("rippling") ||
    normalized.includes("hr tools") ||
    normalized.includes("hr technology");
  const hasNonprofitPricing =
    (normalized.includes("nonprofit") || normalized.includes("non-profit") || normalized.includes("501c") || normalized.includes("501(c)")) &&
    (normalized.includes("pricing") || normalized.includes("discount") || normalized.includes("rate") || normalized.includes("cost") || normalized.includes("afford") || normalized.includes("price"));
  const hasMissionDriven =
    normalized.includes("mission-driven") ||
    normalized.includes("mission driven") ||
    normalized.includes("mission driven pricing") ||
    normalized.includes("mission-driven pricing");
  const hasNonprofit =
    normalized.includes("nonprofit") ||
    normalized.includes("non-profit") ||
    normalized.includes("ngo") ||
    normalized.includes("501c") ||
    normalized.includes("community org") ||
    normalized.includes("community organization") ||
    normalized.includes("community-based");
  const hasBudget =
    normalized.includes("budget") ||
    normalized.includes("afford") ||
    normalized.includes("expensive") ||
    normalized.includes("cheap") ||
    normalized.includes("small budget") ||
    normalized.includes("no budget") ||
    normalized.includes("limited budget") ||
    normalized.includes("tight budget") ||
    normalized.includes("low budget");
  const hasDependency =
    normalized.includes("stuck") ||
    normalized.includes("dependent") ||
    normalized.includes("dependency") ||
    normalized.includes("locked in") ||
    normalized.includes("stop working") ||
    normalized.includes("after you") ||
    normalized.includes("without you") ||
    normalized.includes("on our own") ||
    normalized.includes("maintain it ourselves");
  const hasExisting =
    normalized.includes("already have") ||
    normalized.includes("start over") ||
    normalized.includes("current tools") ||
    normalized.includes("existing") ||
    normalized.includes("what we have") ||
    normalized.includes("replace") ||
    normalized.includes("already using") ||
    normalized.includes("currently using") ||
    normalized.includes("keep what");
  const hasTraining =
    normalized.includes("staff training") ||
    (normalized.includes("training") && !normalized.includes("strength training")) ||
    normalized.includes("workshop") ||
    normalized.includes("teach") ||
    normalized.includes("train staff") ||
    normalized.includes("train our team") ||
    normalized.includes("professional development") ||
    normalized.includes("upskill");
  const hasDigitalStrategy =
    normalized.includes("digital strategy") ||
    normalized.includes("tech roadmap") ||
    normalized.includes("technology roadmap") ||
    normalized.includes("technology audit") ||
    normalized.includes("tech audit") ||
    normalized.includes("gap analysis") ||
    normalized.includes("vendor selection") ||
    normalized.includes("where to start") ||
    normalized.includes("don't know where") ||
    normalized.includes("not sure where");
  const hasConsulting =
    normalized.includes("tech consulting") ||
    normalized.includes("technology consulting") ||
    normalized.includes("consulting") ||
    normalized.includes("consultant") ||
    normalized.includes("strategy") ||
    normalized.includes("advise") ||
    normalized.includes("advice");
  const hasSupport =
    normalized === "support" ||
    normalized.includes("help desk") ||
    normalized.includes("troubleshoot") ||
    normalized.includes("ongoing help") ||
    normalized.includes("it help") ||
    normalized.includes("broken") ||
    normalized.includes("it support") ||
    normalized.includes("hardware") ||
    normalized.includes("on-site") ||
    normalized.includes("helpdesk") ||
    normalized.includes("break-fix") ||
    normalized.includes("managed it");
  const hasQuote =
    normalized.includes("get a quote") ||
    normalized.includes("quote") ||
    normalized.includes("estimate") ||
    normalized.includes("pricing") ||
    normalized.includes("cost") ||
    normalized.includes("how much") ||
    normalized.includes("rate") ||
    normalized.includes("fee") ||
    normalized.includes("invoice") ||
    normalized.includes("price");
  const hasTimeline =
    normalized.includes("how long") ||
    normalized.includes("timeline") ||
    normalized.includes("turnaround") ||
    normalized.includes("when can you") ||
    normalized.includes("when will") ||
    normalized.includes("deadline") ||
    normalized.includes("how quickly") ||
    normalized.includes("how soon") ||
    normalized.includes("time to build") ||
    normalized.includes("launch date");
  const hasGettingStarted =
    normalized.includes("how do i start") ||
    normalized.includes("how do i get started") ||
    normalized.includes("how to get started") ||
    normalized.includes("how to start") ||
    normalized.includes("first step") ||
    normalized.includes("next step") ||
    normalized.includes("ready to begin") ||
    normalized.includes("ready to start") ||
    normalized.includes("where do i begin") ||
    normalized.includes("sign up") ||
    normalized.includes("get started") ||
    normalized.includes("begin") ||
    normalized === "start";
  const hasAbout =
    normalized.includes("who are you") ||
    normalized.includes("who is ella") ||
    normalized.includes("about ella") ||
    normalized.includes("about your company") ||
    normalized.includes("tell me about") ||
    normalized.includes("what do you do") ||
    normalized.includes("what does ella") ||
    normalized.includes("what is ella tech") ||
    normalized === "about" ||
    normalized === "hello" ||
    normalized === "hi" ||
    normalized === "hey";
  const hasLocation =
    normalized.includes("detroit") ||
    normalized.includes("michigan") ||
    normalized.includes("where are you") ||
    normalized.includes("where do you") ||
    normalized.includes("local") ||
    normalized.includes("in person") ||
    normalized.includes("in-person") ||
    normalized.includes("on site") ||
    normalized.includes("remote") ||
    normalized.includes("virtual") ||
    normalized.includes("your location") ||
    normalized.includes("based in");
  const hasPortfolio =
    normalized.includes("portfolio") ||
    normalized.includes("past work") ||
    normalized.includes("previous work") ||
    normalized.includes("case study") ||
    normalized.includes("case studies") ||
    normalized.includes("examples") ||
    normalized.includes("sample") ||
    normalized.includes("references") ||
    normalized.includes("past client") ||
    normalized.includes("show me");
  const hasOutOfScope =
    normalized.includes("graphic design") ||
    normalized.includes("logo") ||
    normalized.includes("branding") ||
    normalized.includes("social media") ||
    normalized.includes("seo") ||
    normalized.includes("search engine") ||
    normalized.includes("mobile app") ||
    normalized.includes("app development") ||
    normalized.includes("video production") ||
    normalized.includes("photography") ||
    normalized.includes("pay-per-click") ||
    normalized.includes("ppc") ||
    normalized.includes("google ads");
  const hasDataMigration =
    normalized.includes("data migration") ||
    normalized.includes("migrate data") ||
    normalized.includes("transfer data") ||
    normalized.includes("move data") ||
    normalized.includes("import data") ||
    normalized.includes("export data") ||
    normalized.includes("old data") ||
    normalized.includes("our existing data") ||
    normalized.includes("spreadsheet") ||
    normalized.includes("data cleanup") ||
    normalized.includes("clean up our data");

  if (hasAI) return "ai_automation";
  if (hasM365) return "m365";
  if (hasLMS) return "lms";
  if (hasHRIS) return "hris";
  if (hasCRM) return "crm";
  if (hasWebsite) return "website";
  if (hasNonprofitPricing || hasMissionDriven) return "nonprofit_pricing";
  if (hasNonprofit) return "nonprofit";
  if (hasBudget) return "budget";
  if (hasDependency) return "dependency";
  if (hasExisting) return "existing_tools";
  if (hasTraining) return "staff_training";
  if (hasDigitalStrategy) return "digital_strategy";
  if (hasConsulting) return "tech_consulting";
  if (hasSupport) return "support_scope";
  if (hasQuote) return "get_quote";
  if (hasTimeline) return "timeline";
  if (hasGettingStarted) return "getting_started";
  if (hasAbout) return "about";
  if (hasLocation) return "location";
  if (hasPortfolio) return "portfolio";
  if (hasOutOfScope) return "out_of_scope";
  if (hasDataMigration) return "data_migration";
  return "fallback";
};

export const serviceReply = (intent) => {
  if (intent === "about") {
    return makeSpacing(
      `Ella Tech Solutions is a technology consulting firm focused on nonprofits, small businesses, and community organizations.\n\n` +
        `We help you set up and use your technology the right way, websites, CRMs, AI workflows, LMS platforms, HRIS systems, and Microsoft 365. We also train your staff so the tools actually get used.\n\n` +
        `We work with organizations across the country and internationally. No jargon, no generic templates, no tools your team will stop using in 60 days.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "ai_automation") {
    return makeSpacing(
      `AI workflow automation is one of the highest-value things Ella Tech does, and it's more practical than it sounds.\n\n` +
        `It typically means building workflows that save your team time on repetitive tasks: drafting emails, sorting intake forms, summarizing documents, or routing requests automatically.\n\n` +
        `No coding required on your end. We figure out where your staff is losing time and build something that actually fits how you work.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "m365") {
    return makeSpacing(
      `A lot of organizations are paying for Microsoft 365 and barely using it.\n\n` +
        `Ella Tech helps you actually get value out of it, setting up Teams properly, organizing SharePoint so people can find things, getting OneDrive working across your staff, and cleaning up email chaos in Outlook.\n\n` +
        `You don't need to start over. Usually the licenses you already have are more than enough.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "lms") {
    return makeSpacing(
      `An LMS (Learning Management System) is the platform your staff uses to complete training and track progress, tools like TalentLMS, Canvas, or Absorb.\n\n` +
        `Ella Tech handles the full implementation: platform selection, setup, content migration, and building micro-learning modules using Articulate or SCORM-compliant tools. Each module is typically 5 to 10 minutes, built for busy teams who can't sit through long training sessions.\n\n` +
        `We also train your administrators so the system runs without outside help after handoff.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "hris") {
    return makeSpacing(
      `An HRIS (Human Resources Information System) is the platform your organization uses to manage staff records, onboarding, time off, performance, and payroll in one place, instead of scattered spreadsheets.\n\n` +
        `If your HR team is still juggling these things manually, an HRIS centralizes all of it. We handle system selection, setup, data migration, and staff training so your team can use it from day one.\n\n` +
        `Common platforms we work with include BambooHR, Gusto, and Rippling, but we select based on your size, budget, and workflows.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "crm") {
    return makeSpacing(
      `CRM setup is especially common for nonprofits managing donors, volunteers, or program clients.\n\n` +
        `Ella Tech helps you pick the right tool for your size and budget, get it set up correctly, and make sure your team actually uses it, not just another system that collects dust.\n\n` +
        `If you already have something in place that isn't working well, we can usually fix that too rather than starting from scratch.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "website") {
    return makeSpacing(
      `Ella Tech builds clean, functional websites for nonprofits and small businesses, built so your team can manage them after handoff without needing a developer for every update.\n\n` +
        `Whether you need a new site, a redesign, or just want your current site to stop being a headache, the free consultation is where we'd figure out what makes sense.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "nonprofit_pricing") {
    return makeSpacing(
      `Yes, Ella Tech Solutions offers mission-driven pricing for verified 501(c)(3) nonprofits and community-based organizations.\n\n` +
        `This isn't a token discount. It reflects our values alignment with mission-driven work and our commitment to making quality technology consulting accessible to organizations doing work that matters.\n\n` +
        `Book a consultation to talk through what your project would cost with nonprofit pricing applied.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "nonprofit") {
    return makeSpacing(
      `Nonprofits are Ella Tech's primary focus, especially organizations with 5 to 50 staff who are growing fast or trying to clean up messy systems.\n\n` +
        `The work usually involves getting your tech stack under control: Microsoft 365, CRM, AI-powered workflows, staff training, or a website that actually represents you well.\n\n` +
        `You don't need a big budget or a dedicated IT person to get started. That's exactly what the free consultation is for.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "budget") {
    return makeSpacing(
      `Budget is a real conversation, not a disqualifier.\n\n` +
        `Ella Tech works with nonprofits and small organizations specifically, the free 30-minute consultation exists so we can figure out what's realistic for your situation before anyone commits to anything.\n\n` +
        `You don't need to have your budget figured out before we talk.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "dependency") {
    return makeSpacing(
      `That's a fair concern and worth asking upfront.\n\n` +
        `Ella Tech builds things you can actually own and manage. The goal is for your team to feel more capable after the engagement, not more dependent on outside help.\n\n` +
        `Everything is documented and handed off properly. If you stop working with Ella Tech, you won't be left stuck.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "existing_tools") {
    return makeSpacing(
      `Starting over is rarely the answer.\n\n` +
        `Ella Tech typically starts by understanding what you already have in place before recommending anything new. Most of the time, the tools you're already paying for just need to be set up and used correctly.\n\n` +
        `If something genuinely isn't working, we'll say so, but we won't push you to replace things unless there's a real reason.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "staff_training") {
    return makeSpacing(
      `Staff training from Ella Tech isn't a webinar or a manual, it's hands-on sessions tailored to your team and the tools you're actually using.\n\n` +
        `Whether it's getting everyone on the same page with Microsoft 365, onboarding new hires to your systems, or just making sure people stop working around tools they don't understand, we meet people where they are.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "digital_strategy") {
    return makeSpacing(
      `Digital strategy consulting is where we start if you're not sure what you need or where your technology is breaking down.\n\n` +
        `It includes a technology audit, a gap analysis of what's missing or not working, vendor selection guidance, and a prioritized implementation roadmap. No long-term commitment required to begin.\n\n` +
        `Most clients come in thinking they need one specific fix and leave with a much clearer picture of their whole tech stack, and a plan that actually fits their budget and team capacity.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "tech_consulting") {
    return makeSpacing(
      `Tech consulting at Ella Tech is less about buzzwords and more about figuring out what actually makes sense for your situation.\n\n` +
        `It usually starts with understanding your current setup, your goals, and where things are breaking down, then building a clear plan and helping you execute it.\n\n` +
        `Most clients come in with a specific problem and leave with a clearer picture of their whole tech stack.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "support_scope") {
    return makeSpacing(
      `Just to be upfront: Ella Tech doesn't do ongoing IT helpdesk, break-fix support, hardware procurement, or on-site infrastructure work.\n\n` +
        `What Ella Tech does is help you set up and optimize your systems, Microsoft 365, websites, CRMs, AI workflows, so they're stable and your team can manage them confidently.\n\n` +
        `If you're not sure whether your situation fits, the free consultation is a good place to find out.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "get_quote") {
    return makeSpacing(
      `Pricing is scoped per project, there's no standard rate card, and that's intentional.\n\n` +
        `What something costs depends on what you actually need, your timeline, and your situation. Mission-driven pricing is available for nonprofits and community-based organizations.\n\n` +
        `The free 30-minute consultation is where that conversation starts, and nobody commits to anything during that call.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "timeline") {
    return makeSpacing(
      `It depends on the project:\n\n` +
        `Websites typically take 4 to 6 weeks, depending on how many pages you need and how quickly we get your content and feedback.\n\n` +
        `CRM, HRIS, and LMS implementations vary more, a straightforward setup might take a few weeks; a full migration with training can take 6 to 10 weeks.\n\n` +
        `The free consultation is the best place to map out a clear timeline for your specific project.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "getting_started") {
    return makeSpacing(
      `Book a free 30-minute consultation, that's it.\n\n` +
        `We'll review what you need, recommend the right next steps, and follow up within one business day. No long intake forms, no commitment required during the call.\n\n` +
        `If you're not sure what you need yet, that's fine, figuring that out together is exactly what the consultation is for.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "location") {
    return makeSpacing(
      `Ella Tech Solutions works with organizations across the country and internationally.\n\n` +
        `Most of our work is done remotely, video calls, shared documents, and screen sessions work well for everything we do. In-person sessions can be arranged when it makes sense.\n\n` +
        `Our focus is on nonprofits, small businesses, and community organizations, wherever they are.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "portfolio") {
    return makeSpacing(
      `You can see examples of our work on the site, web projects are on the Web Projects page, and tech solution implementations are on the Tech Solutions page.\n\n` +
        `If you're looking for examples similar to your specific situation, your industry, org size, or the tools involved, the consultation is the best place to walk through that directly.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "out_of_scope") {
    return makeSpacing(
      `That's not something Ella Tech handles, we stay focused on what we do well.\n\n` +
        `What we don't do: graphic design, logo and brand identity, social media management, SEO, paid advertising, mobile app development, or video production.\n\n` +
        `What we do handle: websites, CRM setup, AI workflow automation, Microsoft 365, LMS and HRIS implementation, staff training, and digital strategy consulting.\n\n` +
        `If your project involves both, we're happy to point you toward partners for the parts outside our scope.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  if (intent === "data_migration") {
    return makeSpacing(
      `Data migration is included in most of our implementations, CRM, HRIS, and LMS projects almost always involve moving your existing data into the new system.\n\n` +
        `We handle the full process: auditing what you have, cleaning it up if needed, importing it correctly, and verifying it's accurate before handoff.\n\n` +
        `If you're starting with messy spreadsheets or data scattered across multiple tools, that's a very normal starting point.\n\n` +
        BOOKING_ONLY_CTA
    );
  }

  return makeSpacing(
    `Good question, the free 30-minute consultation is the best place to dig into that.\n\n` +
      `Ella Tech works with nonprofits, small businesses, and community organizations on things like AI workflow automation, Microsoft 365, CRM setup, staff training, and website builds.\n\n` +
      `You don't need to have it all figured out before we talk.\n\n` +
      BOOKING_ONLY_CTA
  );
};

export const contactReply = () => makeSpacing(CONTACT_ONLY_CTA);
export const isContactLine = (line) => line.includes(ETS_PHONE) || line.includes(ETS_EMAIL);
