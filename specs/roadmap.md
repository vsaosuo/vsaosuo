# Roadmap

Phased from foundation to polish. Each phase should be releasable — never block on a later phase to ship.

---

## Phase 1 — Foundation ✓

Goal: a live, empty shell on a real URL.

- [x] Init Vite + React project (`npm create vite@latest`)
- [x] Install and configure Tailwind CSS v4
- [x] Set up ESLint + Prettier
- [x] Add React Router with placeholder routes (`/`, `/projects`, `/resume`)
- [x] Create base layout component (nav, footer)
- [x] Deploy to GitHub static
- [x] Add GitHub Actions CI: lint + build on push to `main`

---

## Phase 2 — Content ✓

Goal: a visitor can learn who Visal is, see real work, and make contact.

- [x] **Hero section** — name, one-line bio, CTA buttons (resume, GitHub, LinkedIn)
- [x] **About section** — short narrative, photo placeholder, what Visal is currently working on
- [x] **Projects section** — 3–5 featured projects with title, description, tech tags, links
- [x] **Skills section** — grouped by category (languages, tools, hardware/software)
- [x] **Resume page** — embedded PDF viewer + download link
- [x] **Contact section** — email link, social links (GitHub, LinkedIn)
- [x] **Project data file** — `src/data/projects.ts` as source of truth
- [x] **Favicon + meta tags** — OG image, title, description for sharing

---

## Phase 3 — Polish

Goal: the site feels intentional, fast, and memorable.

- [ ] **Scroll animations** — subtle entrance animations with Framer Motion (respect `prefers-reduced-motion`)
- [ ] **Dark mode** — Tailwind `dark:` classes, preference persisted in `localStorage`
- [ ] **Mobile nav** — hamburger menu with smooth open/close
- [ ] **Project detail pages** — `/projects/:slug` with longer write-ups
- [ ] **Blog** — MDX posts in `src/posts/<slug>/index.mdx`; post images co-located in the same folder and imported as modules; `@mdx-js/rollup` Vite plugin for build-time processing
- [ ] **SEO** — sitemap, canonical tags, structured data (JSON-LD Person schema)
- [ ] **Performance audit** — Lighthouse ≥ 90 on all four categories
- [ ] **Analytics** — Plausible or Fathom (privacy-first, no cookie banner needed)
