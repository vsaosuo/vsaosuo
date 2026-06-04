# Phase 3 — Polish: Requirements

## Goal

The site feels intentional, fast, and memorable. Every item in this phase is a quality or reach multiplier on the content already in place from Phase 2.

## Scope

All eight items from the roadmap are in-scope:

| # | Feature | Description |
|---|---------|-------------|
| 1 | Mobile nav | Hamburger menu with smooth open/close for viewports < `md` |
| 2 | Dark mode | Tailwind `dark:` classes; system preference on first load; user-overridable toggle; persisted in `localStorage` |
| 3 | Scroll animations | Framer Motion entrance animations on section reveal; disabled when `prefers-reduced-motion: reduce` |
| 4 | Project detail pages | `/projects/:slug` routes with longer write-ups per project; content in MDX, matching the blog architecture |
| 5 | Blog (MDX) | `src/posts/<slug>/index.mdx` processed at build time via `@mdx-js/rollup`; images co-located and imported as modules |
| 6 | SEO | `sitemap.xml`, canonical `<link>` tags, JSON-LD `Person` schema in `<head>` on home page |
| 7 | Performance audit | Lighthouse ≥ 90 across all four categories in the production build |
| 8 | Analytics | Plausible — privacy-first, no cookie banner, script injected via `<script>` in `index.html` |

## Decisions

### Analytics: Plausible
- Free cloud tier, self-hostable if needed later.
- Script added once to `index.html`; no wrapper component needed.
- Does not require a cookie consent banner (no PII collected).
- Domain to configure: `vsaosuo.github.io` (or custom domain if added).

### Dark mode: system-pref + manual toggle
- On first load, read `prefers-color-scheme: dark` via `window.matchMedia`.
- If the user has toggled before, `localStorage.getItem('theme')` overrides the OS preference.
- Apply `dark` class to `<html>` (Tailwind's class-based dark mode strategy).
- Toggle button lives in the nav; icon swaps between sun and moon.

### Blog
- MDX processed at build time — output is static HTML, no runtime parser.
- Folder-per-post: `src/posts/<slug>/index.mdx` + co-located images.
- Post metadata (title, date, description) exported from each MDX file as frontmatter via `remark-frontmatter` + `remark-mdx-frontmatter`.
- `/blog` listing page auto-generated from Vite's `import.meta.glob`.

### Project detail pages
- Same MDX architecture as the blog — folder-per-project under `src/projects/<slug>/`, images co-located and imported as modules.
- Frontmatter carries all project metadata: `title`, `description`, `tags`, `github?`, `live?`.
- `src/lib/projects.ts` uses `import.meta.glob('../projects/*/index.mdx')` to build the project manifest at build time — no hand-maintained import list.
- `src/data/projects.ts` is removed; `src/lib/projects.ts` is the single source of truth.
- Display order controlled by an `ORDER` constant in `src/lib/projects.ts` (projects don't have a date to sort on).
- Unknown slugs render a 404-style "project not found" view.

## Context

- **Mission**: make it trivially easy for a recruiter, developer, or collaborator to understand what Visal can build.
- **North-star check**: every animation, dark mode style, and blog post should pass — _does this help someone understand who Visal is and what he can build?_
- **Deployment**: GitHub Pages static — no SSR, no server-side rendering, no runtime backend.
- **Stack**: React 18, Vite, Tailwind CSS v4, TypeScript, React Router v7.
- **Existing content** (Phase 2) must continue to work without regressions: hero, about, projects, skills, resume, contact.
