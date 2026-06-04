# Phase 3 — Polish: Validation

This branch can merge to `main` when all checks below pass.

---

## Lighthouse (production build)

Run against `npm run preview` (port 4173), not the dev server.

| Category       | Required score |
|----------------|---------------|
| Performance    | ≥ 90          |
| Accessibility  | ≥ 90          |
| Best Practices | ≥ 90          |
| SEO            | ≥ 90          |

Record the final four scores in the PR description before merging.

---

## Visual QA — breakpoints

Test at exactly **375 px** (mobile) and **1280 px** (desktop) in a browser.

### Mobile (375 px)
- [ ] Hamburger button is visible; tapping it opens the nav menu
- [ ] Nav links are reachable and navigate correctly
- [ ] Menu closes on link tap and on `Escape`
- [ ] No horizontal overflow or clipped content on any page

### Desktop (1280 px)
- [ ] Hamburger button is hidden; full nav links are visible inline
- [ ] Dark mode toggle is present and functional in the nav
- [ ] No layout shift when toggling dark mode

---

## Feature checks

### Dark mode
- [ ] First load with OS dark preference → site opens in dark mode
- [ ] First load with OS light preference → site opens in light mode
- [ ] Toggle overrides OS preference; survives page reload
- [ ] All text is readable and contrast is sufficient in both modes

### Scroll animations
- [ ] Each section animates in when scrolled into view
- [ ] With `prefers-reduced-motion: reduce` set, animations are disabled (sections appear instantly)

### Project detail pages
- [ ] `/projects/:slug` renders for every project in `src/data/projects.ts`
- [ ] Unknown slug (`/projects/not-a-real-project`) renders a not-found state, not a crash
- [ ] "Read more" links from the projects listing navigate to the correct detail page

### Blog
- [ ] `/blog` listing page renders and shows at least one post
- [ ] `/blog/:slug` renders the MDX post with correct title, date, and body
- [ ] Co-located post images load correctly in the production build

### SEO
- [ ] `<title>` and `<meta name="description">` are set correctly on each page
- [ ] `<link rel="canonical">` is present on each page
- [ ] JSON-LD `Person` schema is in `<head>` on the home page (inspect → Elements)
- [ ] `sitemap.xml` is accessible at `/sitemap.xml` in the production build

### Analytics
- [ ] Plausible script tag is present in the production build's `<head>`
- [ ] Page view fires on initial load (visible in Plausible dashboard or browser network tab)
- [ ] No Plausible requests on `localhost` (blocked by default)

---

## Regression checks (Phase 2 content)

- [ ] Hero section renders with correct name, bio, and CTA buttons
- [ ] About section renders
- [ ] Projects section renders all project cards with tags and links
- [ ] Skills section renders all categories
- [ ] Resume page loads embedded PDF viewer
- [ ] Contact section shows email and social links
- [ ] OG meta tags still present on the home page

---

## CI

- [ ] `npm run lint` passes with zero errors
- [ ] `npm run build` completes without errors or warnings
