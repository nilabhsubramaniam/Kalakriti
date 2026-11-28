# State-first 3D map and cultural showcase

> **Homepage composition refinement — 2026-11-17:** The user clarified that the illustrated craft-and-culture homepage was preferred. That server-rendered image-led hero is restored. The existing 3D/D3 map and cultural showcase now form a compact regional-discovery section immediately below it, with a single shared frame, a top control bar and a smaller regional preview. No dependencies, scene/geometry logic, configuration or routes changed. Current visual/regression evidence: [HOMEPAGE_BALANCE](HOMEPAGE_BALANCE.md).

Implemented locally on 2026-11-17 following the user’s approval of the extruded-state visual concept and request to retain the cultural showcase. No commit, push or deployment.

## Delivered behavior

The homepage opens on a Three.js relief map of India. Hover lifts a state, applies its existing regional pigment and SVG motif to the surface, and updates a shared preview with its font register, script line, crafts and state-page link. Hover never writes the selected region or URL. Click, touch or the native region picker selects through useRegionStore and updates the shareable hash.

The cultural showcase is opt-in. Play/pause, previous/next and progress use the original TOUR_ORDER and one shared timer (4.5-second holds). Three uses restrained focus movement and regional changes; the original D3 train journey remains available in 2D mode. Deliberate interaction interrupts playback. Hidden/offscreen views pause the timer; reduced motion applies changes immediately.

Both views share the same region selection and preview. The existing D3 scene remains intact with a managed mode that delegates clock/URL duties to its parent. Missing WebGL/native decompression, mesh request failures or context loss automatically switch to D3. Keyboard-operated SVG states, a native selector, quick region buttons and normal state links remain available. With JavaScript disabled, the static map poster, region choices, initial Bihar preview and state link remain rendered.

## Files and boundaries

| File | Responsibility |
| --- | --- |
| app/page.tsx | Move regional discovery into the first homepage section; retain the existing lower discovery content |
| components/landing/RegionalDiscovery.tsx | Map facade, hover, selection/hash, theme, mode/reset/zoom controls and showcase UI |
| components/landing/MapThreeView.tsx | Lazy asset loader, timeout/abort, runtime scene ownership, fallback callback |
| components/landing/RegionPreview.tsx | Shared regional identity, crafts, motif/illustration and state-page link |
| components/landing/IndiaMap.tsx | Preserve D3, train and camera; add managed mode and shared hover callback |
| lib/store/useCulturalShowcase.ts | Single opt-in showcase timer, visibility and interruption handling |
| lib/store/useRegionStore.ts | Retain selected-region ownership, default to idle, validate tour selections |
| lib/three/createIndiaScene.ts | Raycasting, indexed meshes, rough materials, actual SVG motif textures, lighting, controls, demand rendering and disposal |
| lib/three/types.ts | Prepared mesh manifest and scene API types |
| scripts/build-india-map.mjs | Offline mesh pipeline with shape/area checks and material-group consolidation |
| public/maps/ | Generated poster, manifest and compressed indexed mesh buffer |
| app/globals.css | Responsive relief hero, regional preview, controls and theme transitions |
| package.json / pnpm-lock.yaml | Three.js, matching types, map:build and build preparation |
| next.config.mjs | Immutable cache rule for hash-named buffers; optional isolated QA output |
| tsconfig.json / .gitignore | Include/ignore .next-relief; ignore pnpm’s local cache |

No product-viewer library, backend, physics engine, GSAP, React Three Fiber or Drei was added. Existing state pages and commerce-preview boundaries remain unchanged. The large illustrative hero no longer precedes the map; its image asset is retained.

## Mesh preparation and delivery

- Source: unchanged public/india-states.geojson, SHA-256 2c1ce5a3bcf759386a9cfc4cc047ec6bfca935083e9534b4c01b71d38ddf92c1.
- Preserved: 36 region records and 380 polygon parts, including islands and holes.
- Simplification: at most 1.5% ring area error; rejected triangulations retry finer tolerances or original detail. Triangulated top-area tolerance is 0.2% with a small absolute floor. Observed maximum ring simplification area error: 1.34%.
- Projection, triangulation, extrusion, indices, normals, UVs and edges are generated offline, never on the browser’s main thread.
- Material groups: 72 total, two per region. A first implementation had hundreds of polygon groups; consolidating these reduced measured per-frame draw calls from approximately 1,557 to 181 in this scene.
- Current compressed asset: `/maps/india-relief-d35f452177ba.bin.gz`, 1,318,604 bytes; decoded float buffer 5,236,888 bytes.
- JSON manifest: 17,137 bytes. SVG poster: 218,166 bytes before HTTP compression.
- Native DecompressionStream handles gzip; no WASM/Worker decoder or external origin is needed. The hash-named buffer is served with `public, max-age=31536000, immutable`; manifest and poster retain default revalidation.

This preserves the existing geography; it does not fix known outdated administrative coverage. An authoritative geographic source review remains open.

## Validation

- `KALAKRITI_BUILD_DIR=.next-relief pnpm validate`: passed strict TypeScript, lint with zero warnings and production build. The isolated directory avoids collision with a running development server. A first isolated build was blocked by sandbox font-network restrictions; rerunning with network access succeeded. The normal deployment output remains `.next`.
- Build: 41 generated pages; `/` remains static and all 36 state paths remain generated. Homepage reported first-load JS: 120 kB, excluding the separately lazy-loaded Three/D3 chunks and map assets. This is build output, not a measured transfer budget.
- Lazy 3D view chunks total 624,288 bytes raw / 156,730 bytes gzip in this build (three files from the loadable manifest). D3 is a separate 92,427-byte gzip chunk, loaded only for 2D, with a 7,874-byte gzip map component. These sizes are local gzip measurements, not a promise about deployed compression.
- pnpm 11 frozen offline install with scripts ignored: passed.
- pnpm 9.15.9 isolated frozen lockfile-only validation: passed; lockfile byte-for-byte unchanged. This checks lockfile compatibility, not a full Vercel deployment or pnpm 9 package install.
- Fresh `pnpm audit`: 34 advisories (3 critical, 14 high, 15 moderate, 2 low), same counts as prior baseline. No advisory reported for Three.js. Findings were not suppressed and no framework upgrade was attempted.
- `git diff --check`: passed.

### Browser profile and results

Chrome headless, macOS, SwiftShader software WebGL2, localhost. Renderer: ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (LLVM 10.0.0) (0x0000C0DE)), SwiftShader driver). Tests used the isolated production server on localhost port 3105. Desktop viewport 1440 × 1100; responsive checks used 320, 390, 768, 1024 and 1440px widths. No throttled network/CPU or physical mobile device was used.

- Ready check recorded around 2,698 ms from navigation, including a 650ms settling interval; this is a local QA observation, not LCP or a cold-network promise.
- All five widths had document scrollWidth equal to viewport width, with a live 3D canvas.
- Actual raycast hover over Rajasthan updated the preview and existing blue regional accent without changing the URL. Actual pointer click selected Rajasthan and set the hash.
- Showcase advanced to West Bengal, paused beyond one full hold, and correctly handled next/previous. The original D3 train became visible during the 2D showcase.
- D3 Enter-key selection, native controls, emulated touch selection, direct Kerala hash, reduced-motion startup, real WEBGL_lose_context fallback, WebGL-disabled fallback and simulated manifest HTTP 503 fallback passed.
- No uncaught browser exceptions and no third-party resource requests were recorded.
- Idle: RAF count stayed 15 → 15, and draw calls 2715 → 2715 during a 1.2-second idle observation. Offscreen draw count also stayed unchanged.
- On switching to 2D: canvas count 0, context released (`isContextLost() === true`), tracked WebGL buffers 0 and programs 0. Four renderer-internal default textures remain in raw create/delete counters but their owned context is explicitly lost, invalidating its resources; no retained live context is claimed.
- With JavaScript disabled: heading, 36 native region choices, static poster and `/state/bihar` link were present.
- Existing Rajasthan state route and navbar identity passed.
- Immutable cache header verified against the served mesh asset.

Screenshots: `/tmp/kalakriti-3d-desktop.png`, `/tmp/kalakriti-3d-hover.png`, `/tmp/kalakriti-3d-mobile.png`, `/tmp/kalakriti-2d-showcase.png`. Full browser report: `/tmp/kalakriti-relief-report.json`. The temporary harness is outside the repository.

## Limits and follow-up

Physical mobile FPS, hardware GPU performance, long-session memory profiling, screen-reader behavior and throttled Core Web Vitals need separate measurement. No 30/60 FPS guarantee is made from SwiftShader tests. Existing dependency advisories and geographic accuracy review remain unresolved. Real inventory, consented producer profiles, checkout, subscriptions, product 3D and immersive storytelling remain separate milestones.

CSP, deployment ownership, public routes and the existing geography were not loosened or replaced. No user development server was stopped; only task-owned QA processes are torn down.

## Explore visual and hover refinement — 23 November 2026

`lib/three/createIndiaScene.ts` now gives resting state surfaces a stronger version of their registered accent, uses that state’s accent/ink mixture on the side faces, and draws only the top perimeter. Filtering existing edge segments removes the vertical tessellation lines that otherwise make the sides look striped. A slightly more oblique camera, deeper craft relief and restrained shadows make the structure clearer. These are presentation heights, not topographic elevation. Existing boundary data and offline meshes are unchanged.

Hover uses invisible resting-footprint meshes that share existing geometry/material resources. Three’s installed Raycaster tests object layers rather than visibility, so these surfaces participate in picking without another render pass. Lifting a visible tile no longer changes its hit target and causes neighbouring previews to alternate. No extra GPU geometry or texture allocation is needed for the picking meshes. Existing geometry, materials, textures and context are still disposed once during cleanup. Pointer cancellation clears interrupted gestures; only primary-button gestures select.

Manual zoom is tracked separately from hover/tour focus. Hovering no longer resets a zoom chosen by the user; reset still restores the original view. Navbar Escape handling no longer clears the map selection.

`RegionPreview.tsx` now reuses the lightweight journal-theme metadata to show an existing craft image for every region, with a Bihar fallback. The motif hook used by the map remains available. A consistent image area, identity space, four-line desktop summary and three craft highlights keep hover content orderly. The state-page link is retained and the outdated “catalogue will follow” text is replaced with a description of the available chapters.

The labelled Explore CSS section adds readable labels, a full-width state action, 44px controls, restrained card spacing and a more compact phone introduction. The map remains borderless. The sidebar does not follow the pointer or cover nearby states, and the dropdown remains the keyboard/touch alternative. No dependency, CSP, backend, boundary source or D3 implementation is changed.

### 28 November 2026 — shared selector presentation

Explore's native region picker is now enhanced after hydration with the shared heritage dropdown, grouped choices and filtering. The native select remains the SSR/no-JavaScript fallback and form-value control; map selection still delegates to the same region store. See [shared selector menus](SELECT_MENUS.md) for interaction and validation details.
