'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Lightbulb, Code, Briefcase, Megaphone, ShoppingCart, Bot } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    title: 'Création de Site Vitrine',
    slug: 'site-vitrine',
    description: "Votre présence en ligne professionnelle. Un site élégant et performant pour présenter votre activité et attirer vos premiers clients.",
    features: ['Design sur-mesure', 'Optimisé pour le SEO local', 'Intégration de formulaire de contact', 'Responsive sur tous les écrans'],
    price: 'dès 209€',
    imageUrl: 'https://placehold.co/800x600.png',
    aiHint: 'modern website design',
    icon: <Code className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Rédaction de CV Professionnel',
    slug: 'cv-pro',
    description: "Décrochez plus d'entretiens avec un CV percutant, optimisé pour les systèmes de suivi des candidatures (ATS).",
    features: ['Analyse de votre profil', 'Mots-clés pertinents', 'Design professionnel et moderne', 'Lettre de motivation en option'],
    price: 'dès 17€',
    imageUrl: 'https://placehold.co/600x400.png',
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

function AnimatedSection({ children, x = 0 }: { children: React.ReactNode, x?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero/Philosophy Section */}
      <div className="bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                    <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold font-headline text-primary !leading-tight text-balance">
                    On ne vend pas un service, on réalise une vision.
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Votre projet est unique. C'est pourquoi nous voulons d'abord entendre votre idée, comprendre vos ambitions et ensuite, seulement, construire la solution digitale qui vous mènera au succès. Le prix n'est qu'une conséquence de la valeur que nous créons ensemble.
                </p>
                <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90">
                    Racontez-nous votre idée
                    <ArrowRight className="ml-2"/>
                </Button>
            </motion.div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.slug} x={index % 2 === 0 ? -50 : 50}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
         </div>
      </div>

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
              Your browser does not support the video tag.
            </video>
             <div className="relative text-center z-10 p-4 bg-black/50 rounded-lg">
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold font-headline text-white">Our Creations in Motion: binova.it practice project</h2>
                <p className="mt-2 text-lg text-white/80">Bringing ideas to life.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>

    </div>
  );
}

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  return (
     <Card className="flex flex-col h-full overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          className="object-cover"
          data-ai-hint={service.aiHint}
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                {service.icon}
            </div>
            <div>
                <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.price}</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map(feature => (
            <li key={feature} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Discutons de votre projet <ArrowRight className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  )
}
