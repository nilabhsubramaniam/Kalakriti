import type { ImageAsset, StatePage } from './types';

const study = (name: string, alt: string, width = 1024, height = 1024): ImageAsset => ({ src: `/images/kl-${name}.webp`, alt, width, height, credit: 'Kalakriti regional craft illustration' });
export const klBase = '/state/kerala';

export const kerala: StatePage = {
  slug: 'kerala', state: 'Kerala', title: 'Kerala', native: 'കലയുടെ നാട്',
  tagline: 'Discover Kerala through woven cloth, polished metal and natural fibres.',
  intro: 'Explore Kasavu textiles, Aranmula metal mirrors, coir, screw-pine weaving, bell-metal work and coconut-shell craft. Six collections connect Kerala’s materials with the places and skills behind them.',
  hero: study('hero', 'Kerala craft arrangement with ivory bordered cloth, a metal mirror, coir mat, woven leaf box, unlit standing lamp and coconut-shell container', 1536, 1024),
  districts: [
    {"id": "Thiruvananthapuram", "name": "Thiruvananthapuram", "note": "Explore Kasavu weaving.", "crafts": ["kasavu"]},
    {"id": "Pathanamthitta", "name": "Pathanamthitta", "note": "Explore Aranmula metal mirrors.", "crafts": ["mirror"]},
    {"id": "Alappuzha", "name": "Alappuzha", "note": "Explore Coir craft.", "crafts": ["coir"]},
    {"id": "Kollam", "name": "Kollam", "note": "Explore Screw-pine weaving.", "crafts": ["screwpine"]},
    {"id": "Kannur", "name": "Kannur", "note": "Explore Kunhimangalam metalwork.", "crafts": ["metal"]},
    {"id": "Kerala workshops", "name": "Kerala workshops", "note": "Explore Coconut-shell craft.", "crafts": ["shell"]},
  ],
  crafts: [
    { id: "kasavu", name: "Kasavu weaving", district: "Thiruvananthapuram", motif: "diamond", hook: "A quiet ivory ground gives the woven border room to shine.", story: "Balaramapuram in Thiruvananthapuram district is one of Kerala’s important weaving centres. Kasavu textiles are recognised for the relationship between an ivory ground and a contrasting gold-coloured border. Close attention reveals the weave behind that simple composition.", technique: "Warp and weft build the cloth, while the border introduces a different colour and texture. Follow the transition between the ground and edge, then notice the finish where the border turns.", makers: "Yarn preparers, weavers and finishers contribute successive skills. Fibre and border composition depend on the particular textile.", image: study("kasavu", "Folded ivory sari with a muted gold-coloured woven border and narrow deep-green finishing line") },
    { id: "mirror", name: "Aranmula metal mirrors", district: "Pathanamthitta", motif: "lotus", hook: "A carefully polished metal face becomes the reflecting surface.", story: "Aranmula in Pathanamthitta district is associated with Aranmula Kannadi. The reflecting face is polished metal rather than a silvered glass surface. Looking at the face, frame and their meeting point brings several kinds of metalworking into focus.", technique: "The reflective metal is formed and carefully polished, then fitted into its supporting frame. Small changes in the finish affect the clarity of the reflecting face.", makers: "Specialist metalworkers and polishers contribute to the form and finish. Knowledge and practices vary among the craft’s workshops.", image: study("mirror", "Oval polished metal mirror with a restrained brass-coloured leaf frame and low stand") },
    { id: "coir", name: "Coir craft", district: "Alappuzha", motif: "bamboo", hook: "Twisted coconut-husk fibres become a textured, useful surface.", story: "Alappuzha is a major centre of Kerala’s coir industry. The fibre comes from coconut husks and can be spun into yarn before it becomes a woven or worked surface. A mat makes both its texture and its construction easy to see.", technique: "Fibres are prepared and spun, then worked into the intended form. Compare the body of a mat with its edge and notice how the direction of the yarn changes.", makers: "Fibre preparers, spinners, weavers and finishers bring complementary skills to the material. Methods vary with the product.", image: study("coir", "Natural brown coir floor mat with a restrained deep-green edge and a slightly rolled corner") },
    { id: "screwpine", name: "Screw-pine weaving", district: "Kollam", motif: "diamond", hook: "Fine leaf strips interlace into a closely worked form.", story: "Thazhava in Kollam district is among Kerala’s documented screw-pine craft centres. Prepared leaves are worked into mats and other objects. The width of a strip and the handling of an edge change the character of the finished surface.", technique: "Leaves are prepared into strips and interlaced into a planned form. Follow the diagonal pattern, then look at the binding around the corners and rim.", makers: "Leaf preparers and weavers contribute material preparation, patterning and finishing skills. Designs and processes vary across makers.", image: study("screwpine", "Rectangular lidded screw-pine leaf box with a pale straw weave and narrow deep-green edge") },
    { id: "metal", name: "Kunhimangalam metalwork", district: "Kannur", motif: "kalash", hook: "A shaped stem and a broad dish balance a slender metal form.", story: "Kunhimangalam near Payyannur in Kannur district is known for bronze and bell-metal craft, including lamps. A simple standing form offers a way to look at proportion, the relationship between its parts and the finish of its surface.", technique: "Casting, shaping and finishing contribute to the completed object. Compare the dish, stem and base, noticing changes in thickness, curve and surface treatment.", makers: "Metalworkers bring knowledge of moulds, forming and finishing. Alloy composition and construction depend on the individual object.", image: study("metal", "Unlit golden metal standing lamp with a simple circular dish, slender stem and round pedestal") },
    { id: "shell", name: "Coconut-shell craft", district: "Kerala workshops", motif: "lotus", hook: "A natural shell becomes a small object through shaping and finishing.", story: "Coconut-shell work forms part of Kerala’s wider craft landscape. The naturally curved material gives each object a starting shape. Careful cutting and smoothing bring its grain and surface into view.", technique: "Shell is selected, cut, shaped and finished to suit the design. Look at the edge, the fit of a lid and the way the natural markings continue across the surface.", makers: "Shell workers contribute cutting, fitting and finishing skills. Forms and added materials differ between objects and workshops.", image: study("shell", "Polished dark-brown coconut-shell keepsake container with a fitted domed lid and small wooden knob") },
  ],
  products: [
    { id: "kl-kasavu", name: "Ivory Kasavu-Border Sari", craft: "kasavu", price: 4800, spec: "5.5 m · woven textile", blurb: "An ivory ground with a broad gold-coloured border and narrow deep-green edge.", image: study("kasavu", "Folded ivory sari with a muted gold-coloured woven border and narrow deep-green finishing line") },
    { id: "kl-mirror", name: "Leaf-Frame Metal Mirror", craft: "mirror", price: 5400, spec: "18 cm · polished metal and frame", blurb: "An oval reflecting face held in a restrained leaf-shaped frame with a low stand.", image: study("mirror", "Oval polished metal mirror with a restrained brass-coloured leaf frame and low stand") },
    { id: "kl-coir", name: "Green-Edge Coir Mat", craft: "coir", price: 900, spec: "45 × 75 cm · worked coir fibre", blurb: "A natural brown textured surface with a restrained deep-green edge.", image: study("coir", "Natural brown coir floor mat with a restrained deep-green edge and a slightly rolled corner") },
    { id: "kl-screwpine", name: "Screw-Pine Keepsake Box", craft: "screwpine", price: 1400, spec: "22 × 15 cm · woven leaf strips", blurb: "A closely woven lidded box with neat corners and a narrow green edge.", image: study("screwpine", "Rectangular lidded screw-pine leaf box with a pale straw weave and narrow deep-green edge") },
    { id: "kl-metal", name: "Slender Metal Standing Lamp", craft: "metal", price: 3200, spec: "30 cm · decorative metalwork", blurb: "A quiet golden form balancing a shallow dish, slender stem and round base.", image: study("metal", "Unlit golden metal standing lamp with a simple circular dish, slender stem and round pedestal") },
    { id: "kl-shell", name: "Coconut-Shell Keepsake Container", craft: "shell", price: 850, spec: "12 cm · shaped shell and wooden knob", blurb: "A polished dark shell with natural grain and a closely fitted domed lid.", image: study("shell", "Polished dark-brown coconut-shell keepsake container with a fitted domed lid and small wooden knob") },
  ],
};

export const klArticles = [
  {
    "slug": "where-the-border-meets-the-cloth",
    "title": "Where the border meets the cloth.",
    "excerpt": "Look at the woven transition that gives a Kasavu textile its balance.",
    "craft": "kasavu",
    "paragraphs": [
      "A broad plain ground makes a border especially noticeable. In a Kasavu textile, the meeting of ivory and gold-coloured yarn becomes a central part of the composition.",
      "Balaramapuram offers one entry point into Kerala’s weaving landscape. Looking closely at the edge connects its familiar appearance to the crossings of warp and weft.",
      "Follow the border along one side, then look at its ending. Changes in texture and finish help reveal the work within a restrained design."
    ]
  },
  {
    "slug": "a-reflection-in-metal",
    "title": "A reflection in metal.",
    "excerpt": "Discover the surface that distinguishes an Aranmula mirror.",
    "craft": "mirror",
    "paragraphs": [
      "A reflection usually makes us look through an object at an image. Looking instead at the face of a metal mirror brings its material into focus.",
      "Aranmula Kannadi uses a polished metal reflecting surface. The preparation and finishing of that face are central to the craft.",
      "Move your attention from the face to the edge and frame. Their relationship shows how the reflecting material is supported and presented."
    ]
  },
  {
    "slug": "from-leaf-strip-to-woven-corner",
    "title": "From leaf strip to woven corner.",
    "excerpt": "Follow the change from a flat pattern to a finished edge.",
    "craft": "screwpine",
    "paragraphs": [
      "An interlaced leaf surface is made from repeated strips. A corner asks those repeated parts to change direction while keeping the form together.",
      "Screw-pine weaving in Kerala includes mats and shaped objects. Comparing their broad surfaces with their edges reveals different kinds of work.",
      "Follow one strip through a small woven area, then look at the rim. Its closer finishing helps explain how the object is completed."
    ]
  }
];

export const klTourism = [
  {
    "name": "Aranmula",
    "district": "Pathanamthitta",
    "kind": "Craft village & river heritage",
    "description": "Discover the village setting associated with metal mirrors and its wider cultural landscape.",
    "href": "https://www.keralatourism.org/destination/aranmula-heritage-village/48/"
  },
  {
    "name": "Balaramapuram",
    "district": "Thiruvananthapuram",
    "kind": "Weaving town & material heritage",
    "description": "Explore the setting of a weaving centre and the skills connected with its textiles.",
    "href": "https://www.keralatourism.org/responsible-tourism/life-experience-trails-keralam/trails/balaramapuram"
  },
  {
    "name": "Fort Kochi",
    "district": "Ernakulam",
    "kind": "Coastal streets & built heritage",
    "description": "Discover the historic coastal neighbourhood and its layered architectural setting.",
    "href": "https://www.keralatourism.org/destination/fort-kochi/422/"
  },
  {
    "name": "Kumarakom",
    "district": "Kottayam",
    "kind": "Backwaters & village landscapes",
    "description": "Explore the lakeside setting and village landscapes around Kumarakom.",
    "href": "https://www.keralatourism.org/kumarakom/"
  },
  {
    "name": "Munnar",
    "district": "Idukki",
    "kind": "Hill landscapes & planted estates",
    "description": "Discover the hill setting and wider landscapes around Munnar.",
    "href": "https://www.keralatourism.org/destination/munnar/202/"
  },
  {
    "name": "Kunhimangalam",
    "district": "Kannur",
    "kind": "Metal craft & village heritage",
    "description": "Learn about the village associated with bronze and bell-metal work near Payyannur.",
    "href": "https://www.keralatourism.org/destination/kunhimangalam-village-payyanur/532/"
  }
];
