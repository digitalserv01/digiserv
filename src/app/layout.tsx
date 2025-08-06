import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/hooks/useAuth';

export const metadata: Metadata = {
  title: 'AmadiDigiConseils | Services Digitaux & IA pour Entrepreneurs',
  description: "Agence digitale spécialisée dans la création de sites web, le marketing digital (SEO, Google Ads), la rédaction de CV, l'e-commerce et l'automatisation par l'IA pour les entrepreneurs, TPE et PME en France.",
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
