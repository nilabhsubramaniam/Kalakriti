# Technical debt and defects

> **Homepage composition refinement — 2026-11-17:** The user clarified that the illustrated craft-and-culture homepage was preferred. That server-rendered image-led hero is restored. The existing 3D/D3 map and cultural showcase now form a compact regional-discovery section immediately below it, with a single shared frame, a top control bar and a smaller regional preview. No dependencies, scene/geometry logic, configuration or routes changed. Current visual/regression evidence: [HOMEPAGE_BALANCE](HOMEPAGE_BALANCE.md).

> **3D map milestone — 2026-11-17:** The approved relief-map milestone is implemented. Autoplay is disabled; a single shared showcase controller supports play/pause/next/previous and suspends its timer while hidden. Hover is ephemeral; click/native selection writes the region store and URL. Both 2D and 3D use the same preview. Geometry still comes from the old source and needs authoritative administrative/boundary review; adding 3D does not correct that data. Product, producer and commerce gaps remain.

> **Implementation update — 2026-11-17:** E1: navbar region is derived from /state/<slug> and receives that region’s theme variables; embedded map themes no longer mutate the document root. E3: product/experience buttons are disabled with coming-soon labels, prices are marked Preview price, and false household attribution / instant-booking wording in the affected CTAs is removed. Other cultural claims remain unverified. E6: India SVG uses role=group and 36 focusable button paths with names, pressed state and Enter/Space handlers; a native select is also provided. E11: embedded map autoplay is suppressed; showcase remains explicitly available. Geometry review, the map’s overall size, Tailwind reset, and other unchanged findings remain open.

The original baseline audit follows for historical context.

> Audit of commit `6473826`, 2026-11-17. Priority: Critical / High / Medium / Low. No Critical findings.
> Security items are in [SECURITY_REVIEW](SECURITY_REVIEW.md); performance items in [PERFORMANCE_REVIEW](PERFORMANCE_REVIEW.md).

| ID | Finding | Priority |
|---|---|---|
| E1 | Site bar shows the wrong region on state pages | High |
| E2 | India map geometry is outdated | High |
| E3 | Placeholder commerce and unverified claims shown as real | High |
| E4 | `IndiaMap.tsx` is one 1,135-line component | Medium |
| E5 | Tailwind's reset silently overrides the design | Medium |
| E6 | Landing map is not keyboard accessible | Medium |
| E7 | Duplicated helpers | Low |
| E8 | Two of eight theme slots do not cross-fade | Low |
| E9 | Routing gaps (`dynamicParams`, error pages) | Low |
| E10 | Lint tooling drift | Low |
| E11 | Showcase autoplay keeps the camera moving | Low (product decision) |

---

### E1 · Site bar shows the wrong region on state pages — High

- **Files:** `components/layout/TopNav.tsx`, `app/state/[slug]/page.tsx`, `app/globals.css` (`body:has(.kk-st) .nav`)
- **Current:** the state page sets its theme on `<article>`. The nav reads `:root` and the store's `selected`.
- **Works:** the page body is themed correctly on first paint.
- **Problem (measured):** a direct load of `/state/rajasthan` gives a nav accent of `rgb(196,54,27)` (Madhubani) over a page accent of `rgb(29,111,168)` (Rajasthan). Arriving from the Kerala view, the nav reads "Kerala · Kasavu" in Kerala's gold on the Rajasthan page, because the store outlives the route change.
- **Fix:** derive the nav's region from the pathname on `/state/*`, or sync the store and root theme from a small client component on the state page.

### E2 · India map geometry is outdated — High

- **File:** `public/india-states.geojson`
- **Current:** 36 features from boundaries that predate 2019.
- **Works:** rendering, ring winding and island preservation.
- **Problem:** no Ladakh (Jammu & Kashmir still includes it); Dadra & Nagar Haveli and Daman & Diu still separate (merged in 2020); misspelt keys (`Arunanchal Pradesh`, `Dadara & Nagar Havelli`) leak into `STATE_THEMES` and are patched by `displayName`. `bihar-districts.geojson` has 37 districts; Bihar is believed to have 38 (*unverified against an official source*). The external boundary has not been checked against Survey of India, which is legally sensitive for maps published in India.
- **Fix:** choose an authoritative source (decision), regenerate with mapshaper `-o gj2008` and `keep-shapes`, validate, and move keys to ISO 3166-2:IN codes.

### E3 · Placeholder commerce and unverified claims shown as real — High

- **Files:** `components/state/ProductRail.tsx`, `components/state/StateAside.tsx`, `lib/states/bihar.ts`, `components/state/ClosingCTA.tsx`, `components/landing/IndiaMap.tsx` (hero eyebrow), `lib/stateThemes.ts`
- **Current:** 17 "Add to bag" and "Book" buttons with no handler, beside placeholder prices.
- **Works:** the copy and data structure are good, and the code comments admit the prices are placeholders.
- **Problem:** visitors see apparently live prices and buttons that do nothing. "Every piece here names the household" is not true of the data. The landing eyebrow says "GI-Tagged · Artisan Direct". Registry lines include unverified superlatives ("the only metal mirror in the world", "4,000+ years"). This conflicts with CLAUDE.md §4.3.
- **Fix:** label as a preview or disable the buttons; verify every claim and GI label against a source before launch.

### E4 · `IndiaMap.tsx` is one 1,135-line component — Medium

- **Current:** canvas field, d3 map, train, tour, URL sync, theme application and panel in one file.
- **Works:** disciplined ref bridging and cleanup; correct refit on resize.
- **Problem:** hard to change safely; a 3D map cannot reuse its parts.
- **Fix:** split it without behaviour change; keep the single d3 effect.

### E5 · Tailwind's reset silently overrides the design — Medium

- **Files:** `app/globals.css` (last three lines), `tailwind.config.ts`
- **Current:** `@tailwind base/components/utilities` at the end of the stylesheet. No component uses a utility class.
- **Problem (measured):** body line-height computes to 24px (1.5) instead of the authored 1.6, because the reset comes later in the cascade. Stray utilities (`.container`, `.static`, `.fixed`) are generated. The config's colours are an unrelated dark palette.
- **Fix (decision):** set `corePlugins.preflight: false`, or remove Tailwind. Measure layout before and after.

### E6 · Landing map is not keyboard accessible — Medium

- **File:** `components/landing/IndiaMap.tsx` (the `<svg role="img">`)
- **Problem (measured):** zero focusable elements in the map. `role="img"` hides 36 interactive shapes from assistive technology. The nav reaches state pages but not the map panel.
- **Fix:** reuse DistrictMap's pattern: `tabindex`, `role="button"`, `aria-label`, Enter and Space.

### E7 · Duplicated helpers — Low

`FONT_STACK` in both `IndiaMap.tsx` and `lib/states/theme.ts`; the theme-variable object built twice; `inr()` in both `ProductRail.tsx` and `StateAside.tsx`.

### E8 · Two of eight theme slots do not cross-fade — Low

`--kk-ink-soft` and `--kk-line` are not registered with `@property`, so they snap while the others fade.

### E9 · Routing gaps — Low

`dynamicParams` is not `false` on `/state/[slug]`, so unknown slugs render at request time before returning 404. There is no `app/not-found.tsx` or `app/error.tsx`; Next's unstyled defaults appear.

### E10 · Lint tooling drift — Low

ESLint 8 is end of life; `eslint-config-next` 14.2.5 does not match `next` 14.2.35.

### E11 · Showcase autoplay — Low (product decision)

`IndiaMap.tsx` starts the tour 1.6 s after every fresh visit and moves the camera every 2.5 s for about 90 s. CLAUDE.md §4.4 asks to avoid constant camera movement. It stops on any input and is skipped under reduced motion.

## Documentation drift

CLAUDE.md was corrected on 2026-11-17 for the points below. Keep it in step:

- The project structure now includes `app/state/[slug]/`, `components/state/` and `lib/states/`.
- The navbar navigates to state pages; it no longer writes the map selection.
- Six (not seven) `components/landing/*` files are unused; `GIBadge` is also unused; `bihar-districts.geojson` is used.
- The CSP `img-src` also allows an Atlassian host (see [SECURITY_REVIEW H2](SECURITY_REVIEW.md)).

`README.md` describes an earlier plan (next-auth, framer-motion, a `tokens/` folder) and is not a description of the code.
