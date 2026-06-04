# Phase 2 — Content: Requirements

## Goal

A visitor can learn who Visal is, see real work, and make contact — entirely from a single visit to the site.

## Scope

All 8 roadmap items are in scope for this phase:

| Item | Description |
|------|-------------|
| Hero section | Name, one-line bio, CTA buttons (Resume, GitHub, LinkedIn) |
| About section | Short narrative, what Visal is currently working on |
| Projects section | 3–5 featured projects with title, description, tech tags, links |
| Skills section | Grouped by category: Languages, Hardware & Embedded, Web & Tools |
| Resume page | Embedded PDF viewer + download link at `/resume` |
| Contact section | Email link + social links (GitHub, LinkedIn) |
| Project data file | `src/data/projects.ts` as the single source of truth for project cards |
| Favicon + meta tags | OG image, `<title>`, `<meta description>` for link sharing |

## Out of scope

- Scroll animations (Phase 3)
- Dark mode (Phase 3)
- Project detail pages `/projects/:slug` (Phase 3)
- Blog (Phase 3)

## Decisions

### Content strategy
Realistic placeholder content is used during implementation — `src/data/projects.ts` and `src/data/profile.ts` already contain credible stand-in data. Final copy is swapped in before the branch merges.

### Design direction
Extend the existing Phase 1 shell strictly — do not introduce new design patterns without a clear gap. Established tokens:
- Container: `max-w-4xl mx-auto px-6`
- Text palette: `text-gray-900` / `text-gray-500` / `text-gray-400`
- Borders: `border-gray-200`
- No color accent has been set yet; default to `gray-900` links/buttons or pick a single muted accent if needed for CTAs

### Component structure
- All homepage sections live in `src/pages/Home.tsx` (extracted into sub-components in `src/components/sections/` if they exceed ~80 lines)
- `src/data/projects.ts` and `src/data/profile.ts` are the only content sources — no inline data in components
- Resume PDF lives in `public/resume.pdf` so it is served verbatim

### Photo
Phase 1 has no photo asset. If no photo is provided before implementation, the About section renders a placeholder avatar block sized for a square crop (e.g., `bg-gray-100` box). Swap in the real image by dropping it into `public/` and updating the `src` path.

### Email
`profile.ts` currently sets `email: 'through LinkedIn'` — the Contact section renders the LinkedIn link as the contact CTA. Update this field to a real address when ready.

## Context

Mission: every design and content decision should help someone understand who Visal is and what he can build within 60 seconds (see `specs/mission.md`).

Primary audience for this phase: recruiters and hiring managers — they need skills, projects, resume, and contact up front.
