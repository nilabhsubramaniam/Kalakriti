# Illustrated homepage with regional discovery

> **Latest layout refinement:** Homepage spacing is tighter, the hero preserves the complete illustration, and native one-time entrance/hover motion respects reduced-motion preferences. See [spacing and motion verification](HOMEPAGE_RHYTHM.md).

> **Homepage visual update — 2026-11-19:** The homepage now follows the supplied panoramic heritage reference, with a horizontal state strip and image-led Mithila feature. The original courtyard artwork is preserved on Bihar’s page. The interactive map remains at `/explore`. See [heritage refresh](../audit/HERITAGE_REFRESH.md).

> **Current composition — 2026-11-19:** Geographic discovery now lives at the dedicated static `/explore` route, with a borderless full-width map presentation. The illustrated homepage contains no map section. Header, hero, footer and state-page map links lead to this destination. See [dedicated atlas implementation](../audit/EXPLORE_ATLAS.md).

Implemented locally on 2026-11-17 following the user’s explicit clarification: “The illustrated craft-and-culture homepage.” No commit, push or deployment.

## Design decision

Restore the earlier warm editorial opening rather than making visitors start in a map interface. The page now progresses through:

1. Illustrated Mithila courtyard hero, existing serif typography, cream/maroon palette and collection/region links.
2. The short heritage ribbon.
3. Regional discovery: 3D/D3 map and cultural showcase in one framed section, with a stable editorial section heading, compact regional preview, and controls grouped above the map.
4. Existing Mithila collection, category, community/process, values and footer sections.

The 3D state lift, regional surface motifs, hover/selection behavior and opt-in cultural showcase are retained. D3 remains available with its train. The regional selector is now above the scene on mobile, and the preview uses a smaller illustration/motif beside its identity instead of a tall separate card. Descriptions, chips and control labels are more legible. The section heading keeps the brand’s classic font while the preview retains the selected region’s font and palette.

## Application changes

| File | Change |
| --- | --- |
| app/page.tsx | Restore the server-rendered illustrated hero and place regional discovery after its ribbon |
| components/landing/RegionalDiscovery.tsx | Heading becomes h2, group selector/showcase above the map, move quick states beside the scene, wrap the workspace, scroll recognized state deep links to the relocated map |
| components/landing/RegionPreview.tsx | Compact identity/media composition; state heading becomes h3 beneath the section h2; smaller responsive illustration |
| app/globals.css | Replace the previous map-first layout rules with scoped responsive section styling; reuse existing illustrated-hero styles |

No dependency, scene, mesh-generation, geographic source, CSP, deployment, route, store or backend changes. Existing image assets are reused and remain labeled as illustrations. The historical README edits and other work already present in the checkout are preserved.

## Validation

- `KALAKRITI_BUILD_DIR=.next-relief pnpm validate`: passed TypeScript, strict lint with zero warnings and production build. All 41 generated pages retained; homepage remains static and 36 state pages remain generated.
- Headless Chrome on macOS using SwiftShader WebGL2 and a local production server: 320, 390, 768, 1024 and 1440px widths all had scrollWidth equal to viewport width.
- Full desktop and mobile screenshots visually inspected. The earlier illustrated opening is restored; the smaller shared discovery panel sits directly below it.
- Actual pointer hover changed the regional preview/motif/theme without writing the hash; click wrote the selected state.
- Showcase advancement, pause beyond a full hold, previous/next, and the D3 train passed.
- D3 keyboard selection, emulated touch selection, direct state links, reduced motion, actual WebGL context loss, disabled WebGL and simulated mesh-manifest failure all passed.
- Idle and offscreen render counters stayed unchanged. Switching to D3 removed the 3D canvas and released the context, with tracked buffers/programs returning to zero.
- No uncaught browser exceptions or third-party resource requests recorded.
- JavaScript-disabled output retained the restored hero heading, map poster, 36 native region choices and Bihar link.
- Existing Rajasthan state route and navbar identity passed.
- `git diff --check`: passed.

Screenshots: `/tmp/kalakriti-balanced-desktop.png`, `/tmp/kalakriti-balanced-mobile.png`, `/tmp/kalakriti-balanced-hover.png`, `/tmp/kalakriti-balanced-2d.png`. Full report: `/tmp/kalakriti-balanced-report.json`. The temporary browser harness is outside the repository.

These are desktop browser/emulation checks, not real-device FPS, screen-reader or Core Web Vitals measurements. Previously documented geographic data, real-content and dependency-audit follow-ups remain unchanged; no new dependency audit was needed for this presentation-only change.
