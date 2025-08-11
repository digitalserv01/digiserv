

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Informations Légales - AmadiDigiConseils',
  description: 'Consultez nos mentions légales, notre politique de confidentialité et nos conditions générales de vente. La transparence est une de nos valeurs clés.',
  robots: 'noindex, follow', // We don't want legal pages to be the main entry points from search
};

interface LegalLayoutProps {
    children: React.ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  // This layout will automatically wrap the pages in this directory.
  // The page content will be passed as `children`.
  // We can't know the title here, so it should be set in the page itself.
  return (
    <div className="bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* The header with the title is removed from here and should be in each page */}
        <main className="bg-background p-8 md:p-12 rounded-lg shadow-sm prose prose-lg dark:prose-invert max-w-none prose-h1:font-headline prose-h1:text-primary prose-h1:text-4xl prose-h1:sm:text-5xl prose-h1:mb-12 prose-h1:text-center prose-h2:font-headline prose-h2:text-primary prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4">
          {children}
        </main>
      </div>
    </div>
  );
}
