import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { karnataka as page, kaBase, kaArticles } from '@/lib/states/karnataka';
import { stateThemeVars } from '@/lib/states/theme';
export const dynamicParams = false;
export function generateStaticParams() { return kaArticles.map(article => ({ article: article.slug })); }
export function generateMetadata({ params }: { params: { article: string } }): Metadata {
  const article = kaArticles.find(item => item.slug === params.article);
  return article ? { title: `${article.title} | Kalakriti Journal`, description: article.excerpt } : {};
}
export default function RegionalArticlePage({ params }: { params: { article: string } }) {
  const article = kaArticles.find(item => item.slug === params.article);
  const craft = page.crafts!.find(item => item.id === article?.craft);
  if (!article || !craft) notFound();
  return <article className="kk-region-journal kk-ka-journal kk-rj-detail" style={stateThemeVars(page.state)}><div className="kk-rj-section kk-rj-article"><Link className="kk-rj-text-link" href={`${kaBase}#culture`}>The Karnataka journal</Link><header><p className="kk-rj-eyebrow">{craft.district} · {craft.name}</p><h1>{article.title}</h1><p className="kk-rj-lede">{article.excerpt}</p></header><figure><Image src={craft.image!.src} alt={craft.image!.alt} width={craft.image!.width} height={craft.image!.height} priority sizes="(min-width: 901px) 780px, 100vw" /></figure><div className="kk-rj-prose">{article.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div><Link className="kk-rj-button" href={`${kaBase}/crafts/${craft.id}`}>Explore {craft.name}</Link></div></article>;
}
