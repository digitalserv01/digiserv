import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, MessageCircle, PenSquare, ShoppingCart, BrainCircuit, LineChart, Code } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <PenSquare className="h-10 w-10 text-accent" />,
    title: "Rédaction de CV Professionnel",
    description: "Démarquez-vous avec un CV percutant, optimisé pour les logiciels de recrutement (ATS) et adapté au marché français.",
    price: "à partir de 17€",
    features: [
      "Analyse de votre profil",
      "Optimisation mots-clés",
      "Design moderne et professionnel",
      "Lettre de motivation (option)",
    ],
    ctaText: "Commander mon CV",
    ctaLink: "#",
    popular: true,
  },
  {
    icon: <Code className="h-10 w-10 text-accent" />,
    title: "Création de Site Vitrine",
    description: "Une présence en ligne professionnelle pour présenter votre activité, attirer des clients et renforcer votre crédibilité.",
    price: "à partir de 209€",
    features: [
      "Design sur-mesure et responsive",
      "Optimisation SEO de base",
      "Formulaire de contact",
      "Hébergement et nom de domaine",
    ],
    ctaText: "Obtenir un devis",
    ctaLink: "#",
    popular: true,
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-accent" />,
    title: "Boutique E-commerce",
    description: "Vendez vos produits en ligne avec une boutique performante, sécurisée et facile à gérer au quotidien.",
    price: "sur devis",
    features: [
        "Catalogue produits illimité",
        "Paiement en ligne sécurisé",
        "Gestion des commandes et stocks",
        "Optimisé pour le mobile",
    ],
    ctaText: "Demander une démo",
    ctaLink: "#",
  },
    {
    icon: <LineChart className="h-10 w-10 text-accent" />,
    title: "Marketing Digital & SEO",
    description: "Augmentez votre visibilité, attirez un trafic qualifié et transformez vos visiteurs en clients fidèles.",
    price: "à partir de 99€",
    features: [
        "Audit SEO complet",
        "Gestion de campagnes Google Ads",
        "Stratégie réseaux sociaux",
        "Emailing et automation",
    ],
    ctaText: "Booster ma visibilité",
    ctaLink: "#",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-accent" />,
    title: "Formation IA pour PME",
    description: "Apprenez à intégrer l'intelligence artificielle dans vos processus pour gagner en productivité et innover.",
    price: "sur devis",
    features: [
      "Ateliers pratiques et personnalisés",
      "Automatisation des tâches",
      "Utilisation de chatbots",
      "Création de contenu assistée par IA",
    ],
    ctaText: "Planifier une formation",
    ctaLink: "#",
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold font-headline text-primary">Nos Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Des solutions digitales sur-mesure pour accompagner la croissance des entrepreneurs et TPE en France. Chaque service est pensé pour apporter un maximum de valeur et de résultats.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className={`flex flex-col ${service.popular ? 'border-accent border-2 shadow-accent/20 shadow-lg' : ''}`}>
               {service.popular && (
                  <div className="bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider text-center py-1 rounded-t-lg">
                    Populaire
                  </div>
                )}
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-accent/10 rounded-full mb-4">
                    {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-center font-bold text-lg text-primary mb-4">{service.price}</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                    {service.features.map(feature => (
                        <li key={feature} className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-emerald-500 flex-shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
              </CardContent>
              <CardFooter className="flex-col gap-3">
                <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href={service.ctaLink}>{service.ctaText}</Link>
                </Button>
                <Button asChild variant="ghost" className="w-full text-muted-foreground">
                    <Link href="#">
                        <MessageCircle className="h-4 w-4 mr-2 text-whatsapp" />
                        Discuter sur WhatsApp
                    </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
