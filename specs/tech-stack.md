# Tech Stack

## Core

| Layer        | Choice          | Reason                                                                           |
| ------------ | --------------- | -------------------------------------------------------------------------------- |
| UI framework | React 18        | Component model, ecosystem, familiar to most hiring managers                     |
| Build tool   | Vite            | Fast HMR, minimal config, first-class React support                              |
| Styling      | Tailwind CSS v4 | Utility-first, no CSS file sprawl, easy responsive design                        |
| Language     | TypeScript      | Type safety, better IDE support, industry-standard for production React projects |

## Responsiveness

- Mobile-first design — Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) applied from smallest breakpoint up
- Target: fully functional and readable on phones (≥ 375px) through wide desktop (≤ 1440px)
- No separate mobile/desktop codepaths — one layout that adapts via CSS

## Routing

- React Router v7 (file-based or manual routes) for multi-page navigation
- Keep it flat: `/`, `/projects`, `/blog` (optional), `/resume`

## Deployment

- **Primary:** GitHub Pages — free static hosting, no vendor lock-in, served from the repo itself
- **Method:** GitHub Actions (recommended by GitHub over branch-based deployment) — workflow defined in `.github/workflows/deploy.yml` builds on every push to `main` and publishes to the `gh-pages` branch via `peaceiris/actions-gh-pages`
- **Live URL:** `https://vsaosuo.github.io/vsaosuo/` — served under the `/vsaosuo/` sub-path because the repo name is `vsaosuo` (not a `<username>.github.io` repo)
- **Custom domain:** optional — add a `CNAME` file to `public/` and configure DNS; would change the base path to `/`
- **Not using Jekyll** — GitHub Pages defaults to Jekyll processing, but this is a Vite/React site. Jekyll is bypassed by including a `.nojekyll` file at the repo root (added automatically by `peaceiris/actions-gh-pages`)

### Vite `base` path requirement

Because the site is served at `/vsaosuo/` (not `/`), Vite must be told the sub-path so it generates correct asset URLs:

```ts
// vite.config.ts
export default defineConfig({
  base: '/vsaosuo/',
  ...
})
```

Without this, bundled JS/CSS assets resolve to `vsaosuo.github.io/assets/...` (root) instead of `vsaosuo.github.io/vsaosuo/assets/...` and 404. If a custom domain is ever added, revert `base` to `'/'`.

### Build output structure

```
vsaosuo.github.io/vsaosuo/
├── index.html              ← Vite entry point
├── assets/
│   ├── index-[hash].js     ← bundled JS (React + app code)
│   └── index-[hash].css    ← bundled Tailwind output
└── ...static assets (images, favicon, etc.)
```

> GitHub Pages sites are publicly accessible even if the source repository is private — never commit secrets or sensitive data.

## Blog Content

- Format: MDX (`.mdx`) — Markdown for writing, React components when needed (callouts, demos)
- Processed at build time via `@mdx-js/rollup` Vite plugin — output is static, no runtime dependency
- Folder-per-post structure; images co-located with their post and imported as modules:

```
src/posts/
├── my-first-post/
│   ├── index.mdx
│   ├── hero.webp
│   └── diagram.webp
└── another-post/
    ├── index.mdx
    └── screenshot.webp
```

Vite fingerprints and copies co-located images to `dist/` automatically on build.

## Project Content

Same MDX architecture as blog posts — each project is a folder under `src/projects/` with an `index.mdx` and any co-located images:

```
src/projects/
├── fpga-synthesizer/
│   ├── index.mdx
│   └── block-diagram.webp
├── embedded-datalogger/
│   └── index.mdx
└── pcb-power-supply/
    ├── index.mdx
    └── board-render.webp
```

- Frontmatter carries all project metadata (`title`, `description`, `tags`, `github`, `live`) — no separate data file.
- `src/lib/projects.ts` uses `import.meta.glob` to build the project manifest at build time.
- Display order is explicit: an `ORDER` array in `src/lib/projects.ts` controls listing sequence (projects have no publication date to sort on).
- `src/lib/posts.ts` follows the same pattern for blog content.

## Assets & Media

- Global static assets (favicon, resume PDF, OG image): `public/` — copied verbatim to `dist/`
- Blog post images: co-located in `src/posts/<slug>/` and imported in MDX (see above)
- Icons: `lucide-react` or inline SVGs — no icon font bloat
- Fonts: Google Fonts via `@import` (variable font preferred)

## Tooling

| Tool              | Purpose                              |
| ----------------- | ------------------------------------ |
| ESLint + Prettier | Code style enforcement               |
| Vite Preview      | Local production build preview       |
| GitHub Actions    | CI: lint + build check on every push |

## What we are deliberately NOT using

- No SSR / no backend — this is a static site
- No UI component library (shadcn, MUI, etc.) — handcrafted with Tailwind keeps the design distinct
- No CMS — content lives in `src/data/` as TypeScript files for now
