'use client';
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const portfolioItems = [
    {
      title: 'Zibran.ma',
      description: 'We developed a comprehensive e-commerce strategy, boosting online sales by 120% in six months through targeted SEO, a seamless user experience, and a high-converting checkout process.',
      imageUrl: '/assets/images/zibran.png',
      aiHint: 'luxury fashion website',
    },
    {
      title: 'Younipouf.fr',
      description: 'From brand identity to a viral social media campaign, we built a digital ecosystem that captured the youth market, leading to a 300% increase in brand engagement and record launch sales.',
      imageUrl: '/assets/images/younipouf.png',
      aiHint: 'modern furniture product',
    },
    {
      title: '360luxury.shop',
      description: "For this high-end marketplace, we implemented an exclusive, content-driven marketing strategy that attracted a niche clientele, resulting in a 75% higher average order value than industry benchmarks.",
      imageUrl: '/assets/images/360luxury.png',
      aiHint: 'luxury product showcase',
    },
    {
      title: 'Mimidsofa.ma',
      description: "We transformed a traditional furniture business into a digital-first brand. By building a visually rich online catalog and automating lead generation, we expanded their market reach across Morocco.",
      videoUrl: '/assets/videos/mimid.mp4',
      aiHint: 'minimalist sofa living room',
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
