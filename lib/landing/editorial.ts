import { themeFor } from '@/lib/stateThemes';

/** Editorial presentation only. Regional facts and routes remain in the state registry. */
export const regionalStudies = [
  { state: 'Bihar', craft: 'Sujani embroidery', image: 'sujani-stitch-study', detail: 'A story told through cloth and stitch.', kind: 'Embroidery', href: '/state/bihar#craft-sujani' },
  { state: 'Tamil Nadu', craft: 'Kanjivaram silk', image: 'tamil-silk-workshop', detail: 'Colour, woven borders and the work of the loom.', kind: 'Weaving' },
  { state: 'Kerala', craft: 'Kasavu textiles', image: 'kerala-weaving-study', detail: 'Ivory cloth and the quiet beauty of gold.', kind: 'Weaving' },
  { state: 'Punjab', craft: 'Phulkari', image: 'phulkari-stitch-study', detail: 'A field of colour, worked in thread.', kind: 'Embroidery' },
  { state: 'Uttar Pradesh', craft: 'Chikankari', image: 'chikankari-stitch-study', detail: 'Delicate detail in a softer palette.', kind: 'Embroidery' },
  { state: 'Gujarat', craft: 'Kutch embroidery', image: 'kutch-stitch-study', detail: 'A conversation of geometry, colour and light.', kind: 'Embroidery' },
  { state: 'West Bengal', craft: 'Kantha', image: 'kantha-stitch-study', detail: 'Cloth brought to life through running stitches.', kind: 'Embroidery' },
  { state: 'Jammu & Kashmir', craft: 'Kashida', image: 'kashida-stitch-study', detail: 'Floral forms and a finely worked surface.', kind: 'Embroidery' },
];

export const regionalStories = [
  { state: 'Bihar', craftIndex: 0, native: 'मिथिलाक माटि', lang: 'mai', title: 'Mithila: a story in every line', text: 'Explore Madhubani painting and Sujani embroidery: two ways Bihar carries stories through line, cloth and handwork.', image: 'mithila-courtyard', alt: 'Editorial illustration of a painter working in a Mithila-inspired courtyard', href: '/state/bihar#culture' },
  { state: 'Tamil Nadu', craftIndex: 0, native: 'கலைகளின் தாயகம்', lang: 'ta', title: 'Tamil Nadu: colour on the loom', text: 'Discover Kanjivaram silk and woven borders alongside Tamil Nadu’s painting, bronze and Kolam traditions.', image: 'tamil-silk-workshop', alt: 'Editorial illustration of a woman at a silk loom in a Tamil Nadu-inspired workspace', href: '/state/tamil-nadu' },
  { state: 'Kerala', craftIndex: 1, native: 'കലയുടെ നാട്', lang: 'ml', title: 'Kerala: the elegance of restraint', text: 'Follow Kasavu textiles into Kerala’s wider craft world, from coir work to Aranmula metal mirrors.', image: 'kerala-weaving-study', alt: 'Editorial illustration of an ivory and gold textile at a Kerala-inspired loom', href: '/state/kerala' },
  { state: 'Punjab', craftIndex: 0, native: themeFor('Punjab').script.native, lang: 'pa', title: 'Punjab: a field of colour', text: 'Discover Phulkari embroidery alongside Punjab’s leather and metalwork traditions, with flower-work at the heart of this chapter.', image: 'phulkari-stitch-study', alt: 'Illustrative Phulkari-inspired embroidery study with colourful geometric flowers', href: '/state/punjab' },
  { state: 'Gujarat', craftIndex: 3, native: themeFor('Gujarat').script.native, lang: 'gu', title: 'Gujarat: a conversation in cloth', text: 'Explore Kutch embroidery alongside Bandhani, Patola and Ajrakh: different expressions of Gujarat’s regional textile heritage.', image: 'kutch-stitch-study', alt: 'Illustrative Kutch-inspired mirrorwork and embroidery study', href: '/state/gujarat' },
  { state: 'West Bengal', craftIndex: 0, native: themeFor('West Bengal').script.native, lang: 'bn', title: 'West Bengal: stories in stitches', text: 'Follow Kantha embroidery into a wider world of textiles, from Baluchari silk and Jamdani to the region’s other crafts.', image: 'kantha-stitch-study', alt: 'Illustrative Kantha-inspired quilt study with floral running stitches', href: '/state/west-bengal' },
];
