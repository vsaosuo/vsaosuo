# Phase 2 — Content: Validation

## Definition of done

The branch is ready to merge when **all** of the following pass.

---

## Functional checks

| # | Check | How to verify |
|---|-------|---------------|
| 1 | Hero section renders name, headline, and three CTA buttons | Visit `/` — buttons link to `/resume`, GitHub, LinkedIn |
| 2 | About section renders bio and "currently working on" text | Visit `/` — no lorem ipsum or TODO text visible |
| 3 | Projects section shows ≥ 3 cards with title, description, tags, and at least one link | Visit `/` — cards render; GitHub link opens correctly |
| 4 | Skills section shows all three category groups | Visit `/` — Languages, Hardware & Embedded, Web & Tools all present |
| 5 | Contact section has working GitHub and LinkedIn links | Visit `/` — links open in new tab |
| 6 | `/projects` page renders the same project cards | Visit `/projects` — grid matches homepage projects section |
| 7 | `/resume` page embeds the PDF and shows a download link | Visit `/resume` — PDF visible in iframe; "Download PDF" link triggers download |
| 8 | Favicon appears in browser tab | Open any page — tab shows custom favicon, not browser default |
| 9 | `<title>` is set correctly | Browser tab reads "Visal Saosuo — Portfolio" (or similar) |
| 10 | OG meta tags are present | `curl` or "View Page Source" on `/` — `og:title`, `og:description`, `og:image` all present |

---

## Visual / responsive checks

| # | Check | How to verify |
|---|-------|---------------|
| 11 | No horizontal scroll at 375 px | DevTools → 375 px viewport — no overflow on any section |
| 12 | All sections are readable on 375 px | Text is not clipped; buttons are tappable size (≥ 44 px) |
| 13 | Layout adapts to 1280 px without looking stretched | Widen browser — max-width container centers content |
| 14 | No visual regressions in nav or footer | Nav links and footer copyright still render correctly |

---

## Code quality checks

| # | Check | How to verify |
|---|-------|---------------|
| 15 | Zero lint errors | `npm run lint` exits 0 |
| 16 | Build succeeds | `npm run build` exits 0, `dist/` is generated |
| 17 | No inline content in components | `grep -r "lorem\|TODO\|placeholder" src/` returns nothing in `.tsx` files |
| 18 | All data sourced from `src/data/` | Components import from `projects.ts` / `profile.ts`, not hardcoded strings |

---

## Merge gate

All 18 checks must pass. Open the PR only after the build check CI is green on the branch.
