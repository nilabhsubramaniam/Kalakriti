import type { ImageAsset, StatePage } from './types';

const study = (name: string, alt: string, width = 1024, height = 1024): ImageAsset => ({ src: `/images/dd-${name}.webp`, alt, width, height, credit: 'Kalakriti regional craft illustration' });
export const ddBase = '/state/daman-and-diu';

export const damanDiu: StatePage = {
  slug: "daman-and-diu",
  state: "Daman & Diu",
  title: "Daman & Diu",
  native: "દરિયાઈ કલા",
  tagline: "Discover woven surfaces and the coastal places around them.",
  intro: "Explore mat weaving through a focused collection of floor and table pieces. Daman and Diu are coastal districts within the union territory of Dadra and Nagar Haveli and Daman and Diu.",
  hero: study('hero', "Daman & Diu craft arrangement with the collection’s painted, woven or shaped objects in an unnamed courtyard", 1536, 1024),
  districts: [
    {"id": "Daman", "name": "Daman", "note": "Explore Mat weaving.", "crafts": ["mat-weaving"]},
  ],
  crafts: [
    { id: "mat-weaving", name: "Mat weaving", district: "Daman", motif: "diamond", hook: "A repeated crossing of strips makes an everyday surface.", story: "Mat weaving is part of Daman’s documented craft landscape. Interlaced material, patterned areas and finished edges bring practical surfaces into use. This collection explores contemporary floor and table pieces at different scales.", technique: "Prepared material is interlaced into the intended surface and its edges are finished. Compare a narrow strip with the broader pattern and bound end. Material and construction vary by piece.", makers: "Mat weavers contribute preparation, pattern planning and finishing skills. The relationship between weave, size and edge helps determine how the piece is used.", image: study("mat", "Natural rectangular woven floor mat with a narrow deep-teal edge and bound ends") },
  ],
  products: [
    { id: "dd-mat", name: "Teal Edge Woven Floor Mat", craft: "mat-weaving", price: 2200, spec: "60 × 90 cm · woven mat", blurb: "A natural woven surface framed by a narrow teal edge.", image: study("mat", "Natural rectangular woven floor mat with a narrow deep-teal edge and bound ends") },
    { id: "dd-runner", name: "Ochre Stripe Woven Runner", craft: "mat-weaving", price: 1600, spec: "30 × 120 cm · table runner", blurb: "Fine ochre stripes and neatly bound edges.", image: study("runner", "Ochre Stripe Woven Runner with a fine interlaced surface and neatly finished edges") },
    { id: "dd-placemats", name: "Teal Band Woven Placemats", craft: "mat-weaving", price: 1200, spec: "30 × 45 cm each · pair", blurb: "Two woven placemats with simple teal bands.", image: study("placemats", "Teal Band Woven Placemats with a fine interlaced surface and neatly finished edges") },
  ],
};

export const ddArticles = [{"slug": "the-rhythm-of-a-woven-surface", "title": "The rhythm of a woven surface.", "excerpt": "Follow a small crossing of strips across a larger mat.", "craft": "mat-weaving", "paragraphs": ["A woven surface grows from repeated crossings. Small changes in spacing influence how the whole pattern is read.", "Daman’s mat-weaving tradition offers a way to look closely at structure as well as decoration. The edge connects the surface with its finished shape.", "Compare the centre of the mat with its bound ends. Follow one strip before stepping back to see the complete piece."]}, {"slug": "one-weave-different-scales", "title": "One weave, different scales.", "excerpt": "Compare floor and table pieces through size and finishing.", "craft": "mat-weaving", "paragraphs": ["A floor mat and a table piece ask for different proportions. Scale changes the way a woven surface sits within a space.", "The collection brings those proportions together through a mat, runner and pair of placemats. Their restrained bands keep attention on the weave.", "Compare the narrow runner with the broader floor mat. Look at how each edge finishes the surface."]}];

export const ddTourism = [{"name": "Daman’s heritage places", "district": "Daman", "kind": "Architecture & coastal history", "description": "Explore the district’s built heritage and coastal setting.", "href": "https://www.incredibleindia.gov.in/en/dadra-and-nagar-haveli-and-daman-and-diu/daman"}, {"name": "Diu’s heritage places", "district": "Diu", "kind": "Fort, town & coast", "description": "Discover official visitor information for Diu’s cultural places.", "href": "https://diu.gov.in/tourist-places/"}, {"name": "Daman’s coastal landscape", "district": "Daman", "kind": "Coast & regional places", "description": "Discover places around Daman through official visitor information.", "href": "https://www.incredibleindia.gov.in/en/dadra-and-nagar-haveli-and-daman-and-diu/daman/a-guide-to-daman-s-must-visit-attractions"}, {"name": "Dadra & Nagar Haveli", "district": "Dadra & Nagar Haveli", "kind": "Continue across the union territory", "description": "Discover Warli painting and bamboo work in the companion chapter.", "href": "/state/dadra-and-nagar-haveli"}];
