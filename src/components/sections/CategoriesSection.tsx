import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Code, Megaphone, ShoppingCart, Bot } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    slug: 'cv-emploi',
    title: 'CV & Emploi',
    description: 'Optimisez votre CV, préparez vos entretiens et réussissez votre recherche d\'emploi.',
    icon: <Briefcase className="w-8 h-8 text-accent" />,
  },
  {
    slug: 'developpement-web',
    title: 'Développement Web',
    description: 'De la création de sites vitrines aux plateformes complexes, maîtrisez votre présence en ligne.',
    icon: <Code className="w-8 h-8 text-accent" />,
  },
  {
    slug: 'marketing-digital',
    title: 'Marketing Digital',
    description: 'Attirez plus de clients avec le SEO, la publicité en ligne et les stratégies sur les réseaux sociaux.',
    icon: <Megaphone className="w-8 h-8 text-accent" />,
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce',
    description: 'Lancez et développez votre boutique en ligne, de la logistique à la conversion client.',
    icon: <ShoppingCart className="w-8 h-8 text-accent" />,
  },
  {
    slug: 'ia-automation',
    title: 'IA & Automation',
    description: 'Intégrez l\'intelligence artificielle pour automatiser vos tâches et booster votre productivité.',
    icon: <Bot className="w-8 h-8 text-accent" />,
  },
];

export default function CategoriesSection() {
  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold font-headline text-primary mb-2">Explorer par Catégorie</h2>
          <p className="text-lg text-muted-foreground">Trouvez les articles qui vous intéressent le plus.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.slug} href={`/blog/category/${category.slug}`} className="group">
            <Card className="h-full flex flex-col justify-between hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex justify-center items-center h-16 w-16 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  {category.icon}
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <div className="p-6 pt-0">
                <Button variant="link" className="p-0 text-primary group-hover:text-accent">
                  Voir les articles
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
