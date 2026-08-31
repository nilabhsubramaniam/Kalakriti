/**
 * An overview page built from the cultural registry.
 *
 * Every state already carries a signature art form, four named crafts, a
 * description, a script line and a shloka in `lib/stateThemes.ts`. That is
 * real, checked data, and it is enough for an honest page.
 *
 * What it is deliberately *not*: a scaffold. No invented districts, no
 * placeholder products, no fabricated GI registrations. A state gains the
 * shop, experiences, tourism and district-map sections when someone writes
 * that content into a data file — until then the page simply does not claim
 * to have them.
 */

import { STATE_THEMES, displayName, themeFor } from '@/lib/stateThemes';
import { slugify } from './slugs';
import type { StatePage } from './types';

/** Sentence-cases the registry's short script gloss for use as a tagline. */
function asTagline(meaning: string): string {
  return meaning.charAt(0).toUpperCase() + meaning.slice(1);
}

/** Builds the overview page for any state in the registry. */
export function derivePage(state: string): StatePage | undefined {
  if (!STATE_THEMES[state]) return undefined;
  const theme = themeFor(state);

  return {
    slug: slugify(state),
    state,
    title: displayName(state),
    native: theme.script.native,
    tagline: asTagline(theme.script.meaning),
    intro: theme.description,
    craftNames: theme.crafts,
  };
}
