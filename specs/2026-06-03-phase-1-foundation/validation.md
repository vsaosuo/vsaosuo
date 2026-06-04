# Phase 1 — Foundation: Validation

Phase 1 is done when every check below passes. No partial credit — if the live URL is unreachable or CI is red, the phase is not done.

---

## 1. Live URL

- `https://vsaosuo.github.io` loads without a browser error (404, blank white screen, or MIME-type failure)
- The page title is visible (even if it's just the default Vite title for now)
- Navigating to `/projects` and `/resume` directly (hard refresh) returns the app, not a GitHub 404 page — confirming the SPA redirect is working

## 2. Navigation

- Clicking all three nav links (`/`, `/projects`, `/resume`) renders the correct placeholder page without a full page reload
- The browser back and forward buttons work correctly between routes
- No console errors on any route

## 3. TypeScript

- `npx tsc --noEmit` exits with no errors on the branch
- There are no `@ts-ignore` or `any` casts in the scaffolded code

## 4. Lint

- `npm run lint` exits 0 — no ESLint errors or warnings that are set to error
- `npm run format -- --check` (or equivalent Prettier check) exits clean

## 5. Build

- `npm run build` produces a `dist/` directory with no errors or warnings that indicate broken output
- `npm run preview` serves the built app locally and all three routes are reachable

## 6. CI

- The GitHub Actions CI workflow (`.github/workflows/ci.yml`) is green on the PR and on `main` after merge
- The deploy workflow (`.github/workflows/deploy.yml`) completes without error after merge to `main`
- Both workflow files are visible in the GitHub Actions tab

## 7. Tailwind

- At least one Tailwind utility class is visibly applied in the rendered page (e.g., a background color or font size on the nav or footer) — confirming the Tailwind build is live, not silently skipped

---

## Not required for merge

The following are intentionally out of scope and should not be used as blockers:

- Real content of any kind
- Lighthouse score targets (Phase 3)
- Mobile nav / dark mode (Phase 3)
- Custom domain (future, no code change needed)
