# Kalakriti documentation

Two kinds of document live here, and they must not be confused:

| Folder | What it is | Status |
|---|---|---|
| [`audit/`](audit/) | What the repository **is** today, verified against the code and the running build | Fact. Correct it when the code changes. |
| [`architecture/`](architecture/) | Where Kalakriti is **going** | **Proposed.** Nothing in it is implemented or approved unless the document says so. |
| [`IMPLEMENTATION_PLAN.md`](IMPLEMENTATION_PLAN.md) | Milestones that connect the two | Proposed. Each milestone needs its own approval. |

Baseline: commit `6473826`, audited 2026-11-17. These baseline documents retain historical findings; the implementation notes below describe the current experience.

## Current experience — implemented

- [Commit review](audit/COMMIT_REVIEW.md) — final validation, review scope and outstanding dependency advisories

- [Heritage homepage](audit/HERITAGE_JOURNAL.md) — editorial homepage, regional carousel and shared visual treatment
- [Andaman & Nicobar chapter](audit/ANDAMAN_NICOBAR_JOURNAL.md) — woven island borders, six material-led collections and official visitor information
- [Lakshadweep chapter](audit/LAKSHADWEEP_JOURNAL.md) — lagoon/coir borders, three focused collections, six products and official access information
- [Puducherry chapter](audit/PUDUCHERRY_JOURNAL.md) — terracotta/teal kolam borders, clay, paper, ceramics, weaving, embroidery and four-enclave visitor information
- [Telangana chapter](audit/TELANGANA_JOURNAL.md) — ikat-inspired borders, distinct textile and painting collections, raised metalwork and visitor information
- [Andhra Pradesh chapter](audit/ANDHRA_PRADESH_JOURNAL.md) — Kalamkari-inspired borders, distinct painted/printed cloth, woodcraft, lacquer, weaving and metalwork
- [Tamil Nadu chapter](audit/TAMIL_NADU_JOURNAL.md) — kolam-inspired borders, painting, casting, textiles, natural fibres and visitor information
- [Karnataka chapter](audit/KARNATAKA_JOURNAL.md) — Bidri-inspired borders, woven textiles, distinct embroidery collections and visitor information
- [Kerala chapter](audit/KERALA_JOURNAL.md) — woven gold borders, natural-fibre crafts, six collections and visitor information
- [Delhi chapter](audit/DELHI_JOURNAL.md) — carved-screen surround, six collections, item viewers and heritage destinations
- [Haryana chapter](audit/HARYANA_JOURNAL.md) — woven geometry, reed textures, six collections, item viewers and visitor information
- [Punjab chapter](audit/PUNJAB_JOURNAL.md) — Phulkari-inspired surround, six collections, item viewers and visitor information
- [Chhattisgarh chapter](audit/CHHATTISGARH_JOURNAL.md) — Dhokra-inspired surround, six collections, item viewers and visitor information
- [Madhya Pradesh chapter](audit/MADHYA_PRADESH_JOURNAL.md) — Gond-inspired surround, six collections, item viewers and visitor information
- [Himachal Pradesh chapter](audit/HIMACHAL_PRADESH_JOURNAL.md) — embroidered surround, six regional collections, item viewers and visitor information
- [Uttarakhand chapter](audit/UTTARAKHAND_JOURNAL.md) — Aipan-inspired surround, six collections, item viewers and hill destinations
- [Uttar Pradesh chapter](audit/UTTAR_PRADESH_JOURNAL.md) — Chikankari-inspired surround, six collections, item viewers and visitor information
- [Jharkhand chapter](audit/JHARKHAND_JOURNAL.md) — Sohrai-inspired background, six collections, item details and regional reading
- [Odisha chapter](audit/ODISHA_JOURNAL.md) — Odia theme, painted background, craft collections and item details
- [West Bengal chapter](audit/WEST_BENGAL_JOURNAL.md) — Bengali theme, full-page artwork, six collections and product details
- [Jammu & Kashmir chapter](audit/JAMMU_KASHMIR_JOURNAL.md) — regional theme, six collections, detail viewers, journal and tourism
- [Bihar Mithila journal](audit/BIHAR_MITHILA_JOURNAL.md) — illustrated Bihar page, top section menu and map removal
- [Regional craft content](audit/STATE_CRAFT_CONTENT.md) — introductions across all 36 existing region routes and source review
- [Dedicated India atlas](audit/EXPLORE_ATLAS.md) — `/explore` with Three.js and D3 modes
- [Logo and navigation](audit/LOGO_NAVIGATION_IMPLEMENTATION.md) — approved identity and navigation behavior
- [Asset pipeline](architecture/ASSET_PIPELINE.md) — current artwork and geometry provenance

## Audit — baseline and subsequent updates

- [Repository overview](audit/REPOSITORY_OVERVIEW.md) — what the site is, routes, what was run
- [Existing architecture](audit/EXISTING_ARCHITECTURE.md) — components, data flow, theming, the d3 map
- [Tech stack](audit/TECH_STACK.md) — dependencies, versions, tooling, unused packages
- [Reusable components](audit/REUSABLE_COMPONENTS.md) — what to keep, refactor, or leave alone
- [Technical debt](audit/TECHNICAL_DEBT.md) — defects and debt, with priority
- [Security review](audit/SECURITY_REVIEW.md) — headers, CSP, advisories, secrets
- [Performance review](audit/PERFORMANCE_REVIEW.md) — measurements and concerns

## Architecture — proposed target

- [Gap analysis](architecture/GAP_ANALYSIS.md) — 13 product areas against the vision
- [Target architecture](architecture/TARGET_ARCHITECTURE.md) — frontend, components, regions, auth, workflows
- [Database design](architecture/DATABASE_DESIGN.md) — PostgreSQL schema
- [API design](architecture/API_DESIGN.md) — Go REST endpoints
- [Three.js architecture](architecture/THREEJS_ARCHITECTURE.md) — 3D map, product viewer, coexistence with d3
- [Asset pipeline](architecture/ASSET_PIPELINE.md) — images, 3D models, geometry
- [Deployment architecture](architecture/DEPLOYMENT_ARCHITECTURE.md) — Vercel, Go API, storage, CDN

## Keeping these current

- A change to code that one of the `audit/` documents describes should update that document in the same change.
- When a proposal in `architecture/` is approved or implemented, change its status line and record the decision in the document's decision table.
- Never describe something as implemented because a document, README or unused file mentions it. Trace it in the code.
