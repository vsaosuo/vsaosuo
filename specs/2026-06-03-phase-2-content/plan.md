# Phase 2 — Content: Plan

Tasks are ordered so each group is independently shippable and reviewable.

---

## Group 1 — Data layer

Finalize both data files as the single source of truth before any UI work.

1. Audit `src/data/projects.ts` — verify shape matches `Project` type; ensure all placeholder projects have slug, title, description, tags, and at least a `github` link.
2. Audit `src/data/profile.ts` — verify headline, bio, `currentlyWorkingOn`, links (GitHub, LinkedIn, resume path), and skills groups are all populated with realistic placeholder values.
3. Add `photo` field to `profile.ts` (type `string | null`) — set to `null` for now; resolver falls back to placeholder avatar.

---

## Group 2 — Home page sections

Build each section as a focused component. Wire them into `src/pages/Home.tsx` in order.

4. **Hero** — full-width section with `profile.name`, `profile.headline`, and three CTA buttons: Resume (link to `/resume`), GitHub (external), LinkedIn (external). Buttons follow existing gray-border/hover-gray-900 pattern from the nav.
5. **About** — two-column layout (photo left, text right on `md:`): narrative `profile.bio`, "Currently working on: …" line, and a subtle divider. Photo column shows `<img>` if `profile.photo` is set, otherwise a `bg-gray-100` placeholder square.
6. **Featured projects** — card grid (`grid-cols-1 sm:grid-cols-2`) rendering the first 3 projects from `src/data/projects.ts` with an "All projects →" link to `/projects`. Extract a shared `ProjectCard` component (`src/components/ProjectCard.tsx`) reused by both Home and the Projects page. Each card: title, description (clamped to 3 lines), tag chips, GitHub/live links.
7. **Skills** — three grouped lists rendered from `profile.skills`. Section title per category; items as inline tags or a plain comma-separated line — keep it scannable.
8. **Contact** — short closing paragraph + icon links for GitHub, LinkedIn, and email (or LinkedIn if no email set). Anchored as `id="contact"` so the Hero CTA can deep-link to it.

---

## Group 3 — Projects page

9. Update `src/pages/Projects.tsx` to render the same card grid component built in step 6 (import and reuse — do not duplicate). Add a brief page heading.

---

## Group 4 — Resume page

10. Drop `resume.pdf` placeholder into `public/resume.pdf` (a blank or watermarked stand-in if the real PDF is not ready).
11. Update `src/pages/Resume.tsx` to embed the PDF via `<iframe src="/resume.pdf" …>` at a comfortable reading height, with a "Download PDF" link above it. Mobile fallback: if iframe is too small, show only the download link.

---

## Group 5 — Global assets and meta

12. Favicon: `public/favicon.svg` and its `<link rel="icon">` in `index.html` were already present from Phase 1 — verified correct, no change needed.
13. Add OG image: place a 1200×630 `og.png` in `public/`. Source can be a simple text-on-background export — social link previews just need something.
14. Update `index.html` `<head>` with: `<title>Visal Saosuo — Portfolio</title>`, `<meta name="description">` (one sentence from `profile.headline`), and `<meta property="og:*">` tags (title, description, image, url).

---

## Group 6 — Cross-cutting

15. Smoke-test all sections on mobile (375 px) using browser devtools — fix any overflow or text-size issues.
16. Verify nav links: `/` scrolls to top, `/projects` loads the projects page, `/resume` loads the resume page.
17. Run `npm run lint` and `npm run build` — zero warnings/errors before opening the PR.
