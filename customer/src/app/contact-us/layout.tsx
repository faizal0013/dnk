import Footer from '@/components/Footer';

import type { Metadata } from 'next';

import dynamic from 'next/dynamic';

const NavBar = dynamic(() => import('@/components/NavBar'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Us',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <section>{children}</section>
      <Footer />
    </>
  );
}
