# Pulsecore — Interactive SaaS Landing Page & Product Experience Platform

This is my submission for the **Teyzix Core Internship (June Batch)** — Task ID **FEWD-3**.

For this task I built a landing page for a made-up SaaS company called
**Pulsecore** — think of it as an automation/ops tool for teams (like a mix
of Zapier + a monitoring dashboard). I made up the whole brand — name, logo
text, testimonials, blog posts, everything — since the task didn't give a
real company to work with, so I picked something in the "workflow
automation" space to design around.

> Just to be clear: Pulsecore isn't a real company. All testimonials,
> customer names, and blog posts are fictional content I wrote just for
> this project.

---

## What I built it with

| Layer      | What I used                                          |
|------------|-------------------------------------------------------|
| Framework  | Next.js 14 (App Router) — plain JavaScript, no TypeScript |
| Styling    | Tailwind CSS 3 (used CSS variables for theming instead of dark: everywhere) |
| Animations | Framer Motion                                          |
| Icons      | lucide-react                                            |
| Dark/Light mode | next-themes                                        |
| Fonts      | Space Grotesk for headings, Inter for body text, JetBrains Mono for the little data/label bits |

There's no backend or database in this — it's a frontend-only landing page
like the task asked for. The contact form currently just simulates
submitting (fake delay + success/error message) since there's no server to
send it to. If this ever needs to actually send emails, I'd hook it up to
something like Formspree or a simple `/api/contact` route.

---

## Why I designed it this way

I didn't want to go with the usual "purple gradient SaaS template" look
that most AI/no-code landing pages end up looking like. So I went with a
darker, more "control room" kind of feel — deep navy/black background,
electric violet as the main accent color, teal for anything "live" or
positive, and amber for star ratings. It's supposed to feel like a tool
engineers would actually trust, not just a marketing page.

- Dark mode is the main theme, light mode is a proper alternate theme (not
  an afterthought) — I did this using CSS variables in `globals.css` so I
  didn't have to write `dark:` on every single class.
- The one "signature" visual thing on the page is the animated pipeline
  diagram in the hero section — little nodes connected with moving dashed
  lines, meant to represent an automation pipeline since that's literally
  what the product does.

---

## Folder structure

```
pulsecore/
├── public/                     # put any static images/icons here
├── src/
│   ├── app/
│   │   ├── layout.js           # fonts, page metadata, theme provider setup
│   │   ├── page.js             # this is where all the sections come together
│   │   └── globals.css         # tailwind + my color variables for dark/light
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.js       # sticky navbar, smooth scroll, mobile menu
│   │   │   ├── Footer.js       # footer links, socials, company info
│   │   │   ├── ThemeProvider.js
│   │   │   ├── ThemeToggle.js  # dark/light mode switch button
│   │   │   ├── ScrollProgress.js  # thin progress bar at the top
│   │   │   └── BackToTop.js    # the floating "back to top" button
│   │   ├── sections/
│   │   │   ├── Hero.js               # headline, CTAs, animated pipeline graphic
│   │   │   ├── LogoCloud.js          # scrolling "trusted by" logo strip
│   │   │   ├── Stats.js              # the animated number counters
│   │   │   ├── ProductShowcase.js    # tabs for Flows / Signal / Relay
│   │   │   ├── Pricing.js            # monthly/yearly toggle + plans
│   │   │   ├── FeatureComparison.js  # comparison table, expandable groups
│   │   │   ├── Testimonials.js       # auto-sliding testimonial carousel
│   │   │   ├── FAQ.js                # accordion + search box
│   │   │   ├── BlogPreview.js        # blog cards
│   │   │   └── Contact.js            # the contact form with validation
│   │   └── ui/
│   │       ├── Container.js
│   │       ├── SectionHeading.js
│   │       └── AnimatedCounter.js
│   └── data/
│       └── content.js          # basically all my text/data is here
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.mjs
├── jsconfig.json                # so I can use "@/..." imports instead of ../../../
└── .eslintrc.json
```

If I (or anyone) ever wants to reuse this for a different brand, honestly
90% of it is just editing `src/data/content.js` — that's where I kept all
the copy, nav links, pricing numbers, testimonials, FAQs, blog posts, etc,
instead of hardcoding text inside components.

---

## How to run it

You'll need **Node.js 18.17 or newer**.

```bash
# install everything first
npm install

# start the dev server
npm run dev

# then just open this in your browser
# http://localhost:3000

# for a production build
npm run build
npm run start

# to check lint errors
npm run lint
```

---

## Checking this against the task requirements

Going section by section from the task PDF:

- [x] **Hero Section** — animated headline, two CTA buttons, the animated
      pipeline graphic as the product preview, subtle grid/glow background,
      smooth scroll to sections from the navbar
- [x] **Product Showcase** — clickable tabs between Flows / Signal / Relay
      with hover effects and image transitions
- [x] **Pricing Section** — monthly/yearly toggle that actually changes the
      price shown, "Most Popular" plan highlighted, feature list comparison
- [x] **Feature Comparison** — table grouped into sections you can
      expand/collapse, with check marks and dashes instead of just text
- [x] **Customer Testimonials** — carousel that auto-slides every few
      seconds, pauses if you hover over it, star ratings, next/prev arrows
      and dots
- [x] **FAQ Section** — accordion that expands/collapses smoothly, plus a
      search bar to filter questions
- [x] **Blog Preview** — 3 blog cards with category tag, date, read time
- [x] **Contact Section** — form that actually validates (name, email
      format, minimum message length), shows proper error messages, shows a
      success or error message after submitting, plus company contact info
- [x] **Interactive Components** — dark/light toggle, sticky navbar, scroll
      progress bar at the top, back-to-top button, animated stat counters
- [x] **Responsive Design** — checked this on mobile, tablet, and desktop
      widths
- [x] **Accessibility basics** — proper alt text on images, aria-labels on
      icon-only buttons, visible focus outlines, respects reduced-motion
      setting for people sensitive to animations

### Extra/bonus stuff I added on top
- **Theme Customizer** — floating palette button (bottom-left) lets you pick
  an accent color (Violet, Teal, Amber, Rose, Indigo); it updates instantly
  across the whole site and remembers your choice via localStorage
- **Interactive Product Demo** — a "Press run" simulation section that
  steps through a fake automation (trigger → condition → log → alert) with
  a live status animation
- **AI Chat Widget (frontend only)** — floating chat bubble with a scripted
  assistant that answers a few canned topics (pricing, trial, integrations,
  security) — no real backend/API, just for demonstrating the UI pattern
- **PWA Support** — `manifest.json`, an app icon, and a minimal service
  worker (`public/sw.js`) so the site can be installed and has basic
  offline caching in production builds
- **Multi-Language Support** — language switcher (English / Spanish /
  Hindi) in the navbar; translates the nav, hero section, and footer
  tagline, with the pattern set up in `src/data/translations.js` to extend
  to the rest of the site
- A skeleton loading screen that shows for a second when the page first
  loads (instead of just a blank flash)
- A subtle animated particle/network background behind the hero section
- Glassmorphism-style cards (the semi-transparent blurred cards)
- Proper SEO meta tags + Open Graph tags in `layout.js`
- Images are lazy-loaded automatically since I used `next/image`

I skipped 3D Product Preview and Lottie Animations since they need extra
asset pipelines (3D models / Lottie JSON files) that weren't worth the
scope for this task.

---

## Screenshots

I'll add screenshots of each section here before I zip up my final
submission — planning to add a `/screenshots` folder with something like:

```
screenshots/
├── 01-hero.png
├── 02-product-showcase.png
├── 03-pricing.png
├── 04-comparison.png
├── 05-testimonials.png
├── 06-faq.png
├── 07-blog.png
├── 08-contact.png
└── 09-dark-light-mode.png
```

(Will link them here as `![Hero](./screenshots/01-hero.png)` once I take
them.)

---

## Deployment

Planning to deploy this on **Vercel** since it's basically zero-config for
Next.js projects:

```bash
npm i -g vercel
vercel  :  https://interactive-saas-platform.vercel.app/
linkedin  :  https://www.linkedin.com/posts/maryam-younas-665a102aa_teyzixcore-internship-frontenddevelopment-ugcPost-7480899487872270336-Zc6x/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEqLbK0BDKbw6sjCevQVgSkFpOLA2gh3PwU
```

Or I can just connect my GitHub repo directly on vercel.com/new — either
way works.

---

## A few honest notes

- This is my own build for this task, done from scratch.
- I've tried to keep my Git commits meaningful and section-wise (hero,
  pricing, testimonials, contact form, bonus features) instead of dumping
  everything in one commit, since that was mentioned in the guidelines.
- The images right now are pulled from Unsplash/pravatar as placeholders —
  if I want a fully self-contained repo with no external image links, I'll
  swap those out in `src/data/content.js` with my own hosted images later.
