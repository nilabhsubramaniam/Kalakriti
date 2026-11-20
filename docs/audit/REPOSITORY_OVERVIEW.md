# Repository overview

> **Homepage composition refinement — 2026-11-17:** The user clarified that the illustrated craft-and-culture homepage was preferred. That server-rendered image-led hero is restored. The existing 3D/D3 map and cultural showcase now form a compact regional-discovery section immediately below it, with a single shared frame, a top control bar and a smaller regional preview. No dependencies, scene/geometry logic, configuration or routes changed. Current visual/regression evidence: [HOMEPAGE_BALANCE](HOMEPAGE_BALANCE.md).

> **3D map milestone — 2026-11-17:** The homepage now opens on a state-first 3D relief map, generated from the existing GeoJSON, with a regional preview and an optional cultural showcase. D3 remains the selectable 2D view and the automatic fallback for missing WebGL, asset failures or context loss. Three.js 0.187.0 and matching types are installed; the rest of the framework is unchanged. Earlier homepage descriptions below are historical.

> **Implementation update — 2026-11-17:** The homepage now has server-rendered hero, illustrated craft previews, categories, community/process stories, values, updates teaser and footer. RegionalDiscovery offers normal state links and an opt-in dynamically loaded D3 map. Search is available in the shared header. The existing state routes remain; shopping and booking controls are explicitly unavailable, and prices are labeled preview values.

The original baseline audit follows for historical context.

> Audit of commit `6473826`, 2026-11-17. Statements are verified against the code or the running production build unless marked *unverified*.

## What Kalakriti is today

A single Next.js 14.2.35 App Router site on React 18.3.1. It is a **cultural discovery storefront without commerce**: an interactive map of India, per-region visual identities, and state pages. Bihar has a full page with crafts and placeholder products. There is no backend, no API route, no Server Action, no middleware, no auth, no cart, no checkout, no database and no 3D library.

## Routes

| Route | Rendering | Content |
|---|---|---|
| `/` | Static (`○`) | Full-screen d3 map of 36 regions, theme cross-fade, state panel, automatic showcase tour |
| `/state/[slug]` | Built at build time (`●`), 36 paths | Bihar: full page. The other 35: overviews built from `lib/stateThemes.ts` |
| Unknown slug | 404, rendered at request time | `dynamicParams` is not disabled |

## Source tree

```text
app/
  layout.tsx            fonts (6 × next/font), metadata, viewport, <TopNav/>
  page.tsx              server shell; loads IndiaMap with ssr:false
  state/[slug]/page.tsx state page, generateStaticParams over 36 slugs
  globals.css           all styling (≈2,130 lines), kk-* classes, theme slots
components/
  landing/IndiaMap.tsx  the d3 map, canvas field, tour, panel (used)
  landing/*             six other components (unused scaffolding)
  layout/TopNav.tsx     site bar and state menu
  ornament/Motifs.tsx   18 inline-SVG motifs, BorderPatti
  shared/               ProductCard, GIBadge (both unused)
  state/                14 components for the state page
lib/
  stateThemes.ts        regional identity registry (36 entries)
  states/               StatePage types, Bihar data, derived overviews, slugs, theme vars
  store/useRegionStore.ts  zustand selection store
  env.ts                zod env validation (unused)
public/
  india-states.geojson     1.47 MB, 36 features
  bihar-districts.geojson  128 KB, 37 features (used by /state/bihar)
```

## Feature inventory

**Landing map** — all 36 regions draw at 320–1440px with no horizontal scroll. Per-region palette, font register, motif and script line, cross-faded through `@property` custom properties. Hover readout. Panel with script line, shloka, crafts and an "Explore →" link. Deep links (`/#Kerala`) open the panel and suppress the tour. Escape closes. The projection refits on resize and orientation change. A showcase tour with an animated train starts after 1.6 s and stops on any input.

**Site bar** — a state menu grouped into seven regions. Every row links to `/state/<slug>`.

**Bihar page** — keyboard-operable district map (8 craft districts), 4 story chapters, 9 crafts in an accordion, 12 products, 5 experiences, 10 destinations. Readable with JavaScript disabled.

**Other 35 state pages** — honest overviews from registry data only. Nothing is invented.

## What was run

| Check | Result |
|---|---|
| `pnpm validate` (type-check, `lint:strict`, build) | Pass. Zero lint warnings. 41 pages generated. |
| `pnpm audit` | 34 advisories: 3 critical, 14 high, 15 moderate, 2 low. See [SECURITY_REVIEW](SECURITY_REVIEW.md). |
| `pnpm build && next start`, probed with curl | Headers present; all 36 state pages 200; unknown slug 404 |
| Headless Chrome over CDP at 320 / 390 / 768 / 1024 / 1440 | See [PERFORMANCE_REVIEW](PERFORMANCE_REVIEW.md) and [TECHNICAL_DEBT](TECHNICAL_DEBT.md) |

**Not verified:** a frozen install under pnpm 9 (Vercel's version); Vercel dashboard settings (there is no `vercel.json`); tap-target sizes under a coarse pointer; throttled mobile performance.

**Trap observed during the audit:** a dev compile wrote into `.next` after a production build, and `next start` then returned 500 on every route (`Cannot find module './vendor-chunks/…'`). Do not run `pnpm dev` while building or serving a production build from the same `.next`.

## Readiness summary

| Area | Readiness |
|---|---|
| Code quality and build gate | Good |
| Security posture (static site) | Good, with open items |
| Visual identity and responsive layout | Good |
| Accessibility | Partial: state pages solid, landing map not keyboard operable |
| Data and content accuracy | Needs work: outdated map geometry, unverified claims, placeholder prices |
| Commerce and marketplace | Not started |
| Foundation for 3D work | Ready once the foundation fixes in [IMPLEMENTATION_PLAN](../IMPLEMENTATION_PLAN.md) are done |
