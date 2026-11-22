/** Small route-facing theme metadata; no catalogue content in navbar/footer imports. */
export const regionalJournals: Record<string, { state: string; className: string; footerClass: string; footerImage: string; native: string; lang: string }> = {
  'jammu-and-kashmir': { state: 'Jammu & Kashmir', className: 'kk-jk-journal', footerClass: 'kk-footer-jk', footerImage: '/images/jk-kani.webp', native: 'دستکاری', lang: 'ur' },
  "andaman-and-nicobar": {"state": "Andaman & Nicobar Island", "className": "kk-an-journal", "footerClass": "kk-footer-an", "footerImage": "/images/an-bamboo.webp", "native": "सागर शिल्प", "lang": "hi"},
  "lakshadweep": {"state": "Lakshadweep", "className": "kk-ld-journal", "footerClass": "kk-footer-ld", "footerImage": "/images/ld-mat.webp", "native": "ദ്വീപ് കല", "lang": "ml"},
  "goa": {"state": "Goa", "className": "kk-ga-journal", "footerClass": "kk-footer-ga", "footerImage": "/images/ga-tile.webp", "native": "कलेचो गांव", "lang": "kok"},
  "dadra-and-nagar-haveli": {"state": "Dadara & Nagar Havelli", "className": "kk-dn-journal", "footerClass": "kk-footer-dn", "footerImage": "/images/dn-warli.webp", "native": "वारली", "lang": "hi"},
  "daman-and-diu": {"state": "Daman & Diu", "className": "kk-dd-journal", "footerClass": "kk-footer-dd", "footerImage": "/images/dd-mat.webp", "native": "દરિયાઈ કલા", "lang": "gu"},
  maharashtra: { state: 'Maharashtra', className: 'kk-mh-journal', footerClass: 'kk-footer-mh', footerImage: '/images/mh-warli.webp', native: 'कलेची भूमी', lang: 'mr' },
  gujarat: { state: 'Gujarat', className: 'kk-gj-journal', footerClass: 'kk-footer-gj', footerImage: '/images/gj-ajrakh.webp', native: 'કલાની ભૂમિ', lang: 'gu' },
  rajasthan: { state: 'Rajasthan', className: 'kk-raj-journal', footerClass: 'kk-footer-raj', footerImage: '/images/raj-sanganer.webp', native: 'रंगों की धरती', lang: 'hi' },
  puducherry: { state: 'Puducherry', className: 'kk-py-journal', footerClass: 'kk-footer-py', footerImage: '/images/py-stitch.webp', native: 'கலைத் துறை', lang: 'ta' },
  telangana: { state: 'Telangana', className: 'kk-tg-journal', footerClass: 'kk-footer-tg', footerImage: '/images/tg-ikat.webp', native: 'కళల నేల', lang: 'te' },
  'andhra-pradesh': { state: 'Andhra Pradesh', className: 'kk-ap-journal', footerClass: 'kk-footer-ap', footerImage: '/images/ap-pen.webp', native: 'కళల భూమి', lang: 'te' },
  'tamil-nadu': { state: 'Tamil Nadu', className: 'kk-tn-journal', footerClass: 'kk-footer-tn', footerImage: '/images/tn-kanchi.webp', native: 'கலைகளின் தாயகம்', lang: 'ta' },
  karnataka: { state: 'Karnataka', className: 'kk-ka-journal', footerClass: 'kk-footer-ka', footerImage: '/images/ka-bidri.webp', native: 'ಕಲೆಗಳ ನಾಡು', lang: 'kn' },
  kerala: { state: 'Kerala', className: 'kk-kl-journal', footerClass: 'kk-footer-kl', footerImage: '/images/kl-kasavu.webp', native: 'കലയുടെ നാട്', lang: 'ml' },
  chandigarh: { state: 'Chandigarh', className: 'kk-ch-journal', footerClass: 'kk-footer-ch', footerImage: '/images/ch-mosaic.webp', native: 'ਕਲਾ ਦਾ ਸ਼ਹਿਰ', lang: 'pa' },
  delhi: { state: 'NCT of Delhi', className: 'kk-dl-journal', footerClass: 'kk-footer-dl', footerImage: '/images/dl-zardozi.webp', native: 'दिल्ली की कारीगरी', lang: 'hi' },
  haryana: { state: 'Haryana', className: 'kk-hr-journal', footerClass: 'kk-footer-hr', footerImage: '/images/hr-durrie.webp', native: 'हरियाणा की कारीगरी', lang: 'hi' },
  punjab: { state: 'Punjab', className: 'kk-pb-journal', footerClass: 'kk-footer-pb', footerImage: '/images/pb-phulkari.webp', native: 'ਕਲਾ ਦੀ ਧਰਤੀ', lang: 'pa' },
  chhattisgarh: { state: 'Chhattisgarh', className: 'kk-cg-journal', footerClass: 'kk-footer-cg', footerImage: '/images/cg-dhokra.webp', native: 'बस्तर की कला', lang: 'hi' },
  'madhya-pradesh': { state: 'Madhya Pradesh', className: 'kk-mp-journal', footerClass: 'kk-footer-mp', footerImage: '/images/mp-gond.webp', native: 'गोंड कला', lang: 'hi' },
  'himachal-pradesh': { state: 'Himachal Pradesh', className: 'kk-hp-journal', footerClass: 'kk-footer-hp', footerImage: '/images/hp-rumal.webp', native: 'चम्बा रुमाल', lang: 'hi' },
  uttarakhand: { state: 'Uttarakhand', className: 'kk-uk-journal', footerClass: 'kk-footer-uk', footerImage: '/images/uk-aipan.webp', native: 'ऐपण', lang: 'hi' },
  'uttar-pradesh': { state: 'Uttar Pradesh', className: 'kk-up-journal', footerClass: 'kk-footer-up', footerImage: '/images/up-banarasi.webp', native: 'उत्तर प्रदेश की कारीगरी', lang: 'hi' },
  jharkhand: { state: 'Jharkhand', className: 'kk-jh-journal', footerClass: 'kk-footer-jh', footerImage: '/images/jh-sohrai.webp', native: 'सोहराय', lang: 'hi' },
  odisha: { state: 'Odisha', className: 'kk-od-journal', footerClass: 'kk-footer-od', footerImage: '/images/od-sambalpuri.webp', native: 'କଳାର ଭୂମି', lang: 'or' },
  'west-bengal': { state: 'West Bengal', className: 'kk-wb-journal', footerClass: 'kk-footer-wb', footerImage: '/images/wb-baluchari.webp', native: 'শিল্পের দেশ', lang: 'bn' },
};
export function journalClassFor(slug: string): string {
  if (slug === 'bihar') return 'kk-bihar-journal';
  return `kk-region-journal ${regionalJournals[slug]?.className ?? ''}`.trim();
}
