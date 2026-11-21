'use client';

import { regionalJournals } from '@/lib/states/journalTheme';
import { usePathname } from 'next/navigation';
import { stateThemeVars } from '@/lib/states/theme';
import Link from 'next/link';
import Image from 'next/image';

export default function SiteFooter() {
  const pathname = usePathname();
  const slug = pathname.startsWith('/state/') ? pathname.split('/')[2] : '';
  const regional = regionalJournals[slug];
  const base = regional ? `/state/${slug}` : '/state/bihar';
  return <footer className={`kk-site-footer ${regional?.footerClass ?? 'kk-footer-mithila'}`} style={regional ? stateThemeVars(regional.state) : undefined}><div className="kk-footer-mural" aria-hidden="true"><Image src={regional?.footerImage ?? '/images/mithila-footer-mural.webp'} alt="" fill sizes="100vw" /></div><div className="kk-site-footer-inner"><div className="kk-footer-brand"><Link href="/" aria-label="Kalakriti — home"><Image className="kk-footer-logo" src="/brand/kalakriti-logo-reverse.webp" alt="Kalakriti — Craft, Culture, Community" width={2148} height={732} sizes="(min-width: 901px) 260px, 220px" /></Link><p className="kk-footer-native kk-deva" lang={regional?.lang ?? 'mai'}>{regional?.native ?? 'मिथिलाक माटि'}</p><p>Many regions. Many hands.<br />A shared love for things made with meaning.</p></div><div><h2>Discover</h2><Link href={regional ? `${base}#collection` : '/#collections'}>{regional ? 'The regional edit' : 'The Mithila edit'}</Link><Link href={regional ? `${base}#crafts` : '/#categories'}>By craft</Link><Link href="/explore">By region</Link></div><div><h2>The stories</h2><Link href={`${base}#culture`}>{regional ? 'The craft journal' : 'Culture of Bihar'}</Link><Link href={regional ? `${base}#visit` : '/#community'}>{regional ? 'Places to discover' : 'Artisans & farmers'}</Link><Link href={`${base}#crafts`}>How it is made</Link></div><div><h2>Kalakriti</h2><Link href="/#about">Our idea</Link><Link href={base}>{regional?.state ?? 'Our first chapter'}</Link><p className="kk-footer-availability">Shopping &amp; subscriptions<br />are coming soon.</p></div></div><div className="kk-site-footer-bottom"><span>© {new Date().getFullYear()} Kalakriti</span><span>Rooted in Mithila. Open to India.</span><span className="kk-footer-farewell">{!regional && <span className="kk-deva" lang="mai">फेर भेंट हएत</span>}<span>Until we meet again</span></span></div></footer>;
}
