import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import AccountForm from '@/components/account/AccountForm';
import AccountBackdrop from '@/components/account/AccountBackdrop';
import { Motif } from '@/components/ornament/Motifs';
import { type AccountMode } from '@/lib/account/validation';
import { stateThemeVars } from '@/lib/states/theme';

const HEADINGS: Record<AccountMode, { eyebrow: string; title: string; lead: string }> = {
  signin: {
    eyebrow: 'Welcome back',
    title: 'Your next discovery awaits.',
    lead: 'Step back into a world of craft, culture and the stories behind them.',
  },
  signup: {
    eyebrow: 'Begin your journey',
    title: 'Make room for something meaningful.',
    lead: 'A place for your curiosity. Start your Kalakriti journey here.',
  },
};

/** The static form shell shares Mithila's palette; only the backdrop and form hydrate. */
export default function AccountShell({ mode }: { mode: AccountMode }) {
  const heading = HEADINGS[mode];
  return <article className="kk-auth-page kk-auth-immersive" data-account-mode={mode} style={stateThemeVars('Bihar')}>
    <div className="kk-auth-layout">
      <AccountBackdrop />
      <section className="kk-auth-card" aria-labelledby="account-title">
        <div className="kk-auth-card-heading"><Motif name="fish" size={34} strokeWidth={1.3} className="kk-auth-mark" /><p className="kk-auth-eyebrow">{heading.eyebrow}</p></div>
        <h1 id="account-title">{heading.title}</h1>
        <p className="kk-auth-lead">{heading.lead}</p>
        <nav className="kk-auth-switch" aria-label="Account">
          <Link href="/login" aria-current={mode === 'signin' ? 'page' : undefined}>Sign in</Link>
          <Link href="/signup" aria-current={mode === 'signup' ? 'page' : undefined}>Create account</Link>
        </nav>
        <AccountForm key={mode} mode={mode} />
        <p className="kk-auth-alt">{mode === 'signin' ? <>New to Kalakriti? <Link href="/signup">Create an account</Link></> : <>Already have an account? <Link href="/login">Sign in</Link></>}</p>
      </section>
    </div>
    <footer className="kk-auth-page-footer"><p>Rooted in Mithila. Open to India.</p><Link href="/explore">Keep exploring<ArrowUpRight size={15} aria-hidden="true" /></Link></footer>
  </article>;
}
