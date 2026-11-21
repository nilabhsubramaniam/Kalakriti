'use client';
import { create } from 'zustand';
import { catalog, markets, type Market } from '@/lib/commerce/catalog';

type Line = { productId: string; quantity: number };
type Shop = { market: Market; lines: Line[]; hydrated: boolean; hydrate: () => void; setMarket: (market: Market) => void; add: (id: string) => void; quantity: (id: string, quantity: number) => void };
const storageKey = 'kalakriti-basket-v1';
const known = (id: string) => catalog.some(product => product.id === id);
function save(market: Market, lines: Line[]) {
  try { localStorage.setItem(storageKey, JSON.stringify({ market, lines })); } catch { /* The basket remains usable when storage is blocked. */ }
}
export const useShopStore = create<Shop>((set, get) => ({
  market: 'IN', lines: [], hydrated: false,
  hydrate: () => {
    if (get().hydrated) return;
    let market: Market = 'IN';
    const lines: Line[] = [];
    try {
      const value: unknown = JSON.parse(localStorage.getItem(storageKey) ?? '{}');
      if (value && typeof value === 'object') {
        const data = value as { market?: unknown; lines?: unknown };
        if (typeof data.market === 'string' && Object.hasOwn(markets, data.market)) market = data.market as Market;
        if (Array.isArray(data.lines)) for (const entry of data.lines.slice(0, catalog.length)) {
          if (!entry || typeof entry !== 'object') continue;
          const line = entry as Partial<Line>;
          if (typeof line.productId === 'string' && known(line.productId) && typeof line.quantity === 'number' && Number.isInteger(line.quantity) && line.quantity > 0 && !lines.some(item => item.productId === line.productId)) lines.push({ productId: line.productId, quantity: Math.min(20, line.quantity) });
        }
      }
    } catch { /* Invalid storage falls back to an empty basket. */ }
    set({ market, lines, hydrated: true });
  },
  setMarket: market => { get().hydrate(); if (!Object.hasOwn(markets, market)) return; set({ market }); save(market, get().lines); },
  add: id => {
    get().hydrate();
    if (!known(id)) return;
    const existing = get().lines.find(line => line.productId === id);
    const lines = existing ? get().lines.map(line => line.productId === id ? { ...line, quantity: Math.min(20, line.quantity + 1) } : line) : [...get().lines, { productId: id, quantity: 1 }];
    set({ lines }); save(get().market, lines);
  },
  quantity: (id, quantity) => {
    get().hydrate();
    if (!Number.isInteger(quantity)) return;
    const lines = quantity <= 0 ? get().lines.filter(line => line.productId !== id) : get().lines.map(line => line.productId === id ? { ...line, quantity: Math.min(20, quantity) } : line);
    set({ lines }); save(get().market, lines);
  },
}));
