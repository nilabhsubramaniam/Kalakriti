# Shared selector menus

Implemented 28 November 2026. `components/shared/SelectField.tsx` enhances the existing select controls after hydration. It preserves the native select, original field names, values and change handlers; server output and unenhanced controls retain the native picker.

## Scope

- Explore (`components/landing/RegionalDiscovery.tsx`): all 36 states/UTs, grouped by the existing `REGIONS` registry, with a state/region filter and All of India reset.
- Shopping region (`components/commerce/ShopControls.tsx`): the existing four preview-price markets.
- Account mobile forms (`components/account/AccountForm.tsx`): the existing country codes, with no change to validation or account submission.
- Navbar search suggestions use the same paper, border, spacing and hover colours. Navbar navigation retains its existing grouped directory behaviour. Content accordions remain accordions.

## Design and interaction

The labelled CSS section in `app/globals.css` shares the navbar's theme slots, quiet borders, paper background, ink text and generous rows. The active option and selected option have separate visual marks; selected values include a Lucide check. Popups are portalled to avoid clipped panels, copy the trigger's regional colour slots, stay inside the viewport and can open above the trigger when needed.

Arrow keys, Home/End, Enter/Space, type-ahead, Escape and Tab are supported. The long Explore list focuses its filter. Outside pointer/focus dismisses menus. Escape restores trigger focus without resetting the map. Existing external form labels focus the enhanced trigger. Menu rows are at least 44px; inputs remain 16px. No dependencies or remote resources were added.

## Validation

TypeScript, strict ESLint and an isolated production build pass. Browser checks cover Explore, account country codes and product shopping regions at 320, 390, 768, 1024 and 1440px, plus filtering and propagation of selections to the underlying controls. Native OS select popups are intentionally replaced only for hydrated single-select controls; multiple/size-based selects retain native rendering.
