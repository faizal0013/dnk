import Footer from '@/components/Footer';

import type { Metadata } from 'next';

import dynamic from 'next/dynamic';

const NavBar = dynamic(() => import('@/components/NavBar'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Women',
  description: 'Women',
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
