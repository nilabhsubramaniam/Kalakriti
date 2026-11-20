# Performance review

> **Homepage composition refinement — 2026-11-17:** The user clarified that the illustrated craft-and-culture homepage was preferred. That server-rendered image-led hero is restored. The existing 3D/D3 map and cultural showcase now form a compact regional-discovery section immediately below it, with a single shared frame, a top control bar and a smaller regional preview. No dependencies, scene/geometry logic, configuration or routes changed. Current visual/regression evidence: [HOMEPAGE_BALANCE](HOMEPAGE_BALANCE.md).

> **3D map milestone — 2026-11-17:** Mesh projection, simplification, triangulation, extrusion and material-group consolidation now run offline. The 36 regions retain all 380 polygon parts and use only 72 material groups. Browser work is buffer decoding/upload plus rendering, not triangulation. A ResizeObserver refits the camera without rebuilding geometry. Frames are scheduled only during interaction/transitions; rendering stops offscreen or when the page is hidden. DPR is capped at 1.5. Final measurements and device limitations are in THREE_MAP_IMPLEMENTATION.md; original timings below are historical.

> **Implementation update — 2026-11-17:** The homepage narrative is now statically rendered. D3 and GeoJSON are requested only after opening the map or following a recognized region hash. Embedded canvas animation is disabled; the existing showcase is opt-in. Four local WebP illustrations use reserved aspect ratios and responsive next/image delivery; only the hero is priority-loaded. A fresh production build retains static / and 36 generated state routes. Earlier timing and layout measurements below describe the old map-only homepage and are not current performance evidence. No new Core Web Vitals claims are made.

The original baseline audit follows for historical context.

> Audit of commit `6473826`, 2026-11-17.
> **Test conditions:** local production build (`next start`), headless Chrome on an Apple-silicon Mac, no network or CPU throttling, device scale factor 1. Numbers from a fast desktop understate mobile cost. Throttled mobile measurements and Core Web Vitals were **not** taken.

## Measurements

| Measure | Value |
|---|---|
| First Load JS, `/` | 118 kB (87.3 kB shared) |
| First Load JS, `/state/[slug]` | 97.7 kB |
| d3 chunk (loaded lazily by both maps) | 288 kB minified |
| `india-states.geojson` | 1,474,552 bytes raw, 502,637 bytes gzip, 74,388 coordinate points |
| `bihar-districts.geojson` | 127,760 bytes raw, 37 features |
| GeoJSON cache policy | `public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800` |
| HTML cache policy (pages) | `s-maxage=31536000, stale-while-revalidate` |
| Landing canvas, idle | 121 animation frames in 2 s (continuous ≈60 fps) |
| Long tasks on landing load | One, 58 ms |
| Landing page content with JavaScript off | Navbar only: no `<h1>`, no hero text |
| Bihar page with JavaScript off | Heading and all 9 crafts render |
| Horizontal scroll at 320–1440px | None on `/`, `/state/rajasthan`, `/state/bihar` |

## Findings

### G1 · The map file is heavy — High

- **Current:** 1.47 MB raw, 491 KB gzip, 74,388 points, fetched before anything is drawn, cached for one hour.
- **Recommendation:** simplify when regenerating the geometry ([TECHNICAL_DEBT E2](TECHNICAL_DEBT.md)), keeping `gj2008` winding and `keep-shapes`; use a content-hashed filename and `immutable` caching.

### G2 · The landing page is empty in its server HTML — High

- **File:** `app/page.tsx` loads the whole `IndiaMap` with `ssr:false`.
- **Problem:** crawlers and JavaScript-off visitors get only the navbar. The largest content waits for JavaScript, then the d3 chunk, then the GeoJSON.
- **Recommendation:** render the hero as a server component and keep only the map client-side.

### G3 · Canvas animates constantly and ignores reduced motion — Medium

- **File:** `components/landing/IndiaMap.tsx`, canvas effect
- **Problem:** the field repaints every frame while idle, never checks `prefers-reduced-motion` (the global CSS rule cannot reach canvas drawing), and keeps running under the open panel.
- **Recommendation:** draw one still frame under reduced motion; pause when offscreen or covered; consider a lower frame rate.

### G4 · All of d3 is loaded — Low to medium

`import('d3')` brings in the whole library. Importing `d3-geo`, `d3-selection`, `d3-zoom`, `d3-transition` and `d3-ease` would shrink the chunk. Under pnpm these must be declared in `package.json`, so it is a dependency change that needs approval.

### G5 · Unnecessary re-renders — Low

Each map hover calls `setHoverState`, re-rendering the whole component. The effect that writes nine theme variables to `:root` has no dependency list, so it runs on every render.

## Targets for future work (CLAUDE.md §5.2)

Targets to test, not promises: LCP ≤ 2.5 s, CLS < 0.1, INP < 200 ms on a defined test profile; 3D at a stable 30 fps on agreed mobile devices and 50–60 fps on desktop. Record device, browser, network and scene conditions with every measurement.
