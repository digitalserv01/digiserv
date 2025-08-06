'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle, MessageCircle, Check } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

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

const culturePoints = [
    { title: 'Vision Over Checklist', description: 'We don\'t just build what you ask for. We partner with you to understand your "why" and craft a strategy that brings your entire vision to life.' },
    { title: 'Partners in Growth', description: 'Your success is our success. We integrate with your team, providing transparent insights and acting as a true extension of your business.' },
    { title: 'Craftsmanship in Code & Content', description: 'Every line of code, every pixel, every word is intentionally crafted to not only look beautiful but to perform and convert.' }
]

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline text-primary !leading-tight text-balance">
            We Don't Just Build Websites.
            <span className="text-accent block mt-2">We Build Your Entire Digital Universe.</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            You have a vision. We have the 360° strategy to make it a reality. We combine design, technology, and marketing to create digital experiences that don't just exist—they perform, convert, and grow.
          </p>
        </AnimatedSection>
      </div>

      {/* Portfolio Section */}
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
      
      {/* Full-Screen Video Section */}
      <div className="py-20 sm:py-32">
        <AnimatedSection>
          <div className="relative h-[60vh] lg:h-[80vh] bg-secondary flex items-center justify-center">
            <Image
                src="https://placehold.co/1920x1080.png"
                alt="Showcase video thumbnail"
                fill
                className="object-cover opacity-20"
                data-ai-hint="digital agency work montage"
            />
            <div className="relative text-center z-10 p-4">
                <button aria-label="Play video">
                    <PlayCircle className="h-24 w-24 text-primary hover:text-accent transition-colors duration-300" />
                </button>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold font-headline text-primary">Our Creations in Motion</h2>
                <p className="mt-2 text-lg text-muted-foreground">Click to see how we bring ideas to life.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Our Culture Section */}
      <div className="bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
             <div className="text-center mb-16">
                <AnimatedSection>
                    <h2 className="text-3xl lg:text-4xl font-bold font-headline text-primary">It's Not a Service. It's a Partnership.</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">We don't get paid for tasks. We get paid for building your vision, 360°. That's our promise.</p>
                </AnimatedSection>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {culturePoints.map(point => (
                    <AnimatedSection key={point.title}>
                        <div className="bg-card p-8 rounded-xl shadow-sm h-full">
                            <Check className="w-8 h-8 text-accent bg-accent/10 p-1.5 rounded-md mb-4" />
                            <h3 className="text-xl font-bold text-primary">{point.title}</h3>
                            <p className="mt-2 text-muted-foreground">{point.description}</p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <AnimatedSection>
                <h2 className="text-3xl lg:text-4xl font-bold font-headline text-white mb-4">
                Have an Idea? Let's Build Its Universe.
                </h2>
                <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Stop looking for a freelancer. Start looking for a partner. Let's talk about your vision, not just your budget.
                </p>
                
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Start the Conversation on WhatsApp
                </Button>
            </AnimatedSection>
      </div>
      </div>
    </div>
  );
}
