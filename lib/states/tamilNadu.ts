import type { ImageAsset, StatePage } from './types';

const study = (name: string, alt: string, width = 1024, height = 1024): ImageAsset => ({ src: `/images/tn-${name}.webp`, alt, width, height, credit: 'Kalakriti regional craft illustration' });
export const tnBase = '/state/tamil-nadu';

export const tamilNadu: StatePage = {
  slug: 'tamil-nadu', state: 'Tamil Nadu', title: 'Tamil Nadu', native: 'கலைகளின் தாயகம்',
  tagline: 'Discover Tamil Nadu through woven cloth, painted surfaces, cast metal and natural fibres.',
  intro: 'Explore Kanchipuram weaving, Thanjavur painting, Swamimalai casting, Toda embroidery, Pattamadai mats and Chettinad Kottan. Six collections connect distinct materials with the places and skills behind them.',
  hero: study('hero', 'Tamil Nadu craft arrangement with a crimson sari, framed painting, cast peacock, embroidered cloth, fine grass mat and palm-leaf basket', 1536, 1024),
  districts: [
    {"id": "Kancheepuram", "name": "Kancheepuram", "note": "Explore Kanchipuram weaving.", "crafts": ["kanchi"]},
    {"id": "Thanjavur", "name": "Thanjavur", "note": "Explore Thanjavur painting, Swamimalai casting.", "crafts": ["painting", "bronze"]},
    {"id": "The Nilgiris", "name": "The Nilgiris", "note": "Explore Toda embroidery.", "crafts": ["toda"]},
    {"id": "Tirunelveli", "name": "Tirunelveli", "note": "Explore Pattamadai mat weaving.", "crafts": ["mat"]},
    {"id": "Sivaganga", "name": "Sivaganga", "note": "Explore Chettinad Kottan weaving.", "crafts": ["kottan"]},
  ],
  crafts: [
    { id: "kanchi", name: "Kanchipuram weaving", district: "Kancheepuram", motif: "diamond", hook: "A contrasting woven border gives a rich cloth ground its balance.", story: "Kanchipuram is an important silk-weaving centre in Tamil Nadu. A sari’s body, border and end panel offer different areas of colour and woven detail. Looking at their meeting points brings the planning of the textile into view.", technique: "Warp and weft build the cloth, with borders and end panels worked into the composition. Follow a small motif, then compare the body with the edge and the finish of the end panel.", makers: "Yarn preparers, weavers and finishers contribute successive skills. Fibre and border composition depend on the particular textile.", image: study("kanchi", "Deep-crimson sari with a gold-coloured woven border and narrow dark-green edge") },
    { id: "painting", name: "Thanjavur painting", district: "Thanjavur", motif: "lotus", hook: "Painted colour and raised ornament give a compact composition depth.", story: "Thanjavur painting is associated with a central figure, rich colour and raised decorative work. Traditional examples often use gold foil over a prepared relief surface. The frame, painted areas and ornament each contribute to the whole image.", technique: "A support is prepared for the drawing and painted composition, with relief and decorative finishing added according to the design. Compare a flat painted area with the raised arch or border.", makers: "Painters and decorative-surface workers contribute drawing, colour, relief and finishing skills. Materials and processes vary with the work.", image: study("painting", "Framed original Thanjavur-inspired seated Ganesha composition with crimson, green and raised gold-coloured ornament") },
    { id: "bronze", name: "Swamimalai casting", district: "Thanjavur", motif: "peacock", hook: "A modelled form becomes a metal object through moulding and casting.", story: "Swamimalai near Kumbakonam is associated with bronze casting, including the making of icons. Its lost-wax process brings modelling and metalwork together. This collection uses a small decorative peacock to introduce form and surface detail.", technique: "A wax model is enclosed in a mould, then removed so that metal can take its place. Finishing develops the surface after casting. Notice the silhouette as well as the smaller worked areas.", makers: "Modellers, mould makers, casters and finishers contribute different skills. Alloy composition and construction depend on the object.", image: study("bronze", "Small bronze-toned cast decorative peacock with closed tail and a simple low base") },
    { id: "toda", name: "Toda embroidery", district: "The Nilgiris", motif: "diamond", hook: "Red and black counted stitches build patterns across an ivory ground.", story: "Toda embroidery belongs to the Toda community’s needlework tradition in the Nilgiris. Red and black threads worked on a pale ground create a distinctive geometric surface. This collection’s contemporary stole uses an original composition rather than reproducing a ceremonial garment.", technique: "Stitches follow counted threads of the ground cloth. Look at the change of direction inside a small stepped motif and the spaces between the bands.", makers: "Toda embroiderers hold the community knowledge of this needlework. Pattern, stitch and edge finishing contribute to its character, with designs varying across works.", image: study("toda", "Ivory contemporary stole with red and black counted-thread geometric bands and small stepped motifs") },
    { id: "mat", name: "Pattamadai mat weaving", district: "Tirunelveli", motif: "diamond", hook: "Fine prepared grass strips become a closely worked, flexible surface.", story: "Pattamadai in Tirunelveli district is associated with fine korai-grass mats. A restrained border makes it possible to notice the even surface of the weave and the treatment of its edges.", technique: "Grass is prepared into fine strips and woven into the intended surface. Follow a strip through a small area, then compare the body of the mat with the closer work around its edge.", makers: "Grass preparers, weavers and finishers bring material selection, interlacing and finishing skills together. Methods vary with the mat.", image: study("mat", "Fine natural straw-coloured korai-grass mat with a narrow crimson and muted-green border and a rolled end") },
    { id: "kottan", name: "Chettinad Kottan weaving", district: "Sivaganga", motif: "diamond", hook: "Palm-leaf strips turn geometric colour into a shaped woven form.", story: "Chettinad Kottan refers to palm-leaf basketry associated with the Chettinad region. The interlaced strips create both a pattern and a structure, with the corners and rim revealing another scale of work.", technique: "Prepared leaf strips are woven into a form and finished at the joins and edges. Look at how the pattern changes direction at a corner and how the lid meets the body.", makers: "Palm-leaf workers prepare, weave and finish the material. Patterns, shapes and colour choices vary across makers.", image: study("kottan", "Small lidded palm-leaf basket with natural straw, crimson and deep-green geometric weaving") },
  ],
  products: [
    { id: "tn-kanchi", name: "Crimson Woven-Border Sari", craft: "kanchi", price: 7200, spec: "5.5 m · woven textile", blurb: "A deep-crimson ground with a gold-coloured border and narrow green edge.", image: study("kanchi", "Deep-crimson sari with a gold-coloured woven border and narrow dark-green edge") },
    { id: "tn-painting", name: "Ganesha Relief Painting", craft: "painting", price: 5800, spec: "30 × 40 cm · framed decorative painting", blurb: "An original seated Ganesha composition with warm colour and raised gold-coloured ornament.", image: study("painting", "Framed original Thanjavur-inspired seated Ganesha composition with crimson, green and raised gold-coloured ornament") },
    { id: "tn-bronze", name: "Cast Peacock Ornament", craft: "bronze", price: 2800, spec: "16 cm · decorative metal casting", blurb: "A compact bronze-toned bird with a closed tail and restrained feather detail.", image: study("bronze", "Small bronze-toned cast decorative peacock with closed tail and a simple low base") },
    { id: "tn-toda", name: "Ivory Counted-Stitch Stole", craft: "toda", price: 3200, spec: "70 × 200 cm · embroidered textile", blurb: "Red and black geometric bands across a plain ivory ground.", image: study("toda", "Ivory contemporary stole with red and black counted-thread geometric bands and small stepped motifs") },
    { id: "tn-mat", name: "Crimson-Edge Korai Mat", craft: "mat", price: 1800, spec: "60 × 120 cm · woven grass strips", blurb: "A finely worked natural surface with a narrow crimson and muted-green border.", image: study("mat", "Fine natural straw-coloured korai-grass mat with a narrow crimson and muted-green border and a rolled end") },
    { id: "tn-kottan", name: "Geometric Palm-Leaf Basket", craft: "kottan", price: 1600, spec: "22 × 22 cm · woven palm leaf", blurb: "A lidded basket with a restrained geometric pattern and neatly finished corners.", image: study("kottan", "Small lidded palm-leaf basket with natural straw, crimson and deep-green geometric weaving") },
  ],
};

export const tnArticles = [
  {
    "slug": "the-depth-of-a-painted-surface",
    "title": "The depth of a painted surface.",
    "excerpt": "Compare colour and raised ornament in a Thanjavur composition.",
    "craft": "painting",
    "paragraphs": [
      "A painting can ask us to look at both an image and a physical surface. Raised decoration catches light differently from the flat colour beside it.",
      "Thanjavur painting brings these treatments into a compact composition. A central figure and its surrounding ornament work together to guide the eye.",
      "Look first at one painted area, then at the arch or border. Their different depths reveal how the surface is built."
    ]
  },
  {
    "slug": "from-wax-model-to-cast-form",
    "title": "From wax model to cast form.",
    "excerpt": "Follow the relationship between modelling, mould and finished metal.",
    "craft": "bronze",
    "paragraphs": [
      "Before a cast-metal object exists, its shape can begin in wax. That softer model allows the maker to develop an outline and smaller details.",
      "Swamimalai’s casting tradition uses the lost-wax process. The relationship between model, mould and casting connects many successive stages of work.",
      "Begin with the silhouette, then look at a smaller feather or edge. Both scales help explain how the overall form is developed and finished."
    ]
  },
  {
    "slug": "the-work-at-a-woven-corner",
    "title": "The work at a woven corner.",
    "excerpt": "See how a palm-leaf pattern becomes a three-dimensional form.",
    "craft": "kottan",
    "paragraphs": [
      "A woven pattern repeats across a flat area. At a corner, those same strips must change direction while keeping the form together.",
      "Chettinad Kottan basketry brings the visible design and the construction into a close relationship. The body, rim and lid offer different details to follow.",
      "Trace a small line through the surface towards the edge. Its changing direction helps connect the pattern with the shape of the basket."
    ]
  }
];

export const tnTourism = [
  {
    "name": "Kanchipuram",
    "district": "Kancheepuram",
    "kind": "Weaving town & built heritage",
    "description": "Discover the city’s weaving landscape and historic architectural setting.",
    "href": "https://kancheepuram.nic.in/tourism/"
  },
  {
    "name": "Thanjavur",
    "district": "Thanjavur",
    "kind": "Painting, casting & architectural heritage",
    "description": "Explore the city’s monuments, collections and wider craft landscape.",
    "href": "https://thanjavur.nic.in/tourism/"
  },
  {
    "name": "Mamallapuram",
    "district": "Chengalpattu",
    "kind": "Carved stone & coastal heritage",
    "description": "Discover the carved monuments and coastal setting of Mamallapuram.",
    "href": "https://chengalpattu.nic.in/tourism/"
  },
  {
    "name": "Madurai",
    "district": "Madurai",
    "kind": "Historic city & architectural detail",
    "description": "Explore the city’s historic places and richly worked architectural surfaces.",
    "href": "https://madurai.nic.in/tourism/"
  },
  {
    "name": "Chettinad",
    "district": "Sivaganga",
    "kind": "Courtyard houses & material culture",
    "description": "Learn about the region’s architecture and the places around its craft traditions.",
    "href": "https://sivaganga.nic.in/tourism/"
  },
  {
    "name": "The Nilgiris",
    "district": "The Nilgiris",
    "kind": "Hill landscapes & regional culture",
    "description": "Discover the district’s hill setting and wider cultural landscape.",
    "href": "https://nilgiris.nic.in/tourism/"
  }
];
