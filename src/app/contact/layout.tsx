import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - AMADIGI Agence Digitale Maroc | Devis Gratuit",
  description: "Contactez notre agence digitale maroc pour un devis gratuit. Support WhatsApp 24/7, expertise locale à Casablanca. Création sites web, marketing digital et branding au Maroc.",
  keywords: [
    "contact agence digitale maroc",
    "devis gratuit agence web maroc",
    "contact agence digitale casablanca maroc",
    "support WhatsApp agence digitale maroc",
    "consultation marketing digital maroc",
    "devis création site web maroc",
    "contact AMADIGI",
    "agence communication digitale maroc contact"
  ],
  openGraph: {
    title: "Contact - AMADIGI Agence Digitale Maroc | Devis Gratuit",
    description: "Contactez notre agence digitale maroc pour un devis gratuit. Support WhatsApp 24/7, expertise locale à Casablanca.",
    url: 'https://amadigiconseils.com/contact',
    images: [
      {
        url: '/arc-bloom.png',
        width: 1200,
        height: 630,
        alt: 'Contact AMADIGI - Agence Digitale Maroc',
      },
    ],
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
