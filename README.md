# Kalakriti — UI Layer

E-commerce platform for authentic Mithila/Bihar artisan and farmer products.

---

## Surfaces

| Surface | Framework | Audience |
|---|---|---|
| `apps/web` | Next.js 14 (App Router, SSR + ISR) | Customers |
| `apps/admin` | React + Vite (SPA) | Internal ops |
| `apps/mobile` | Flutter (Phase B — after web is stable) | Customers |
| `packages/tokens` | Design token source of truth | All surfaces |
| `packages/ui` | Storybook-documented shared component library | web + admin |

---

## Monorepo layout

```
kalakriti/
├── apps/
│   ├── web/                        # customer-facing storefront
│   ├── admin/                      # internal ops panel
│   └── mobile/                     # Flutter app (Phase B)
├── packages/
│   ├── tokens/                     # design tokens — colors, spacing, type, radii, motion
│   └── ui/                         # shared React component library (web + admin)
├── package.json                    # workspace root (pnpm workspaces)
└── turbo.json                      # Turborepo pipeline config
```

---

## apps/web — Customer Storefront

### Stack

| Concern | Library / Service |
|---|---|
| Framework | `next` 14, App Router |
| Styling | `tailwindcss`, design tokens via CSS custom properties |
| Server state | `next/cache` fetch + `revalidate` tags (ISR) |
| Client state | `zustand` — cart, wishlist, UI state |
| Forms | `react-hook-form` + `zod` |
| HTTP client | `ky` (thin fetch wrapper) |
| Image optimisation | `next/image` |
| Auth | `next-auth` v5 (JWT sessions) |
| Animation | `framer-motion` — hero carousel, add-to-cart feedback |
| Rich text (PDP) | `@portabletext/react` or plain markdown via `remark` |
| Analytics | `posthog-js` (event tracking) |

### Folder structure

```
apps/web/
├── app/
│   ├── layout.tsx                  # root layout — TopNav, Footer, Toast provider
│   ├── page.tsx                    # / Home
│   ├── [category]/
│   │   ├── page.tsx                # /[category] — Category Browse
│   │   └── [slug]/
│   │       └── page.tsx            # /[category]/[slug] — Product Detail
│   ├── cart/
│   │   └── page.tsx
│   ├── checkout/
│   │   └── page.tsx                # multi-step, client component
│   ├── account/
│   │   ├── layout.tsx              # account sidebar layout
│   │   ├── orders/
│   │   │   ├── page.tsx            # order history list
│   │   │   └── [id]/page.tsx       # order detail
│   │   ├── wishlist/page.tsx
│   │   ├── profile/page.tsx
│   │   └── addresses/page.tsx
│   └── api/
│       └── auth/[...nextauth]/route.ts
│
├── components/
│   ├── layout/
│   │   ├── TopNav.tsx
│   │   ├── Footer.tsx
│   │   └── AccountSidebar.tsx
│   ├── home/
│   │   ├── HeroBannerCarousel.tsx  # framer-motion PageView + auto-scroll
│   │   ├── CategoryTileGrid.tsx
│   │   ├── FeaturedProductsRow.tsx
│   │   └── GiftBoxCallout.tsx      # static promo block for MITH-BUN-001
│   ├── browse/
│   │   ├── FilterSidebar.tsx       # state synced to URL search params
│   │   ├── FilterGroup.tsx
│   │   ├── RangeSlider.tsx
│   │   ├── SortDropdown.tsx
│   │   └── ProductGrid.tsx         # 4-col desktop / 2-col mobile
│   ├── product/
│   │   ├── ImageGallery.tsx        # pinch-zoom via framer-motion or InteractiveImage
│   │   ├── VariantSelector.tsx     # dynamic per product.variant_dimension
│   │   ├── QuantityStepper.tsx
│   │   ├── AddToCartButton.tsx     # idle → adding → added → idle (4-state)
│   │   ├── NotifyMeButton.tsx      # shown when out of stock
│   │   ├── ProductTabs.tsx         # Description / History / Care / Reviews
│   │   └── RelatedProductsCarousel.tsx
│   ├── cart/
│   │   ├── CartLineItem.tsx
│   │   ├── PromoCodeInput.tsx
│   │   └── OrderSummary.tsx
│   ├── checkout/
│   │   ├── StepProgressBar.tsx
│   │   ├── ShippingStep.tsx
│   │   ├── DeliveryStep.tsx
│   │   ├── PaymentStep.tsx         # gateway-rendered iframe / hosted fields
│   │   ├── ReviewStep.tsx
│   │   └── ConfirmationStep.tsx
│   └── shared/
│       ├── ProductCard.tsx         # image, name, price, GI badge, quick-add
│       ├── GIBadge.tsx             # pill: "GI Tagged (2007)" — conditional render
│       ├── SkeletonCard.tsx        # shimmer placeholder
│       ├── EmptyState.tsx          # accepts icon, message, optional CTA
│       ├── Toast.tsx               # stack-based, max 3, auto-dismiss 4s
│       ├── Modal.tsx               # focus-trapped, portal-rendered
│       ├── Breadcrumb.tsx
│       └── SearchBar.tsx           # autocomplete, debounced 300ms, min 2 chars
│
├── lib/
│   ├── api.ts                      # typed API client (ky instance + endpoint fns)
│   ├── auth.ts                     # next-auth config
│   └── utils.ts
│
├── store/
│   ├── cart.ts                     # zustand — cart items, add, remove, update qty
│   └── ui.ts                       # zustand — toast stack, modal state
│
├── hooks/
│   ├── useCart.ts
│   ├── useWishlist.ts
│   └── useInfiniteProducts.ts      # IntersectionObserver + cursor pagination
│
└── middleware.ts                   # protect /account/* routes via next-auth
```

### Routes and data

| Route | Rendering | API calls |
|---|---|---|
| `/` | ISR (revalidate: 300s) | `GET /content/banners`, `GET /catalog/featured`, `GET /catalog/categories` |
| `/[category]` | SSR | `GET /catalog/products?category=...` (cursor paginated) |
| `/[category]/[slug]` | ISR (revalidate: 60s) | `GET /catalog/products/:id`, `GET /inventory/stock`, `GET /reviews/product/:id`, `GET /catalog/products/related` |
| `/cart` | Client | `GET /cart` |
| `/checkout` | Client (protected) | `POST /orders`, `POST /payments/initiate`, `POST /shipping/rate` |
| `/account/*` | SSR (protected) | `GET /users/me`, `GET /orders`, `GET /wishlist` |

### Key behaviours

- Filter sidebar state lives in URL search params — filters are shareable and survive page refresh
- Stock is re-checked on add-to-cart click, not only on page load
- `AddToCartButton` is disabled until a valid SKU is resolved from variant selection
- Cart persists per user (logged-in) or session cookie (guest); merged on login
- Stock is **not reserved** at add-to-cart — only at checkout (`POST /orders`)
- Checkout: back-navigation blocked during payment processing (full-screen overlay)
- Guest checkout: prompt "save your details?" shown on confirmation screen

---

## apps/admin — Internal Ops Panel

### Stack

| Concern | Library / Service |
|---|---|
| Framework | `react` 18 + `vite` |
| Styling | `tailwindcss` |
| Server state | `@tanstack/react-query` |
| Client state | `zustand` |
| Data tables | `@tanstack/react-table` (or `ag-grid-react` community) |
| Forms | `react-hook-form` + `zod` |
| Rich text editor | `tiptap` |
| Charts | `recharts` |
| Drag-and-drop | `@dnd-kit/core` — image reorder, banner display_order |
| HTTP client | `ky` |
| Auth | JWT stored in `httpOnly` cookie; `axios` interceptor refreshes on 401 |
| Date/time | `date-fns` |

### Folder structure

```
apps/admin/
├── src/
│   ├── main.tsx
│   ├── App.tsx                     # router root
│   │
│   ├── pages/
│   │   ├── Dashboard.tsx           # /admin
│   │   ├── catalog/
│   │   │   ├── CatalogList.tsx     # /admin/catalog
│   │   │   └── ProductForm.tsx     # /admin/catalog/new + /admin/catalog/:id
│   │   ├── inventory/
│   │   │   └── InventoryList.tsx   # /admin/inventory
│   │   ├── orders/
│   │   │   ├── OrderList.tsx       # /admin/orders
│   │   │   └── OrderDetail.tsx     # /admin/orders/:id
│   │   ├── vendors/
│   │   │   ├── VendorList.tsx      # /admin/vendors
│   │   │   └── VendorDetail.tsx    # /admin/vendors/:id
│   │   ├── content/
│   │   │   └── ContentPage.tsx     # /admin/content — banners + articles tabs
│   │   ├── users/
│   │   │   └── UserList.tsx        # /admin/users
│   │   └── reviews/
│   │       └── ReviewQueue.tsx     # /admin/reviews
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AdminLayout.tsx     # sidebar + top bar wrapper
│   │   │   └── AdminSidebar.tsx    # collapses to icon rail below 1280px
│   │   ├── table/
│   │   │   ├── DataTable.tsx       # shared TanStack/AG Grid wrapper — used across all list pages
│   │   │   ├── StatusBadge.tsx
│   │   │   ├── StatusToggle.tsx    # inline active/inactive toggle in table row
│   │   │   └── BulkActionsBar.tsx
│   │   ├── catalog/
│   │   │   ├── ProductFormSections.tsx
│   │   │   ├── ImageUploader.tsx   # drag-drop, reorderable via @dnd-kit, type tag per image
│   │   │   └── VariantsSubTable.tsx # inline editable rows; SKU auto-generated
│   │   ├── orders/
│   │   │   ├── OrderStatusDropdown.tsx  # only shows valid next states per state machine
│   │   │   └── OrderStatusTimeline.tsx
│   │   ├── dashboard/
│   │   │   ├── StatCard.tsx
│   │   │   ├── SalesLineChart.tsx  # recharts — 7d / 30d / 90d period selector
│   │   │   ├── CategoryBarChart.tsx
│   │   │   └── DistrictBarChart.tsx
│   │   └── shared/
│   │       ├── ConfirmationDialog.tsx  # required before all destructive actions
│   │       ├── RoleGuard.tsx           # hides/disables UI elements by role
│   │       ├── Toast.tsx
│   │       ├── RichTextEditor.tsx      # tiptap instance
│   │       └── AuditNote.tsx           # "Last edited by X at Y"
│   │
│   ├── lib/
│   │   ├── api.ts                  # ky instance, typed endpoint fns
│   │   ├── queryClient.ts          # TanStack Query global config
│   │   └── orderStateMachine.ts    # valid transition map — enforced in UI
│   │
│   ├── store/
│   │   └── auth.ts                 # zustand — current admin user, role
│   │
│   └── hooks/
│       ├── useServerTable.ts       # shared hook: server-side pagination + sort + filter for DataTable
│       └── useOrderActions.ts
│
└── index.html
```

### Order status state machine

```
pending → paid → processing → shipped → delivered
               ↘                      ↘
             cancelled              cancelled → refunded
```

`orderStateMachine.ts` exports a `validTransitions` map. `OrderStatusDropdown` reads from it — the dropdown only renders next states that are reachable from the current one.

### Key behaviours

- All `/admin/*` routes: admin-role JWT required; enforced at route level via `RoleGuard`
- Vendor `payout_details`: displayed masked; editing requires a confirmation dialog before save
- Every product write logs to `audit_log`; shown via `AuditNote` on edit forms
- Catalog table and Orders table: server-side pagination — never load all rows into the client
- Image uploader: drag-and-drop reorder via `@dnd-kit`; each image gets a type tag (main / detail / lifestyle) before upload
- Bulk actions bar: only appears when one or more table rows are selected
- Charts (Phase 1): no dedicated analytics service — recharts queries Order + Catalog services directly

---

## apps/mobile — Flutter App (Phase B)

> Build begins after `apps/web` is stable. Screens mirror the web user panel 1:1. No mobile-only feature set in Phase 1.

### Stack

| Concern | Package |
|---|---|
| State management | `flutter_riverpod` — AsyncNotifierProvider for all async data |
| Routing + deep links | `go_router` — handles push notification → order detail, promo → product page |
| HTTP | `dio` + interceptor for JWT refresh |
| Caching | `flutter_riverpod` + `hive` for offline cart persistence |
| Images | `cached_network_image` |
| Loading placeholders | `shimmer` |
| Payment (native) | `pay` package — Apple Pay (iOS) + Google Pay (Android) |
| Analytics | `posthog_flutter` |
| Local storage | `flutter_secure_storage` — JWT tokens |
| Linting | `flutter_lints` |

### Folder structure

```
apps/mobile/
├── lib/
│   ├── main.dart
│   ├── router.dart                 # go_router config — all routes + deep link paths
│   ├── theme.dart                  # ThemeData built from design tokens
│   │
│   ├── features/
│   │   ├── home/
│   │   │   ├── home_screen.dart
│   │   │   ├── hero_carousel.dart      # PageView + Timer + dot indicator
│   │   │   ├── category_tile_grid.dart # GridView
│   │   │   └── featured_row.dart       # horizontal ListView.builder
│   │   ├── browse/
│   │   │   ├── product_list_screen.dart
│   │   │   ├── filter_bottom_sheet.dart  # showModalBottomSheet (replaces web sidebar)
│   │   │   └── product_grid.dart         # GridView.builder, 2-col portrait
│   │   ├── product/
│   │   │   ├── product_detail_screen.dart
│   │   │   ├── image_gallery.dart        # PageView + InteractiveViewer (pinch-zoom)
│   │   │   ├── variant_selector.dart     # ChoiceChip group, dynamic per product
│   │   │   └── add_to_cart_button.dart   # HapticFeedback.lightImpact() on tap
│   │   ├── cart/
│   │   │   ├── cart_screen.dart
│   │   │   └── cart_item.dart            # Dismissible (swipe-to-remove)
│   │   ├── checkout/
│   │   │   ├── checkout_screen.dart      # Stepper widget or custom PageView
│   │   │   ├── address_form.dart
│   │   │   ├── payment_selector.dart     # card, UPI, Apple Pay, Google Pay
│   │   │   └── confirmation_screen.dart
│   │   └── account/
│   │       ├── account_screen.dart
│   │       ├── order_list_screen.dart
│   │       ├── order_detail_screen.dart
│   │       ├── profile_edit_screen.dart
│   │       ├── address_book_screen.dart
│   │       └── wishlist_screen.dart
│   │
│   ├── providers/
│   │   ├── auth_provider.dart          # AsyncNotifierProvider — JWT state
│   │   ├── cart_provider.dart          # NotifierProvider — cart items + hive persistence
│   │   ├── products_provider.dart      # AsyncNotifierProvider — paginated product list
│   │   └── order_provider.dart
│   │
│   ├── services/
│   │   ├── api_client.dart             # dio instance + JWT interceptor
│   │   └── payment_service.dart        # wraps `pay` package for Apple/Google Pay
│   │
│   └── widgets/
│       ├── product_card.dart
│       ├── gi_badge.dart
│       ├── shimmer_placeholder.dart
│       ├── pull_to_refresh.dart        # RefreshIndicator wrapper
│       └── bottom_nav.dart             # Home / Categories / Cart (badge) / Wishlist / Account
│
├── assets/
│   └── tokens/                         # token values consumed by theme.dart
│
└── pubspec.yaml
```

### Navigation

Bottom navigation bar (differs from web top-nav — mobile convention):

```
BottomNavigationBar
  ├── Home
  ├── Categories
  ├── Cart          ← badge count from cart_provider
  ├── Wishlist
  └── Account       ← nested Navigator for sub-screens
```

### Key behaviours

- Infinite scroll: `ScrollController.addListener` triggers next page fetch at ~80% scroll depth
- Cart persistence: `hive` box keeps cart state across app restarts for guest users
- Payment: Apple Pay / Google Pay available in `payment_selector.dart` — mobile-only, not in web checkout
- Deep links via `go_router`: push notification for order update opens `/account/orders/:id` directly
- Checkout: full-screen loading overlay during payment processing — `WillPopScope` blocks back-navigation

---

## packages/tokens — Design Tokens

Single source of truth for all visual decisions. All surfaces consume from here.

```
packages/tokens/
├── src/
│   ├── color.json          # brand palette + semantic (success, error, warning, info, surface)
│   ├── spacing.json        # 4px base grid — 4, 8, 12, 16, 24, 32, 48, 64
│   ├── typography.json     # font family, size scale, weight, line-height
│   ├── radius.json         # card, button, badge, modal, pill
│   ├── shadow.json         # elevation levels 1–4
│   └── motion.json         # duration (fast: 150ms, base: 250ms, slow: 400ms) + easing curves
│
├── dist/
│   ├── tokens.css          # CSS custom properties — consumed by web + admin via Tailwind
│   └── tokens.dart         # generated ThemeData constants — consumed by Flutter
│
└── build.js                # Style Dictionary transform — JSON → CSS + Dart
```

Build tool: [`style-dictionary`](https://amzn.github.io/style-dictionary) — runs on token change, outputs both `dist/` targets.

---

## packages/ui — Shared Component Library

Shared between `apps/web` and `apps/admin`. Documented in Storybook.

```
packages/ui/
├── src/
│   ├── ProductCard/
│   ├── GIBadge/
│   ├── SkeletonCard/
│   ├── EmptyState/
│   ├── Toast/
│   ├── Modal/
│   ├── Breadcrumb/
│   ├── StatusBadge/
│   └── index.ts
│
├── .storybook/
└── package.json
```

Components here must be surface-agnostic — no Next.js-specific imports, no admin-specific logic.

---

## Tooling

| Tool | Purpose |
|---|---|
| `turbo` | Monorepo task pipeline — build, lint, test in dependency order |
| `pnpm` workspaces | Package manager |
| `eslint` + `prettier` | Lint + format (web + admin) |
| `typescript` | Strict mode across web + admin |
| `vitest` | Unit tests (web + admin) |
| `playwright` | E2E tests — critical paths: browse → PDP → cart → checkout |
| `storybook` | Component docs + visual regression (packages/ui) |
| `style-dictionary` | Token build pipeline |
| `dart analyze` + `flutter test` | Mobile lint + unit tests |
