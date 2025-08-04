import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="bg-gradient-to-br from-primary to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-4">
          Prêt à Transformer votre Business ?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Rejoignez les 200+ entrepreneurs français qui ont boosté leur activité avec nos services.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base">
            Obtenir ma Consultation Gratuite
          </Button>
          <Button size="lg" variant="secondary" className="bg-whatsapp hover:bg-whatsapp/90 text-white px-8 py-6 text-base">
            <MessageCircle className="mr-2 h-5 w-5" />
            Discuter sur WhatsApp
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/60">
          <span className="flex items-center">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            Sans engagement
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            Réponse sous 2h
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            Devis personnalisé
          </span>
        </div>
      </div>
    </section>
  );
}
