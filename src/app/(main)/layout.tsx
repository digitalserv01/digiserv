import type { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCta from '@/components/sections/MobileCta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services Digitaux & IA pour Entrepreneurs - AmadiDigiConseils',
  description: "Découvrez nos services : création de sites web sur-mesure, rédaction de CV optimisés ATS, marketing digital (SEO), boutiques e-commerce performantes et automatisation par l'IA.",
};

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileCta />
    </div>
  );
}
