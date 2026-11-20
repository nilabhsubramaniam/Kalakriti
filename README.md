<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/brand/kalakriti-logo-reverse.webp">
    <img src="public/brand/kalakriti-logo.webp" alt="Kalakriti — Craft, Culture, Community" width="380">
  </picture>

  <h1>Living threads. Timeless traditions.</h1>
  <p><strong>मिथिलाक माटि</strong><br>The soil of Mithila. The stories of India.</p>
  <p>An Indian heritage marketplace in the making — beginning with Bihar,<br>and following the people, materials and traditions behind the craft.</p>

  <p><a href="#the-experience">The experience</a> · <a href="#run-locally">Run locally</a> · <a href="#the-design-language">Design language</a> · <a href="docs/README.md">Documentation</a></p>

  <img src="public/images/stitching-courtyard.webp" alt="Editorial illustration of women working together on an embroidered textile in a stone courtyard" width="100%">
  <p><sub>Editorial illustration · Rooted in a place. Made with meaning.</sub></p>
</div>

---

## The experience

Kalakriti brings regional craft stories into an illustrated, responsive discovery experience. This repository contains one **Next.js 14 application** with statically generated public pages.

| Chapter | What is implemented |
| --- | --- |
| **The heritage homepage** | A complete embroidery panorama, six regional stories in an automatic carousel, eight textile traditions, process stories and an artistic Mithila footer. |
| **Bihar, painted by hand** | A dedicated Mithila journal with a full-page painted backdrop, a top section menu, four cultural chapters, nine illustrated craft stories and twelve product previews. Native disclosures work without JavaScript. |
| **A journey across India** | A separate `/explore` atlas with lazy-loaded Three.js relief, D3 map mode, state selection, regional hover themes and an optional cultural showcase. |
| **Regional craft introductions** | All 36 existing regional routes have introductions and craft content. Bihar has the detailed journal; the other 35 pages have selected craft descriptions and regional visual themes. |
| **Shared discovery** | Responsive navigation, regional links, local craft search, library icons and an illustrated brand identity. |

> **Current stage: heritage discovery and catalogue preview.** Product prices and experience ideas are illustrative previews. Shopping, bookings, subscriptions, accounts and payments are not live. There is no backend or database integration in this repository.

The atlas follows the existing geographic dataset and its legacy region keys. Its 36 routes are not a newly revised administrative map; see [regional content scope](docs/audit/STATE_CRAFT_CONTENT.md).

<table>
  <tr>
    <td width="50%"><img src="public/images/painting-study.webp" alt="Madhubani-inspired fish and lotus painting illustration" width="100%"></td>
    <td width="50%"><img src="public/images/basket-study.webp" alt="Illustrative golden coiled-grass basket with red patterned bands" width="100%"></td>
  </tr>
  <tr>
    <td align="center"><strong>A story in every line</strong><br><sub>Painting · pattern · the Mithila chapter</sub></td>
    <td align="center"><strong>Beauty in the making</strong><br><sub>Grass · thread · the work of the hand</sub></td>
  </tr>
</table>

## Run locally

Use **Node.js 22 or newer** and **pnpm 11** for local development. CI uses Node 24 and pnpm 11; the lockfile and override configuration also support pnpm 9 for the existing Vercel workflow.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open [localhost:3000](http://localhost:3000).

| Route | Experience |
| --- | --- |
| `/` | Illustrated heritage homepage |
| `/explore` | Interactive India atlas and cultural showcase |
| `/state/bihar` | Mithila painting journal |
| `/state/gujarat` | Example regional craft overview |
| `/state/[slug]` | The remaining regional pages, generated at build time |

No environment variables are required for the current build. Fonts are downloaded by `next/font` at build time and served by the app at runtime; a clean build needs access to the font source or an existing font cache.

### Checks and production preview

```bash
pnpm validate
pnpm start
```

`validate` runs TypeScript, lint with zero warnings allowed, and the production build. The build first runs `scripts/build-india-map.mjs`, preparing the 3D meshes and poster from the existing GeoJSON. The current build generates **42 static outputs**, including the regional routes and framework outputs.

To check a production build while keeping a development server's cache separate:

```bash
KALAKRITI_BUILD_DIR=.next-relief pnpm validate
KALAKRITI_BUILD_DIR=.next-relief pnpm start --hostname 127.0.0.1 --port 3105
```

Use [localhost:3105](http://localhost:3105) for that preview. Stop servers with **Ctrl+C**. If a development tab reports a stale chunk after dependency changes, stop the dev server, remove only its generated `.next` directory, restart `pnpm dev` and hard-refresh the browser.

## The design language

**Painted paper, warm pigments and clear storytelling.** Kalakriti's visual identity takes its starting point from Mithila painting: outlined fish, lotus forms, patterned borders and the texture of handmade surfaces. The logo brings together embroidery, the needle and thread, paired fish and a lotus.

- **Colour:** paper and ink grounds with regional accent, secondary and tertiary pigments. `lib/stateThemes.ts` owns the regional identities; `lib/states/theme.ts` exposes their CSS variables.
- **Type:** Cormorant Garamond and the existing regional display registers, Devanagari text, and Inter for the interface. Fonts are self-hosted through `next/font`.
- **Surfaces:** handwritten CSS in `app/globals.css`, with scoped `kk-*` classes. Tailwind remains installed; the current UI uses the existing CSS system.
- **Motion:** CSS reveals and progressive scroll effects, plus a regional carousel that pauses for interaction and respects reduced motion. The atlas showcase starts only on request.
- **Imagery:** editorial illustrations and craft studies are labelled. They are not authenticated product photographs or evidence of a maker's identity, provenance or certification.
- **Interaction:** native disclosures, visible focus styles, keyboard-accessible regional controls, mobile navigation and D3 fallback when the 3D view is unavailable.

Bihar's map was removed from its journal at the user's request. Geographic discovery remains on `/explore`. The full-page Mithila painting is preserved; separate backgrounds behind its section menu and headings are transparent.

## Inside the repository

```text
app/
  page.tsx                       Heritage homepage
  explore/page.tsx               Separate India atlas
  state/[slug]/page.tsx           Static regional routes
  globals.css                    Shared and scoped visual styles
components/
  landing/                       Regional carousel, atlas, D3 and Three.js views
  layout/                        Navigation, craft search and footer
  state/                         Bihar journal and regional page components
  ornament/                      Existing cultural motifs
lib/
  landing/editorial.ts            Homepage editorial content
  stateThemes.ts                 Regional visual identity registry
  states/                        Page types, regional editorial notes and Bihar data
  store/                         Shared region selection and cultural showcase
  three/                         Browser scene, mesh types and resource lifecycle
public/
  brand/                         Approved logo variants and concept artwork
  images/                        Editorial illustrations and craft studies
  maps/                          Prepared relief manifest, meshes and poster
scripts/
  build-india-map.mjs             Offline geometry preparation
```

| Area | Implementation |
| --- | --- |
| Framework | Next.js 14.2.35 · React 18 · App Router |
| Types and state | Strict TypeScript · Zustand region selection |
| Maps | D3 7 · Three.js 0.187 · offline mesh preparation |
| UI | Handwritten CSS · Lucide React icons · `next/image` |
| Rendering | Static public pages with small client-side interactive areas |
| Delivery | Existing Vercel Git integration; GitHub Actions validates |

The map reads shared selection state; it does not own regional content. Prepared relief buffers are generated before the Next.js build, and the browser loads them when the atlas is activated. The scene uses demand-driven rendering and disposes owned resources when it unmounts.

> **Security status:** the latest production dependency audit reports unresolved advisories, including critical findings. See the [dated security review](docs/audit/SECURITY_REVIEW.md) before treating this prototype as release-ready.

## Documentation and next chapters

Start with the [documentation index](docs/README.md). It distinguishes implemented work from proposals and older baseline audits.

| Read | Purpose |
| --- | --- |
| [Heritage homepage](docs/audit/HERITAGE_JOURNAL.md) | Homepage composition, carousel and visual refinements |
| [Bihar Mithila journal](docs/audit/BIHAR_MITHILA_JOURNAL.md) | Current Bihar design, map removal and browser evidence |
| [Regional craft content](docs/audit/STATE_CRAFT_CONTENT.md) | Coverage, source references and editorial limitations |
| [India atlas](docs/audit/EXPLORE_ATLAS.md) | Dedicated map experience |
| [Three.js architecture](docs/architecture/THREEJS_ARCHITECTURE.md) | Renderer boundaries, fallback and geometry decisions |
| [Artwork and asset pipeline](docs/architecture/ASSET_PIPELINE.md) | Image provenance, generation prompts and production assets |
| [Security review](docs/audit/SECURITY_REVIEW.md) | Baseline findings and recorded follow-up work |
| [Implementation plan](docs/IMPLEMENTATION_PLAN.md) | Future milestones and approval boundaries |

Next product milestones include maker-reviewed regional content, authenticated product photography, a real catalogue, and separately approved commerce and seller workflows. Backend, account, payment, admin and mobile architecture documents describe proposals; they are not implemented features.

---

<div align="center">
  <img src="public/brand/kalakriti-emblem.webp" alt="Kalakriti embroidery, fish and lotus emblem" width="72">
  <p><strong>Many regions. Many hands.</strong><br>A shared love for things made with meaning.</p>
  <p><sub>Rooted in Mithila. Open to India.</sub></p>
</div>
