'use client';
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
    {
      title: 'Zibran.ma',
      description: 'We developed a comprehensive e-commerce strategy, boosting online sales by 120% in six months through targeted SEO, a seamless user experience, and a high-converting checkout process.',
      imageUrl: '/assets/images/zibran.png',
      aiHint: 'luxury fashion website',
      link: 'https://zibran.ma',
    },
    {
      title: 'Younipouf.fr',
      description: 'From brand identity to a viral social media campaign, we built a digital ecosystem that captured the youth market, leading to a 300% increase in brand engagement and record launch sales.',
      imageUrl: '/assets/images/younipouf.png',
      aiHint: 'modern furniture product',
      link: 'https://younipouf.fr',
    },
    {
      title: '360luxury.shop',
      description: "For this high-end marketplace, we implemented an exclusive, content-driven marketing strategy that attracted a niche clientele, resulting in a 75% higher average order value than industry benchmarks.",
      imageUrl: '/assets/images/360luxury.png',
      aiHint: 'luxury product showcase',
      link: 'https://360luxury.shop',
    },
    {
      title: 'Mimidsofa.ma',
      description: "We transformed a traditional furniture business into a digital-first brand. By building a visually rich online catalog and automating lead generation, we expanded their market reach across Morocco.",
      videoUrl: '/assets/videos/mimid.mp4',
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
            <div className="space-y-20">
              {portfolioItems.map((item, index) => (
                <AnimatedSection key={item.title}>
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-secondary shadow-lg group">
                      {item.videoUrl ? (
                         <video
                            src={item.videoUrl}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                      ) : (
                        <Image
                            src={item.imageUrl!}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                            data-ai-hint={item.aiHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-8 text-white">
                          <span className="text-lg font-semibold text-accent">0{index + 1}</span>
                          <h3 className="mt-1 text-3xl font-bold font-headline">{item.title}</h3>
                          <p className="mt-2 max-w-lg text-white/90">{item.description}</p>
                          <Button asChild variant="link" className="p-0 mt-4 text-accent text-base">
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
