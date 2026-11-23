import type { Metadata } from 'next';
import AccountShell from '@/components/account/AccountShell';

export const metadata: Metadata = {
  title: 'Sign in | Kalakriti',
  description: 'Sign in to Kalakriti with your email address and password, or with a one-time email link.',
  robots: { index: false, follow: true },
};

export default function LoginPage() {
  return <AccountShell mode="signin" />;
}
