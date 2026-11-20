/** Static regional overviews combine the visual registry with editorial notes.
 * Product, district-map and experience sections require separate catalogue data.
 */

import { STATE_THEMES, displayName, themeFor } from '@/lib/stateThemes';
import { REGIONAL_EDITORIAL } from './editorial';
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

  const editorial = REGIONAL_EDITORIAL[state];

  return {
    slug: slugify(state),
    state,
    title: displayName(state),
    native: theme.script.native,
    tagline: asTagline(theme.script.meaning),
    intro: editorial?.intro ?? theme.description,
    craftIntro: editorial?.intro,
    craftGuides: editorial?.crafts,
    craftNames: editorial?.crafts.map(craft => craft.name) ?? theme.crafts,
  };
}
