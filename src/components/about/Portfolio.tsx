'use client';
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
    {
      number: '01',
      title: 'Zibran.ma',
      description: 'We developed a comprehensive e-commerce strategy, boosting online sales by 120% in six months through targeted SEO, a seamless user experience, and a high-converting checkout process.',
      imageUrl: 'https://placehold.co/1200x800.png',
      aiHint: 'luxury fashion website',
      link: 'https://zibran.ma',
    },
    {
      number: '02',
      title: 'Younipouf.fr',
      description: 'From brand identity to a viral social media campaign, we built a digital ecosystem that captured the youth market, leading to a 300% increase in brand engagement and record launch sales.',
      imageUrl: 'https://placehold.co/1200x800.png',
      aiHint: 'modern furniture product',
      link: 'https://younipouf.fr',
    },
    {
      number: '03',
      title: '360luxury.shop',
      description: "For this high-end marketplace, we implemented an exclusive, content-driven marketing strategy that attracted a niche clientele, resulting in a 75% higher average order value than industry benchmarks.",
      imageUrl: 'https://placehold.co/1200x800.png',
      aiHint: 'luxury product showcase',
      link: 'https://360luxury.shop',
    },
    {
      number: '04',
      title: 'Mimidsofa.ma',
      description: "We transformed a traditional furniture business into a digital-first brand. By building a visually rich online catalog and automating lead generation, we expanded their market reach across Morocco.",
      imageUrl: 'https://storage.googleapis.com/studiogpt-test-project.appspot.com/2a865f12-085e-4c74-98c5-e51f8870321a',
      aiHint: 'minimalist sofa living room',
      link: 'https://mimidsofa.ma',
    },
  ];

const Portfolio = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
            <AnimatedSection>
                <h2 className="text-3xl lg:text-4xl font-bold font-headline text-primary">Our Blueprint for Success</h2>
                <p className="mt-4 text-lg text-muted-foreground">Four pillars of our work, four stories of growth.</p>
            </AnimatedSection>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {portfolioItems.map((item) => (
            <AnimatedSection key={item.number}>
                <div className="group">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-secondary shadow-lg">
                        <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                            data-ai-hint={item.aiHint}
                        />
                    </div>
                    <div className="mt-6">
                        <span className="text-4xl font-bold font-headline text-accent">{item.number}</span>
                        <h3 className="mt-2 text-2xl font-bold text-primary">{item.title}</h3>
                        <p className="mt-3 text-base text-muted-foreground">{item.description}</p>
                        <Button asChild variant="link" className="p-0 mt-4 text-accent">
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                Visit Site <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    )
}

export default Portfolio;
