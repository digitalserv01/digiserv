'use client';

import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const culturePoints = [
    { title: 'Vision Over Checklist', description: 'We don\'t just build what you ask for. We partner with you to understand your "why" and craft a strategy that brings your entire vision to life.' },
    { title: 'Partners in Growth', description: 'Your success is our success. We integrate with your team, providing transparent insights and acting as a true extension of your business.' },
    { title: 'Craftsmanship in Code & Content', description: 'Every line of code, every pixel, every word is intentionally crafted to not only look beautiful but to perform and convert.' }
]

const Culture = () => {
    return (
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
    )
}

export default Culture;
