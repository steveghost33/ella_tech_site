# Ella Tech Solutions: proposed site update (draft for review)

Nothing in this document has been published, committed or deployed. It is a proposal for your review.

How this was checked: the live site could not be reached from my work environment (the network blocked the domain), so I audited the site's source code in your GitHub repository (steveghost33/ella_tech_site, main branch), built it, and viewed it in a browser at phone width (390 pixels) and desktop width. If the live site has changes that were never pushed to GitHub, tell me and I will recheck.


# (a) Audit of the current site

## Platform

The site is custom code: React, Vite and Tailwind CSS, stored in the GitHub repository above. It is not WordPress, Squarespace or Wix, so every change is an edit to a code file. Hosting is not certain: the repository has a Render configuration file (render.yaml), but it also has Netlify style _headers and _redirects files, and the site's own project description says "Netlify." See the question in section (d).

## Pages

1. Home (/)
2. Nonprofits (/services/nonprofits) exists, but is only reachable through the Menu button and the footer
3. Small Business Websites (/services/small-business)
4. Entrepreneur Websites (/services/entrepreneurs)
5. Grant Writing (/services/grant-writing)
6. Tech Setup and CRM (/tech-solutions)
7. Web Projects (/web-projects)
8. Service detail pages: Website Design, CRM Setup, AI Workflow, Staff Training, LMS Development, Microsoft 365, Digital Strategy (/services/...)
9. FAQ (/faq)
10. Blog (/blog) and blog posts (/blog/...)
11. Tech Health Check (/tech-health-check) and CRM Checklist (/crm-checklist) lead magnet pages
12. Privacy Policy (/legal) and Terms of Use (/terms-of-use)
13. Admin research form (/admin/research-form), not public facing

## Sitewide elements

1. Header: logo, light/dark toggle, Menu button. There is no visible navigation bar at any screen size. All links sit behind Menu.
2. Menu items: How It Works, Our Website Work, Small Business Websites, Nonprofit Websites, Grant Writing, Entrepreneur Websites, Tech Setup and CRM, Blog, Contact.
3. Top banner: "Free 30-minute consultation" with a "Schedule Now" button.
4. Chat bubble, bottom right, on every page.
5. Lead capture popup.
6. Footer: "Ready to get found locally? Book a free consultation." with "Get Found Locally" button, a row of audience links, phone, email, legal links, socials.

## Homepage sections, in order, with calls to action

1. Hero. "Detroit-Based. Serving Local Businesses Nationwide." / "Get Found by Your Local Customers." Buttons: "Get Found Locally" (Cal.com), "Or call (313) 474 1772." Line: "Live within 2 weeks, guaranteed, Simple flat-fee pricing, Free 30-minute consultation."
2. Plans. "Three Ways to Get Found": Get Found, Get Called, Own the Area. Each card has a "Show More" toggle on desktop. Then "How Our Pricing Works," the 2 week guarantee, and buttons "Get My Flat-Fee Quote" and "Take the Free Health Check."
3. Mid page call to action. "Not sure where to start?" Button: "Get Found Locally."
4. Why work with us. "Be the Business We Build Our Reputation On," three reasons. Button: "Get Found Locally." Link: "See examples of our website work."
5. Tech services. "Tech Setup and CRM Automation." Button: "Not Sure if You Need This Yet? Start With Your Site First."
6. FAQ. "Your questions about getting found locally, answered." Ten questions.
7. Contact. "See Which Tier Gets You Found," booking calendar, phone, email.

## What a nonprofit executive director sees today

Every headline on the homepage is about local search and phone calls for trades like plumbers and HVAC. Nothing in the first screen, on phone or desktop, tells a nonprofit visitor the firm works with them. The Nonprofits page exists but is hidden behind the Menu button.

## Problems found

Visible bugs

1. Stray "00" in the FAQ. The question numbers are built by adding a "0" in front of the count, and the count starts at zero, so the first question shows "00" and the rest show "01" to "09." Confirmed in the built page.
2. Numbered list text runs together. In the Contact section, the numbers 1, 2, 3 are separate boxes with no space or period after them, so screen readers, search engines and copy and paste read "1A quick look," "2A clear recommendation," "3Next steps." Confirmed.
3. Repeated phrases. "No pitch, no pressure" and variations appear at least nine times: Plans call to action, footer ("No pitch."), Contact list ("no pressure"), Contact text ("No sales pressure, just clarity"), FAQ answer ("No pressure to move forward"), Tech Health Check page ("No pitch, no pressure"), Nonprofits, Small Business and Tech Solutions pages ("no commitment required"), Entrepreneurs ("No pressure, no retainer required"). The 2 week guarantee is repeated six times on the homepage alone.

Mobile layout problems (checked at phone width)

1. The chat bubble covers the end of the hero's guarantee line ("Simple flat-fe...").
2. The hero spends most of the first screen on a second, large "Ella Tech Solutions" logo, even though the header already shows the logo. On a phone, the visitor sees the logo, the local business headline and one button, and nothing else.
3. The Nonprofits page has a large empty gap between the top banner and the hero image, and the hero image runs edge to edge with its rounded corners clipped by the screen.
4. The footer reserves extra space at the bottom for a mobile booking bar that is never actually shown.

Copy and accuracy problems (your hard rules apply here)

1. Background claims that do not match the background you gave me:
   1. Nonprofits page hero: "We've spent 15 years implementing technology inside nonprofits."
   2. Contact section: "15 years of IT leadership in Michigan."
   3. Homepage "Why work with us": "15 years of IT and program leadership experience."
   4. Tech Solutions page: "The Ella Tech team has spent 15 years..." (also implies a team)
   5. Grant Writing page: "We've spent 15 years building the CRM and reporting..."
2. Quotes that read like client testimonials. The Nonprofits page has six "What we've seen" quote boxes (for example, "We paid for Salesforce for two years and used maybe 10% of it"). The Entrepreneurs page has the same pattern. A prospect will read these as quotes from clients. They should come out.
3. Unsupported statistics: "Most nonprofits have bought a CRM, and stopped using it within six months."
4. Client history implied where there is none: chatbot ("Most clients come in..."), Digital Strategy page ("Many clients begin with a strategy session").
5. Web Projects page lists four projects: the Ella Tech site itself, Build by Steven, Tone Finder and Team Cabin. Your instructions allow only Team Cabin and the demonstration build. Also, the Team Cabin card describes "an interactive game" and a leaderboard backend, which does not match your description (a single page site with streaming links and show listings).
6. Urgency and scarcity language: "Consultation windows are opened weekly and intentionally limited" (Contact), "We are taking on a small number of local service businesses right now" (homepage), "Schedule Now" (banner).
7. An unused "What clients say" testimonials component exists in the code. It is not shown anywhere, but it should be deleted so it cannot be turned on by mistake.
8. Em dashes appear on the Nonprofits page (as bullet markers), the top banner, the CRM Checklist page and the lead capture popup.

"Show More" content

Only the homepage plan cards hide content behind "Show More" (on desktop; phones already show it). The Web Projects cards hide a "Technical Skills" list behind a toggle. The current Nonprofits page and the service pages do not hide content. Fixes are in item 6 below.


# (b) Proposed copy and changes, page by page

Voice note: the new copy uses "I" instead of "we," because you are the person a nonprofit will work with. If you would rather keep "we," tell me and I will convert it.

## Sitewide

### Main navigation (Menu button)

Proposed menu, in this order:

1. Nonprofits (goes to /services/nonprofits)
2. Local Businesses (goes to /services/small-business)
3. Work (goes to /web-projects, renamed "Work")
4. How It Works (goes to /services/nonprofits#how-it-works)
5. About (goes to /#about)
6. Blog
7. Contact

Grant Writing, Entrepreneur Websites and Tech Setup and CRM move to the footer link row. [ADD: confirm you still want to offer grant writing and the entrepreneur package. If not, I will remove those pages from the footer and the sitemap too.]

Recommended addition: on desktop, show "Nonprofits" and "Local Businesses" as plain text links next to the Menu button, so they are visible without opening the menu.

### Top banner

Current: "Free 30-minute consultation" / "Schedule Now"

Proposed: "Free first conversation" / "Book a time"

### Footer call to action

Current: "Ready to get found locally? Book a free consultation." / "30 minutes. No pitch. Just a clear look at where you stand in local search." / "Get Found Locally"

Proposed:

Questions about your website, records or staff tools? Start with a free conversation.

Detroit based. Working with nonprofits, community organizations and local businesses.

Button: Book a free conversation


## Homepage

### New first screen (item 2)

Eyebrow: Detroit technology consulting

Headline: Websites, systems and training for Detroit organizations

Text: I'm Steven Bowman. I build websites, set up the systems behind them, and train staff to use them. Choose the path that fits you.

Path card 1

For nonprofits and community organizations

Website rebuilds, donor and volunteer records in one place, staff training, and a practical plan for AI.

Button: See nonprofit services

Path card 2

For local businesses

A website and Google Business Profile built so people nearby can find you and call.

Button: See local business plans

Below the cards: Or call (313) 474 1772

Layout changes for this screen: remove the second large logo from the hero on phones, keep the two path cards short enough that both fit in the first screen on a phone, and move the chat bubble so it does not cover text.

### Nonprofit band (new, directly under the first screen)

Heading: For Detroit nonprofits

Text: Outdated website, donor and volunteer records in three different places, software your staff doesn't use, and no plan for AI. I help small teams fix those, one at a time, starting with what matters most to your organization.

Four short lines:

1. Website redesign
2. CRM strategy and setup
3. Staff technology training
4. AI workflow integration

Button: See how I work with nonprofits

### Local business plans (existing section, adjusted)

Heading: For local businesses: three ways to get found

Keep the Get Found, Get Called and Own the Area cards and their text. Change: all card details visible by default, "Show More" button removed (see item 6). Replace the guarantee line with the option you choose in item 7.

Remove the mid page call to action's last sentence, "No pitch, no pressure."

### Work section (item 3, short version linking to the Work page)

Show the two entries from item 3 below, with a link: See the full Work page.

### About section (item 4)

Replaces "Why work with us / Be the Business We Build Our Reputation On," which contains the inaccurate background line and the scarcity line.

### FAQ

Change heading to: Questions about the local business plans

Remove the line "You have questions, we have answers."

Remove "No pressure to move forward." from the last answer.

Fix the numbering so it reads 01 to 10 (see item 5).

### Contact section

Label: Free conversation

Heading: Start with a free conversation

Text: Tell me what isn't working with your website, records or tools. I'll tell you what I would fix first and whether I'm the right fit.

Under your photo: Steven Bowman, Founder. You'll talk with me directly.

What you'll get:

1. A look at your current website and tools.
2. My honest view of what to fix first.
3. Clear next steps. For local businesses, a written flat fee quote. For nonprofits, an outline of what a strategy session would cover.

Keep "Before you book."

Remove: "No sales pressure, just clarity." and "Consultation windows are opened weekly and intentionally limited so each session gets proper preparation."

[ADD: one call length for everyone, or two booking links: 20 minutes for nonprofits and 30 minutes for local businesses. Your current Cal.com link is a 30 minute consultation.]


## Nonprofits page (item 1, replaces the current page at the same address)

Keeping the same address (/services/nonprofits) protects any search ranking the page already has.

Browser title: Nonprofit Websites, CRM and Staff Training in Detroit | Ella Tech Solutions

Search description: Website redesign, CRM setup, staff technology training and practical AI help for Detroit area nonprofits and community organizations. Start with a free 20 minute conversation.

### Hero

Eyebrow: For Detroit nonprofits and community organizations

Headline: Your website, donor records and staff tools, working together

Text: I help Detroit area nonprofits rebuild their websites, get donor and volunteer records into one place, train staff on the tools they already pay for, and make a practical plan for AI.

Button: Book a free 20 minute conversation

### Who this is for

Organizations with annual budgets of about $500,000 to $5 million: parks conservancies, community organizations, small charter schools, and other Detroit area nonprofits with a small staff and no one whose full time job is technology.

### Does this sound like your organization?

1. "Our website is out of date, and only one person knows how to change it."
2. "Donors are in one system, volunteers are in a spreadsheet, and event signups are in someone's email."
3. "We pay for software that most of our staff don't use."
4. "Everyone is talking about AI. We don't have a plan, or a policy, for how we use it."

Often the fix starts with the tools you already have.

(These are written as things a director might say, not as quotes from real people. They are not attributed to anyone and should not be styled like testimonials.)

### What I do

Website redesign

A new website that says clearly what you do, who you serve and how people can help. It works on phones, loads quickly, and is built so your staff can update programs, events and news without calling a developer. Donation, volunteer and contact forms send information to your records instead of sitting in someone's inbox.

1. A review of your current site and what visitors need to find
2. A new page structure and help with the writing [ADD: confirm whether you write the copy, edit theirs, or both]
3. Donation, volunteer signup and contact forms
4. Training for the staff who will keep the site updated

CRM strategy and setup

One place for donors, volunteers, members and partners. I help you decide what you need a CRM to do, choose a system that fits your budget or set up the one you already have, move your records out of spreadsheets, and organize it around how your team actually works.

1. A review of where your records live today
2. A recommendation on which system to use, including the one you already have
3. Cleanup and import of your existing records
4. Setup for gifts, volunteer hours, events and the reports your board asks for
5. Written instructions for your team

Staff technology training

Training built around your staff's real tasks, not a tour of every button. Short sessions, practice with real work, and simple guides people can come back to. This is the part of the work I know best: I spent 15 years in education and learning design before starting Ella Tech.

1. Sessions grouped by role, so people learn what they will use
2. Step by step guides and short recordings
3. [ADD: in person in Detroit, online, or both]
4. [ADD: whether a follow up session is included]

AI workflow integration

A practical plan for AI that your staff and board can understand. We look at where staff spend time on repeat tasks, such as drafting thank you letters, summarizing meeting notes or pulling reports. We decide together where AI tools can help and where they should not be used. Then I set up the workflows, draft a simple AI use policy with you, and train staff to use the tools carefully.

1. A review of repeat tasks across your staff
2. A plain language AI use policy draft for your board
3. Setup using tools you already pay for, where possible
4. Guidance on keeping donor, family and student information private

Also available: Microsoft 365 setup, learning platforms for staff onboarding, and grant readiness support. [ADD: confirm which of these you want to keep listing.]

### How it works (item 8, anchor: how-it-works)

1. Free conversation. A 20 minute call. You tell me what isn't working, and I tell you honestly whether I can help.
2. Paid strategy session. A working session where we go through your website, tools and records in detail and agree on priorities. The strategy session is paid: [ADD: my decision].
3. Written proposal. You get a written proposal with the scope, timeline and price, in a form you can share with your board. [ADD: how many business days after the strategy session]
4. Build and training. I do the work, keep you updated along the way, and train your staff before handoff so the work keeps going after I'm done. [ADD: how often you send updates, for example weekly]

Sentence templates for step 2, pick one and fill in the numbers:

1. If credited: "The strategy session is $[ADD: price] and takes about [ADD: length]. If you go ahead with a project within [ADD: number] days, the full fee is credited toward it."
2. If not credited: "The strategy session is $[ADD: price], takes about [ADD: length], and is billed separately from any project."

### What it costs (item 9)

A standard nonprofit website build is $2,500 to $5,000. [ADD: what a standard build includes, for example number of pages, donation and volunteer forms, and staff training.] Larger builds, such as sites with online payments, facility rentals or a connection to your CRM, are quoted after the strategy session. CRM setup, staff training and AI work are also quoted after the strategy session, because the right scope depends on your size and the tools you already have.

Note on wording: your example was "Most nonprofit website projects fall between $X and $Y." I changed it because "most projects" implies a history of past projects that the site does not show yet. Once you have completed several nonprofit builds, the original wording becomes accurate and you can switch back.

[ADD: does the 501(c)(3) discount ("mission-driven pricing") on the current site still apply, and is it already reflected in the $2,500 to $5,000 range? Until you answer, I have left the discount out of the new copy.]

### Closing call to action (one call to action only)

Heading: Start with a free 20 minute conversation

Text: Tell me what isn't working. If I'm not the right fit for what you need, I'll tell you that too.

Button: Book a free 20 minute conversation [ADD: Cal.com link for a 20 minute event]

Removed from the current page: all six "What we've seen" quote boxes, the "15 years implementing technology inside nonprofits" line, the "stopped using it within six months" statistic, the separate LMS, HRIS and grant writing blocks (now one "Also available" line), and the em dash bullet markers.


## Work page and homepage Work section (item 3)

Rename "Web Projects" to "Work" in the menu and page heading. Keep the address /web-projects.

Page heading: Work

Intro: Ella Tech Solutions is a new firm, so this page is short and honest. It shows a site I built and a demonstration build that shows the kind of system nonprofits ask me about. It does not include client projects yet.

### Entry a: Team Cabin website

Link: weareteamcabin.com

What I built: A single page website for Team Cabin, my band. [ADD: year built, and the tools you used if you want them listed]

What it does: Gives fans one place to find the band's music on streaming services and see upcoming shows.

What I'd do next: [ADD: confirm or replace these suggestions] Add an email signup so fans hear about new shows. Connect the show list to a shared calendar so the band can update dates without editing the site. Add a short page for venues with photos and a bio.

[ADD: the current card says the site has an interactive game and a score leaderboard. Your description says it is a single page with streaming links and show listings. Which is accurate today? I used your description.]

### Entry b: Demonstration build

Label, shown at the top of the card: Demonstration build. Not a client project.

Title: Facility rentals and volunteer waivers

[ADD: a working demo of a facility rental request, staff approval, then Stripe payment flow, plus a signed volunteer waiver, once built]

Draft description to use once it exists (edit to match what you actually build): A sample system that shows how a parks conservancy or community organization could handle facility rentals and volunteer waivers online. A renter submits a request, a staff member approves or declines it, and the renter pays by card through Stripe. Volunteers sign a waiver online, and the signed copy is saved with their record. It runs on test data only.

Recommendation: do not show this entry on the live site until you confirm the demo exists and works. Until then, the Work section shows Team Cabin only.

### Other cards on the current page

The Ella Tech Solutions site, Build by Steven and Tone Finder cards would come off the Work page under your instruction to use only the two examples above. [ADD: confirm removal of these three cards.] The "Technical Skills" toggles go away with them. Also remove the "Mission-Driven Pricing Available" block from this page, since pricing now lives on the Nonprofits page.


## About section (item 4, on the homepage, anchor: about)

Heading: About

I'm Steven Bowman, and I run Ella Tech Solutions from Detroit.

I spent 15 years working in education, learning design and technology. I led learning systems for a large school district, and I directed learning and development at a Detroit nonprofit. Much of that work came down to the same job: choosing tools that fit how people actually work, setting them up, and teaching staff to use them with confidence.

That is the work I do now, for nonprofits, community organizations and local businesses. When you reach out, you talk with me.

Button: Book a free conversation

Optional additions, only if you want them: [ADD: degrees, certifications or memberships you want listed, exactly as you want them worded]

The same accurate background line should replace the inaccurate ones on the Contact section, Tech Solutions page and Grant Writing page listed in the audit.


## Item 5: fixes for visible problems

1. FAQ "00": number the questions from 01 to 10 instead of 00 to 09 (file: src/components/FaqItem.jsx).
2. "1A quick look": add a period and space after each number so text reads "1. A look at your current website and tools," and mark the decorative number circles so screen readers announce a normal numbered list (file: src/sections/Contact.jsx).
3. Repeated phrases: remove every "No pitch," "No pressure," "No sales pressure, just clarity," "No fine print" and "no commitment required" line listed in the audit. The only remaining reassurance is in the Contact section: "I'll tell you what I would fix first and whether I'm the right fit."
4. Guarantee repetition: state the full guarantee once, in the local business plans section. Elsewhere, use only a short line that links to it, for example "Live within 2 weeks of receiving your content."
5. Mobile: move the chat bubble so it does not cover text; remove the duplicate hero logo on phones; remove the empty gap above the Nonprofits hero and give the hero image side margins; remove the unused space reserved at the bottom of the footer.
6. Em dashes: replace with commas, periods or plain bullet points everywhere they appear in visible text.
7. Urgency: remove "intentionally limited" and "small number of businesses right now"; change "Schedule Now" to "Book a time."
8. Delete the unused testimonials component.


## Item 6: show hidden content by default

1. Homepage plan cards: show all details on every screen size and remove the "Show More / Show Less" button.
2. Work page: the "Technical Skills" toggles go away with the cards you are removing. The new entries show everything without a toggle.
3. Nonprofits page and service pages: nothing is hidden there now. The new Nonprofits page shows all content without toggles. The FAQ answers still open one at a time; tell me if you want those open by default as well.


## Item 7: guarantee, two rewrite options

Current text: "The guarantee: if your site and Google Business Profile aren't live within 2 weeks of you providing content, you get a free month of monitoring."

The problem: it does not say what "live" means, what "content" is, or when the 2 weeks starts. One important detail: Google, not you, controls how long Google Business Profile verification takes, so the guarantee should promise that the profile is set up and submitted, not verified.

### Option A: one paragraph

Two week launch guarantee. Your website and Google Business Profile will be live within 14 days of the day I receive everything on your launch checklist. Live means your site is published at your own web address and works on phones and computers, and your Google Business Profile is set up and submitted to Google for verification. Your launch checklist is your business name, address, phone number and hours; your list of services and service area; your logo and photos; any text you want used, or your approval of the draft text I write; and login access to your domain and Google account. If I miss the 14 days, your first month of monitoring is free.

### Option B: short headline with three plain answers

Live in 2 weeks, or your first month of monitoring is free.

What "live" means: your new site is published at your own web address and works on phones and computers, and your Google Business Profile is set up and submitted to Google for verification. Google decides how long verification takes.

What you provide: your business details and hours, your services and service area, your logo and photos, any text you want used, and access to your domain and Google account.

When the 2 weeks starts: the day I have everything on that list. If I am waiting on your feedback, the clock pauses until you reply.

Decisions for either option: [ADD: 14 calendar days or 10 business days], [ADD: minimum number of photos, if any], [ADD: whether the clock pauses while waiting on client feedback; Option B assumes yes]. This guarantee applies to the local business plans only, not to nonprofit projects, which are scoped in the written proposal.


# (c) Checklist of everything you need to supply or confirm

Decisions that block publishing

1. Strategy session: price, length, and whether the fee is credited toward the project (and within how many days).
2. Cal.com link for a 20 minute nonprofit conversation, or a decision to use one length for everyone.
3. What a "standard" nonprofit website build includes (pages, forms, training).
4. Whether the 501(c)(3) discount still applies, and whether the $2,500 to $5,000 range already includes it.
5. Guarantee: Option A or B; 14 calendar days or 10 business days; minimum photos; whether the clock pauses for client feedback.
6. Removal of the Ella Tech Solutions, Build by Steven and Tone Finder cards from the Work page.
7. Team Cabin: game and leaderboard or single page with streaming links and show listings; year built; tools to list; what you would do next.
8. Demonstration build: confirm it exists and works, then send the link and a screenshot.
9. Hosting: Render or Netlify (see section (d)).

Details to fill in

10. Whether you write website copy for clients, edit theirs, or both.
11. Staff training: in person, online, or both; whether a follow up session is included.
12. How many business days after the strategy session the written proposal arrives.
13. How often you send project updates.
14. Keep or drop: grant writing, the entrepreneur package, Microsoft 365, learning platforms.
15. Optional: degrees, certifications or memberships for the About section.
16. Voice: "I" (as drafted) or "we."
17. Whether FAQ answers should be open by default.

Things you asked me to watch for, confirmed

18. The Detroit Public Schools Community District website does not appear anywhere in this proposal, and no school district is named.
19. No clients, testimonials, results, numbers or credentials were added. The only numbers used are the ones you gave: 15 years, $500,000 to $5 million, $2,500 to $5,000, 20 minutes, and the existing 2 weeks.


# (d) How to apply each change

The site is custom code in GitHub, so every change is a file edit. The exact files are listed below. I can make all of these edits for you on a separate working branch so you can preview them before anything goes live; nothing would be merged or published until you approve.

One question before the last step: where does the site actually deploy from, Render or Netlify? The repository has setup files for both. Steps 1 to 9 are the same either way. Step 10 (publishing) depends on your answer, so I have not written it yet.

1. Create a working branch in the repository, so the live site is untouched while you review.
2. Navigation: edit the menu list in src/sections/Header.jsx (the navLinks list) and the footer link row in src/sections/Footer.jsx. Add the two visible desktop links in Header.jsx.
3. Top banner and footer copy: edit src/sections/ContactBanner.jsx and the call to action block at the top of src/sections/Footer.jsx.
4. Homepage first screen and nonprofit band: rewrite src/sections/Hero.jsx with the two path cards; add a new section file for the nonprofit band; update the section order in src/pages/Home.jsx; update the homepage title and description in the same file.
5. Nonprofits page: replace the content of src/pages/services/Nonprofits.jsx with the new copy, including the How It Works section (with the anchor "how-it-works") and the pricing note. Update the search description in the same file.
6. Work: rewrite the project list in src/data/webProjects.js to the Team Cabin entry (and the demo entry once it exists); update the heading and remove the pricing block in src/pages/WebProjects.jsx; add the short Work section to the homepage.
7. About: replace src/sections/CaseStudy.jsx on the homepage with a new About section (anchor "about"). Update the background line in src/sections/Contact.jsx, src/pages/TechSolutions.jsx and src/pages/services/GrantWriting.jsx. Delete src/sections/AboutFounder.jsx and src/sections/Testimonials.jsx, which are unused.
8. Fixes and guarantee: FAQ numbering in src/components/FaqItem.jsx; numbered list in src/sections/Contact.jsx; Show More removal and guarantee text in src/sections/Plans.jsx; guarantee answers in src/constants/index.jsx (FAQ items 2 and 6, and the Get Found plan details); repeated phrases in the files listed in the audit; chat bubble position in src/sections/Chatbot.jsx; Nonprofits hero spacing in src/pages/services/Nonprofits.jsx; footer bottom spacing in src/sections/Footer.jsx; testimonial style quotes in src/pages/services/Entrepreneurs.jsx; client history lines in src/features/chatbot/chatbotText.js and src/pages/services/DigitalStrategy.jsx.
9. Preview and check: build the site, then check every changed page at phone and desktop width, confirm the booking links open the right Cal.com events, and search the text for em dashes and double hyphens.
10. Publish: [waiting on your answer: Render or Netlify].


# Implementation status

All changes above are now made in code on the working branch claude/epic-cerf-filvsv. Nothing has been merged to main or deployed.

Choices made where you had not decided yet (easy to change):

1. Guarantee: Option B is in place on the homepage plans section and in the FAQ.
2. Work page: only the Team Cabin entry is shown. The Ella Tech Solutions, Build by Steven and Tone Finder cards were removed. The demonstration build entry is written but hidden (set published to true in src/data/webProjects.js once the demo works).
3. Voice: "I" in all new copy.
4. Nonprofit booking buttons use your current 30 minute Cal.com link until you supply a 20 minute link (NONPROFIT_BOOKING_URL in src/data/site.js).
5. Unused components with inaccurate claims were deleted: CaseStudy, AboutFounder, Testimonials, SocialProof.
6. On phones, the chat bubble now appears only after the visitor scrolls past the first screen.

Every unfilled [ADD: ...] item shows on the page as yellow highlighted text so it cannot be missed in preview. Before publishing, search the code for "[ADD:" and "<Placeholder" and confirm none remain.
