/**
 * Registry of states that have a dedicated page.
 *
 * Adding a state is two lines: a data file and an entry here. Everything else
 * — the route, the metadata, the map, the sections — is already generic.
 *
 * The landing map reads `hasStatePage()` to decide whether to offer the
 * "Explore" call to action, so a state without a data file simply keeps the
 * panel it has today.
 */

import type { StatePage } from './types';
import { bihar } from './bihar';

export { slugForState, STATE_PAGE_SLUGS } from './slugs';

/** Slug → page data. Keyed by URL segment. */
export const STATE_PAGES: Record<string, StatePage> = {
  bihar,
};

export function statePage(slug: string): StatePage | undefined {
  return STATE_PAGES[slug];
}

/** Every slug, for generateStaticParams. */
export function stateSlugs(): string[] {
  return Object.keys(STATE_PAGES);
}

export type { StatePage } from './types';
