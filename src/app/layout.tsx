import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/hooks/useAuth';

export const metadata: Metadata = {
  title: 'AmadiDigiConseils | Agence Digitale & IA pour Entrepreneurs',
  description: "Agence digitale spécialisée dans la création de sites web, marketing digital (SEO, Google Ads), rédaction de CV et automatisation par l'IA pour TPE/PME en France. Boostez votre croissance.",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: 'https://www.amadigiconseils.com',
      name: 'AmadiDigiConseils',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.amadigiconseils.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
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
