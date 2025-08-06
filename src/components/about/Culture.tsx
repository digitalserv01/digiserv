'use client';

import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const culturePoints = [
    { title: 'La Vision Avant la Tâche', description: 'Nous ne construisons pas seulement ce que vous demandez. Nous collaborons avec vous pour comprendre votre "pourquoi" et élaborer une stratégie qui donne vie à votre vision complète.' },
    { title: 'Partenaires de Croissance', description: 'Votre succès est notre succès. Nous nous intégrons à votre équipe, fournissant des informations transparentes et agissant comme une véritable extension de votre entreprise.' },
    { title: 'L\'Artisanat du Code et du Contenu', description: 'Chaque ligne de code, chaque pixel, chaque mot est intentionnellement conçu non seulement pour être esthétique, mais aussi pour performer et convertir.' }
]

const Culture = () => {
    return (
        <div className="bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
             <div className="text-center mb-16">
                <AnimatedSection>
                    <h2 className="text-3xl lg:text-4xl font-bold font-headline text-primary">Ce n'est pas un service. C'est un partenariat.</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Nous ne sommes pas payés pour des tâches. Nous sommes payés pour construire votre vision, à 360°. C'est notre promesse.</p>
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
