# Reusable components

> **Homepage composition refinement — 2026-11-17:** The user clarified that the illustrated craft-and-culture homepage was preferred. That server-rendered image-led hero is restored. The existing 3D/D3 map and cultural showcase now form a compact regional-discovery section immediately below it, with a single shared frame, a top control bar and a smaller regional preview. No dependencies, scene/geometry logic, configuration or routes changed. Current visual/regression evidence: [HOMEPAGE_BALANCE](HOMEPAGE_BALANCE.md).

> **3D map milestone — 2026-11-17:** RegionalDiscovery now owns the map-first hero instead of an opt-in section below an illustrated hero. New pieces: MapThreeView, RegionPreview, useCulturalShowcase, lib/three/createIndiaScene.ts and lib/three/types.ts. Existing D3 IndiaMap, 36 themes, motifs, slug mapping, regional store and all state pages remain. The original train animation is retained in 2D showcase mode.

> **Implementation update — 2026-11-17:** CategoryTileGrid, FeaturedProductsRow, TrustSignalsBar and NewsletterStrip are now mounted and rewritten to use the existing theme/font system and real state/craft destinations. The newsletter is an honest coming-soon teaser, with no fake success form. GiftBoxCallout, ScrollNarrative, shared/ProductCard and shared/GIBadge remain unused. New components: RegionalDiscovery, CraftSearch and SiteFooter. Existing Motifs, Bihar data and region store are reused.

The original baseline audit follows for historical context.

> Audit of commit `6473826`, 2026-11-17. "Used by" is traced from imports, not inferred from names.

## Reuse as they are

| Component / module | Used by | Why it is worth keeping |
|---|---|---|
| `components/ornament/Motifs.tsx` — 18 motifs, `Motif`, `BorderPatti` | Map, nav, 6 state components | Consistent stroke weight; follows the theme colour; reachable through the `MotifKey` union |
| `components/state/Frame.tsx` | ProductRail, CraftStory, StateAside | Photo with a motif fallback at a fixed aspect ratio and no layout shift. It is already the poster-and-fallback a 3D viewer needs |
| `components/state/DistrictMapPanel.tsx` | State page | IntersectionObserver plus dynamic import: the pattern to copy for loading 3D only when visible |
| `components/state/DistrictMap.tsx` | DistrictMapPanel | d3 without `any`, keyboard access, ResizeObserver, non-scaling strokes. A better template than IndiaMap |
| `SectionHead`, `StateNav`, `RevealRoot`, `CultureStrip`, `HighlightStrip`, `CraftBrief`, `ClosingCTA`, `StateHero` | State page | Server components, no client JavaScript, work with JS disabled |
| `lib/states/types.ts` | State components, data files | `StatePage`, `Craft`, `Product`, `District`, `ImageAsset`: a working draft of the future schema |
| `lib/states/slugs.ts`, `lib/states/theme.ts` | Map, nav, state page | Small and correct |
| `lib/store/useRegionStore.ts` | Map, nav | The single selection source CLAUDE.md requires |

## Reuse after refactoring

| Component | Needed change |
|---|---|
| `components/landing/IndiaMap.tsx` (1,135 lines) | Split into canvas field, tour hook, SVG map engine, region panel and theme hook, with no behaviour change. Add keyboard access and reduced motion |
| `components/layout/TopNav.tsx` | Derive the current region from the URL on state pages; remove the dead button branch; use a disclosure pattern instead of `role="menu"` |
| `components/state/ProductRail.tsx`, `StateAside.tsx` | Replace inert buy buttons with a real client component once a cart exists; link cards to product pages |
| `components/state/Frame.tsx` | Add `srcset`/`sizes` when image derivatives exist |
| `lib/stateThemes.ts` | Re-key by ISO 3166-2:IN codes once the map geometry is replaced |

## Do not reuse as they are

These are unused. CLAUDE.md treats them as deliberate scaffolding: report them, do not delete them without approval.

| Item | Problem |
|---|---|
| `components/landing/CategoryTileGrid.tsx`, `FeaturedProductsRow.tsx`, `GiftBoxCallout.tsx`, `NewsletterStrip.tsx`, `ScrollNarrative.tsx`, `TrustSignalsBar.tsx` | Inline styles and literal hex colours; they bypass the theme |
| `components/shared/ProductCard.tsx` | Uses `next/image`, legacy tokens and inline hover handlers; links to routes that do not exist |
| `components/shared/GIBadge.tsx` | Hard-coded green and a font that is not loaded |
| `lib/env.ts` | No importers. Importing it makes `NEXT_PUBLIC_SITE_URL` mandatory at build |

The "Legacy tokens" block in `globals.css` (`--bg-ochre`, `--text-muted`, …) exists only to keep these files resolving.
