import { create } from 'zustand';
import { STATE_THEMES, TOUR_ORDER } from '@/lib/stateThemes';

/**
 * The selected region, shared between the navbar and the map.
 *
 * The store is the single source of truth for *which* state is open; the map
 * owns the camera and simply follows this value. That keeps nav selection,
 * map clicks, deep links, and the opening showcase on one path.
 */
export type TourPhase =
  /** Nothing running — the user is in control. */
  | 'idle'
  /** Waiting out the opening pause on the full map. */
  | 'pending'
  /** Walking through the states. */
  | 'running';

interface RegionState {
  selected: string | null;
  tour: TourPhase;
  /** Index into TOUR_ORDER, for the showcase progress readout. */
  tourIndex: number;

  /** Open a state (or the full map, with null). Always stops the showcase. */
  select: (state: string | null) => void;
  /** Used by the showcase itself, which must not stop what it is driving. */
  selectFromTour: (state: string, index: number) => void;
  setTour: (phase: TourPhase) => void;
  /** Any deliberate user action — click, key, wheel, nav — ends the showcase. */
  stopTour: () => void;
}

export const useRegionStore = create<RegionState>((set, get) => ({
  selected: null,
  tour: 'idle',
  tourIndex: -1,

  select: state => {
    if (state !== null && !STATE_THEMES[state]) return;
    set({ selected: state, tour: 'idle' });
  },

  selectFromTour: (state, index) => {
    if (!Number.isInteger(index) || TOUR_ORDER[index] !== state || !STATE_THEMES[state]) return;
    set({ selected: state, tourIndex: index });
  },

  setTour: phase => set({ tour: phase }),

  stopTour: () => {
    if (get().tour !== 'idle') set({ tour: 'idle' });
  },
}));

export const tourLength = TOUR_ORDER.length;
