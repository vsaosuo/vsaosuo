# Phase 3 — Polish: Plan

Task groups ordered by risk and dependency. Each group should be a self-contained PR or commit series — earlier groups must not block the overall branch from being usable.

---

## Group 1 — Mobile nav

Low-risk, no new dependencies. Foundational for all mobile QA that follows.

1. Add a `MenuButton` component (hamburger icon → close icon using `lucide-react`).
2. Gate the nav link list behind a `isOpen` state; show inline on `md+`, show/hide on mobile.
3. Add Tailwind transition classes for open/close (translate or opacity).
4. Trap focus inside open menu; close on `Escape` and on route change.
5. Verify nav renders correctly at 375 px and 1280 px.

---

## Group 2 — Dark mode

Depends on nothing. Must be done before scroll animations so dark variants of animated elements are styled correctly.

1. Switch Tailwind dark mode strategy to `class` in `tailwind.config.ts`.
2. Write a `useTheme` hook: reads `localStorage`, falls back to `prefers-color-scheme`, returns `[theme, setTheme]`.
3. Apply `dark` class to `<html>` in the hook's effect; persist changes to `localStorage`.
4. Add a sun/moon toggle button to the nav (desktop + mobile menu).
5. Audit every existing component and add `dark:` variants for backgrounds, text, borders, and shadows.
6. Smoke-test: toggle in both modes, refresh — preference should survive page reload.

---

## Group 3 — Scroll animations

Depends on Group 2 (dark variants must exist before animated components are finalized).

1. `npm install framer-motion`.
2. Create a `<Reveal>` wrapper component: fades + slides up on viewport entry via `useInView`.
3. Read `prefers-reduced-motion` via `useReducedMotion()` from Framer Motion; pass `initial=false` when set.
4. Wrap each major section (Hero, About, Projects, Skills, Contact) in `<Reveal>`.
5. Keep durations under 400 ms; stagger children if a section has a list.

---

## Group 4 — Project detail pages (MDX)

Mirrors the blog architecture exactly. Depends on Group 5 being planned (same Vite plugin, already installed).

1. Create `src/projects/<slug>/index.mdx` for each project; frontmatter: `title`, `description`, `tags[]`, `github?`, `live?`; body: full MDX write-up with headings and co-located images.
2. Create `src/lib/projects.ts`: `import.meta.glob('../projects/*/index.mdx', { eager: true })`; sort by a hardcoded `ORDER` array (projects have no date).
3. Delete `src/data/projects.ts`; update all consumers (`ProjectCard`, `Home`, `Projects`, `ProjectDetail`) to import from `src/lib/projects`.
4. Create `src/pages/ProjectDetail.tsx`: look up project by slug, render `<Component />` inside the prose container.
5. Add `/projects/:slug` route in the router config.
6. Add a "Read more →" link from project listing cards to `/projects/:slug`.
7. Handle unknown slug: render a not-found message (no redirect — preserve the URL for debugging).

---

## Group 5 — Blog (MDX)

Depends on nothing; can be built in parallel with Groups 1–4.

1. `npm install @mdx-js/rollup remark-frontmatter remark-mdx-frontmatter`.
2. Add `@mdx-js/rollup` plugin to `vite.config.ts` with `remarkPlugins`.
3. Create `src/posts/` directory; add a first post (`src/posts/hello-world/index.mdx`) with frontmatter (`title`, `date`, `description`).
4. Create `src/lib/posts.ts`: use `import.meta.glob('../posts/*/index.mdx')` to build a post manifest at build time.
5. Create `/blog` listing page (`src/pages/Blog.tsx`): sorted list of posts with title, date, description.
6. Create `/blog/:slug` detail page (`src/pages/BlogPost.tsx`): renders MDX component + frontmatter header.
7. Add `/blog` and `/blog/:slug` routes to the router.
8. Add a "Blog" link to the nav.

---

## Group 6 — SEO

Depends on nothing; safe to do after most content is in place.

1. `npm install react-helmet-async`; wrap app in `<HelmetProvider>`.
2. Create a `<Meta>` component: accepts `title`, `description`, `canonical`; outputs `<title>`, `<meta>`, `<link rel="canonical">`.
3. Add `<Meta>` to every page with appropriate values.
4. Add JSON-LD `Person` schema to the home page `<head>` (name, url, sameAs for GitHub/LinkedIn).
5. Generate `public/sitemap.xml` with all static routes + blog post slugs (script or Vite plugin).
6. Add `<link rel="sitemap">` to `index.html`.

---

## Group 7 — Analytics

Depends on Group 6 (canonical domain should be confirmed before configuring Plausible).

1. Create a Plausible account and add the site domain.
2. Add the Plausible `<script>` snippet to `index.html` (deferred, pointing to `plausible.io/js/plausible.js`).
3. Verify events fire on route changes (Plausible's script auto-handles SPA navigation via `history` API).
4. Confirm no events fire on `localhost` (Plausible ignores `localhost` by default).

---

## Group 8 — Performance audit

Must be last — runs against the near-final production build.

1. `npm run build && npm run preview`, then run Lighthouse against `localhost:4173`.
2. Record baseline scores across Performance, Accessibility, Best Practices, SEO.
3. Fix any issues until all four categories reach ≥ 90.
4. Common fixes: lazy-load images, add `alt` text, set explicit `width`/`height`, remove render-blocking resources.
5. Document final Lighthouse scores in `validation.md` (or a comment in the PR).
