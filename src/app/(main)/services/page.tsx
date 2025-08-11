import React from 'react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Lightbulb, ArrowRight, Code, Briefcase, Megaphone, ShoppingCart, Bot } from 'lucide-react';
import Link from 'next/link';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Nos Services Digitaux & IA | AmadiDigiConseils',
  description: 'Découvrez nos services sur-mesure pour entrepreneurs : création de site vitrine et e-commerce, marketing digital (SEO), rédaction de CV, et intégration d’IA pour automatiser votre business.',
};

const services = [
  {
    title: 'Création de Site Vitrine',
    slug: 'site-vitrine',
    description: "Votre présence en ligne professionnelle. Un site élégant et performant pour présenter votre activité et attirer vos premiers clients.",
    features: ['Design sur-mesure', 'Optimisé pour le SEO local', 'Intégration de formulaire de contact', 'Responsive sur tous les écrans'],
    price: 'dès 209€',
    imageUrl: 'https://images.unsplash.com/photo-1585332889055-059af80a9b5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNXx8amF2YXxlbnwwfHx8fDE3NTQ0NDM5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'modern website design',
    icon: <Code className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Rédaction de CV Professionnel',
    slug: 'cv-pro',
    description: "Décrochez plus d'entretiens avec un CV percutant, optimisé pour les systèmes de suivi des candidatures (ATS).",
    features: ['Analyse de votre profil', 'Mots-clés pertinents', 'Design professionnel et moderne', 'Lettre de motivation en option'],
    price: 'dès 17€',
    imageUrl: 'https://images.unsplash.com/photo-1485988412941-77a35537dae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjdnxlbnwwfHx8fDE3NTQ0NDM4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'professional resume document',
    icon: <Briefcase className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Marketing Digital & SEO',
    slug: 'marketing',
    description: "Augmentez votre visibilité et attirez un trafic qualifié grâce à des stratégies de référencement naturel et de publicité ciblée.",
    features: ['Audit SEO complet', 'Gestion de campagnes Google Ads', 'Stratégie de contenu', 'Reporting mensuel'],
    price: 'dès 99€/mois',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzZW98ZW58MHx8fHwxNzU0NDQzNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'digital marketing analytics',
    icon: <Megaphone className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Boutique E-commerce',
    slug: 'e-commerce',
    description: "Vendez vos produits en ligne avec une boutique performante, sécurisée et facile à gérer au quotidien.",
    features: ['Basée sur Shopify ou WooCommerce', 'Intégration de paiement sécurisé', 'Optimisation de la conversion', 'Formation à la gestion'],
    price: 'dès 499€',
    imageUrl: 'https://images.unsplash.com/photo-1727174439417-8c2d2c73fd1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxN3x8ZS1jb21tZXJjZXxlbnwwfHx8fDE3NTQ0NDM3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'online store products',
    icon: <ShoppingCart className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Automatisation & IA',
    slug: 'ia-automation',
    description: "Gagnez du temps et de l'efficacité en automatisant vos tâches répétitives grâce à l'intelligence artificielle.",
    features: ['Analyse de vos processus', 'Développement de chatbots', 'Automatisation des e-mails', 'Intégration d\'outils IA'],
    price: 'Sur devis',
    imageUrl: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhaXxlbnwwfHx8fDE3NTQzNDYwODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'artificial intelligence robot',
    icon: <Bot className="w-8 h-8 text-accent" />,
  },
];

export default function ServicesPage() {
  const whatsappUrl = "https://wa.me/212699020158?text=Bonjour%20!%20J'ai%20vu%20votre%20site%20et%20je%20suis%20int%C3%A9ress%C3%A9(e).";

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Nos Services Digitaux & IA | AmadiDigiConseils',
    description: 'Découvrez nos services sur-mesure pour entrepreneurs : création de site vitrine et e-commerce, marketing digital (SEO), rédaction de CV, et intégration d’IA pour automatiser votre business.',
    url: 'https://www.amadigiconseils.com/services',
    mainEntity: services.map(service => ({
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: 'AmadiDigiConseils',
        },
        serviceType: service.title,
        offers: {
            '@type': 'Offer',
            price: service.price.replace(/[^0-9.]/g, ''), // Extract number
            priceCurrency: 'EUR'
        }
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-background text-foreground">
        {/* Hero/Philosophy Section */}
        <div className="bg-secondary/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Lightbulb className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-headline text-primary !leading-tight text-balance">
              On ne vend pas un service, on réalise une vision.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Votre projet est unique. C'est pourquoi nous voulons d'abord entendre votre idée, comprendre vos ambitions et ensuite, seulement, construire la solution digitale qui vous mènera au succès. Le prix n'est qu'une conséquence de la valeur que nous créons ensemble.
            </p>
            <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90" asChild>
              <Link href={whatsappUrl} target="_blank">
                Racontez-nous votre idée
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Services Grid and Video Section - Now handled by a client component */}
        <ServicesPageClient services={services} />
      </div>
    </>
  );
}
