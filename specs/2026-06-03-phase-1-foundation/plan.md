# Phase 1 — Foundation: Plan

Each group is a logical unit of work that can be committed together. Complete them in order — later groups depend on earlier ones.

---

## 1. Scaffold project

- Run `npm create vite@latest vsaosuo -- --template react-ts` in the repo root (or scaffold into the existing directory)
- Verify `npm run dev` starts without errors
- Delete Vite's default boilerplate (`src/App.css`, `src/assets/react.svg`, placeholder content in `App.tsx`)
- Commit: _"chore: scaffold Vite + React + TypeScript project"_

## 2. Tailwind CSS v4

- Install: `npm install tailwindcss @tailwindcss/vite`
- Add the Vite plugin to `vite.config.ts`
- Add `@import "tailwindcss"` to the main CSS entry point (Tailwind v4 does not use a `tailwind.config.js` by default)
- Add a smoke-test utility class to confirm Tailwind is compiling
- Commit: _"chore: add Tailwind CSS v4"_

## 3. ESLint + Prettier

- Vite's `react-ts` template ships with ESLint; extend the config per the template's recommendations for type-aware rules
- Install Prettier and `eslint-config-prettier`
- Add a `.prettierrc` with project formatting preferences
- Add `lint` and `format` scripts to `package.json`
- Verify `npm run lint` exits clean
- Commit: _"chore: configure ESLint and Prettier"_

## 4. React Router v7 — placeholder routes

- Install: `npm install react-router-dom`
- Wrap the app in `<BrowserRouter>` in `main.tsx`
- Define routes for `/`, `/projects`, `/resume` — each pointing to a minimal placeholder component (`<h1>Home</h1>`, etc.)
- Commit: _"feat: add React Router with placeholder routes"_

## 5. Base layout component

- Create `src/components/Layout.tsx` that wraps every route with:
  - **Nav**: links to `/` (Home), `/projects` (Projects), `/resume` (Resume)
  - **Footer**: name + year, kept minimal
- Apply the layout as a wrapper in the router so all routes share it
- Verify nav links navigate correctly without full page reload
- Commit: _"feat: add base layout with nav and footer"_

## 6. GitHub Pages deploy

- Add `base` to `vite.config.ts` set to `"/"`  (or repo path if deploying to a sub-path)
- Add `public/404.html` with the standard SPA redirect trick for GitHub Pages so deep links work
- Create `.github/workflows/deploy.yml`:
  - Trigger: push to `main`
  - Steps: checkout → setup Node → `npm ci` → `npm run build` → deploy `dist/` to `gh-pages` branch using `actions/deploy-pages` or `peaceiris/actions-gh-pages`
- Enable GitHub Pages in repo settings, source: `gh-pages` branch
- Commit: _"ci: add GitHub Pages deploy workflow"_

## 7. GitHub Actions CI

- Create `.github/workflows/ci.yml`:
  - Trigger: push and pull_request to `main`
  - Steps: checkout → setup Node → `npm ci` → `npm run lint` → `npm run build`
- Verify the workflow passes on the branch before merging
- Commit: _"ci: add lint and build CI workflow"_

---

## Merge checklist

- [ ] All seven task groups committed
- [ ] `npm run lint` exits 0 locally
- [ ] `npm run build` produces a `dist/` without errors
- [ ] GitHub Actions CI workflow green on the PR
- [ ] `vsaosuo.github.io` is reachable after merge to `main`
- [ ] All three nav routes render a placeholder page without a 404
