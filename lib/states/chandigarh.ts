import type { ImageAsset, StatePage } from './types';

const study = (name: string, alt: string, width = 1024, height = 1024): ImageAsset => ({ src: `/images/ch-${name}.webp`, alt, width, height, credit: 'Kalakriti regional craft illustration' });
export const chBase = '/state/chandigarh';

export const chandigarh: StatePage = {
  slug: 'chandigarh', state: 'Chandigarh', title: 'Chandigarh', native: 'ਕਲਾ ਦਾ ਸ਼ਹਿਰ',
  tagline: 'Discover Chandigarh through embroidery, clay, woven cane and assembled surfaces.',
  intro: 'Begin with Phulkari and Kishangarh pottery, then explore cane weaving and contemporary mosaic compositions. Four collections connect regional skills with the material details of a city shaped by art and design.',
  hero: study('hero', 'Chandigarh craft arrangement with embroidered cloth, a terracotta vessel, a cane-seat wooden footstool and an original abstract mosaic panel', 1536, 1024),
  districts: [
    {"id": "City workshops", "name": "City workshops", "note": "Explore Phulkari embroidery.", "crafts": ["phulkari"]},
    {"id": "Kishangarh", "name": "Kishangarh", "note": "Explore Kishangarh pottery.", "crafts": ["pottery"]},
    {"id": "City design studios", "name": "City design studios", "note": "Explore Cane weaving & furniture, Mosaic compositions.", "crafts": ["cane", "mosaic"]},
  ],
  crafts: [
    { id: "phulkari", name: "Phulkari embroidery", district: "City workshops", motif: "diamond", hook: "Counted stitches turn a quiet cloth ground into geometric colour.", story: "Phulkari belongs to the wider Punjab region, with embroidery practice also documented in Chandigarh. Spaced flowers and geometric forms leave room to notice both the threadwork and the ground beneath it.", technique: "Darning stitches follow the threads of the cloth. Changes in stitch length and direction create shapes and alter the way light falls across a motif.", makers: "Embroiderers and textile finishers contribute pattern planning, needlework and edge finishing. Methods and materials vary across designs.", image: study("phulkari", "Warm ivory embroidered stole with spaced crimson and ochre geometric flowers") },
    { id: "pottery", name: "Kishangarh pottery", district: "Kishangarh", motif: "kalash", hook: "A rounded body and a slender neck bring clay’s proportions into focus.", story: "Mitti da kaam, or clay work, is documented in Chandigarh and Kishangarh. A shaped vessel offers a way to look at the curve of the body, the treatment of the neck and the marks left on its surface.", technique: "Clay is prepared, formed, dried and fired. Look at the transition from the broad body to the mouth, then follow any incised decoration around the form.", makers: "Potters bring knowledge of clay, forming, decoration and firing to the work. Processes vary with the object and workshop.", image: study("pottery", "Red-brown decorative terracotta vessel with a slender neck and restrained incised bands") },
    { id: "cane", name: "Cane weaving & furniture", district: "City design studios", motif: "bamboo", hook: "An open woven seat brings a different texture to a solid wooden frame.", story: "Woven cane and timber are part of Chandigarh’s furniture and design history. This collection looks at the material relationship itself through a simple contemporary footstool, rather than treating every cane object as a historic designer piece.", technique: "Cane strands are worked across a supporting frame and secured at the edges. Follow the openings in the weave and the way the seat meets the timber.", makers: "Woodworkers, cane weavers and finishers contribute joinery, tension and surface treatment. The construction and finish depend on the design.", image: study("cane", "Small square wooden footstool with four straight legs and an open natural-cane woven seat") },
    { id: "mosaic", name: "Mosaic compositions", district: "City design studios", motif: "diamond", hook: "Small pieces and the spaces between them build a larger composition.", story: "The Rock Garden is an important part of Chandigarh’s public-art landscape. It provides a starting point for noticing assembled surfaces. Here, an original contemporary geometric panel explores colour, spacing and texture in a separate composition.", technique: "Pieces are arranged into a planned surface, fixed to a support and finished around their joins. Look at changes of scale, the direction of a line and the spaces between individual pieces.", makers: "Designers and mosaic workers plan, arrange and finish the surface. Materials and methods vary by panel.", image: study("mosaic", "Original square abstract mosaic panel with muted blue, cream, terracotta and ochre pieces") },
  ],
  products: [
    { id: "ch-phulkari", name: "Ivory Geometric Embroidered Stole", craft: "phulkari", price: 3400, spec: "70 × 200 cm · embroidered textile", blurb: "An ivory ground with spaced crimson and ochre geometric flowers and a narrow border.", image: study("phulkari", "Warm ivory embroidered stole with spaced crimson and ochre geometric flowers") },
    { id: "ch-pottery", name: "Kishangarh Terracotta Vessel", craft: "pottery", price: 1200, spec: "26 cm · decorative fired clay", blurb: "A rounded red-brown body with a slender neck and restrained incised bands.", image: study("pottery", "Red-brown decorative terracotta vessel with a slender neck and restrained incised bands") },
    { id: "ch-cane", name: "Cane-Seat Wooden Footstool", craft: "cane", price: 3800, spec: "38 × 38 × 26 cm · woven cane and wooden frame", blurb: "A compact original design with an open woven seat and four straight wooden legs.", image: study("cane", "Small square wooden footstool with four straight legs and an open natural-cane woven seat") },
    { id: "ch-mosaic", name: "Lake-Blue Mosaic Panel", craft: "mosaic", price: 2600, spec: "30 × 30 cm · decorative mosaic", blurb: "An original geometric arrangement of muted blue, cream, terracotta and ochre pieces.", image: study("mosaic", "Original square abstract mosaic panel with muted blue, cream, terracotta and ochre pieces") },
  ],
};

export const chArticles = [
  {
    "slug": "the-space-between-stitches",
    "title": "The space between stitches.",
    "excerpt": "See how open cloth changes the rhythm of embroidered motifs.",
    "craft": "phulkari",
    "paragraphs": [
      "An embroidered motif is seen alongside the cloth left around it. Generous spacing gives each geometric flower a distinct place in the composition.",
      "Phulkari is shared across a wider regional landscape, with practice documented in Chandigarh too. Counted stitches build shapes whose direction changes how they catch the light.",
      "Look closely at one stitched area, then step back to the whole cloth. Both views help connect the smallest decisions to the balance of the design."
    ]
  },
  {
    "slug": "where-cane-meets-timber",
    "title": "Where cane meets timber.",
    "excerpt": "Follow a woven seat to the edge of its wooden frame.",
    "craft": "cane",
    "paragraphs": [
      "A cane seat combines repeated openings with the firmness of a frame. Its surface feels ordered because each strand works in relation to the next.",
      "Cane and wood have a place in Chandigarh’s furniture history. Looking at the construction is useful even when the object is a contemporary design rather than a historic piece.",
      "Start at the centre of the weave and follow a strand towards the frame. The edge reveals how an open surface is secured to a supporting structure."
    ]
  },
  {
    "slug": "a-surface-made-from-pieces",
    "title": "A surface made from pieces.",
    "excerpt": "Explore the joins that give a mosaic its visual rhythm.",
    "craft": "mosaic",
    "paragraphs": [
      "A mosaic is made from pieces and from the gaps between them. Changing the size or direction of those pieces can make a line feel calm, broken or continuous.",
      "Chandigarh’s Rock Garden offers a memorable setting for looking at assembled surfaces. A small contemporary panel can invite the same kind of close attention without copying the garden’s artworks.",
      "Follow one colour through a composition, then look at its edges. The meeting of materials often reveals as much as the broad pattern."
    ]
  }
];

export const chTourism = [
  {
    "name": "Rock Garden",
    "district": "Sector 1",
    "kind": "Public art & assembled surfaces",
    "description": "Discover Nek Chand’s garden and its inventive use of assembled materials.",
    "href": "https://chandigarhtourism.gov.in/pages/page/rock-garden"
  },
  {
    "name": "Capitol Complex",
    "district": "Sector 1",
    "kind": "Modernist architecture & public space",
    "description": "Explore the complex’s buildings, monuments and place in the planned city.",
    "href": "https://chandigarhtourism.gov.in/capitol-complex"
  },
  {
    "name": "Sukhna Lake",
    "district": "Lakeside",
    "kind": "Waterfront & city landscape",
    "description": "Discover the lake’s setting at the edge of the Shivalik foothills.",
    "href": "https://www.incredibleindia.gov.in/en/chandigarh/chandigarh/sukhna-lake"
  },
  {
    "name": "Government Museum & Art Gallery",
    "district": "Sector 10",
    "kind": "Art collections & museum architecture",
    "description": "Explore collections that introduce painting, sculpture and the wider material arts.",
    "href": "https://chandigarhtourism.gov.in/museums/government_museum_art_gallery"
  },
  {
    "name": "Pierre Jeanneret Museum",
    "district": "Sector 5",
    "kind": "Furniture & design heritage",
    "description": "Learn about the city’s design history through official visitor information.",
    "href": "https://chandigarhtourism.gov.in/itineraries"
  },
  {
    "name": "Rose Garden",
    "district": "Sector 16",
    "kind": "Gardens & planted landscapes",
    "description": "Discover the garden as part of Chandigarh’s connected green spaces.",
    "href": "https://chandigarhdistrict.nic.in/tourist-place/rose-garden/"
  }
];
