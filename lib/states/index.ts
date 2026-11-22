/**
 * Registry of state pages.
 *
 * Every state in the cultural registry has a page. Those with a researched
 * data file get the full treatment — district map, craft stories, shop,
 * experiences, tourism. Every other state falls back to an overview derived
 * from `lib/stateThemes.ts` and `lib/states/editorial.ts`.
 *
 * Adding depth to a state is therefore one file plus one line here; nothing
 * about the route, the metadata or the components has to change.
 */

import type { StatePage } from './types';
import { REGIONAL_EDITORIAL } from './editorial';
import { bihar } from './bihar';
import { jammuKashmir } from './jammuKashmir';
import { chhattisgarh } from './chhattisgarh';
import { punjab } from './punjab';
import { haryana } from './haryana';
import { delhi } from './delhi';
import { chandigarh } from './chandigarh';
import { kerala } from './kerala';
import { karnataka } from './karnataka';
import { tamilNadu } from './tamilNadu';
import { andhraPradesh } from './andhraPradesh';
import { telangana } from './telangana';
import { puducherry } from './puducherry';
import { lakshadweep } from './lakshadweep';
import { rajasthan } from './rajasthan';
import { gujarat } from './gujarat';
import { maharashtra } from './maharashtra';
import { damanDiu } from './damanDiu';
import { dadraNagarHaveli } from './dadraNagarHaveli';
import { goa } from './goa';
import { andamanNicobar } from './andamanNicobar';
import { madhyaPradesh } from './madhyaPradesh';
import { himachalPradesh } from './himachalPradesh';
import { uttarakhand } from './uttarakhand';
import { uttarPradesh } from './uttarPradesh';
import { jharkhand } from './jharkhand';
import { odisha } from './odisha';
import { westBengal } from './westBengal';
import { derivePage } from './derive';
import { SLUG_TO_STATE, STATE_PAGE_SLUGS } from './slugs';

export { slugForState, STATE_PAGE_SLUGS, slugify } from './slugs';

/** Slug → the hand-written pages. Keyed by URL segment. */
export const STATE_PAGES: Record<string, StatePage> = {
  bihar,
  [jammuKashmir.slug]: jammuKashmir,
  [westBengal.slug]: westBengal,
  [odisha.slug]: odisha,
  [jharkhand.slug]: jharkhand,
  [uttarPradesh.slug]: uttarPradesh,
  [uttarakhand.slug]: uttarakhand,
  [himachalPradesh.slug]: himachalPradesh,
  [madhyaPradesh.slug]: madhyaPradesh,
  [chhattisgarh.slug]: chhattisgarh,
  [punjab.slug]: punjab,
  [haryana.slug]: haryana,
  [delhi.slug]: delhi,
  [chandigarh.slug]: chandigarh,
  [kerala.slug]: kerala,
  [karnataka.slug]: karnataka,
  [tamilNadu.slug]: tamilNadu,
  [andhraPradesh.slug]: andhraPradesh,
  [telangana.slug]: telangana,
  [puducherry.slug]: puducherry,
  [lakshadweep.slug]: lakshadweep,
  [rajasthan.slug]: rajasthan,
  [gujarat.slug]: gujarat,
  [maharashtra.slug]: maharashtra,
  [damanDiu.slug]: damanDiu,
  [dadraNagarHaveli.slug]: dadraNagarHaveli,
  [goa.slug]: goa,
  [andamanNicobar.slug]: andamanNicobar,
};

/** True when the state has a researched catalogue rather than an overview. */
export function isDetailed(slug: string): boolean {
  return slug in STATE_PAGES;
}

export function statePage(slug: string): StatePage | undefined {
  const written = STATE_PAGES[slug];
  if (written) return { ...written, craftIntro: REGIONAL_EDITORIAL[written.state]?.intro, craftGuides: REGIONAL_EDITORIAL[written.state]?.crafts };
  const state = SLUG_TO_STATE[slug];
  return state ? derivePage(state) : undefined;
}

/** Every slug, for generateStaticParams — all 36, not just the written ones. */
export function stateSlugs(): string[] {
  return Object.values(STATE_PAGE_SLUGS);
}

export type { StatePage } from './types';
