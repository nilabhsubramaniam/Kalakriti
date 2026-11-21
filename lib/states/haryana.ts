import type { ImageAsset, StatePage } from './types';

const study = (name: string, alt: string, width = 1024, height = 1024): ImageAsset => ({ src: `/images/hr-${name}.webp`, alt, width, height, credit: 'Kalakriti regional craft illustration' });
export const hrBase = '/state/haryana';

export const haryana: StatePage = {
  slug: 'haryana', state: 'Haryana', title: 'Haryana', native: 'हरियाणा की कारीगरी',
  tagline: 'Discover Haryana through woven surfaces, shaped clay and everyday craft.',
  intro: 'Explore Panipat durries, Jhajjar pottery, reed mudhas, woven peedhas, Rewari brasswork and hand embroidery. Follow six collections through the places and materials that give Haryana’s crafts their character.',
  hero: study('hero', 'Haryana craft arrangement with a geometric durrie, terracotta surahi, reed mudha, wooden peedha, brass bowl and embroidered cloth', 1536, 1024),
  districts: [
    {"id": "Panipat", "name": "Panipat", "note": "Explore Panipat durrie weaving.", "crafts": ["durrie"]},
    {"id": "Jhajjar", "name": "Jhajjar", "note": "Explore Jhajjar pottery.", "crafts": ["pottery"]},
    {"id": "Gurugram", "name": "Gurugram", "note": "Explore Sarkanda mudha making.", "crafts": ["mudha"]},
    {"id": "Sonipat", "name": "Sonipat", "note": "Explore Sonipat peedha weaving.", "crafts": ["peedha"]},
    {"id": "Rewari", "name": "Rewari", "note": "Explore Rewari brasswork.", "crafts": ["brass"]},
    {"id": "Ambala", "name": "Ambala", "note": "Explore Ambala hand embroidery.", "crafts": ["embroidery"]},
  ],
  crafts: [
    { id: "durrie", name: "Panipat durrie weaving", district: "Panipat", motif: "diamond", hook: "Colour bands and stepped shapes emerge from a tightly worked flat weave.", story: "Panipat is a major weaving centre, with durries forming part of its textile landscape. A flatwoven surface makes the crossings of yarn easy to see. Borders, stripes and geometric forms give each composition its balance.", technique: "Weft threads are worked across a tensioned warp and packed together. Follow a change of colour, then look at how the edge is finished and how the fringe continues from the body.", makers: "Yarn preparers, weavers and finishers contribute successive skills. Loom setup and the handling of the yarn shape the finished surface.", image: study("durrie", "Brick-red and cream flatwoven durrie with narrow indigo lines and geometric diamonds") },
    { id: "pottery", name: "Jhajjar pottery", district: "Jhajjar", motif: "kalash", hook: "A slender neck and a rounded body give clay a distinctive outline.", story: "Jhajjar has a documented pottery tradition, including the surahi form. Its long neck, curved body and decorated surface invite a closer look at shaping and proportion. Incised lines and rosettes bring another scale of detail to the clay.", technique: "Clay is prepared, shaped, dried and fired. Different objects may combine turning and moulding. Compare the curve of the body with the narrow neck and the finish around the mouth.", makers: "Potters contribute knowledge of clay preparation, forming, decoration and firing. Practices vary with the form and workshop.", image: study("pottery", "Red-brown decorative terracotta surahi with a slender neck and incised rosettes") },
    { id: "mudha", name: "Sarkanda mudha making", district: "Gurugram", motif: "bamboo", hook: "Reed bundles and close bindings build a lightweight, rounded form.", story: "Farrukhnagar in Gurugram district is associated with sarkanda mudha making. Reed bundles, cord and a woven top come together in a compact stool. Its circular shape differs from the framed wooden peedha.", technique: "Reeds are arranged into a supporting form and held with bindings. The seat and edges are worked to complete it. Follow one bundle from the lower binding to the top to understand the structure.", makers: "Reed workers prepare, arrange, bind and finish the material. Even spacing and secure joins are part of the making.", image: study("mudha", "Low cylindrical sarkanda reed mudha stool with burgundy bindings and a round woven seat") },
    { id: "peedha", name: "Sonipat peedha weaving", district: "Sonipat", motif: "diamond", hook: "A woven seat stretches colour and pattern across a wooden frame.", story: "The peedha, also written pidhi, is a low stool associated with Sonipat’s craft landscape. A wooden frame supports a closely woven seat. The visible join between cord and timber shows how two materials work together.", technique: "Cord is passed around and across the frame to form a seat. Look at the direction of the weave, the turns around the edges and the connection of the frame to its legs.", makers: "Woodworkers and seat weavers bring complementary skills in joinery, tension and finishing. Designs and materials vary across makers.", image: study("peedha", "Low square wooden peedha stool with a burgundy and natural-coloured woven cord seat") },
    { id: "brass", name: "Rewari brasswork", district: "Rewari", motif: "kalash", hook: "A worked metal surface holds small changes of light and texture.", story: "Brassware forms part of Rewari’s craft history and material landscape. Rounded vessels and decorative objects bring attention to curves, rims and surface finishing. A simple bowl offers an approachable way to notice those details.", technique: "Metal is formed and finished using tools suited to the object. On a hammered surface, small facets break up reflections. Follow the change from the broad body to the edge of the rim.", makers: "Metalworkers contribute shaping, joining and finishing skills. The composition and intended use of an individual object depend on its specification.", image: study("brass", "Shallow golden brass-coloured decorative bowl with subtle hammer facets and a smooth rim") },
    { id: "embroidery", name: "Ambala hand embroidery", district: "Ambala", motif: "lotus", hook: "Small stitched motifs bring colour and texture to an open cloth ground.", story: "Embroidery is part of Haryana’s textile landscape, including craft activity around Ambala. Phulkari also belongs to the wider regional embroidery tradition. This collection looks at stitch, spacing and finish without treating every embroidered cloth as the same technique.", technique: "A pattern is planned on the ground cloth, then worked in thread. Look closely at stitch direction, the spaces between motifs and the way a border turns a corner.", makers: "Embroiderers and textile finishers contribute pattern planning, needlework and edge finishing, with methods varying by design.", image: study("embroidery", "Ochre embroidered stole with scattered crimson geometric flowers and a narrow stitched border") },
  ],
  products: [
    { id: "hr-durrie", name: "Panipat Geometric Durrie", craft: "durrie", price: 2800, spec: "90 × 150 cm · flatwoven textile", blurb: "Brick-red and cream bands with narrow indigo lines and a short fringe.", image: study("durrie", "Brick-red and cream flatwoven durrie with narrow indigo lines and geometric diamonds") },
    { id: "hr-pottery", name: "Jhajjar Rosette Surahi", craft: "pottery", price: 1400, spec: "30 cm · decorative fired clay", blurb: "A rounded earthen form with a long neck and modest incised rosettes.", image: study("pottery", "Red-brown decorative terracotta surahi with a slender neck and incised rosettes") },
    { id: "hr-mudha", name: "Sarkanda Reed Mudha", craft: "mudha", price: 1800, spec: "35 × 38 cm · woven reed stool", blurb: "Straw-golden reed bundles held by burgundy bindings beneath a woven seat.", image: study("mudha", "Low cylindrical sarkanda reed mudha stool with burgundy bindings and a round woven seat") },
    { id: "hr-peedha", name: "Sonipat Diamond Peedha", craft: "peedha", price: 2400, spec: "38 × 38 × 24 cm · woven seat and wooden frame", blurb: "A low wooden stool with a tightly worked burgundy and natural-coloured seat.", image: study("peedha", "Low square wooden peedha stool with a burgundy and natural-coloured woven cord seat") },
    { id: "hr-brass", name: "Rewari Hammered Bowl", craft: "brass", price: 2200, spec: "18 cm diameter · decorative metalwork", blurb: "A shallow brass-coloured bowl with a quiet faceted surface and smooth rim.", image: study("brass", "Shallow golden brass-coloured decorative bowl with subtle hammer facets and a smooth rim") },
    { id: "hr-embroidery", name: "Ochre Embroidered Stole", craft: "embroidery", price: 2600, spec: "70 × 200 cm · embroidered textile", blurb: "A warm ochre ground with small crimson motifs and a restrained border.", image: study("embroidery", "Ochre embroidered stole with scattered crimson geometric flowers and a narrow stitched border") },
  ],
};

export const hrArticles = [
  {
    "slug": "follow-the-flat-weave",
    "title": "Follow the flat weave.",
    "excerpt": "See how yarn direction gives a durrie its structure and pattern.",
    "craft": "durrie",
    "paragraphs": [
      "A flatwoven rug lets the crossing of its threads remain visible. A stripe is both a band of colour and a sequence of yarn worked across the width.",
      "Panipat’s weaving landscape provides a starting point for looking at these surfaces. Begin at one colour change and follow how the pattern repeats.",
      "Then look at the edge and fringe. Their different finishes help reveal how the woven body is brought to a close."
    ]
  },
  {
    "slug": "two-ways-to-make-a-seat",
    "title": "Two ways to make a seat.",
    "excerpt": "Compare the reed structure of a mudha with the woven seat of a peedha.",
    "craft": "mudha",
    "paragraphs": [
      "A mudha and a peedha are both compact stools, but their structures ask us to look at different details. One uses arranged reeds and bindings; the other brings a woven seat to a wooden frame.",
      "Farrukhnagar is associated with reed mudha making, while Sonipat is associated with peedhas. These places offer entry points into Haryana’s varied furniture crafts.",
      "Follow the materials through each form. In the mudha, notice the bundles and bindings. In the peedha, look at the turns of the seat cord around the frame."
    ]
  },
  {
    "slug": "the-curve-of-a-surahi",
    "title": "The curve of a surahi.",
    "excerpt": "Look from the broad clay body to its slender neck.",
    "craft": "pottery",
    "paragraphs": [
      "The outline of a surahi changes from a broad rounded body to a narrow neck. That transition gives the vessel much of its visual character.",
      "Jhajjar’s documented pottery tradition includes shaped and decorated surahis. Incised lines and small surface motifs add detail without replacing the importance of the overall form.",
      "Begin with the silhouette, then move closer to the neck, mouth and decorated areas. Looking at both scales makes the shaping decisions easier to see."
    ]
  }
];

export const hrTourism = [
  {
    "name": "Kurukshetra",
    "district": "Kurukshetra",
    "kind": "Sacred places & cultural heritage",
    "description": "Discover Brahma Sarovar and the wider heritage landscape through official visitor information.",
    "href": "https://haryanatourism.gov.in/places_of_interest/brahma-sarovar/"
  },
  {
    "name": "Panipat",
    "district": "Panipat",
    "kind": "Textile city & historic places",
    "description": "Explore the weaving city’s museums, monuments and district heritage.",
    "href": "https://panipat.gov.in/tourism/"
  },
  {
    "name": "Surajkund",
    "district": "Faridabad",
    "kind": "Craft gathering & built heritage",
    "description": "Discover Surajkund’s setting and its connection with Haryana’s craft gatherings.",
    "href": "https://haryanatourism.gov.in/places_of_interest/surajkund-2/"
  },
  {
    "name": "Pinjore",
    "district": "Panchkula",
    "kind": "Historic gardens & architecture",
    "description": "Explore the terraced gardens and their architectural setting at Pinjore.",
    "href": "https://panchkula.nic.in/tourist-place/yadavindra_garden_pinjore/"
  },
  {
    "name": "Rewari",
    "district": "Rewari",
    "kind": "Railway heritage & craft town",
    "description": "Learn about the steam locomotive shed and Rewari’s railway heritage.",
    "href": "https://www.haryana.gov.in/places-centres/loco-shedrewari/"
  },
  {
    "name": "Hisar",
    "district": "Hisar",
    "kind": "Archaeology & built heritage",
    "description": "Discover the district’s historic places and archaeological landscape.",
    "href": "https://hisar.gov.in/tourist-places-2/"
  }
];
