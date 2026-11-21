# Asset pipeline

> **Approved brand integration:** The craft logo is now used in the header/footer, with compact mobile branding and refined navigation/search/state-directory behavior. [Implementation and validation](../audit/LOGO_NAVIGATION_IMPLEMENTATION.md).

> **Complete decorative treatment:** Process and closing sections now have matching backgrounds and independent desktop parallax. The shared footer has a static Mithila-inspired maroon/gold mural and Maithili farewell. [Implementation, generated assets and verification](../audit/MITHILA_FOOTER_AND_SECTIONS.md).

> **Textile background refinement:** “Stitched, woven, remembered” now has an embroidered linen background and its own restrained desktop scroll timeline, paired with static mobile/reduced-motion views. [Implementation and prompt](../audit/STITCHED_BACKGROUND.md).

> **Painted Roots refinement:** The regional story section now has a generated painted-paper background with native desktop parallax and static mobile/reduced-motion fallbacks. [Implementation, asset prompt and validation](../audit/PAINTED_ROOTS.md).

> **Latest homepage — 2026-11-19:** The new reference-inspired heritage journal composition is implemented, with three regional stories, eight textile studies and a panoramic embroidery scene. Existing imagery, state routes and the separate atlas are preserved. See [implementation and image provenance](../audit/HERITAGE_JOURNAL.md).

> **Embroidery edit:** The active homepage artwork is now `public/images/india-heritage-embroidery.webp`. Produce has been replaced with embroidered cloth, hoops and thread. See [editing prompt and provenance](../audit/EMBROIDERY_HERO.md).

> **Homepage asset update — 2026-11-19:** Added same-origin `public/images/india-heritage-panorama.webp` (1536×1024, ~432 KiB), labeled editorial illustration. The unchanged courtyard illustration is now used by Bihar’s hero. Prompt and provenance: [heritage refresh](../audit/HERITAGE_REFRESH.md).

> **Implemented map milestone — 2026-11-17:** The approved state-first 3D map and cultural showcase now exist. See [Three.js architecture](THREEJS_ARCHITECTURE.md) for the implemented boundaries and decision table. Runtime is lazy vanilla Three.js; meshes are generated offline into same-origin gzip buffers, with D3 fallback. Hash-named buffers have immutable cache headers; CSP and the default `.next` deployment output remain unchanged. `KALAKRITI_BUILD_DIR=.next-relief` is an optional isolated local QA output. Backend, product viewers and other target domains below remain proposals.

> **Status: Proposed — not approved.** Today all assets are two GeoJSON files in `public/`; no photographs or 3D models exist. See [TARGET_ARCHITECTURE](TARGET_ARCHITECTURE.md).

## Asset classes

| Class | Source | Delivered as |
|---|---|---|
| Map geometry | Authoritative boundary data (**Decision**) | Simplified GeoJSON for SVG; GLB for the 3D map |
| Product, producer and craft photographs | Seller uploads or commissioned photography | AVIF and WebP derivatives at several widths |
| Product 3D models | Blender authoring or verified capture | Compressed GLB (Meshopt, KTX2) with a poster image |
| Video | Seller uploads | Later; out of scope for the first milestones |

## Geometry pipeline (Phase A)

Lives in the frontend repository under `scripts/geo/`, run by hand, output committed or published to the CDN.

1. Fetch the approved source for India's 36 states and union territories and, per state, its districts.
2. Normalise properties: ISO 3166-2:IN code for regions, LGD code for districts.
3. Simplify with mapshaper, always with `keep-shapes` (islands vanish otherwise) and output with `-o gj2008` (RFC 7946 winding makes d3-geo draw the complement of a polygon).
4. Validate: 36 regions including Ladakh and the merged Dadra & Nagar Haveli and Daman & Diu; island counts for the Andamans and Lakshadweep; no feature whose area exceeds the country's.
5. Emit versioned filenames (content hash) and serve with `Cache-Control: public, max-age=31536000, immutable`.
6. For the 3D map, project with d3-geo, extrude per region, and write a GLB with meshes named by ISO code.

Visually verify every regeneration at 320 and 1440 px.

## Upload and processing pipeline (Phase B)

```mermaid
sequenceDiagram
  participant S as Seller UI
  participant API as Go API
  participant IN as Incoming bucket (private)
  participant W as Worker
  participant PUB as Public bucket and CDN
  S->>API: POST /v1/seller/media/uploads (type, size, checksum)
  API-->>S: presigned PUT (bound to type and size, short expiry)
  S->>IN: PUT file
  S->>API: POST /v1/seller/media/{id}/complete
  API->>W: outbox event media.uploaded
  W->>IN: fetch; check file signature, decode, enforce size and dimension limits
  W->>W: strip EXIF and GPS; make AVIF/WebP derivatives
  W->>W: GLB: validate, compress with Meshopt and KTX2, render poster
  W->>PUB: write content-hashed keys
  W->>API: status pending_approval
  API->>PUB: served publicly only after admin approval
```

## Rules

- **Uploads are untrusted.** Validate type by content, size, dimensions, polygon count and texture size; reject anything that fails.
- **Strip location metadata** from every photograph. It protects artisans' home locations.
- **Approval gates publication.** Nothing in the incoming bucket is publicly reachable.
- **Postgres stores keys and metadata only** (`media_assets`), never binary files.
- **Immutable keys.** A changed asset is a new key and a new `version`; nothing is overwritten.
- **No Next image optimizer.** `Frame` serves `srcset` from the derivatives with a plain `<img>`.
- **Budgets** (targets to test): GLB ≤ 3 MB for mobile; texture sizes capped; no GLB loaded on listing pages.
- **CORS:** public bucket allows `GET` from the site origin; incoming bucket allows `PUT` from the seller origin only.
- **CSP:** add the CDN origin to `img-src` and `connect-src`, and the storage origin to `connect-src` for seller uploads, after approval.

## Pilot shortcut

Under about a hundred images, photographs can live in `public/img/<region>/` with an explicit long-lived cache header in `next.config.mjs`. The `ImageAsset` type and `Frame` already support this without code changes elsewhere.

## Decisions

| Decision | Status |
|---|---|
| Authoritative map boundary source | Open |
| Object storage and CDN provider | Open |
| Who produces photography and 3D models for Mithila | Open |


### Bihar Madhubani page reuse — 2026-11-20

The Bihar state page now reuses `public/images/painted-roots-background.webp` for decorative section paper and `public/images/painting-study.webp` (800×800) for its Madhubani craft introduction. The latter has an explicit editorial-illustration credit and an uncropped contain fit. `mithila-courtyard.webp` remains the complete hero image; no new generation, image downloads, dependency or CSP changes were required.

The subsequent Bihar-only full-page refinement also reuses `basket-study.webp` (800×800) for the Sikki tile and Pauti preview card, and `painting-study.webp` for the Kohbar preview card. Image credits and alt text identify illustrative previews; these are not authenticated item photographs. All use contain fit. Other state data files and shared image components are unchanged.


### Bihar journal image library — 2026-11-20

Nine new same-origin WebP illustrations support the approved Bihar redesign: `bihar-mithila-mural.webp` and `bihar-{manjusha,tikuli,lac,stone,makhana,kachni,sikki-dolls,painted-stole}-study.webp`. These were generated with the built-in image_gen tool and copied into `public/images/`; full prompts, dimensions, credits and scope are recorded in [Bihar journal documentation](../audit/BIHAR_MITHILA_JOURNAL.md) and [prompt manifest](../audit/BIHAR_JOURNAL_IMAGE_PROMPTS.json). Every craft and product-preview card has an image. Illustrations are labelled as such and do not represent actual sellable stock. Existing imagery remains preserved. No media host, image dependency or CSP changes were added.

The user clarified that the original full-page `bihar-mithila-mural.webp` backdrop must stay. It is restored; only separate section-menu and heading panel backgrounds are removed. No asset files were overwritten or removed.

### Jammu & Kashmir chapter — 2026-11-21

Six new same-origin illustrations (`jk-hero`, `jk-pashmina`, `jk-kani`, `jk-papier-mache`, `jk-walnut`, `jk-basohli`, all WebP) were generated for the regional page and detail flows. The original Kashida textile study is reused; Bihar assets are unchanged. Delivery files total approximately 1.8 MB before Next image optimization and are lazy-loaded except the page hero. [Generation manifest](../audit/JAMMU_KASHMIR_IMAGE_PROMPTS.json) records exact prompts and file metadata. These are conceptual craft visuals, not item-authentication or tourist-site photography. No CDN origin or CSP exception was added.

The subsequent background refinement adds `jk-paisley-mural.webp` (1536×1024), a decorative Kani/Sozni-inspired paisley and chinar surround with an open pale centre. It is used as the full-page CSS ground throughout the Jammu & Kashmir chapter, with local readability washes. It is not a product photograph or a historical textile attribution. The existing prompt manifest now contains seven assets.

### West Bengal chapter — 2026-11-21

Seven generated WebP delivery assets (`wb-hero`, `wb-mural`, `wb-baluchari`, `wb-terracotta`, `wb-dokra`, `wb-patachitra`, `wb-jamdani`) provide regional atmosphere, a full-page decorative ground and five craft studies. The existing Kantha study is reused. [Generation manifest](../audit/WEST_BENGAL_IMAGE_PROMPTS.json) records exact prompts, dimensions and byte sizes. These are conceptual illustrations rather than verified stock or destination photographs. Existing images remain intact; no dependency, media host or CSP change was introduced.

### Odisha chapter — 2026-11-21

Seven new WebP illustrations (`od-hero`, `od-mural`, `od-pattachitra`, `od-sambalpuri`, `od-pipili`, `od-filigree`, `od-kotpad`) supply a regional hero, decorative page surround and five craft studies. The generic conceptual metal bird in `wb-dokra.webp` is reused without asserting item-level geographic provenance. [Generation manifest](../audit/ODISHA_IMAGE_PROMPTS.json) records prompts, dimensions, byte sizes and reuse. No previous image was overwritten; no new host, dependency or CSP exception was added.

### Jharkhand chapter — 2026-11-21

Eight new conceptual illustrations are stored as same-origin WebP files: `jh-hero`, `jh-mural`, `jh-sohrai`, `jh-khovar`, `jh-paitkar`, `jh-dhokra`, `jh-bamboo` and `jh-tasar`. They were generated, visually inspected and resized/re-encoded; previous regional assets remain intact. The hero and painted surround are conceptual regional artwork, not documentary workshop photographs. [Exact prompts and file metadata](../audit/JHARKHAND_IMAGE_PROMPTS.json) record their provenance.

### Uttar Pradesh chapter — 2026-11-21

Eight new conceptual illustrations are stored under `public/images/up-*.webp`: hero, mural, chikankari, banarasi, brass, khurja, carpet and terracotta. The built-in image tool produced original artwork; each image was inspected and resized/re-encoded to WebP. These are conceptual regional compositions, not documentary workshop or inventory photographs. Earlier region assets are intact. [Exact prompts and file metadata](../audit/UTTAR_PRADESH_IMAGE_PROMPTS.json) record provenance.

### Uttarakhand chapter — 2026-11-21

Eight new conceptual images are stored under `public/images/uk-*.webp`: hero, mural, aipan, ringal, copper, thulma, likhai and nettle. The built-in image tool produced original artwork; each asset was inspected and resized/re-encoded to WebP. The hero is atmospheric craft artwork rather than a named workshop, and the background is an original decorative Aipan-inspired composition. Earlier regional images remain intact. [Exact prompts and file metadata](../audit/UTTARAKHAND_IMAGE_PROMPTS.json) record provenance.

### Himachal Pradesh chapter — 2026-11-21

Eight new conceptual compositions are stored under `public/images/hp-*.webp`: hero, mural, rumal, kullu, kinnauri, kangra, chappal and wood. They were generated using the built-in image tool, inspected and resized/re-encoded to WebP. The embroidery and landscape images are original concepts, not attributed ceremonial textiles or historical paintings. The veranda is atmospheric artwork rather than a named workshop. Earlier assets are intact. [Exact prompts and file metadata](../audit/HIMACHAL_PRADESH_IMAGE_PROMPTS.json) record provenance.

### Madhya Pradesh chapter — 2026-11-21

Eight new conceptual images are stored under `public/images/mp-*.webp`: hero, mural, gond, bagh, chanderi, maheshwari, metal and batik. They were generated using the built-in image tool, inspected and resized/re-encoded to WebP. The painted nature compositions are original concepts rather than reproductions attributed to a particular Gond painter. The courtyard is atmospheric artwork rather than a named workshop or monument. Earlier assets are intact. [Exact prompts and file metadata](../audit/MADHYA_PRADESH_IMAGE_PROMPTS.json) record provenance.

The active Madhya Pradesh surround is `mp-mural-v2.webp`, a built-in edit removing the first version’s horizontal frame to avoid repeated dividers. The original mural is retained and both prompts are recorded in its manifest.


### Chhattisgarh chapter — 2026-11-21

Eight new conceptual compositions are stored under `public/images/cg-*.webp`: hero, mural, dhokra, iron, kosa, bamboo, terracotta and wood. Generated using the built-in image tool and resized/re-encoded to WebP, they are original concepts rather than documentary inventory or named workshop photographs. The surround uses bronze coiled lines and foliage at the edges with a quiet centre. Earlier assets are intact. [Exact prompts and file metadata](../audit/CHHATTISGARH_IMAGE_PROMPTS.json) record provenance.


### Punjab chapter — 2026-11-21

Eight original conceptual compositions are stored under `public/images/pb-*.webp`: hero, mural, phulkari, jutti, inlay, metal, durrie and paranda. Generated using the built-in image tool, inspected and resized/re-encoded to WebP, they represent craft concepts rather than documentary inventory or named workshops. The embroidered surround keeps its centre quiet and confines Phulkari-inspired geometric stitching to the edges. Earlier assets remain intact. [Exact prompts and file metadata](../audit/PUNJAB_IMAGE_PROMPTS.json) record provenance.


### Haryana chapter — 2026-11-21

Eight original conceptual compositions are stored under `public/images/hr-*.webp`: hero, mural, durrie, pottery, mudha, peedha, brass and embroidery. They were generated with the built-in image tool, inspected and resized/re-encoded to WebP. The original surround confines woven geometry and reed bindings to its vertical edges. The courtyard does not depict a named workshop; object images are conceptual artwork rather than documentary inventory photography. Earlier regional assets are intact. [Exact prompts and file metadata](../audit/HARYANA_IMAGE_PROMPTS.json) record provenance.


### Delhi chapter — 2026-11-21

Eight original conceptual compositions are stored under `public/images/dl-*.webp`: hero, mural, zardozi, wood, pottery, paper, engraving and chik. They were generated with the built-in image tool, inspected and resized/re-encoded to WebP. The surround uses floral threadwork and carved-screen detail at its vertical edges with a quiet centre. The courtyard does not depict a named workshop or monument; object images are concepts rather than documentary inventory photographs. Earlier assets are intact. [Exact prompts and file metadata](../audit/DELHI_IMAGE_PROMPTS.json) record provenance.
