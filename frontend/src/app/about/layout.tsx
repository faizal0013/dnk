import Footer from '@/components/Footer';
// import NavBar from '@/components/NavBar';
import type { Metadata } from 'next';

import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Us',
};

const NavBar = dynamic(() => import('@/components/NavBar'), {
  ssr: false,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <section>{children}</section>
      <Footer />
    </>
  );
}
