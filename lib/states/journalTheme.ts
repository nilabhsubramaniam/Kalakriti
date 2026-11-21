/** Small route-facing theme metadata; no catalogue content in navbar/footer imports. */
export const regionalJournals: Record<string, { state: string; className: string; footerClass: string; footerImage: string; native: string; lang: string }> = {
  'jammu-and-kashmir': { state: 'Jammu & Kashmir', className: 'kk-jk-journal', footerClass: 'kk-footer-jk', footerImage: '/images/jk-kani.webp', native: 'دستکاری', lang: 'ur' },
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
