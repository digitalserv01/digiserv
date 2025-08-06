
interface LegalLayoutProps {
    children: React.ReactNode;
    title: string;
}

export default function LegalLayout({ children, title }: LegalLayoutProps) {
  return (
    <div className="bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-headline text-primary">{title}</h1>
        </header>
        <main className="bg-background p-8 md:p-12 rounded-lg shadow-sm prose prose-lg dark:prose-invert max-w-none prose-h2:font-headline prose-h2:text-primary prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4">
          {children}
        </main>
      </div>
    </div>
  );
}
