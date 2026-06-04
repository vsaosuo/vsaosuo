# Phase 1 — Foundation: Plan

Each group is a logical unit of work that can be committed together. Complete them in order — later groups depend on earlier ones.

---

## 1. Scaffold project ✓

- Scaffold into a temp subdirectory to preserve the existing `README.md`:
  `npm create vite@latest _tmp -- --template react-ts`
- Move scaffold files to repo root with `rsync -a --exclude='README.md' _tmp/ . && rm -rf _tmp`
- Fix the `name` field in `package.json` from `tmp` to `vsaosuo-portfolio`
- Delete Vite's default boilerplate: `src/App.css`, `src/assets/react.svg`, `src/assets/vite.svg`, `src/assets/hero.png`, `public/icons.svg`
- Replace `App.tsx` with a minimal `<div>Portfolio</div>` placeholder
- Verify `npm run build` passes before committing
- Commit: _"chore: scaffold Vite + React + TypeScript project"_

## 2. Tailwind CSS v4 ✓

- Install: `npm install tailwindcss @tailwindcss/vite`
- Add the `@tailwindcss/vite` plugin to `vite.config.ts` (Tailwind v4 uses a Vite plugin, not PostCSS)
- Replace `src/index.css` entirely with `@import 'tailwindcss'` and a minimal body reset — no `tailwind.config.js` needed
- Confirm CSS bundle grows (baseline went from ~1.8 kB to ~6 kB with Tailwind preflight)
- Commit: _"chore: add Tailwind CSS v4"_

## 3. ESLint + Prettier ✓

- The `react-ts` scaffold ships ESLint with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh` already configured
- Install: `npm install -D prettier eslint-config-prettier`
- Extend `eslint.config.js` with `prettierConfig` as the last entry (disables style rules that conflict with Prettier)
- Add `.prettierrc` with project preferences: no semis, single quotes, trailing commas, 100-char width
- Add `.prettierignore` for `dist/` and `node_modules/`
- Add `format` (`prettier --write .`) and `format:check` (`prettier --check .`) scripts to `package.json`
- Run `npm run format` to baseline all existing files, then verify `npm run lint` and `npm run format:check` both exit 0
- Commit: _"chore: configure ESLint and Prettier"_

## 4. React Router v7 — placeholder routes ✓

- Install: `npm install react-router-dom`
- Wrap the app in `<BrowserRouter>` in `main.tsx`
- Create `src/pages/Home.tsx`, `src/pages/Projects.tsx`, `src/pages/Resume.tsx` as minimal placeholder components
- Wire `App.tsx` to use `<Routes>` and `<Route>` for `/`, `/projects`, `/resume`
- Commit: _"feat: add React Router with placeholder routes"_

## 5. Base layout component ✓

- Create `src/components/Layout.tsx` using React Router's `<Outlet />` pattern:
  - **Nav**: `<NavLink>` to `/` (Home), `/projects` (Projects), `/resume` (Resume); `end` prop on the root link prevents it matching all routes
  - **Footer**: name + year (`new Date().getFullYear()`)
- In `App.tsx`, nest all page routes under a pathless `<Route element={<Layout />}>` so every route inherits the shell
- Commit: _"feat: add base layout with nav and footer"_

## 6. GitHub Pages deploy ✓

- SPA deep-link support (GitHub Pages serves `404.html` for unknown paths):
  - `public/404.html` — rewrites the path to `/?p=<encoded-path>` via `window.location.replace`
  - `index.html` — inline script reads `?p=` on load and calls `history.replaceState` so React Router sees the correct path
- Create `.github/workflows/deploy.yml`:
  - Trigger: push to `main`
  - Steps: checkout → `actions/setup-node@v4` (Node 22, npm cache) → `npm ci` → `npm run build` → `peaceiris/actions-gh-pages@v4` pushes `dist/` to `gh-pages` branch
  - Permissions: `contents: write`
- Enable GitHub Pages in repo Settings → Pages → Source: `gh-pages` branch (manual step, done once)
- Commit: _"ci: add GitHub Pages deploy workflow"_

## 7. GitHub Actions CI ✓

- Create `.github/workflows/ci.yml`:
  - Trigger: push and pull_request to `main`
  - Steps: checkout → `actions/setup-node@v4` (Node 22, npm cache) → `npm ci` → `npm run lint` → `npm run build`
- Commit: _"ci: add lint and build CI workflow"_

## 8. Mock data for local preview ✓

- Create `src/data/profile.ts` — single `profile` object with name, headline, bio, currentlyWorkingOn, links (GitHub, LinkedIn, email, resume), and skills grouped by category
- Create `src/data/projects.ts` — `Project` type + `projects` array with 4 entries (title, description, tags, optional github/live links)
- Flesh out page components to match the Phase 2 section structure:
  - `Home.tsx`: hero (name, headline, CTA buttons) → About → Skills (chip grid by category) → featured projects teaser → Contact
  - `Projects.tsx`: 2-column card grid, each card with title, description, tech tags, and links
  - `Resume.tsx`: page header with Download PDF button + `iframe` placeholder (pending `public/resume.pdf`)
- This is preview-only content — data files will be updated with real content in Phase 2; no structural changes to components expected

---

## Merge checklist

- [ ] All task groups committed
- [ ] `npm run lint` exits 0 locally
- [ ] `npm run format:check` exits 0 locally
- [ ] `npm run build` produces a `dist/` without errors
- [ ] GitHub Actions CI workflow green on the PR
- [ ] `vsaosuo.github.io` is reachable after merge to `main`
- [ ] All three nav routes render without a 404 (including hard refresh)
