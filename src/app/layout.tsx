import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/hooks/useAuth';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.amadigiconseils.com'),
  title: {
    default: 'AmadiDigiConseils | Agence Digitale & IA pour Entrepreneurs',
    template: '%s | AmadiDigiConseils',
  },
  description: "Agence digitale spécialisée dans la création de sites web, marketing digital (SEO, Google Ads), rédaction de CV et automatisation par l'IA pour TPE/PME en France. Boostez votre croissance.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'AmadiDigiConseils | Agence Digitale & IA pour Entrepreneurs',
    description: "Boostez votre croissance avec nos services de création de sites web, marketing digital (SEO), et automatisation par l'IA.",
    url: 'https://www.amadigiconseils.com',
    siteName: 'AmadiDigiConseils',
    images: [
      {
        url: 'https://www.amadigiconseils.com/og-image.png', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'AmadiDigiConseils - Votre Partenaire de Croissance Digitale',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AmadiDigiConseils | Agence Digitale & IA pour Entrepreneurs',
    description: "Services digitaux pour TPE/PME en France. Sites web, SEO, IA. Boostez votre croissance.",
    images: ['https://www.amadigiconseils.com/og-image.png'], // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'AmadiDigiConseils',
    url: 'https://www.amadigiconseils.com',
    logo: 'https://www.amadigiconseils.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+212-699-020-158',
      contactType: 'customer service',
      email: 'nexusai.maroc@outlook.com',
      areaServed: 'FR',
      availableLanguage: 'French'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Oqba Avenue, Agdal',
      addressLocality: 'Rabat',
      addressCountry: 'MA'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.amadigiconseils.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    sameAs: [
      "https://www.facebook.com/your-profile",
      "https://www.linkedin.com/your-profile"
    ]
  };
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
