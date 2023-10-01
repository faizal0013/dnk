import Footer from '@/components/Footer';

import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

const NavBar = dynamic(() => import('@/components/NavBar'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar transparent />
      <section className="bg-[#f5f7f9] py-16">{children}</section>
      <Footer />
    </>
  );
}
