'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlayCircle, MessageCircle } from 'lucide-react';
import AnimatedSection from '@/components/about/AnimatedSection';
import HeroAbout from '@/components/about/HeroAbout';
import Portfolio from '@/components/about/Portfolio';
import Culture from '@/components/about/Culture';
import Values from '@/components/about/Values';


export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <HeroAbout />

      {/* Portfolio Section */}
      <Portfolio />
      
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
      <Culture />
      
        {/* Values Section */}
        <Values />

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
