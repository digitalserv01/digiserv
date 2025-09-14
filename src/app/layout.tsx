import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMADIGI - Agence Digitale Maroc | Création Sites Web & Marketing Digital",
  description: "Votre agence digitale maroc spécialisée dans la création de sites web, marketing digital, branding et stratégie web. Expertise locale à Casablanca et dans tout le Maroc. Devis gratuit.",
  keywords: [
    "agence digitale maroc",
    "agence digitale au maroc", 
    "agence web digitale maroc",
    "agence communication digitale maroc",
    "agence de communication digitale maroc",
    "agence digitale casablanca maroc",
    "agence marketing digitale maroc",
    "création site web maroc",
    "marketing digital maroc",
    "SEO maroc",
    "branding maroc",
    "stratégie web maroc"
  ],
  authors: [{ name: "AMADIGI" }],
  creator: "AMADIGI",
  publisher: "AMADIGI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://amadigiconseils.com'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-MA': '/',
    },
  },
  openGraph: {
    title: "AMADIGI - Agence Digitale Maroc | Création Sites Web & Marketing Digital",
    description: "Votre agence digitale maroc spécialisée dans la création de sites web, marketing digital, branding et stratégie web. Expertise locale à Casablanca et dans tout le Maroc.",
    url: 'https://amadigiconseils.com',
    siteName: 'AMADIGI',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'AMADIGI - Agence Digitale Maroc',
      },
    ],
    locale: 'fr_MA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AMADIGI - Agence Digitale Maroc",
    description: "Votre agence digitale maroc pour la création de sites web, marketing digital et stratégie web.",
    images: ['/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-MA" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
