import HeroSection from '@/components/sections/HeroSection';
import BlogSection from '@/components/sections/BlogSection';
import CtaSection from '@/components/sections/CtaSection';
import Sidebar from '@/components/layout/Sidebar';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <main className="lg:col-span-8 xl:col-span-9">
            <BlogSection />
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
