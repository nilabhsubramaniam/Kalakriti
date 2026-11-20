# Regional craft content

Implemented 2026-11-20 at the user's request to carry the homepage's descriptive craft approach into every existing state page.

## Implementation

- `lib/states/editorial.ts`: typed, server-side editorial content for all 36 existing region keys. Each entry includes an introduction and three selected traditions with a material label and explanatory paragraph. These are independently authored introductions, not exhaustive lists or product-origin claims.
- `lib/states/derive.ts`, `lib/states/index.ts`, `lib/states/types.ts`: combine regional editorial notes with the existing visual registry and detailed Bihar data. The other 35 pages now display described traditions rather than name-only tiles. Bihar retains its original hero, chapters, detailed craft stories and district map; its crafts introduction incorporates the new editorial overview.
- `components/state/CraftBrief.tsx`: render material labels and descriptions on the existing server-rendered craft cards. No decorative icon is introduced.
- `app/state/[slug]/page.tsx`: use the enriched content and update metadata so it no longer promises district content on overview pages.
- `components/state/HighlightStrip.tsx`: label the overview count as selected traditions rather than implying an exhaustive regional total.
- `components/state/ClosingCTA.tsx`: invite continued exploration of the current state and atlas; remove the unsupported claim that makers are already being onboarded in every region.
- `app/globals.css`: themed parchment gradients, pigment outlines, readable 16px body copy, 14px material labels, and one/two/three-column responsive cards. Uses existing regional CSS variables.

No dependencies, routes, geometry, selection-store behavior, CSP or deployment configuration changed. All pages remain statically generated. Editorial data is imported by server components, not added to the map/navigation client registry.

The selected three-card introductions replace the old overview's craft-name list. This avoids repeating questionable associations in that older list, such as Nirmal under Andhra Pradesh and Kinnauri shawls under Uttarakhand. It does not assert those three selections exhaust a region's crafts. Map/search still use the original cultural registry; a separate registry review remains necessary for complete consistency.

## Source review and boundaries

Craft associations and selected process details were checked against primary government, educational and craft documentation. Copy is original, with no verbatim source passages. Further looking prompts describe visible design features rather than claim universal symbolism, antiquity, exclusive ownership or certification.

- [Ministry of MSME state-wise handicraft list, Lok Sabha 2021](https://sansad.in/getFile/loksabhaquestions/annex/177/AU2032.pdf?source=pqals): broad regional craft categories; not a current administrative directory.
- [Bihar Foundation: arts and crafts](https://biharfoundation.bihar.gov.in/know-your-bihar/art-culture/art-crafts): Mithila painting, Sikki and Sujani.
- [Lepakshi: craft heritage](https://lepakshihandicrafts.gov.in/our-heritage): Andhra Pradesh craft introduction; cross-border associations are not treated as exclusive origins.
- [Assam sericulture](https://sericulture.assam.gov.in/how-to/know-about-silk-and-its-production-in-assam): regional silk traditions.
- [Goa Tourism Development Corporation](https://goa-tourism.com/culture/handicrafts-of-goa-2/): pottery and coconut-shell work; [Goa government traditional skills](https://www.goa.gov.in/wp-content/uploads/2023/07/GOVERNOR-ANNOUNCES-SCHEMES-TO-SUPPORT.pdf): Kunbi weaving.
- [Crafts of Kutch](https://www.incredibleindia.gov.in/en/gujarat/kutch/crafts-of-kutch): printing context; [government handicraft compendium](https://www.handicrafts.nic.in/CmsUpload/12222017102212GI%20BOOK%20FINAL%202-5-17_resized.pdf): textile/craft references, not a certification of any listed product.
- [Chamba district](https://hpchamba.nic.in/one-district-one-product/): Chamba Rumal.
- [IIT Bombay IDC archive](https://dsource.in/dcontent/idc-archive/collection/collection-details4.php?id=124): Sohrai and Khovar.
- [Bidar, Ministry of Tourism](https://www.incredibleindia.gov.in/en/karnataka/bidar): Bidriware association.
- [Kerala Tourism: souvenirs](https://www.keralatourism.org/souvenirs) and [Kerala sari](https://www.keralatourism.org/faq/what-is-kerala-sari-and-mundu): Kasavu and metal-mirror context.
- [TRIFED Gond documentation](https://trifed.tribal.gov.in/sites/default/files/2020-05/Product%20cards%20on%20display.pdf): patterned line and dots; [CCRT tribal painting documentation](https://ccrtindia.gov.in/wp-content/uploads/2021/05/Living-of-Tradition-Tribal-Painting.pdf): painting techniques.
- [Ukhrul district](https://ukhrul.nic.in/tourist-place/nungbi-pottery/): Longpi pottery.
- [Meghalaya sericulture and weaving](https://www.megseriloom.gov.in/): Eri and handloom sectors.
- [Development Commissioner Handlooms: Mizoram](https://www.handlooms.gov.in/assets/img/Weavers%20Database/Mizoram637322657174401344.pdf): Puan/Puanchei textile context.
- [Nagaland government industry portal](https://eodb.nagaland.gov.in/focus-sector/textile-handicraft-handloom/): textiles; [Tuensang district](https://tuensang.nic.in/handicraft/): shawls and baskets.
- [Odisha Tourism](https://odishatourism.gov.in/en/arts-crafts-handloom): painting and textile traditions; [Odisha handicrafts](https://crafts.odisha.gov.in/?crafts=dhokra-casting): lost-wax casting process.
- [Phulkari, Ministry of Tourism](https://www.incredibleindia.gov.in/en/punjab/phulkari): shared regional embroidery context.
- [Rajasthan Tourism shopping guide](https://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/shopping-in-rajasthan.html): pottery and printed cloth.
- [Sikkim Art and Culture](https://ipr.sikkim.gov.in/Home/ArtCulture) and [Sikkim industry department](https://industries.sikkim.gov.in/visitors/psusdetails/7): thangka and weaving.
- [NID/IIT Bombay D'Source: Thanjavur](https://www.dsource.in/resource/paintings-thanjavur/making-process): painted imagery and surface ornament.
- [Telangana Tourism](https://tourism.telangana.gov.in/page/arts-crafts): regional craft associations and ikat; [government textile textbook](https://www.scert.telangana.gov.in/PDF/publication/ebooks/8_ENG.pdf): tying and dyeing before weaving.
- [West Tripura district](https://westtripura.nic.in/handicraft/): Risa, cane and bamboo.
- [Aipan, Ministry of Tourism](https://www.incredibleindia.gov.in/en/uttarakhand/aipan-the-vibrant-folk-art-of-uttarakhand): ritual drawing context.
- [NID D'Source Kantha documentation](https://www.dsource.in/sites/default/files/resource/kantha-embroidery-kolkata/downloads/file/Resource-Kantha_Embroidery-Kolkata_Final.pdf): running-stitch technique.
- [Chandigarh Tourism: Rock Garden](https://chandigarhtourism.gov.in/pages/page/rock-garden): reclaimed materials and assembled sculpture. Its three editorial cards describe one artistic site, not three separate local craft lineages.
- [Nicobari mat registration record](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/1054): regional mat association only; no product certification claim.
- [Dadra and Nagar Haveli district](https://dnh.gov.in/handicraft-2/): Warli practice near Silvassa.
- [Lakshadweep Industries](https://lakshadweep.gov.in/departments-new/department-of-industries/): coconut-based industries and coir.
- [Puducherry, Ministry of Tourism](https://www.prod.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/puducherry/arts-and-craft.html): paper and Korai mats.

Daman & Diu's general material notes retain the pre-existing directory's scope; independent local craft documentation is limited. These notes explain processes without assigning exclusive origins or invented artisan identities. Maker interviews and detailed local review are still needed before presenting any overview as a definitive cultural account.

The 36 routes follow the existing geometry registry, not a newly corrected administrative dataset: Daman & Diu and Dadra & Nagar Haveli retain separate routes; Jammu & Kashmir retains its existing extent; Ladakh is not introduced. Display-name corrections already provided by `displayName` remain intact.

No sellers, workshops, historical dates, GI badges, product authenticity promises or additional translations have been invented. Existing Bihar catalogue previews and historical text are preserved rather than re-audited in this content change.

## Validation

- `pnpm validate`: TypeScript, strict lint and production build passed; all 42 static outputs retained. State route first-load JS remains 103 kB in the production route report.
- Production HTTP checks: all 36 existing region routes returned 200; all 35 overview pages contain three described craft cards. Bihar retains the culture and map sections and includes its new craft introduction.
- Chrome production checks: 25 layout cases, covering Gujarat, Kerala, Arunachal Pradesh, Bihar and the homepage at 320, 390, 768, 1024 and 1440px. No document overflow; sampled craft body copy is at least 16px and populated.
- West Bengal content remains rendered with JavaScript disabled. No runtime exceptions recorded in the browser run.
- `git diff --check` passed on the changed tracked implementation and documentation files.
- Evidence: `/tmp/kalakriti-state-content-report.json`, `/tmp/kalakriti-state-content-desktop.png`, `/tmp/kalakriti-state-content-mobile.png`.
- Existing optional-sharp and pnpm configuration advisories remain. No dependency installation, commit, push or deployment was performed.

## Bihar Madhubani visual chapter — 2026-11-20

At the user's request, the Bihar route now has a scoped Madhubani treatment. `app/state/[slug]/page.tsx` exposes its slug as `data-state`; `app/globals.css` scopes all new decoration to `[data-state="bihar"]`. Existing red and turmeric pigment variables, double-line frames, the approved painted-paper background and parchment cards connect the hero, cultural stories, craft accordions and closing section. Mobile gets a stronger paper wash behind the artwork. New decoration is static and does not introduce a scroll loop.

`lib/states/bihar.ts` uses the previously approved Maithili brand phrase “मिथिलाक माटि” and attaches the existing 800×800 `painting-study.webp` to the Madhubani craft story. This is explicitly labelled an editorial illustration, not an original artisan's work or a product photograph. Its fish, lotus and border composition is displayed with `object-fit: contain`; the original courtyard hero is kept complete in a double-line rectangular frame. Existing craft text, district geometry, selection and native details accordions are preserved. No assets or dependencies were added.

Validation: `pnpm validate` passed TypeScript, strict lint and the 42-page static build. Production Chrome checks at 320, 390, 768, 1024 and 1440px passed: no horizontal page overflow, all nine Bihar craft stories preserved, all 37 district shapes drawn, Madhubani district selection working, the new painting uses contain fit, and the existing reduced-motion path remains functional. Gujarat's hero height and card count match the recorded before-change baseline at all five widths; the Bihar artwork does not leak into its background. No runtime exceptions were recorded. Evidence: `/tmp/kalakriti-bihar-theme-baseline.json`, `/tmp/kalakriti-bihar-theme-report.json`, `/tmp/kalakriti-bihar-madhubani-desktop.png`, `/tmp/kalakriti-bihar-madhubani-mobile.png`. No commit, push or deployment.

### Full-page Bihar treatment and image cards — 2026-11-20

The user requested the same theme throughout Bihar, plus imagery in tiles/cards. Every section of `[data-state="bihar"]` now receives painted paper, including the hero, district map section, experiences, visit grid and closing section. The statistics and sticky section navigation use coordinated paper and pigment borders. Product previews, experience cards, place tiles and the map canvas use matching parchment surfaces. Bihar-only mobile grids use one column for longer descriptions, and its sticky section bar clears the existing 124px mobile / 94px wider header. All other state pages retain their prior styling.

`lib/states/bihar.ts` reuses the approved `basket-study.webp` (800×800) in the Sikki craft tile and its Pauti preview card, and `painting-study.webp` in the Kohbar preview card. The images are expressly labelled illustrative previews; alt text states they are not photographs of the listed items. Existing preview prices and disabled shopping controls remain. These images use contain fit and readable caption backgrounds; hover scaling is disabled for the newly illustrated tiles/cards. No new assets or packages were added.

Full-page follow-up validation: `pnpm validate` and `git diff --check` passed. Production browser checks confirmed painted artwork on every Bihar section, the new Sikki tile and both product-preview images, working native Sikki expansion, and disabled preview shopping controls. Bihar and Gujarat were checked at 320, 390, 768, 1024 and 1440px: no page overflow, unchanged Gujarat hero dimensions/card counts, and no Bihar background leakage. A tablet statistics overflow discovered during QA was corrected with a Bihar-only three-column statistics grid at 641–900px. The district map still draws all 37 shapes and supports Madhubani selection. No runtime exceptions on the completed run. Image evidence: `/tmp/kalakriti-bihar-sikki-card.png`; structured evidence remains `/tmp/kalakriti-bihar-theme-report.json`.


### Superseded by Bihar journal redesign — 2026-11-20

The user subsequently requested a complete Mithila painting redesign and removal of the map. Bihar now renders the dedicated `BiharJournal` server component rather than the generic state template. See [the current design, map removal, imagery and validation](BIHAR_MITHILA_JOURNAL.md). Earlier map-preservation checks above describe the prior iteration, not the current Bihar page. Other region pages retain the original regional-content implementation.
