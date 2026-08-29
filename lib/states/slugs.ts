/**
 * State → page slug, and nothing else.
 *
 * Deliberately separate from `lib/states/index.ts`: the landing map only needs
 * to know *whether* a state has a page, and importing the registry would pull
 * every state's full catalogue into the landing bundle. Keep this file free of
 * imports from the data files.
 *
 * Add a state here at the same time as adding it to STATE_PAGES.
 */
export const STATE_PAGE_SLUGS: Record<string, string> = {
  Bihar: 'bihar',
};

/** The page slug for a STATE_THEMES key, or null when it has no page yet. */
export function slugForState(state: string | null | undefined): string | null {
  return (state && STATE_PAGE_SLUGS[state]) || null;
}
