import type { ImageAsset, StatePage } from './types';

const study = (name: string, alt: string, width = 1024, height = 1024): ImageAsset => ({ src: `/images/ka-${name}.webp`, alt, width, height, credit: 'Kalakriti regional craft illustration' });
export const kaBase = '/state/karnataka';

export const karnataka: StatePage = {
  slug: 'karnataka', state: 'Karnataka', title: 'Karnataka', native: 'ಕಲೆಗಳ ನಾಡು',
  tagline: 'Discover Karnataka through inlaid metal, turned wood, woven cloth and needlework.',
  intro: 'Explore Bidriware, Channapatna lacquerware, Mysuru silk, Ilkal weaving, Kasuti and Sandur Lambani embroidery. Six collections connect distinct materials with the places and skills behind them.',
  hero: study('hero', 'Karnataka craft arrangement with an inlaid black vase, turned wooden birds, folded saris, counted-stitch cloth and an embroidered patchwork pouch', 1536, 1024),
  districts: [
    {"id": "Bidar", "name": "Bidar", "note": "Explore Bidriware.", "crafts": ["bidri"]},
    {"id": "Bengaluru South", "name": "Bengaluru South", "note": "Explore Channapatna lacquerware.", "crafts": ["lacquer"]},
    {"id": "Mysuru", "name": "Mysuru", "note": "Explore Mysuru silk weaving.", "crafts": ["silk"]},
    {"id": "Bagalkote", "name": "Bagalkote", "note": "Explore Ilkal weaving.", "crafts": ["ilkal"]},
    {"id": "Dharwad", "name": "Dharwad", "note": "Explore Kasuti embroidery.", "crafts": ["kasuti"]},
    {"id": "Ballari", "name": "Ballari", "note": "Explore Sandur Lambani embroidery.", "crafts": ["lambani"]},
  ],
  crafts: [
    { id: "bidri", name: "Bidriware", district: "Bidar", motif: "paisley", hook: "Fine pale inlay draws a quiet line across a dark metal ground.", story: "Bidar is associated with Bidriware, a metal craft recognised for the contrast between its darkened ground and pale inlaid designs. Small vessels and decorative forms invite attention to both the outline and the finer pattern.", technique: "A metal form is prepared and a design is worked into its surface for inlay. Finishing develops the dark ground and brings the contrasting lines into view. Follow one small leaf to see how it meets the surrounding surface.", makers: "Metalworkers, engravers, inlay workers and finishers contribute successive skills. Metal composition and finishing depend on the particular object.", image: study("bidri", "Small matte-black decorative vase with pale silver-coloured floral inlay and a narrow neck band") },
    { id: "lacquer", name: "Channapatna lacquerware", district: "Bengaluru South", motif: "lotus", hook: "A turned wooden form carries smooth bands of colour.", story: "Channapatna is known for turned and lacquered wooden objects, including toys and decorative pieces. It lies in the district now named Bengaluru South. Rounded forms, clear colour bands and a smooth finish make the relationship between shaping and decoration easy to see.", technique: "Wood is shaped with turning tools, then coloured and finished according to the design. Notice the changes from a broad curve to a narrow band and how colour follows the turned form.", makers: "Turners and finishers bring knowledge of tools, shape and surface treatment. Wood species and finishes vary by item.", image: study("lacquer", "Pair of small turned wooden decorative birds in mustard, red, teal and cream lacquer-like colours") },
    { id: "silk", name: "Mysuru silk weaving", district: "Mysuru", motif: "diamond", hook: "A lustrous cloth ground meets a restrained woven border.", story: "Mysuru has a prominent silk-weaving tradition, with Mysore Silk associated with the city’s manufacturing history. The quiet body of a sari can make changes in lustre, weave and border especially noticeable.", technique: "Warp and weft build the textile while the border changes the colour or texture of its edge. Look at the transition from the body to the border, then the way the cloth falls through a fold.", makers: "Yarn preparers, weavers and finishers contribute different stages of textile production. Fibre and border content depend on the particular cloth.", image: study("silk", "Folded deep-plum sari with a smooth lustre, gold-coloured woven border and thin teal edge") },
    { id: "ilkal", name: "Ilkal weaving", district: "Bagalkote", motif: "diamond", hook: "A contrasting end panel changes the rhythm of a checked cloth.", story: "Ilkal in Bagalkote district is an important weaving centre. A sari’s body, border and contrasting end panel each offer a different part of the composition to explore. Checks and stripes bring those areas into a clear relationship.", technique: "Different sections of the sari are planned and woven into a coordinated textile. Follow the change between the body and end panel, then compare the border with the checked ground.", makers: "Yarn preparers, weavers and finishers contribute pattern planning, joining and surface finishing, with methods varying by textile.", image: study("ilkal", "Folded deep-teal small-check sari with a red border and visible red-and-cream striped end panel") },
    { id: "kasuti", name: "Kasuti embroidery", district: "Dharwad", motif: "diamond", hook: "Counted stitches turn small repeated steps into a precise motif.", story: "Kasuti is a Karnataka embroidery tradition associated with Dharwad and other centres. The pattern is developed through counted stitches rather than broad filled areas. Looking closely makes the relationship between the cloth grid and the design visible.", technique: "Stitches follow counted threads to form fine geometric outlines. Notice changes of direction, the spacing between motifs and the rhythm of small repeated marks.", makers: "Embroiderers plan and work the counted pattern, with textile finishers completing the edges. Designs and methods vary across makers.", image: study("kasuti", "Indigo stole with small orange, cream and muted-red counted-thread geometric stitched motifs") },
    { id: "lambani", name: "Sandur Lambani embroidery", district: "Ballari", motif: "diamond", hook: "Patchwork, stitching and small reflective details build a textured surface.", story: "Lambani embroidery is associated with the community’s needlework in and around Sandur in Ballari district. Patchwork and varied stitching may be combined with mirrors and other embellishments. Each element contributes a different texture and scale.", technique: "Pieces of cloth are arranged and joined, then stitched details and selected embellishments are worked into the surface. Follow a seam and compare the close stitching around a mirror with the surrounding patchwork.", makers: "Lambani embroiderers contribute knowledge of patchwork, stitches and embellishment. Designs and materials vary; this collection’s pouch uses an original contemporary composition.", image: study("lambani", "Crimson embroidered pouch with bright patchwork geometry, small stitched mirror discs and thread tassels") },
  ],
  products: [
    { id: "ka-bidri", name: "Floral Inlay Black Vase", craft: "bidri", price: 3200, spec: "18 cm · decorative metalwork", blurb: "A matte-black form with fine pale floral lines and a restrained neck band.", image: study("bidri", "Small matte-black decorative vase with pale silver-coloured floral inlay and a narrow neck band") },
    { id: "ka-lacquer", name: "Lacquered Wooden Bird Pair", craft: "lacquer", price: 950, spec: "Pair · 10 cm decorative wooden forms", blurb: "Two rounded turned birds with clear colour bands and simple bases.", image: study("lacquer", "Pair of small turned wooden decorative birds in mustard, red, teal and cream lacquer-like colours") },
    { id: "ka-silk", name: "Plum Woven-Border Sari", craft: "silk", price: 6800, spec: "5.5 m · woven textile", blurb: "Deep plum cloth with a quiet lustre, gold-coloured border and thin teal edge.", image: study("silk", "Folded deep-plum sari with a smooth lustre, gold-coloured woven border and thin teal edge") },
    { id: "ka-ilkal", name: "Teal Check Ilkal Sari", craft: "ilkal", price: 4200, spec: "5.5 m · woven textile", blurb: "A small-check body balanced by a red border and contrasting striped end.", image: study("ilkal", "Folded deep-teal small-check sari with a red border and visible red-and-cream striped end panel") },
    { id: "ka-kasuti", name: "Indigo Counted-Stitch Stole", craft: "kasuti", price: 2800, spec: "70 × 200 cm · embroidered textile", blurb: "Small geometric stitched motifs spaced across a plain indigo ground.", image: study("kasuti", "Indigo stole with small orange, cream and muted-red counted-thread geometric stitched motifs") },
    { id: "ka-lambani", name: "Crimson Patchwork Pouch", craft: "lambani", price: 1900, spec: "22 × 18 cm · embellished textile", blurb: "Bright patchwork and varied stitching with small mirror discs and thread tassels.", image: study("lambani", "Crimson embroidered pouch with bright patchwork geometry, small stitched mirror discs and thread tassels") },
  ],
};

export const kaArticles = [
  {
    "slug": "a-pale-line-in-a-dark-ground",
    "title": "A pale line in a dark ground.",
    "excerpt": "Look at the meeting of inlay and surface in Bidriware.",
    "craft": "bidri",
    "paragraphs": [
      "A narrow pale line can remain visible across a broad dark surface. In an inlaid object, that contrast draws attention to both the design and the material around it.",
      "Bidriware offers a way to follow the relationship between a worked pattern and its finished ground. Begin with one leaf or curve rather than the whole vessel.",
      "Then step back to its outline. Seeing the shape and the smaller inlaid details together connects the object’s two scales."
    ]
  },
  {
    "slug": "where-the-cloth-changes",
    "title": "Where the cloth changes.",
    "excerpt": "Follow the body, border and contrasting end of an Ilkal sari.",
    "craft": "ilkal",
    "paragraphs": [
      "A sari can contain several different rhythms within one cloth. Small checks in the body may give way to stripes or a contrasting end panel.",
      "Ilkal weaving brings these areas into a coordinated composition. Looking at their transitions makes the planning of the textile easier to see.",
      "Follow one line from the checked ground towards the border. Changes in colour, spacing and finish offer a closer view of the woven structure."
    ]
  },
  {
    "slug": "two-ways-to-work-a-textile",
    "title": "Two ways to work a textile.",
    "excerpt": "Compare counted stitchwork with patchwork and embellishment.",
    "craft": "kasuti",
    "paragraphs": [
      "Kasuti and Lambani embroidery invite different kinds of close attention. A counted geometric line asks us to follow the cloth grid; a patchworked surface asks us to notice joins and layers.",
      "Both belong to Karnataka’s varied needlework landscape, with distinct regional and community contexts. Their differences are useful to see rather than treating all embroidery as one technique.",
      "Look first at a single stitch or seam, then at the whole pattern. That shift connects detailed handwork to the character of the finished surface."
    ]
  }
];

export const kaTourism = [
  {
    "name": "Mysuru",
    "district": "Mysuru",
    "kind": "Palace architecture & textile heritage",
    "description": "Discover the palace city and its wider setting of woven textiles and regional craft.",
    "href": "https://mysore.nic.in/en/tourist-place/mysuru-palace/"
  },
  {
    "name": "Hampi",
    "district": "Vijayanagara",
    "kind": "Architecture & archaeological landscapes",
    "description": "Explore the monuments, river setting and stone surfaces of Hampi.",
    "href": "https://vijayanagara.nic.in/en/tourism/"
  },
  {
    "name": "Bidar",
    "district": "Bidar",
    "kind": "Fort architecture & metal craft",
    "description": "Discover the historic city associated with Bidriware and its built heritage.",
    "href": "https://old.karnatakatourism.org/tour-item/bidar/"
  },
  {
    "name": "Channapatna",
    "district": "Bengaluru South",
    "kind": "Lacquerware & craft town",
    "description": "Learn about the town associated with turned and lacquered wooden objects.",
    "href": "https://karnatakatourism.org/en/experiences/channapatna-toys/"
  },
  {
    "name": "Badami",
    "district": "Bagalkote",
    "kind": "Rock-cut architecture & sculpture",
    "description": "Explore the carved spaces and wider landscape around Badami.",
    "href": "https://bagalkot.nic.in/en/tourist-place/badami-caves/"
  },
  {
    "name": "Belur",
    "district": "Hassan",
    "kind": "Carved architecture & built heritage",
    "description": "Discover the carved surfaces and architectural setting of Belur.",
    "href": "https://hassan.nic.in/en/tourist-places/"
  }
];
