import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import AnimatedSection from '@/components/about/AnimatedSection';
import HeroAbout from '@/components/about/HeroAbout';
import Portfolio from '@/components/about/Portfolio';
import Culture from '@/components/about/Culture';
import Values from '@/components/about/Values';
import Link from 'next/link';


export default function AboutPage() {
  const whatsappUrl = "https://wa.me/212699020158?text=Bonjour%20!%20J'ai%20vu%20votre%20site%20et%20je%20suis%20int%C3%A9ress%C3%A9(e).";

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <HeroAbout />

      {/* Portfolio Section */}
      <Portfolio />
      
      {/* Full-Screen Video Section */}
      <div className="py-20 sm:py-32">
        <AnimatedSection>
          <div className="relative h-[60vh] lg:h-[80vh] bg-secondary flex items-center justify-center overflow-hidden">
            <video
              src="/assets/videos/creations.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
             <div className="relative text-center z-10 p-4 bg-black/50 rounded-lg">
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold font-headline text-white">Nos créations en mouvement : projet d'entraînement binova.it</h2>
                <p className="mt-2 text-lg text-white/80">Donner vie aux idées.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Our Culture Section */}
      <Culture />
      
        {/* Values Section */}
        <Values />

      {/* CTA Section */}
      <div className="bg-primary">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <AnimatedSection>
                <h2 className="text-3xl lg:text-4xl font-bold font-headline text-white mb-4">
                Une idée ? Construisons son univers.
                </h2>
                <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Arrêtez de chercher un freelance. Cherchez un partenaire. Parlons de votre vision, pas seulement de votre budget.
                </p>
                
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base" asChild>
                  <Link href={whatsappUrl} target="_blank">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Démarrer la conversation sur WhatsApp
                  </Link>
                </Button>
            </AnimatedSection>
      </div>
      </div>
    </div>
  );
}
