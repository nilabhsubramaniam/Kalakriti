import type { ImageAsset, StatePage } from './types';

const study = (name: string, alt: string, width = 1024, height = 1024): ImageAsset => ({ src: `/images/dl-${name}.webp`, alt, width, height, credit: 'Kalakriti regional craft illustration' });
export const dlBase = '/state/delhi';

export const delhi: StatePage = {
  slug: 'delhi', state: 'NCT of Delhi', title: 'Delhi', native: 'दिल्ली की कारीगरी',
  tagline: 'Discover Delhi through its embroidery, carved surfaces and workshop traditions.',
  intro: 'Explore zardozi, wood carving, terracotta, papier-mâché, metal engraving and reed chik blinds. Follow six collections through the materials and details of a city where craft is both made and exchanged.',
  hero: study('hero', 'Delhi craft arrangement with plum embroidered cloth, a carved wooden box, terracotta vase, painted paper box, engraved tray and reed chik blind', 1536, 1024),
  districts: [
    {"id": "Old Delhi", "name": "Old Delhi", "note": "Explore Zardozi embroidery.", "crafts": ["zardozi"]},
    {"id": "Uttam Nagar", "name": "Uttam Nagar", "note": "Explore Delhi terracotta.", "crafts": ["pottery"]},
    {"id": "City workshops", "name": "City workshops", "note": "Explore Delhi wood carving, Papier-mâché craft, Naqqashi metal engraving, Chik blind-making.", "crafts": ["wood", "paper", "engraving", "chik"]},
  ],
  crafts: [
    { id: "zardozi", name: "Zardozi embroidery", district: "Old Delhi", motif: "paisley", hook: "Raised threadwork brings light and depth to a cloth surface.", story: "Zardozi is part of Delhi’s embroidery landscape, while Kinari Bazaar in Old Delhi is associated with zari and zardozi trimmings. Floral lines and raised details create a surface that changes as light moves across it.", technique: "Decorative threads and embellishments are worked onto a prepared textile ground. Look at the spacing of the design, the height of a raised line and the way the border meets the open cloth.", makers: "Designers, embroiderers and textile finishers contribute pattern planning, needlework and finishing. Materials and techniques vary by design and maker.", image: study("zardozi", "Deep-plum textile with raised antique-gold-coloured floral embroidery and a broad plain ground") },
    { id: "wood", name: "Delhi wood carving", district: "City workshops", motif: "lotus", hook: "Shallow cuts turn grain and shadow into a flowing floral surface.", story: "Wood carving is part of Delhi’s documented craft landscape, from smaller decorative objects to furnishings. Relief work makes a pattern visible through changes of depth rather than through a printed line.", technique: "Material is removed around a planned form to leave raised details. Follow a leaf from its outline into the deeper cuts, then notice how the border completes the surface.", makers: "Woodworkers, carvers and finishers bring knowledge of tools, grain and surface treatment. The timber species and finish depend on the individual object.", image: study("wood", "Dark-brown wooden keepsake box with carved floral relief on its lid and a restrained border") },
    { id: "pottery", name: "Delhi terracotta", district: "Uttam Nagar", motif: "kalash", hook: "A curve, an incised line and an earthen surface reveal the shaping of clay.", story: "Terracotta is part of Delhi’s craft landscape, with pottery workshops in Uttam Nagar offering a local connection. Rounded vessels and smaller decorative objects make the relationship between shaping and surface easy to explore.", technique: "Clay is prepared and formed, then dried and fired. Look at the curve of the body, the finish around the mouth and the marks made before firing.", makers: "Potters bring preparation, shaping, decoration and firing skills to the work. Processes vary with the object and workshop.", image: study("pottery", "Warm reddish terracotta vase with a short flared neck and modest incised leaf marks") },
    { id: "paper", name: "Papier-mâché craft", district: "City workshops", motif: "lotus", hook: "A lightweight form becomes a small canvas for painted detail.", story: "Papier-mâché appears in Delhi’s documented craft landscape alongside other paper work. Shaped paper forms provide surfaces for painting and decoration. This collection looks at a contemporary floral composition without assigning it an exclusive regional style.", technique: "Paper material is formed, dried and prepared for finishing before decoration is applied. Notice the meeting of lid and body, the painted edge and the direction of the smaller brush marks.", makers: "Form makers, painters and finishers contribute different skills. Surface treatment and construction vary with the object.", image: study("paper", "Small oval muted-blue papier-mâché box painted with plum, cream and ochre floral vines") },
    { id: "engraving", name: "Naqqashi metal engraving", district: "City workshops", motif: "paisley", hook: "Fine cut lines turn a reflective surface into a quiet pattern.", story: "Naqqashi, or engraving, forms part of Delhi’s documented metal craft landscape. Fine lines, repeated borders and small floral details give a metal surface another scale of interest.", technique: "A design is marked and worked into the surface with suitable engraving tools. Follow the outline of one motif, then compare the cut line with the unworked ground around it.", makers: "Designers, engravers and finishers bring drawing, tool control and surface preparation together. Metals and finishes differ between objects.", image: study("engraving", "Round brass-coloured decorative tray with a fine engraved floral rim and small centre rosette") },
    { id: "chik", name: "Chik blind-making", district: "City workshops", motif: "bamboo", hook: "Parallel reeds and small bindings build an ordered, flexible surface.", story: "Chik making is a documented Delhi craft using natural materials to create blinds and screens. Its repeated lines invite attention to the relationship between the slats, their bindings and the finished edges.", technique: "Prepared slender slats are aligned and linked with thread or cord, then the edges are finished. Look at the spacing and bindings, and how the surface changes where it rolls.", makers: "Chik makers select, arrange, bind and finish the material. Measurement and edge finishing help bring the parts into a coherent whole.", image: study("chik", "Natural reed chik blind partly rolled with cotton-thread bindings and a narrow muted-indigo border") },
  ],
  products: [
    { id: "dl-zardozi", name: "Plum Floral Embroidered Stole", craft: "zardozi", price: 4200, spec: "70 × 200 cm · embellished textile", blurb: "Deep plum cloth with raised gold-coloured floral work along a broad edge.", image: study("zardozi", "Deep-plum textile with raised antique-gold-coloured floral embroidery and a broad plain ground") },
    { id: "dl-wood", name: "Carved Floral Keepsake Box", craft: "wood", price: 2600, spec: "22 × 14 cm · carved wood", blurb: "A dark wooden box with shallow floral relief and a restrained carved border.", image: study("wood", "Dark-brown wooden keepsake box with carved floral relief on its lid and a restrained border") },
    { id: "dl-pottery", name: "Terracotta Leaf Vase", craft: "pottery", price: 1100, spec: "22 cm · decorative fired clay", blurb: "A rounded earthen form with a short flared neck and modest incised marks.", image: study("pottery", "Warm reddish terracotta vase with a short flared neck and modest incised leaf marks") },
    { id: "dl-paper", name: "Blue Floral Papier-Mâché Box", craft: "paper", price: 1300, spec: "18 × 12 cm · painted paper craft", blurb: "A lightweight oval box with muted-blue ground and fine painted floral vines.", image: study("paper", "Small oval muted-blue papier-mâché box painted with plum, cream and ochre floral vines") },
    { id: "dl-engraving", name: "Engraved Floral Tray", craft: "engraving", price: 2400, spec: "25 cm diameter · decorative metalwork", blurb: "A brass-coloured tray with a finely worked floral rim and small central rosette.", image: study("engraving", "Round brass-coloured decorative tray with a fine engraved floral rim and small centre rosette") },
    { id: "dl-chik", name: "Indigo-Edge Reed Chik", craft: "chik", price: 1800, spec: "60 × 90 cm · bound reed blind", blurb: "Natural parallel reeds linked by fine bindings and a narrow indigo-coloured edge.", image: study("chik", "Natural reed chik blind partly rolled with cotton-thread bindings and a narrow muted-indigo border") },
  ],
};

export const dlArticles = [
  {
    "slug": "the-height-of-a-thread",
    "title": "The height of a thread.",
    "excerpt": "Look at the raised details inside a zardozi composition.",
    "craft": "zardozi",
    "paragraphs": [
      "Raised embroidery catches light differently from the open cloth around it. A small floral line can create depth before colour is even considered.",
      "Zardozi belongs to Delhi’s varied embroidery landscape. Looking at one worked area makes it easier to notice the placement of the thread and the relationship between the motif and its ground.",
      "Follow a line from a broad curve into a smaller detail. Its changing height and direction help reveal the decisions inside the design."
    ]
  },
  {
    "slug": "a-cut-line-in-metal",
    "title": "A cut line in metal.",
    "excerpt": "See how engraving changes a reflective surface.",
    "craft": "engraving",
    "paragraphs": [
      "A smooth metal surface reflects its surroundings. An engraved line interrupts that reflection, giving the eye a pattern to follow.",
      "Naqqashi is included in Delhi’s documented craft landscape. On a decorative tray, a narrow border can hold much of the visual detail while leaving the centre open.",
      "Begin with one small leaf or curve. Compare the cut line with the plain ground, then step back to see how repeated details make the border feel continuous."
    ]
  },
  {
    "slug": "the-rhythm-of-a-reed-blind",
    "title": "The rhythm of a reed blind.",
    "excerpt": "Follow the slats, bindings and finished edge of a chik.",
    "craft": "chik",
    "paragraphs": [
      "A chik blind is made from repeated parts. Slender slats sit beside one another, held in relation by thread or cord.",
      "Delhi’s chik-making tradition offers a way to look at simple construction closely. The spacing of a binding can become as visually important as the natural variation of the material.",
      "Look first at a flat section, then at the rolled edge. Seeing both helps connect the repeated surface to the way the finished blind moves."
    ]
  }
];

export const dlTourism = [
  {
    "name": "Red Fort",
    "district": "Old Delhi",
    "kind": "Fort & architectural heritage",
    "description": "Discover the fort complex and its place in Delhi’s historic cityscape.",
    "href": "https://culture.gov.in/red-fort-complex"
  },
  {
    "name": "Qutb complex",
    "district": "Mehrauli",
    "kind": "Architecture & archaeology",
    "description": "Explore the monuments and carved surfaces of the Qutb complex.",
    "href": "https://delhitourism.gov.in/tourist_place/qutab_minar.html"
  },
  {
    "name": "Humayun’s Tomb",
    "district": "Nizamuddin",
    "kind": "Garden tomb & built heritage",
    "description": "Learn about the garden setting and architecture of this historic tomb complex.",
    "href": "https://delhitourism.gov.in/tourist_place/humayun_tomb.html"
  },
  {
    "name": "National Crafts Museum",
    "district": "Bhairon Marg",
    "kind": "Craft collections & material culture",
    "description": "Explore the museum’s collections and the varied craft traditions they introduce.",
    "href": "https://www.nationalcraftsmuseum.nic.in/"
  },
  {
    "name": "Dilli Haat",
    "district": "INA",
    "kind": "Craft market & regional exchange",
    "description": "Discover a Delhi meeting place for crafts and makers from across India.",
    "href": "https://www.delhitourism.gov.in/shopping/dilli_haat.html"
  },
  {
    "name": "Sunder Nursery",
    "district": "Nizamuddin",
    "kind": "Gardens & conserved heritage",
    "description": "Explore the garden landscape and conserved monuments near Humayun’s Tomb.",
    "href": "https://www.sundernursery.org/"
  }
];
