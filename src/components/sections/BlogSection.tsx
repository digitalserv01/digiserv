import React from 'react';
import ArticleCard from '@/components/blog/ArticleCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const blogArticles = [
  {
    id: 1,
    category: 'CV Professionnel',
    title: 'CV ATS-Friendly : Les Secrets pour Passer les Filtres de Recrutement',
    excerpt: 'Découvrez comment optimiser votre CV pour les systèmes de tri automatique et décrocher plus d\'entretiens.',
    image: 'https://placehold.co/400x225.png',
    aiHint: 'resume recruitment',
    date: '15 Jan 2024',
    oldPrice: '25€',
    newPrice: '17€',
    savings: '8€',
    ctaText: 'Optimiser mon CV',
    badgeText: 'Populaire',
    badgeType: 'popular',
  },
  {
    id: 2,
    category: 'Site Web',
    title: 'Site Vitrine 2024 : Tendances Design et Conversion qui Fonctionnent',
    excerpt: 'Les dernières tendances web design françaises qui convertissent vraiment vos visiteurs en clients.',
    image: 'https://placehold.co/400x225.png',
    aiHint: 'website design',
    date: '12 Jan 2024',
    oldPrice: '299€',
    newPrice: '209€',
    savings: '90€',
    ctaText: 'Créer mon Site',
    badgeText: 'Nouveau',
    badgeType: 'new',
  },
  {
    id: 3,
    category: 'Marketing',
    title: 'Google Ads TPE : 5 Stratégies pour Doubler votre ROI en 30 Jours',
    excerpt: 'Comment les petites entreprises françaises peuvent exploser leur chiffre d\'affaires avec Google Ads.',
    image: 'https://placehold.co/400x225.png',
    aiHint: 'marketing chart',
    date: '10 Jan 2024',
    oldPrice: '149€',
    newPrice: '99€',
    savings: '50€',
    ctaText: 'Lancer ma campagne',
    badgeText: 'Offre limitée',
    badgeType: 'limited',
  },
  {
    id: 4,
    category: 'E-commerce',
    title: 'Shopify vs WooCommerce : Guide Complet pour E-commerçants Français',
    excerpt: 'Comparatif détaillé des deux plateformes leaders pour créer votre boutique en ligne rentable.',
    image: 'https://placehold.co/400x225.png',
    aiHint: 'ecommerce online store',
    date: '08 Jan 2024',
    oldPrice: '399€',
    newPrice: '299€',
    savings: '100€',
    ctaText: 'Créer ma boutique',
    badgeText: 'Recommandé',
    badgeType: 'recommended',
  },
  {
    id: 5,
    category: 'IA',
    title: 'ChatGPT pour Entrepreneurs : 20 Prompts qui Révolutionnent votre Business',
    excerpt: 'Les prompts secrets utilisés par les entrepreneurs français pour automatiser et accélérer leur croissance.',
    image: 'https://placehold.co/400x225.png',
    aiHint: 'artificial intelligence',
    date: '05 Jan 2024',
    oldPrice: '79€',
    newPrice: '49€',
    savings: '30€',
    ctaText: 'Maîtriser l\'IA',
    badgeText: 'Tendance',
    badgeType: 'trend',
  },
  {
    id: 6,
    category: 'Stratégie',
    title: 'Transformation Digitale PME : Roadmap Complète 2024',
    excerpt: 'Le guide étape par étape pour digitaliser votre PME sans exploser votre budget.',
    image: 'https://placehold.co/400x225.png',
    aiHint: 'digital transformation',
    date: '03 Jan 2024',
    oldPrice: '199€',
    newPrice: '149€',
    savings: '50€',
    ctaText: 'Auditer ma PME',
    badgeText: 'Expertise',
    badgeType: 'expert',
  },
];

export default function BlogSection() {
  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold font-headline text-primary mb-2">Derniers Conseils</h2>
          <p className="text-lg text-muted-foreground">Guides pratiques et stratégies éprouvées.</p>
        </div>
        <Button variant="outline" className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          Voir tout <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      {/* In-article ad placeholder */}
      <div className="my-8 h-24 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground">Publicité (Responsive)</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
