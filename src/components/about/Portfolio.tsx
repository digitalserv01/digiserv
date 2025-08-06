'use client';
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const portfolioItems = [
    {
      title: 'Zibran.ma',
      description: 'Nous avons développé une stratégie e-commerce complète, augmentant les ventes en ligne de 120% en six mois grâce à un SEO ciblé, une expérience utilisateur fluide et un processus de paiement à haute conversion.',
      imageUrl: '/assets/images/zibran.png',
      aiHint: 'luxury fashion website',
    },
    {
      title: 'Younipouf.fr',
      description: 'De l\'identité de marque à une campagne virale sur les réseaux sociaux, nous avons bâti un écosystème digital qui a captivé le marché jeune, menant à une augmentation de 300% de l\'engagement et des ventes record au lancement.',
      imageUrl: '/assets/images/younipouf.png',
      aiHint: 'modern furniture product',
    },
    {
      title: '360luxury.shop',
      description: "Pour cette place de marché haut de gamme, nous avons mis en œuvre une stratégie marketing exclusive axée sur le contenu qui a attiré une clientèle de niche, résultant en une valeur de commande moyenne 75% plus élevée que la norme du secteur.",
      imageUrl: '/assets/images/360luxury.png',
      aiHint: 'luxury product showcase',
    },
    {
      title: 'Mimidsofa.ma',
      description: "Nous avons transformé une entreprise de meubles traditionnelle en une marque digitale. En créant un catalogue en ligne visuellement riche et en automatisant la génération de leads, nous avons étendu leur portée de marché à travers le Maroc.",
      videoUrl: '/assets/videos/mimid.mp4',
      aiHint: 'minimalist sofa living room',
    },
  ];

const Portfolio = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
                <AnimatedSection>
                    <h2 className="text-3xl lg:text-4xl font-bold font-headline text-primary">Notre plan pour le succès</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Quatre piliers de notre travail, quatre histoires de croissance.</p>
                </AnimatedSection>
            </div>
            <div className="space-y-20">
              {/* First 3 items: Image above, text below */}
              {portfolioItems.slice(0, 3).map((item) => (
                <AnimatedSection key={item.title}>
                  <div className="space-y-6">
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-secondary shadow-lg">
                      <Image
                          src={item.imageUrl!}
                          alt={item.title}
                          fill
                          className="object-cover"
                          data-ai-hint={item.aiHint}
                      />
                    </div>
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl font-bold font-headline text-primary">{item.title}</h3>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}

              {/* Last item (Mimidsofa): Video on left, text on right */}
              {portfolioItems.slice(3).map(item => (
                <AnimatedSection key={item.title}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="relative aspect-[9/16] w-full max-w-sm mx-auto overflow-hidden rounded-xl bg-secondary shadow-lg">
                        <video
                            src={item.videoUrl!}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold font-headline text-primary">{item.title}</h3>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
        </div>
    )
}

export default Portfolio;
