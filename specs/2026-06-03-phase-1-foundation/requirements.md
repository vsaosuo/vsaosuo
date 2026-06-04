# Phase 1 — Foundation: Requirements

## Goal

Ship a live, empty shell at a real URL. No real content yet — that comes in Phase 2. The sole measure of success is that the scaffolding is correct and the site is publicly reachable with CI enforcing every push.

## Scope

Eight task groups were completed in this phase:

1. Scaffold Vite + React project with TypeScript template
2. Install and configure Tailwind CSS v4
3. Set up ESLint + Prettier
4. Add React Router v7 with placeholder routes
5. Create base layout component (nav + footer)
6. Deploy to GitHub Pages
7. Add GitHub Actions CI: lint + build on push to `main`
8. Add mock data for local layout preview _(added during implementation)_

## Key Decisions

| Decision      | Choice                                        | Reason                                                                                                                           |
| ------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Language      | TypeScript (`react-ts` template)              | Specified in tech-stack.md; starting with TS avoids a migration mid-project                                                      |
| Styling       | Tailwind CSS v4                               | Specified in tech-stack.md; v4 uses a Vite plugin + CSS `@import`, no `tailwind.config.js`                                       |
| Routing       | React Router v7                               | Specified in tech-stack.md; manual routes with `<Outlet />` nested layout pattern                                                |
| Nav routes    | `/`, `/projects`, `/resume`                   | Matches the three routes in the roadmap                                                                                          |
| Deploy action | `peaceiris/actions-gh-pages@v4`               | Pushes `dist/` to `gh-pages` branch; simpler than the official `actions/deploy-pages` flow for this setup                       |
| SPA deep links | `public/404.html` + `index.html` script      | GitHub Pages has no server config; 404.html rewrites the path to `?p=`, index.html restores it before React Router mounts       |
| Deploy target | `vsaosuo.github.io` via `gh-pages` branch     | GitHub Pages free tier; no custom domain at this stage                                                                           |
| CI trigger    | Push and pull\_request to `main`              | Lint + build must pass before anything is considered shippable                                                                   |
| Mock data     | `src/data/profile.ts` + `src/data/projects.ts` | Added to preview the full layout locally before Phase 2 content work begins; data files will be updated in place in Phase 2    |

## Out of Scope

- Real content (written copy, real photo, actual resume PDF) — that is Phase 2
- `/blog` route — Phase 3
- Dark mode, animations, mobile nav — Phase 3
- Custom domain / CNAME — deferred; can be added without code changes later

## Context

This phase exists purely to de-risk the toolchain. By the end of Phase 1, every subsequent phase can be developed with confidence that the build pipeline, deploy pipeline, and type system are working. The mock data added at the end of the phase serves the same goal — it lets the layout be assessed for real before Phase 2 content work begins, without committing to any copy.

Audience context from `mission.md`: all three audiences (recruiters, developers, collaborators) need a reachable URL eventually — Phase 1 makes that possible.
