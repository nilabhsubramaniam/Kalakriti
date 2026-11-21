import type { ImageAsset, StatePage } from './types';

const study = (name: string, alt: string, width = 1024, height = 1024): ImageAsset => ({ src: `/images/pb-${name}.webp`, alt, width, height, credit: 'Kalakriti regional craft illustration' });
export const pbBase = '/state/punjab';

export const punjab: StatePage = {
  slug: 'punjab', state: 'Punjab', title: 'Punjab', native: 'ਕਲਾ ਦੀ ਧਰਤੀ',
  tagline: 'Discover Punjab through its embroidery, woven cloth and worked materials.',
  intro: 'Begin with Phulkari’s geometric flowers, then explore jutti, wood inlay, hammered metal, durries and paranda. Follow six collections through Patiala, Hoshiarpur, Amritsar and Barnala, with a closer look at the skills behind each piece.',
  hero: study('hero', 'Punjab craft arrangement with embroidered cloth, jutti shoes, an inlaid wooden box, a copper bowl, a flatwoven rug and a braided paranda', 1536, 1024),
  districts: [
    {"id": "Patiala", "name": "Patiala", "note": "Explore Phulkari embroidery, Punjabi jutti, Paranda work.", "crafts": ["phulkari", "jutti", "paranda"]},
    {"id": "Hoshiarpur", "name": "Hoshiarpur", "note": "Explore Hoshiarpur wood inlay.", "crafts": ["inlay"]},
    {"id": "Amritsar", "name": "Amritsar", "note": "Explore Jandiala Guru metalwork.", "crafts": ["metal"]},
    {"id": "Barnala", "name": "Barnala", "note": "Explore Durrie weaving.", "crafts": ["durrie"]},
  ],
  crafts: [
    { id: "phulkari", name: "Phulkari embroidery", district: "Patiala", motif: "diamond", hook: "Straight stitches build flowers, diamonds and fields of colour.", story: "Phulkari is an embroidery tradition of the wider Punjab region. Patiala is one of its recognised centres in Indian Punjab. Spaced motifs leave the ground visible, while denser Bagh compositions give thread much more of the surface.", technique: "Darning stitches follow counted threads of the ground cloth. Changing their length and direction creates geometric forms and shifts the way light catches the embroidery.", makers: "Embroiderers plan the spacing, work the stitches and finish the edges. Cloth preparation and finishing contribute alongside the needlework.", image: study("phulkari", "Madder-red embroidered stole with mustard, orange and pink geometric flowers") },
    { id: "jutti", name: "Punjabi jutti", district: "Patiala", motif: "lotus", hook: "A shaped upper and a stitched sole meet in a familiar everyday form.", story: "Punjabi jutti connects footwear construction with decorative needlework. Patiala, Amritsar and Fazilka are among its centres. The outline, stitched edges and embroidered upper offer different details to explore.", technique: "An upper is cut, decorated and joined to a shaped sole. Look at the curve around the toe and the stitching where the upper meets the base.", makers: "Cutters, embroiderers, stitchers and finishers contribute complementary skills. Construction and decoration vary between makers and designs.", image: study("jutti", "Matching burgundy Punjabi jutti shoes with restrained gold-coloured floral embroidery") },
    { id: "inlay", name: "Hoshiarpur wood inlay", district: "Hoshiarpur", motif: "lotus", hook: "Fine pale lines sit within a dark wooden surface.", story: "Hoshiarpur is known for wood inlay on decorative objects and furnishings. A floral line can appear drawn across the timber, but it is formed by fitted pieces set into a prepared surface.", technique: "A design is marked and shallow channels are cut into the wood. Contrasting pieces are fitted and the surface is levelled and finished. Follow the joins where a small curve changes direction.", makers: "Designers, woodworkers, inlay workers and finishers bring pattern, fit and surface together. Materials should be checked for the particular object.", image: study("inlay", "Dark wooden keepsake box with pale floral inlay and a geometric border") },
    { id: "metal", name: "Jandiala Guru metalwork", district: "Amritsar", motif: "kalash", hook: "Small hammer marks describe the curve of a metal vessel.", story: "Jandiala Guru in Amritsar district is associated with the Thatheras’ brass and copper vessel-making tradition. Its shaped metal surfaces bring the knowledge of heating, hammering and finishing into view.", technique: "Metal sheets are repeatedly heated and hammered into curved forms. Joining and finishing complete the vessel. Notice the changing facets and the treatment of the rim.", makers: "Metalworkers coordinate heat, tools, shaping and finishing. Their knowledge is passed through practice and learning within the craft community.", image: study("metal", "Rounded copper-coloured decorative bowl with fine hammer facets") },
    { id: "durrie", name: "Durrie weaving", district: "Barnala", motif: "diamond", hook: "Bands and geometric forms emerge from an interlaced flat weave.", story: "Flatwoven durries belong to Punjab’s textile landscape, with Barnala included in documented craft programmes. Colour bands, stepped forms and the treatment of the edges give each composition its rhythm.", technique: "Weft threads are worked across a tensioned warp to build a flat surface. Follow the colour changes, then compare the body of the weave with its edge and fringe.", makers: "Yarn preparers, weavers and finishers each contribute to the surface and structure. Patterns and methods differ across workshops.", image: study("durrie", "Folded indigo and cream flatwoven durrie with small madder geometric accents") },
    { id: "paranda", name: "Paranda work", district: "Patiala", motif: "diamond", hook: "Braided cords lead to a lively finish of coloured thread.", story: "Paranda is a braided hair ornament associated with Punjabi dress and with Patiala’s craft landscape. The relationship between the long cords, wrapped knots and tassels makes its construction easy to follow.", technique: "Threads are gathered, braided and bound into cords, with decorative tassels tied at their ends. Look at the transition from the close braid to the loose tassel.", makers: "Thread workers braid, bind and finish the ornament, balancing the cord lengths and the weight of its ends.", image: study("paranda", "Black braided paranda hair ornament with magenta and mustard thread tassels") },
  ],
  products: [
    { id: "pb-phulkari", name: "Phulkari Diamond Stole", craft: "phulkari", price: 3600, spec: "70 × 200 cm · embroidered textile", blurb: "Madder-red cloth with warm geometric flowers and a clearly visible ground.", image: study("phulkari", "Madder-red embroidered stole with mustard, orange and pink geometric flowers") },
    { id: "pb-jutti", name: "Burgundy Embroidered Jutti", craft: "jutti", price: 1800, spec: "Pair · sample size EU 38", blurb: "A burgundy pair with restrained gold-coloured floral threadwork and flat soles.", image: study("jutti", "Matching burgundy Punjabi jutti shoes with restrained gold-coloured floral embroidery") },
    { id: "pb-inlay", name: "Floral Inlay Keepsake Box", craft: "inlay", price: 2800, spec: "22 × 14 cm · decorative wood inlay", blurb: "Fine pale floral lines and a narrow geometric border across a dark wooden lid.", image: study("inlay", "Dark wooden keepsake box with pale floral inlay and a geometric border") },
    { id: "pb-metal", name: "Hammered Copper Bowl", craft: "metal", price: 2400, spec: "18 cm diameter · decorative metalwork", blurb: "A rounded copper-coloured form with a gently faceted surface and simple rim.", image: study("metal", "Rounded copper-coloured decorative bowl with fine hammer facets") },
    { id: "pb-durrie", name: "Indigo Stripe Durrie", craft: "durrie", price: 2600, spec: "90 × 150 cm · flatwoven textile", blurb: "Indigo and cream bands with small stepped accents and a short fringe.", image: study("durrie", "Folded indigo and cream flatwoven durrie with small madder geometric accents") },
    { id: "pb-paranda", name: "Magenta Tassel Paranda", craft: "paranda", price: 700, spec: "60 cm · braided thread accessory", blurb: "Black braided cords finished with magenta and mustard thread tassels.", image: study("paranda", "Black braided paranda hair ornament with magenta and mustard thread tassels") },
  ],
};

export const pbArticles = [
  {
    "slug": "how-stitch-direction-catches-light",
    "title": "How stitch direction catches light.",
    "excerpt": "Look at a Phulkari motif one small stitched area at a time.",
    "craft": "phulkari",
    "paragraphs": [
      "Two stitched areas can use the same colour and still appear different. The direction of their threads changes how they catch the light.",
      "In Phulkari, counted darning stitches build geometric forms. Follow one diamond from its centre to its edge, noticing where the stitch length or direction changes.",
      "Then step back and look at the ground between the motifs. The balance of embroidered and open space is as much a part of the composition as the flowers themselves."
    ]
  },
  {
    "slug": "a-line-set-into-wood",
    "title": "A line set into wood.",
    "excerpt": "Discover how fitted pieces become a continuous surface.",
    "craft": "inlay",
    "paragraphs": [
      "A pale floral line on dark wood can seem almost drawn. Looking closely reveals a surface made from carefully prepared channels and fitted pieces.",
      "Hoshiarpur wood inlay brings the planning of a pattern together with precise cutting and fitting. Small curves need to meet without interrupting the flow of the larger design.",
      "Follow a single stem across the lid of a box. The transitions between its curves offer a way to see the patient work beneath a smooth finish."
    ]
  },
  {
    "slug": "reading-the-hammered-surface",
    "title": "Reading the hammered surface.",
    "excerpt": "Follow the small facets that help describe a vessel’s form.",
    "craft": "metal",
    "paragraphs": [
      "A hammered surface breaks a reflection into many small areas of light. Those marks can help us see both the curve of a vessel and the work used to shape it.",
      "The vessel-making tradition of Jandiala Guru involves heating, hammering, joining and finishing metal. Each stage contributes to the final form.",
      "Look from the broad belly towards the rim. Changes in curvature and the finish of the edge reveal different decisions within one object."
    ]
  }
];

export const pbTourism = [
  {
    "name": "Amritsar",
    "district": "Amritsar",
    "kind": "Sacred architecture & city heritage",
    "description": "Discover Sri Harmandir Sahib and the city’s historic places through official visitor information.",
    "href": "https://amritsar.nic.in/places-of-interest/"
  },
  {
    "name": "Patiala",
    "district": "Patiala",
    "kind": "Palaces & urban heritage",
    "description": "Explore Qila Mubarak and the architectural setting of Patiala.",
    "href": "https://patiala.nic.in/architecture/"
  },
  {
    "name": "Anandpur Sahib",
    "district": "Rupnagar",
    "kind": "Sikh heritage & cultural places",
    "description": "Learn about Anandpur Sahib and the historic shrines in its wider setting.",
    "href": "https://rupnagar.nic.in/tourism/tourist-places/"
  },
  {
    "name": "Kapurthala",
    "district": "Kapurthala",
    "kind": "Architecture & cultural landscapes",
    "description": "Discover the city’s built heritage and nearby places through district visitor information.",
    "href": "https://kapurthala.gov.in/tourism/"
  },
  {
    "name": "Bathinda",
    "district": "Bathinda",
    "kind": "Fort & regional heritage",
    "description": "Explore Qila Mubarak and the district’s other historic places.",
    "href": "https://bathinda.nic.in/tourism/"
  },
  {
    "name": "Hoshiarpur",
    "district": "Hoshiarpur",
    "kind": "Craft town & district landscapes",
    "description": "Follow the wood-inlay collection into the wider places and landscapes of its district.",
    "href": "https://hoshiarpur.nic.in/tourism/"
  }
];
