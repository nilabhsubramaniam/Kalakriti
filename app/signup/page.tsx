import type { Metadata } from 'next';
import AccountShell from '@/components/account/AccountShell';

export const metadata: Metadata = {
  title: 'Create an account | Kalakriti',
  description: 'Create a Kalakriti account with your name and email address.',
  robots: { index: false, follow: true },
};

export default function SignupPage() {
  return <AccountShell mode="signup" />;
}
