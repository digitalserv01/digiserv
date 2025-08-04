import HeroSection from '@/components/sections/HeroSection';
import BlogSection from '@/components/sections/BlogSection';
import CtaSection from '@/components/sections/CtaSection';
import Sidebar from '@/components/layout/Sidebar';
import { Separator } from '@/components/ui/separator';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Article, ArticleDocument } from '@/types/article';

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  const articlesCol = collection(db, 'articles');
  const q = query(articlesCol, orderBy('createdAt', 'desc'), limit(6));
  const articlesSnapshot = await getDocs(q);
  const articles: Article[] = articlesSnapshot.docs.map(doc => {
    const data = doc.data() as ArticleDocument;
    // Handle server-side timestamp conversion safely
    const createdAt = data.createdAt?.toJSON() || new Date().toJSON();
    return {
      id: doc.id,
      ...data,
      createdAt,
    }
  });

  return (
    <>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <main className="lg:col-span-8 xl:col-span-9">
            <BlogSection articles={articles} />
          </main>
          
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-24 space-y-8">
              <Sidebar />
            </div>
          </aside>
        </div>

        {/* Sidebar content for mobile, rendered below main content */}
        <div className="mt-12 space-y-8 lg:hidden">
          <Separator />
          <h2 className="text-2xl font-headline font-bold text-primary text-center">Nos Services & Garanties</h2>
          <Sidebar />
        </div>
      </div>
      
      <CtaSection />
    </>
  );
}
