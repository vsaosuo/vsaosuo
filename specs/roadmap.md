# Roadmap

Phased from foundation to polish. Each phase should be releasable — never block on a later phase to ship.

---

## Phase 1 — Foundation

Goal: a live, empty shell on a real URL.

- [ ] Init Vite + React project (`npm create vite@latest`)
- [ ] Install and configure Tailwind CSS v4
- [ ] Set up ESLint + Prettier
- [ ] Add React Router with placeholder routes (`/`, `/projects`, `/resume`)
- [ ] Create base layout component (nav, footer)
- [ ] Deploy to GitHub static
- [ ] Add GitHub Actions CI: lint + build on push to `main`

---

## Phase 2 — Content

Goal: a visitor can learn who Visal is, see real work, and make contact.

- [ ] **Hero section** — name, one-line bio, CTA buttons (resume, GitHub, LinkedIn)
- [ ] **About section** — short narrative, photo, what Visal is currently working on
- [ ] **Projects section** — 3–5 featured projects with title, description, tech tags, links
- [ ] **Skills section** — grouped by category (languages, tools, hardware/software)
- [ ] **Resume page** — embedded PDF viewer + download link
- [ ] **Contact section** — email link, social links (GitHub, LinkedIn)
- [ ] **Project data file** — `src/data/projects.js` as source of truth
- [ ] **Favicon + meta tags** — OG image, title, description for sharing

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
