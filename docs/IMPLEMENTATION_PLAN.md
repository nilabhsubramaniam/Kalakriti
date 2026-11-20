# Implementation plan

> **Status: Proposed — not approved.** Each milestone needs its own approval before any code changes (CLAUDE.md §14 Phase 3): objective, files, dependencies, impact on static rendering, CSP, deployment and the existing map, and acceptance criteria. One milestone at a time; no commit, push, PR or deployment without a separate instruction.

Every milestone ends with `pnpm validate`, browser checks at 320 / 390 / 768 / 1024 / 1440 px with before-and-after comparison, and updates to the affected documents in `docs/`.

## Overview

| Milestone | Scope | Backend | Dependency change | CSP change |
|---|---|---|---|---|
| A1 | Audit fixes and foundations | No | No | Tightens only |
| A2 | Mithila discovery slice on static data | No | No | No |
| A3 | Three.js spike | No | Yes (three) | Yes |
| B0 | Next 15 upgrade (if approved) | No | Yes (major) | No |
| B1 | Backend foundation and catalogue API | Yes | Yes (new repo) | Maybe |
| B2 | Commerce: inventory, checkout, payments, orders, shipping | Yes | Yes | Yes |
| B3 | Seller self-service and pan-India expansion | Yes | — | — |

## A1 · Audit fixes and foundations

| Item | Files | Reference |
|---|---|---|
| Remove the unused image optimizer config and Atlassian `img-src` | `next.config.mjs` | [SECURITY H2](audit/SECURITY_REVIEW.md) |
| Nav theme and current region follow the page | `components/layout/TopNav.tsx`, new theme hook, state page | [DEBT E1](audit/TECHNICAL_DEBT.md) |
| Canvas honours reduced motion and pauses when hidden | `components/landing/IndiaMap.tsx` | [PERF G3](audit/PERFORMANCE_REVIEW.md) |
| Theme effect dependency list; hover without full re-render | `components/landing/IndiaMap.tsx` | PERF G5 |
| Label placeholder commerce; disable inert buttons; verify claims | `ProductRail`, `StateAside`, `ClosingCTA`, `bihar.ts`, `stateThemes.ts` | DEBT E3 |
| `dynamicParams = false`; `not-found.tsx` | `app/state/[slug]/page.tsx`, `app/not-found.tsx` | DEBT E9 |
| Render the landing hero on the server | `app/page.tsx`, split from `IndiaMap.tsx` | PERF G2 |
| Keyboard access to the landing map | `IndiaMap.tsx` | DEBT E6 |
| Split `IndiaMap.tsx` without behaviour change | `components/map/*` | DEBT E4 |
| New map geometry (after the source decision) | `public/`, `scripts/geo/`, `lib/stateThemes.ts` keys | DEBT E2, PERF G1 |
| Tailwind reset (after decision) | `tailwind.config.ts` or `globals.css` | DEBT E5 |

**Acceptance:** nav accent equals page accent on every state page, with direct load and client navigation; landing HTML contains the `<h1>` with JavaScript off; zero canvas frames after load under reduced motion; every region reachable by Tab with Enter opening its panel; 36 regions including Ladakh; desktop layout measurements unchanged except where intended.

## A2 · Mithila discovery slice (static data)

- `lib/catalog/` types and `CatalogSource` with a static implementation.
- Product, Producer and Category records for Bihar with stable ids and slugs; producer content only with consent and verification.
- Routes: `/p/[slug]`, `/makers/[slug]`, `/c/[category]`, `/search`, `/cart`, all prebuilt or static shells.
- Components: `commerce/`, `producer/`, `product/Gallery`.
- Browser cart (`useCartStore`), with checkout clearly unavailable or using the approved interim selling model.
- Metadata: `metadataBase`, Open Graph, sitemap, robots, product structured data.

**Acceptance:** every product has its own URL and metadata; each product names its producers; search and category filters return correct results; all pages remain prebuilt; works with JavaScript off except cart and search.

## A3 · Three.js spike

Isolated, behind an explicit opt-in; the d3 map unchanged. One 3D map view and one GLB product viewer with the image fallback. Acceptance is the measurement table in [THREEJS_ARCHITECTURE](architecture/THREEJS_ARCHITECTURE.md). Outcome: a written decision on whether and how 3D proceeds.

## B0 · Next 15 upgrade (if approved)

Major upgrade to Next 15 and React 19, done before any dynamic or authenticated feature. Verify frozen installs under pnpm 9 and 11, `pnpm audit`, `pnpm validate`, and full visual comparison.

## B1 · Backend foundation

New `kalakriti-api` repository: platform layer, identity, region, catalog, producer, media, admin review and audit; Postgres with migrations; OpenAPI contract; worker with outbox; `ApiCatalog` in the frontend; on-demand revalidation. Assisted onboarding of Mithila sellers by the internal team.

**Acceptance:** public pages render from the API with the same output as the static source; admin approve and reject flows are audited; uploads pass the asset pipeline rules.

## B2 · Commerce

Inventory ledger and reservations, checkout with idempotency, payment provider and webhooks, orders split by seller, shipping and returns, refunds. Checkout and account pages render per request; CSP updated for the payment provider.

**Acceptance:** no overselling of one-of-one items under concurrent checkout; webhook replays are harmless; refunds reconcile with the provider; order snapshots survive catalogue edits.

## B3 · Seller self-service and expansion

Self-service onboarding using the same states as assisted onboarding; payouts; region-scoped curators; additional regions set to `preview` then `live` as verified content arrives.

## Decisions needed before A1

1. Map boundary source (blocks the geometry item only).
2. Tailwind: disable reset or remove (blocks that item only).
3. How placeholder commerce should appear until checkout exists.


## Discovery homepage implementation — 2026-11-17

User approved implementation and supplied a cream/maroon Indian heritage visual reference. Delivered the homepage composition, working registry search and state/craft links, opt-in embedded D3 with keyboard/error/retry behavior, preview pricing and disabled commerce actions, and shared footer. No dependency, framework, CSP, geometry, backend or deployment change. Real inventory, consented producer profiles, newsletter service and 3D require their own milestones. See docs/audit/HOMEPAGE_IMPLEMENTATION.md for final validation and assets.


## Approved 3D state discovery and cultural showcase — 2026-11-17

Implemented the user-approved extruded state map as the homepage hero, sharing the existing registry/store with D3. Added regional hover previews, explicit selection and deep links, one opt-in cultural showcase clock with pause/next/previous, offline geometry preparation, demand-driven rendering, native/touch/keyboard alternatives and WebGL failure fallback. The original D3 train remains. Added three/@types/three only. Geometry source and backend remain unchanged. Detailed acceptance evidence: [THREE_MAP_IMPLEMENTATION](audit/THREE_MAP_IMPLEMENTATION.md).


## Illustrated storefront balance — 2026-11-17

User clarified that the illustrated craft-and-culture homepage was preferred over a map-only opening. Restored that hero and grouped the preserved 3D/D3 map, native region selector, cultural showcase and compact preview below it. Four application files changed for composition/styles and deep-link scrolling; no dependencies, renderer, geometry, configuration or commerce changes. Validation and screenshots: [HOMEPAGE_BALANCE](audit/HOMEPAGE_BALANCE.md).
