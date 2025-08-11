
import HeroSection from '@/components/sections/HeroSection';
import BlogSection from '@/components/sections/BlogSection';
import CtaSection from '@/components/sections/CtaSection';
import Sidebar from '@/components/layout/Sidebar';
import { Separator } from '@/components/ui/separator';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Article, ArticleDocument } from '@/types/article';
import CategoriesSection from '@/components/sections/CategoriesSection';

export const revalidate = 3600; // Revalidate every hour

const testimonials = [
  { name: 'Marie Dubois', company: 'Artisan Boulangère', text: 'Mon site web a triplé mes commandes en ligne !', rating: 5, avatar: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTc1NDQ0MDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Pierre Martin', company: 'Consultant RH', text: 'CV refait, 3 entretiens en 1 semaine. Merci !', rating: 5, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbnxlbnwwfHx8fDE3NTQ0NDM4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Sophie Leroy', company: 'Coach Sportive', text: 'Ma campagne pub a attiré 50 nouveaux clients !', rating: 5, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3NTQ0NDA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Julien Petit', company: 'E-commerçant', text: "L'IA me fait gagner 10h par semaine. Incroyable.", rating: 5, avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwb3J0cmFpdHxlbnwwfHx8fDE3NTQ0NDA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
];

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
      slug: data.slug,
      createdAt,
      imageUrl: data.imageUrl || 'https://placehold.co/400x225.png',
    }
  });

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': testimonials.map((testimonial, index) => ({
      '@type': 'Review',
      'itemReviewed': {
        '@type': 'Organization',
        'name': 'AmadiDigiConseils'
      },
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': testimonial.rating,
        'bestRating': '5'
      },
      'name': `Avis de ${testimonial.name}`,
      'author': {
        '@type': 'Person',
        'name': `${testimonial.name}, ${testimonial.company}`
      },
      'reviewBody': testimonial.text,
      'position': index + 1
    }))
  };

  return (
    <>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <main className="lg:col-span-8 xl:col-span-9">
            <BlogSection articles={articles} />
            <Separator className="my-12" />
            <CategoriesSection />
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
