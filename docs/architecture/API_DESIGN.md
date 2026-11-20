# API design (Go REST)

> **Status: Proposed — not approved.** No API exists. See [TARGET_ARCHITECTURE](TARGET_ARCHITECTURE.md) and [DATABASE_DESIGN](DATABASE_DESIGN.md).

## Conventions

| Topic | Rule |
|---|---|
| Base path | `/v1`. Breaking changes go to `/v2` |
| Contract | `api/openapi.yaml` in the API repository is the source of truth; frontend types are generated from it |
| Format | JSON; field names in `snake_case` |
| Errors | RFC 9457 `application/problem+json` with a stable `type` |
| Pagination | Cursor-based: `?cursor=…&limit=…`, response `{ items, next_cursor }` |
| Caching | `ETag` and `Cache-Control` on public reads |
| Idempotency | `Idempotency-Key` header required on checkout, payment and refund calls |
| Money | Integer paise plus `currency` |
| Auth | Session cookie forwarded by the Next server; the browser never calls Go directly |

## Public reads (no auth, cacheable)

| Method | Path | Purpose |
|---|---|---|
| GET | `/regions` | Regions with status `preview` or `live` |
| GET | `/regions/{slug}` | Region detail with district and craft summaries |
| GET | `/regions/{slug}/districts` | Districts with catalogue counts |
| GET | `/crafts?region=` | Crafts |
| GET | `/categories` | Category tree |
| GET | `/collections/{slug}` | Curated collection |
| GET | `/products?region=&district=&category=&craft=&producer=&q=&cursor=` | Listing and filtering |
| GET | `/products/{slug}` | Product detail with variants, producers, verified claims, approved media |
| GET | `/producers/{slug}` | Producer profile (consented fields only) |
| GET | `/search?q=` | Products, producers and crafts |

## Authentication

| Method | Path | Purpose |
|---|---|---|
| POST | `/auth/otp/request` | Send an OTP (rate-limited) |
| POST | `/auth/otp/verify` | Verify and create a session |
| POST | `/auth/logout` | End the session |
| GET | `/me` | Current user and roles |

## Customer

| Method | Path | Purpose |
|---|---|---|
| GET / PUT | `/cart` | Read or replace the cart |
| POST | `/checkout` | Re-price, check and reserve stock, create the order and a payment intent |
| GET | `/orders`, `/orders/{id}` | Order history and detail |
| POST | `/orders/{id}/returns` | Request a return |
| GET / POST | `/me/addresses` | Address book |

## Seller (scoped to the caller's seller)

| Method | Path | Purpose |
|---|---|---|
| GET / POST | `/seller/products` | List or create drafts |
| PATCH | `/seller/products/{id}` | Edit (claim edits return the product to review) |
| POST | `/seller/products/{id}/submit` | Submit for review |
| POST | `/seller/media/uploads` | Get a presigned upload URL |
| POST | `/seller/media/{id}/complete` | Mark an upload complete; starts processing |
| PATCH | `/seller/inventory/{variant_id}` | Adjust stock |
| GET | `/seller/orders` | Orders for this seller |
| POST | `/seller/orders/{id}/accept`, `/seller/orders/{id}/ship` | Fulfilment steps |
| GET | `/seller/payouts` | Settlement history |

## Admin (role-checked, every write audited)

| Method | Path | Purpose |
|---|---|---|
| GET | `/admin/review-queue` | Products, producers and media awaiting review |
| POST | `/admin/products/{id}/approve`, `/admin/products/{id}/reject` | Publish or return with reasons |
| POST | `/admin/producers/{id}/verify` | Producer verification |
| POST | `/admin/sellers/{id}/kyc-decision` | Seller verification |
| POST | `/admin/media/{id}/approve` | Approve an asset for publication |
| GET | `/admin/orders` | All orders |
| POST | `/admin/refunds` | Issue a refund |
| GET | `/admin/audit-log` | Audit history |
| CRUD | `/admin/regions`, `/admin/crafts`, `/admin/categories`, `/admin/collections` | Reference data |

## Webhooks (inbound)

| Method | Path | Rule |
|---|---|---|
| POST | `/webhooks/payments/{provider}` | Verify signature; idempotent on provider reference |
| POST | `/webhooks/shipping/{carrier}` | Verify signature; append shipment events |

## Outbound

`POST /api/revalidate` on the Next site, signed with `REVALIDATE_SECRET`, sent by the worker when published data changes (product, producer, region, collection).
