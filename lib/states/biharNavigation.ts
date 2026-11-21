import { bihar } from '@/lib/states/bihar';

/** Stable journal destinations keep longer reading separate from discovery. */
const articleSlugs = ['the-wall-came-first', 'a-drought-that-travelled', 'four-hands-four-styles', 'what-the-pigments-were'];
const articleImages = [
  { src: '/images/mithila-courtyard.webp', width: 1536, height: 1024 },
  { src: '/images/painting-study.webp', width: 800, height: 800 },
  { src: '/images/bihar-kachni-study.webp', width: 1024, height: 1024 },
  { src: '/images/bihar-mithila-mural.webp', width: 1536, height: 1024 },
];

export const biharArticles = (bihar.chapters ?? []).map((chapter, index) => ({
  slug: articleSlugs[index],
  title: chapter.title,
  body: chapter.body,
  image: articleImages[index],
  excerpt: chapter.body.split(/(?<=\.)\s/)[0],
}));

export function biharCraftHref(id: string): string {
  return `/state/bihar/crafts/${encodeURIComponent(id)}`;
}
