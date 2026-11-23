# Three.js architecture

> **Latest product coverage — 2026-11-21:** All 12 Bihar items now share the product detail/gallery pattern described in “All Bihar product sections” below. The earlier Kohbar-only milestone is retained as implementation history.

> **Painting detail milestone — 2026-11-21:** Kohbar Wedding Panel now has a static detail route and opt-in, image-backed Three.js viewing angles. This is a presentation of the existing front image, not an authored or scanned product model. Accurate back/depth/360° models remain future work.

> **Current composition — 2026-11-19:** Geographic discovery now lives at the dedicated static `/explore` route, with a borderless full-width map presentation. The illustrated homepage contains no map section. Header, hero, footer and state-page map links lead to this destination. See [dedicated atlas implementation](../audit/EXPLORE_ATLAS.md).

> **Latest approved composition — 2026-11-17:** Following user feedback, the illustrated craft-and-culture hero again opens the homepage. 3D geographic discovery and the opt-in cultural showcase remain immediately below, in one compact framed section. Renderer, store, fallback and offline asset decisions remain implemented; see [homepage refinement](../audit/HOMEPAGE_BALANCE.md).

> **Status: Map experience approved and implemented locally, 2026-11-17.** The user approved the extruded-state concept and explicitly requested the cultural showcase. Authored product models and immersive storytelling remain proposals. The bounded Kohbar image-backed viewer is implemented separately below. No deployment is authorized.

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
| Painting detail viewer | Image-first Kohbar detail, opt-in front/left/right/detail views | Implemented image-backed presentation; no verified depth or back |
| Product GLB viewer | Optional accurate, approved product model | Future proposal |
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

## Kohbar painting viewer

- Static route: `/state/bihar/paintings/kohbar-wedding-panel`. Collection image, title and detail link lead here; the basket links back to this detail page. No viewer is loaded on a listing page.
- `lib/commerce/productDetails.ts` contains the eligible product ID, stable slug, reviewed normalized image bounds and camera presets. Eligibility is explicit; other paintings need their own reviewed imagery before enabling 3D.
- `components/product/ProductGallery.tsx` defaults to the existing image and imports `lib/three/createProductScene.ts` only after the user requests 3D. Prices, metadata and purchase controls remain ordinary DOM outside WebGL.
- The scene maps the existing framed front image to a plane. It does not invent frame thickness, rear construction, a scan or a GLB. Rotation is bounded to front-facing angles; presets and zoom change immediately, with no autoplay or motion that bypasses reduced-motion preferences.
- Mouse/touch dragging, keyboard rotation/zoom/reset and named HTML controls are supported. Touch retains vertical document scrolling.
- Rendering is demand-driven and stops when hidden/offscreen. DPR is capped at 1.5; observers, events, texture, geometry, material, renderer, context and scheduled frames are disposed when switching modes or leaving the route. Import/image timeout and WebGL/context failure restore the normal image. No dependencies, external origins, CSP changes or deployment changes were introduced.
- TypeScript, strict lint and the 57-output static production build passed. Local Chrome/SwiftShader checks cover five widths (320, 390, 768, 1024, 1440), click-through, presets, keyboard, zoom, idle rendering, context-loss/unavailable-WebGL fallback, cart and unknown-route 404. These checks do not establish physical-device FPS or asset authenticity.

Additional local lifecycle checks passed for real pointer dragging, failed source-image loading, and server-rendered image/details with JavaScript disabled. Owned WebGL buffers, program and image texture were deleted on mode exit; renderer placeholder textures are released through forced context loss. Screenshots of the image mode, angled view and mobile detail were reviewed.

## All Bihar product sections — 21 November 2026

The shared `ProductDetail` server component and `ProductGallery` client component now serve all 12 existing Bihar SKUs across nine craft collections. Kohbar retains its original painting URL; the remaining 11 pages are generated under `/state/bihar/products/[product]`, with `dynamicParams=false`. Collection images/titles/detail actions, related-product cards and basket destinations use the same explicit `productHref` registry. No prices or content are invented for other states.

The scene now fits both the source-image aspect ratio and the configured crop to the viewport; a landscape Sujani image is not stretched into a square. Existing imagery is retained in full except the previously reviewed Kohbar crop. Coiling, stitch, weave, line and surface detail labels are configured per product. This extends the image-backed viewing interaction; it does not turn basket, jewellery, textile or produce photographs into verified volumetric models. Original imagery, responsive HTML details, shared market prices/cart and graceful fallback remain available. No new dependencies, CSP exceptions, map changes or backend routes were introduced.

Validation for the expanded slice: strict TypeScript, zero-warning lint and a 68-output static build passed. Local Chrome exercised all 12 product routes and their four presets at 320px and 1440px, plus the landscape textile at 390/768/1024px. All nine collection sections linked their items correctly; related-item navigation, EUR pricing, basket destinations, unknown-product 404 and unavailable-WebGL fallback passed without runtime exceptions or horizontal overflow. Landscape gallery stages now follow the source aspect ratio to avoid excess vertical space.

**21 November 2026 — regional reuse:** The same opt-in image-backed viewer now serves six Jammu & Kashmir sample items, with their own image, close-up label, origin, theme and price. Region-aware detail links do not alter the renderer lifecycle or atlas/D3 implementation. These remain image presentations rather than authored 360-degree product models.

**21 November 2026 — West Bengal:** Six additional regional sample items reuse `ProductGallery` and the unchanged image-backed scene. Regional theme/origin resolution now comes from the shared region and theme metadata modules. No 3D models, atlas changes, decoders or new lifecycle behavior were added.

**21 November 2026 — Odisha:** Six regional sample items reuse the opt-in image-backed viewer and existing lifecycle. The region’s images, close-up labels, origin and price resolve through the existing metadata/catalogue pathways. No new geometric models, renderer behavior, atlas/D3 changes or decoders are introduced.

**21 November 2026 — Jharkhand:** Six additional items reuse the opt-in image-backed viewer, four view presets and existing renderer lifecycle. No scanned models, new geometry pipeline, decoders or atlas/D3 changes are introduced.

**21 November 2026 — Uttar Pradesh:** Six items reuse the existing opt-in image-backed viewer and four presets. No volumetric models, geometry pipeline, rendering lifecycle or atlas/D3 code changes are introduced. Image mode and shopping remain available independently of WebGL.

**21 November 2026 — Uttarakhand:** Six items reuse the opt-in image-backed viewer and four existing presets. No scans, volumetric models, geometry pipeline, renderer lifecycle or atlas/D3 changes are introduced. Image mode and shopping remain independent of WebGL.

**21 November 2026 — Himachal Pradesh:** Six items reuse the opt-in image-backed viewer and four existing presets. No scans, volumetric models, geometry pipeline, renderer lifecycle or atlas/D3 changes are introduced. Image mode and shopping remain independent of WebGL.

**21 November 2026 — Madhya Pradesh:** Six items reuse the opt-in image-backed viewer and four existing presets. No scans, volumetric models, geometry pipeline, renderer lifecycle or atlas/D3 changes are introduced. Image mode and shopping remain independent of WebGL.


**21 November 2026 — Chhattisgarh:** Six items reuse the opt-in image-backed viewer and four existing presets. No scans, volumetric models, geometry pipeline, renderer lifecycle or atlas/D3 changes are introduced. Image mode and shopping remain independent of WebGL.


**21 November 2026 — Punjab:** Six items reuse the opt-in image-backed viewer and four existing presets. No scans, volumetric models, geometry pipeline, renderer lifecycle or atlas/D3 changes are introduced. Image mode and shopping remain independent of WebGL.


**21 November 2026 — Haryana:** Six items reuse the opt-in image-backed viewer and four existing presets. No scans, volumetric models, geometry pipeline, renderer lifecycle or atlas/D3 changes are introduced. Image mode and shopping remain independent of WebGL.


**21 November 2026 — Delhi:** Six items reuse the opt-in image-backed viewer and four existing presets. No scans, volumetric models, geometry pipeline, renderer lifecycle or atlas/D3 changes are introduced. Image mode and shopping remain independent of WebGL.


**22 November 2026 — Kerala:** Six items reuse the opt-in image-backed viewer and four existing presets. No scans, volumetric models, geometry pipeline, renderer lifecycle or atlas/D3 changes are introduced. Image mode and shopping remain independent of WebGL.


**22 November 2026 — Karnataka:** Six items reuse the opt-in image-backed viewer and four existing presets. No scans, volumetric models, geometry pipeline, renderer lifecycle or atlas/D3 changes are introduced. Image mode and shopping remain independent of WebGL.


**22 November 2026 — Tamil Nadu:** Six items reuse the opt-in image-backed viewer and four existing presets. No scans, volumetric models, geometry pipeline, renderer lifecycle or atlas/D3 changes are introduced. Image mode and shopping remain independent of WebGL.

**22 November 2026 — Andhra Pradesh:** Six items reuse the opt-in image-backed viewer and four existing presets. No scans, volumetric models, geometry pipeline, renderer lifecycle or atlas/D3 changes are introduced. Image mode and shopping remain independent of WebGL.

**22 November 2026 — Telangana:** Six items reuse the opt-in image-backed viewer and four existing presets. No scans, volumetric models, geometry pipeline, renderer lifecycle or atlas/D3 changes are introduced. Image mode and shopping remain independent of WebGL.

**22 November 2026 — Puducherry:** Six items reuse the opt-in image-backed viewer and four existing presets. No scans, volumetric models, geometry pipeline, renderer lifecycle or atlas/D3 changes are introduced. Image mode and shopping remain independent of WebGL.

**22 November 2026 — Island chapters:** Twelve Andaman & Nicobar/Lakshadweep items reuse the opt-in image-backed viewer and four existing presets. No scans, volumetric models, geometry pipeline, renderer lifecycle or atlas/D3 changes are introduced. Image mode and shopping remain independent of WebGL.

**22 November 2026 — Rajasthan:** Six items reuse the opt-in image-backed viewer and four existing presets. No scans, volumetric models, geometry pipeline, renderer lifecycle or atlas/D3 changes are introduced. Image mode and shopping remain independent of WebGL.

**22 November 2026 — Gujarat:** Six items reuse the opt-in image-backed viewer and four existing presets. No scans, volumetric models, geometry pipeline, renderer lifecycle or atlas/D3 changes are introduced. Image mode and shopping remain independent of WebGL.

**22 November 2026 — Maharashtra:** Six items reuse the opt-in image-backed viewer and four presets. No scans, volumetric models, renderer lifecycle or atlas/D3 changes are introduced. Image mode and purchase controls remain available without WebGL.

**22 November 2026 — western coastal chapters:** Twelve items reuse the optional image-backed viewer and four existing presets. No scans, volumetric models, renderer lifecycle or atlas/D3 changes are introduced. Image mode and purchase controls remain usable without WebGL.

**22 November 2026 — Assam:** Six items reuse the optional image-backed surface and four presets. No scans, volumetric models, renderer lifecycle or atlas/D3 changes are introduced. Image mode and purchase controls remain usable without WebGL.

**23 November 2026 — Meghalaya:** Six items reuse the opt-in image-backed viewer and four existing presets. No scans, volumetric models, renderer lifecycle or atlas/D3 changes are introduced. Image mode and purchase controls remain usable without WebGL.

**23 November 2026 — Arunachal Pradesh:** Six items reuse the optional image-backed close-up surface and four presets. No scans, volumetric models, renderer lifecycle or atlas/D3 changes are introduced. Image mode and purchase controls remain available without WebGL.

**23 November 2026 — Nagaland:** Six items reuse the optional image-backed close-up surface and four presets. No scans, volumetric models, renderer lifecycle or atlas/D3 changes are introduced. Images and purchase controls remain available without WebGL.


### Manipur chapter — 2026-11-23

Manipur adds six image-backed product close-ups through the existing viewer, using four presets and opt-in WebGL. These are textured surfaces rather than scanned objects; image mode and purchase controls remain available without WebGL. No shared renderer or cleanup changes are introduced.


### Mizoram chapter — 2026-11-23

Six Mizoram items reuse the existing opt-in image-backed close-up viewer with four presets. These are textured surfaces, not scans; images and normal purchase controls remain available without WebGL. No shared renderer or lifecycle code changes are introduced.


### Tripura and Sikkim — 2026-11-23

Twelve Tripura/Sikkim items reuse the existing opt-in image-backed close-up viewer, four presets and image fallback. These are textured surfaces rather than scans. No shared renderer, map or lifecycle code is changed.
