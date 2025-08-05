import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-secondary/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-headline text-primary !leading-tight text-balance">
              Votre Réussite Digitale
              <span className="text-accent"> Commence Ici</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Services digitaux professionnels pour entrepreneurs français. 
              De la création de CV à l'intelligence artificielle, nous transformons vos idées en succès.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6">
                Voir nos Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6">
                Prendre rendez-vous
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <Image src="https://placehold.co/40x40.png" width={40} height={40} alt="Client 1" className="rounded-full border-2 border-white" data-ai-hint="woman smiling" />
                  <Image src="https://placehold.co/40x40.png" width={40} height={40} alt="Client 2" className="rounded-full border-2 border-white" data-ai-hint="man portrait" />
                  <Image src="https://placehold.co/40x40.png" width={40} height={40} alt="Client 3" className="rounded-full border-2 border-white" data-ai-hint="woman portrait" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-sm text-muted-foreground">200+ clients satisfaits</p>
              </div>
            </div>

          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1599933959041-19cbf8d470f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNHx8bW9kZXJuJTIwd29ya3NwYWNlJTIwcGFyaXN8ZW58MHx8fHwxNzU0MzU0MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Entrepreneur français travaillant sur ordinateur portable avec graphiques de croissance"
                width={500}
                height={550}
                className="w-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            <Card className="absolute -top-8 -right-8 bg-white/80 backdrop-blur-md p-4 z-20 shadow-lg border animate-in fade-in zoom-in duration-500">
              <p className="text-sm font-semibold text-primary mb-1">Résultat Client</p>
              <p className="text-2xl font-bold text-accent">+47% CA</p>
              <p className="text-xs text-muted-foreground">en 3 mois</p>
            </Card>
            
            <Card className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-md p-4 z-20 shadow-lg border animate-in fade-in zoom-in duration-500 delay-200">
              <p className="text-sm font-semibold text-primary">Support 7j/7</p>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                <CheckCircle className="w-3 h-3 mr-1 text-emerald-500"/>
                Réponse en 2h
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

const Card = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`rounded-xl ${className}`} {...props}>
    {children}
  </div>
)
