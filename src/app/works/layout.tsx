import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets - AMADIGI Agence Digitale Maroc | Portfolio Créations Web",
  description: "Découvrez nos projets de création de sites web, marketing digital et branding réalisés par notre agence digitale maroc. Portfolio de succès avec Zibran.ma, Younipouf.fr et plus.",
  keywords: [
    "projets agence digitale maroc",
    "portfolio création site web maroc",
    "projets marketing digital maroc",
    "réalisations agence web digitale maroc",
    "cas d'étude agence communication digitale maroc",
    "portfolio AMADIGI",
    "projets e-commerce maroc",
    "créations branding maroc"
  ],
  openGraph: {
    title: "Projets - AMADIGI Agence Digitale Maroc | Portfolio Créations Web",
    description: "Découvrez nos projets de création de sites web, marketing digital et branding réalisés par notre agence digitale maroc.",
    url: 'https://amadigiconseils.com/works',
    images: [
      {
        url: '/sonder-goods.png',
        width: 1200,
        height: 630,
        alt: 'Projets AMADIGI - Agence Digitale Maroc',
      },
    ],
  },
  alternates: {
    canonical: '/works',
  },
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
