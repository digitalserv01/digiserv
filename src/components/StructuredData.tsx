import Script from 'next/script';

interface StructuredDataProps {
  data: Record<string, unknown>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
}

// Organization Schema for AMADIGI
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AMADIGI",
  "alternateName": "Agence Digitale Maroc",
  "url": "https://amadigiconseils.com",
  "logo": "https://amadigiconseils.com/logo.webp",
  "description": "Agence digitale maroc spécialisée dans la création de sites web, marketing digital, branding et stratégie web au Maroc. Notre agence web digitale maroc transforme vos idées en succès digital.",
  "foundingDate": "2013",
  "founder": {
    "@type": "Person",
    "name": "AMADIGI Founder"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Casablanca",
    "addressCountry": "MA",
    "addressRegion": "Casablanca-Settat"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+212-6-99-02-01-58",
    "contactType": "customer service",
    "availableLanguage": ["French", "Arabic", "English"],
    "areaServed": "MA"
  },
  "sameAs": [
    "https://github.com/madaffrager",
    "https://www.annuairedesavocats.ma/",
    "https://wa.me/212699020158"
  ],
  "serviceArea": {
    "@type": "Country",
    "name": "Morocco"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Digitaux",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Création de Sites Web",
          "description": "Sites vitrines et e-commerce sur mesure avec WordPress et Next.js"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Marketing Digital & SEO",
          "description": "Stratégie de contenu, SEO local et international, netlinking"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Branding & Design",
          "description": "Identité visuelle, direction artistique, conception graphique"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automatisation & IA",
          "description": "Intégration d'outils IA et pipelines d'automatisation marketing"
        }
      }
    ]
  }
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AMADIGI - Agence Digitale Maroc",
  "alternateName": "Agence Web Digitale Maroc",
  "url": "https://amadigiconseils.com",
  "description": "Votre agence digitale au Maroc pour la création de sites web, marketing digital et stratégie web. Expertise locale à Casablanca et dans tout le Maroc.",
  "publisher": {
    "@type": "Organization",
    "name": "AMADIGI",
    "url": "https://amadigiconseils.com"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://amadigiconseils.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "fr-MA"
};

// FAQ Schema
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quels sont les services proposés par votre agence digitale maroc ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Notre agence digitale maroc offre une gamme complète de services : création de sites web, développement d'applications mobiles, stratégies marketing digital, référencement SEO/SEA, gestion des réseaux sociaux, et conception graphique."
      }
    },
    {
      "@type": "Question",
      "name": "Combien coûte la création d'un site web au Maroc ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les tarifs varient selon la complexité du projet. Un site vitrine commence à partir de 8 000 MAD, tandis qu'un site e-commerce démarre à 15 000 MAD. Nous proposons des devis personnalisés gratuits."
      }
    },
    {
      "@type": "Question",
      "name": "Dans quelles villes du Maroc intervenez-vous ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Notre agence digitale casablanca maroc dessert tout le territoire national. Nous avons des équipes à Casablanca, Rabat, Marrakech et proposons nos services dans toutes les régions du Maroc."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est le délai de livraison d'un projet digital ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les délais dépendent de la complexité : 2-3 semaines pour un site vitrine, 4-6 semaines pour un site e-commerce, et 6-12 semaines pour des applications sur mesure. Nous respectons toujours les délais convenus."
      }
    },
    {
      "@type": "Question",
      "name": "Proposez-vous un accompagnement après la livraison ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, notre agence web digitale maroc assure un suivi post-livraison avec maintenance, mises à jour de sécurité, formation aux outils, et support technique pendant 3 mois minimum."
      }
    }
  ]
};

// Local Business Schema for Contact Page
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://amadigiconseils.com/#organization",
  "name": "AMADIGI - Agence Digitale Maroc",
  "image": "https://amadigiconseils.com/logo.webp",
  "description": "Agence digitale maroc spécialisée dans la création de sites web, marketing digital et stratégie web. Services professionnels à Casablanca et dans tout le Maroc.",
  "url": "https://amadigiconseils.com",
  "telephone": "+212-6-99-02-01-58",
  "email": "contact@amadigi.ma",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Casablanca",
    "addressLocality": "Casablanca",
    "addressRegion": "Casablanca-Settat",
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.5731",
    "longitude": "-7.5898"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$$",
  "currenciesAccepted": "MAD",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "areaServed": {
    "@type": "Country",
    "name": "Morocco"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Digitaux Maroc",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Création de Sites Web",
          "description": "Sites vitrines et e-commerce sur mesure"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Marketing Digital",
          "description": "SEO, SEA, réseaux sociaux et stratégie de contenu"
        }
      }
    ]
  }
};

// Breadcrumb Schema
export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Creative Work Schema for Projects
export const creativeWorkSchema = (project: {
  name: string;
  description: string;
  image: string;
  url?: string;
  creator: string;
  dateCreated?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": project.name,
  "description": project.description,
  "image": project.image,
  "url": project.url,
  "creator": {
    "@type": "Organization",
    "name": project.creator
  },
  "dateCreated": project.dateCreated,
  "inLanguage": "fr-MA"
});

// Collection Page Schema for Works Page
export const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Projets - AMADIGI Agence Digitale Maroc",
  "description": "Découvrez nos projets de création de sites web, marketing digital et branding réalisés pour nos clients au Maroc.",
  "url": "https://amadigiconseils.com/works",
  "mainEntity": {
    "@type": "ItemList",
    "name": "Portfolio de Projets",
    "description": "Collection de projets digitaux réalisés par notre agence digitale maroc",
    "itemListElement": [
      {
        "@type": "CreativeWork",
        "name": "Zibran.ma",
        "description": "Plateforme e-commerce avec stratégie SEO complète, augmentation des ventes de 120%",
        "creator": "AMADIGI"
      },
      {
        "@type": "CreativeWork",
        "name": "Younipouf.fr",
        "description": "Campagne de branding et marketing digital pour le marché jeune, +300% d'engagement",
        "creator": "AMADIGI"
      },
      {
        "@type": "CreativeWork",
        "name": "360luxury.shop",
        "description": "Place de marché haut de gamme avec stratégie marketing exclusive",
        "creator": "AMADIGI"
      },
      {
        "@type": "CreativeWork",
        "name": "Mimidsofa.ma",
        "description": "Transformation digitale d'une entreprise de meubles traditionnelle",
        "creator": "AMADIGI"
      }
    ]
  }
};
