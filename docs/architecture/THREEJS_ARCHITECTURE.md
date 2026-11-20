# Three.js architecture

> **Current composition — 2026-11-19:** Geographic discovery now lives at the dedicated static `/explore` route, with a borderless full-width map presentation. The illustrated homepage contains no map section. Header, hero, footer and state-page map links lead to this destination. See [dedicated atlas implementation](../audit/EXPLORE_ATLAS.md).

> **Latest approved composition — 2026-11-17:** Following user feedback, the illustrated craft-and-culture hero again opens the homepage. 3D geographic discovery and the opt-in cultural showcase remain immediately below, in one compact framed section. Renderer, store, fallback and offline asset decisions remain implemented; see [homepage refinement](../audit/HOMEPAGE_BALANCE.md).

> **Status: Map experience approved and implemented locally, 2026-11-17.** The user approved the extruded-state concept and explicitly requested the cultural showcase. Product viewers and immersive storytelling remain proposals, not implemented features. No deployment is authorized.

## Decision record

| Area | Decision | Status |
| --- | --- | --- |
| Map renderer | Vanilla Three.js 0.187.0, dynamically loaded in a client boundary | Implemented |
| Existing map | Retain D3 as 2D mode and automatic fallback | Implemented |
| Selected region | Existing useRegionStore remains the only owner | Implemented |
| Hover preview | Ephemeral facade state; does not write the selected region or URL | Implemented |
| Showcase | One shared opt-in timer, play/pause/next/previous; original train in D3 | Implemented |
| Geometry | Existing GeoJSON projected and extruded offline into indexed buffers | Implemented |
| Delivery | Gzip mesh buffer + JSON manifest, native browser decompression | Implemented alternative to the earlier proposed GLB pipeline |
| Discovery destination | Static `/explore` route; map removed from homepage | Implemented |
| 3D default | Active when the atlas enters view; automatic 2D fallback on failure | Approved visual direction; implemented, with real-device performance follow-up |
| Model decoders | No Draco/Meshopt/KTX2 decoder in this map slice | Not needed |
| React Three Fiber / Drei / GSAP | Not installed | Not needed |
| Product GLB viewer | Image-first gallery with optional accurate model | Future proposal |
| Artisan scene | Small, consented, authentic scene after the core catalogue works | Future proposal |

## Source boundaries

- `components/landing/RegionalDiscovery.tsx`: state-first hero, region/hash synchronization, ephemeral hover, controls, shared preview, 3D/2D switching and fallback.
- `components/landing/MapThreeView.tsx`: lazy browser-only loader with abort/timeout and scene ownership.
- `lib/three/createIndiaScene.ts`: renderer, controls, raycasting, regional materials/motif textures, demand-driven animation, resize/visibility and disposal.
- `lib/store/useCulturalShowcase.ts`: one timer for either renderer; no autoplay, pauses while offscreen/hidden, interrupted by normal user interaction.
- `components/landing/IndiaMap.tsx`: working D3 scene retained. Managed mode delegates the clock and URL to the facade but retains camera/rail/train behavior.
- `scripts/build-india-map.mjs`: geometry preparation and integrity gates. No geographic facts live in rendering logic.

## Geometry and asset pipeline

`india-states.geojson → d3 geoMercator projection → bounded ring simplification → topology/area checks → Three ExtrudeGeometry → indexed buffers → consolidated material groups → gzip + JSON manifest`.

The script retains every polygon and hole. A simplification is rejected if ring area changes by more than 1.5%; triangulated top area must agree within 0.2% (with a small absolute tolerance). Invalid simplified regions retry at finer tolerances, ending with full source detail. Source SHA-256 and polygon counts are recorded. Small islands are retained. Normals, UVs, indices and edges are prepared offline; the browser does not triangulate GeoJSON.

Material groups are consolidated to two per region to avoid hundreds of archipelago draw calls. Output is a content-hashed same-origin `.bin.gz` asset plus revalidated manifest and SVG poster. This custom buffer format was chosen for the bounded first map slice; GLB remains suitable for later authored product assets.

The source geometry is known to predate administrative changes. Rendering it in 3D does not establish geographic accuracy. Replace it only through a separately reviewed source update.

## Interaction and visual behavior

- The map is the first homepage experience. Bihar supplies the initial preview without an automatic tour.
- Hover lifts a state and previews its palette, font register and actual existing SVG motif. Click or touch selects it through the shared store.
- Regional preview cards link to existing state routes. Other regions get honest cultural overviews; Bihar retains the detailed collection preview.
- The cultural showcase visits the existing TOUR_ORDER, with progress and manual navigation. Three uses a restrained pan; D3 keeps its train journey.
- Camera zoom/reset controls are outside WebGL. Touch devices retain vertical page scrolling and tap selection; a native region selector works in either mode.
- Reduced motion applies state changes immediately and suppresses animated camera travel. Showcase only starts on an explicit request.

## Rendering, failures and cleanup

Render only when invalidated by interaction, resize, textures, controls or a short transition. Stop drawing when offscreen/hidden. Cap DPR at 1.5. Geometry/materials/textures, shadow resources, controls, observers, listeners and RAF are disposed on unmount; release the owned WebGL context. Network/decoding/context failures switch to D3. Unsupported native decompression or WebGL also falls back.

CSP remains unchanged: no external CDN, Worker or WASM is used. The earlier blanket proposal that compressed assets require CSP additions does not apply to this gzip-only implementation. Decoder-related policy changes would need review if introduced later.

## Validation

See [THREE_MAP_IMPLEMENTATION](../audit/THREE_MAP_IMPLEMENTATION.md) for current build, browser, dependency and measurement evidence. Hardware mobile FPS, physical-device touch behavior, screen-reader coverage and throttled Core Web Vitals remain follow-up validation. Do not infer those from a desktop software-rendering test.
