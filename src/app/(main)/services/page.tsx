import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Handshake, Lightbulb, ShieldCheck } from 'lucide-react';
import CtaSection from '@/components/sections/CtaSection';

const values = [
  {
    icon: <Handshake className="w-8 h-8 text-accent" />,
    title: 'Partenariat',
    description: 'Votre succès est notre succès. Nous travaillons à vos côtés, en totale transparence, comme une extension de votre équipe.',
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-accent" />,
    title: 'Innovation',
    description: "Nous sommes passionnés par la technologie et l'IA. Nous veillons constamment pour vous proposer les solutions les plus performantes et créatives.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: 'Intégrité',
    description: 'La confiance est le fondement de toute collaboration. Nous nous engageons à une éthique de travail irréprochable et à des conseils honnêtes.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold font-headline text-primary">Rencontrez le fondateur</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Passionné par l'entrepreneuriat et la technologie, Amadi a fondé AmadiDigiConseils avec une mission claire : rendre les outils digitaux de pointe accessibles et profitables pour les TPE et PME en France et au-delà.
            </p>
            <p className="mt-4 text-muted-foreground">
              Après des années d'expérience en développement web et en marketing digital, il a constaté que de nombreux entrepreneurs talentueux peinaient à naviguer dans la complexité du monde numérique. Son objectif est de devenir le partenaire de confiance qui simplifie cette complexité et fournit des résultats concrets, mesurables, et durables.
            </p>
            <p className="mt-6 font-semibold text-primary">
              - Amadi Diallo, Fondateur de amadigiconseils.com
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
              alt="Amadi Diallo, Fondateur"
              width={400}
              height={400}
              className="rounded-full object-cover shadow-lg aspect-square"
              data-ai-hint="professional man portrait"
            />
          </div>
        </div>
      </div>

      <div className="bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline text-primary">Nos Valeurs Fondamentales</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Ce qui nous guide au quotidien dans chaque projet que nous entreprenons.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <CtaSection />
    </>
  );
}
