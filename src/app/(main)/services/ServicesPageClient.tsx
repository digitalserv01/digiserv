'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

// Define the service type to be used in props
type Service = {
  title: string;
  slug: string;
  description: string;
  features: string[];
  price: string;
  imageUrl: string;
  aiHint: string;
  icon: React.ReactElement;
};

interface ServicesPageClientProps {
  services: Service[];
}

function AnimatedSection({ children, x = 0 }: { children: React.ReactNode, x?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

const ServiceCard = ({ service }: { service: Service }) => {
  const whatsappUrl = `https://wa.me/212699020158?text=Bonjour%20!%20Je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20votre%20service%20'${encodeURIComponent(service.title)}'.`;

  return (
     <Card className="flex flex-col h-full overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          className="object-cover"
          data-ai-hint={service.aiHint}
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                {service.icon}
            </div>
            <div>
                <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.price}</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map(feature => (
            <li key={feature} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={whatsappUrl} target="_blank">
            Discutons de votre projet <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function ServicesPageClient({ services }: ServicesPageClientProps) {
  return (
    <>
      {/* Services Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.slug} x={index % 2 === 0 ? -50 : 50}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
         </div>
      </div>

      {/* Full-Screen Video Section */}
      <div className="py-20 sm:py-32">
        <AnimatedSection>
          <div className="relative h-[60vh] lg:h-[80vh] bg-secondary flex items-center justify-center overflow-hidden">
            <video
              src="/assets/videos/creations.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
             <div className="relative text-center z-10 p-4 bg-black/50 rounded-lg">
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold font-headline text-white">Nos créations en mouvement : projet d'entraînement binova.it</h2>
                <p className="mt-2 text-lg text-white/80">Donner vie aux idées.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
