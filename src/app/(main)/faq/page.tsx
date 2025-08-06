
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const faqData = {
  general: [
    {
      question: "Quel type d'entreprises accompagnez-vous ?",
      answer: "Nous accompagnons principalement les entrepreneurs, TPE et PME en France et au Maroc qui cherchent à se digitaliser. Que vous soyez artisan, consultant, coach ou e-commerçant, nos services sont conçus pour répondre à vos besoins spécifiques."
    },
    {
      question: "Comment se déroule un projet avec vous, du début à la fin ?",
      answer: "Notre processus est simple et transparent. 1) **Prise de contact** via WhatsApp pour un appel découverte gratuit. 2) **Devis et acompte** de 50%. 3) **Phase de développement/création** avec des points réguliers. 4) **Livraison et validation**. 5) **Paiement du solde** et formation si nécessaire. 6) **Support de 30 jours**."
    },
    {
      question: "Proposez-vous des facilités de paiement ?",
      answer: "Oui, nous comprenons les contraintes budgétaires des entrepreneurs. Pour les projets importants, nous proposons généralement un paiement en deux fois : un acompte de 50% au démarrage et le solde de 50% à la livraison finale du projet."
    },
    {
      question: "Quels sont vos délais de livraison moyens ?",
      answer: "Les délais varient selon le service. Un CV est généralement livré en 24-48h. Un site vitrine prend entre 1 et 2 semaines. Un projet e-commerce ou d'automatisation plus complexe peut prendre 3 à 4 semaines. Nous vous donnons une estimation précise dans le devis."
    },
  ],
  services: [
    {
      question: "En quoi consiste le service 'Création de Site Vitrine' ?",
      answer: "Notre service de création de site vitrine inclut tout ce dont vous avez besoin pour être visible en ligne : un design sur-mesure et professionnel, 4 à 5 pages (Accueil, À propos, Services, Contact), l'optimisation pour le référencement (SEO) local, un formulaire de contact et une conception entièrement responsive pour s'adapter à tous les écrans (mobiles, tablettes, ordinateurs)."
    },
    {
      question: "Comment optimisez-vous mon CV pour les systèmes ATS ?",
      answer: "Nous utilisons des techniques spécifiques pour que votre CV soit facilement lu par les Applicant Tracking Systems (ATS), les logiciels utilisés par 90% des recruteurs. Cela inclut l'utilisation de mots-clés pertinents pour votre secteur, une structure de document claire et un formatage simple et efficace, maximisant ainsi vos chances de passer les filtres et de décrocher un entretien."
    },
    {
      question: "Quelle est la différence entre vos services E-commerce et IA & Automation ?",
      answer: "Notre service E-commerce se concentre sur la création de votre boutique en ligne (sur Shopify ou WooCommerce) pour vendre des produits. Le service IA & Automation, quant à lui, vise à optimiser vos processus internes. Nous pouvons par exemple créer un chatbot pour votre service client, automatiser vos campagnes d'e-mailing ou intégrer des outils d'IA pour vous faire gagner un temps précieux."
    },
     {
      question: "Faites-vous de la gestion de publicités en ligne (Google Ads, Facebook Ads) ?",
      answer: "Oui, notre service de Marketing Digital inclut la création et la gestion de campagnes publicitaires sur Google Ads et les réseaux sociaux comme Facebook et Instagram. Nous ciblons précisément votre audience pour maximiser votre retour sur investissement."
    }
  ],
  technique: [
    {
        question: "Sur quelles technologies vous appuyez-vous pour créer les sites web ?",
        answer: "Nous utilisons des technologies modernes et performantes comme Next.js et React pour des sites rapides et optimisés. Pour les CMS, nous travaillons principalement avec des solutions headless pour plus de flexibilité, et pour l'e-commerce, nous recommandons Shopify ou WooCommerce selon les besoins."
    },
    {
        question: "Le site que vous créez m'appartient-il à la fin du projet ?",
        answer: "Oui, absolument. Une fois le paiement final effectué, vous êtes propriétaire à 100% de votre site web et de tous les livrables. Nous vous fournissons tous les accès nécessaires."
    },
    {
        question: "Fournissez-vous un support après la livraison du projet ?",
        answer: "Absolument. Nous offrons une période de support gratuit de 30 jours après la livraison de chaque projet pour corriger tout bug ou problème technique. Nous proposons également des contrats de maintenance pour des mises à jour et un support continus."
    }
  ]
};

const whatsappUrl = "https://wa.me/212699020158?text=Bonjour%20!%20J'ai%20une%20question%20suite%20%C3%A0%20la%20lecture%20de%20votre%20FAQ.";

export default function FAQPage() {
  return (
    <div className="bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-headline text-primary">Foire Aux Questions (FAQ)</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Trouvez les réponses à vos questions les plus fréquentes sur nos services et notre processus.
          </p>
        </header>

        <main className="bg-background p-8 md:p-12 rounded-lg shadow-sm">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold font-headline text-primary mb-6">Questions Générales</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqData.general.map((item, index) => (
                  <AccordionItem key={`general-${index}`} value={`item-general-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-lg hover:text-accent">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold font-headline text-primary mb-6">À Propos de nos Services</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqData.services.map((item, index) => (
                   <AccordionItem key={`services-${index}`} value={`item-services-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-lg hover:text-accent">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold font-headline text-primary mb-6">Technique & Support</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqData.technique.map((item, index) => (
                   <AccordionItem key={`technique-${index}`} value={`item-technique-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-lg hover:text-accent">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </main>

        <footer className="mt-16 text-center">
            <h3 className="text-2xl font-bold font-headline text-primary">Vous ne trouvez pas votre réponse ?</h3>
            <p className="mt-3 text-muted-foreground">Contactez-nous directement. Nous sommes là pour vous aider.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href={whatsappUrl} target='_blank'>
                        <MessageCircle className="mr-2" />
                        Discuter sur WhatsApp
                    </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <Link href="mailto:nexusai.maroc@outlook.com">
                        <Mail className="mr-2" />
                        Envoyer un e-mail
                    </Link>
                </Button>
            </div>
        </footer>

      </div>
    </div>
  );
}
