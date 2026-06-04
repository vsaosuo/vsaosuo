# Phase 1 — Foundation: Requirements

## Goal

Ship a live, empty shell at a real URL. No content yet — that comes in Phase 2. The sole measure of success is that the scaffolding is correct and the site is publicly reachable with CI enforcing every push.

## Scope

All seven items from the roadmap are in scope for this phase:

1. Scaffold Vite + React project with TypeScript template
2. Install and configure Tailwind CSS v4
3. Set up ESLint + Prettier
4. Add React Router v7 with placeholder routes
5. Create base layout component (nav + footer)
6. Deploy to GitHub Pages
7. Add GitHub Actions CI: lint + build on push to `main`

## Key Decisions

| Decision      | Choice                                    | Reason                                                                                      |
| ------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| Language      | TypeScript (`react-ts` template)          | Specified in tech-stack.md; starting with TS avoids a migration mid-project                 |
| Styling       | Tailwind CSS v4                           | Specified in tech-stack.md; v4 has a different config model than v3 — use the v4 setup path |
| Routing       | React Router v7                           | Specified in tech-stack.md; manual (non-file-based) routes for now                          |
| Nav routes    | `/`, `/projects`, `/resume`               | Matches the three routes in the roadmap; each renders a bare placeholder page               |
| Deploy target | `vsaosuo.github.io` via `gh-pages` branch | GitHub Pages free tier; no custom domain at this stage                                      |
| CI trigger    | Push to `main`                            | Lint + build must pass before anything is considered shippable                              |

## Out of Scope

- Any real content (hero, projects, skills, resume) — that is Phase 2
- `/blog` route — Phase 3
- Dark mode, animations, mobile nav — Phase 3
- Custom domain / CNAME — deferred; can be added without code changes later

## Context

This phase exists purely to de-risk the toolchain. By the end of Phase 1, every subsequent phase can be developed with confidence that the build pipeline, deploy pipeline, and type system are working. A blank site that deploys reliably is more valuable than a content-rich site that has never shipped.

Audience context from `mission.md`: all three audiences (recruiters, developers, collaborators) need a reachable URL eventually — Phase 1 makes that possible.
