import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { biharArticles, biharCraftHref } from '@/lib/states/biharNavigation';
import { stateThemeVars } from '@/lib/states/theme';

export const dynamicParams = false;

export function generateStaticParams() {
  return biharArticles.map(article => ({ article: article.slug }));
}

export function generateMetadata({ params }: { params: { article: string } }): Metadata {
  const article = biharArticles.find(item => item.slug === params.article);
  return article ? { title: `${article.title} · Mithila journal | Kalakriti`, description: article.excerpt } : {};
}

export default function BiharArticlePage({ params }: { params: { article: string } }) {
  const article = biharArticles.find(item => item.slug === params.article);
  if (!article) notFound();
  return <article className="kk-bihar-journal kk-bj-detail-page" data-state="bihar" style={stateThemeVars('Bihar')}>
    <nav className="kk-bj-nav" aria-label="Journal navigation"><div><Link href="/state/bihar#culture">Mithila journal</Link><Link href="/state/bihar#crafts">Bihar collections</Link><Link href={biharCraftHref('madhubani')}>Madhubani Painting</Link></div></nav>
    <div className="kk-bj-section kk-bj-article-layout"><div className="kk-bj-prose-panel"><p className="kk-bj-eyebrow">Bihar · The Mithila journal</p><h1>{article.title}</h1><figure className="kk-bj-article-image"><Image src={article.image.src} alt={`Artwork accompanying ${article.title.toLowerCase()}`} width={article.image.width} height={article.image.height} priority sizes="(min-width: 901px) 760px, 100vw" /></figure><p className="kk-bj-article-body">{article.body}</p><div className="kk-bj-actions"><Link className="kk-bj-button" href={biharCraftHref('madhubani')}>View Madhubani collection</Link><Link className="kk-bj-text-link" href="/state/bihar#culture">More from the journal</Link></div></div></div>
  </article>;
}
