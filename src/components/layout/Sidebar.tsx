'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Star, MessageCircle, Download, Shield, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  { name: 'CV Pro', price: '17€', originalPrice: '25€', popular: true },
  { name: 'Site Vitrine', price: '209€', originalPrice: '299€' },
  { name: 'Audit SEO', price: '99€', originalPrice: '149€', popular: true },
];

const testimonials = [
  { name: 'Marie Dubois', company: 'Artisan Boulanger', text: 'Mon site web a triplé mes commandes en ligne!', rating: 5, avatar: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTc1NDQ0MDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Pierre Martin', company: 'Consultant RH', text: 'CV refait, 3 entretiens en 1 semaine. Merci !', rating: 5, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbnxlbnwwfHx8fDE3NTQ0NDA4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Sophie Leroy', company: 'Coach Sportive', text: 'Ma campagne pub a attiré 50 nouveaux clients !', rating: 5, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3NTQ0NDA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Julien Petit', company: 'E-commerçant', text: 'L\'IA me fait gagner 10h par semaine. Incroyable.', rating: 5, avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwb3J0cmFpdHxlbnwwfHx8fDE3NTQ0NDA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
];

export default function Sidebar() {
  return (
    <aside className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex justify-between items-center">
            <span>Services Express</span>
            <Badge className="bg-accent text-accent-foreground">Promo</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {services.map((service, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
              <div>
                <span className="text-sm font-semibold text-primary">{service.name}</span>
                {service.popular && <Badge variant="outline" className="text-xs ml-2">Populaire</Badge>}
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-accent font-bold">{service.price}</span>
                  <span className="text-xs text-muted-foreground line-through">{service.originalPrice}</span>
                </div>
              </div>
              <Button size="icon" className="bg-whatsapp hover:bg-whatsapp/90 text-white rounded-full h-9 w-9">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          ))}
          <Button className="w-full mt-2 bg-accent hover:bg-accent/90 text-accent-foreground">
            Voir tous les services
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-primary text-primary-foreground">
        <CardHeader className="items-center text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-3">
              <Download className="w-6 h-6 text-accent-foreground" />
            </div>
          <CardTitle>Guide SEO Gratuit</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-center">
          <p className="text-sm text-primary-foreground/80">
            15 techniques pour booster votre visibilité.
          </p>
          <Input type="email" placeholder="Votre email professionnel" className="bg-white/90 text-primary border-0" />
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            Télécharger Gratuitement
          </Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Ils nous font confiance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex items-start gap-4">
              <Image src={testimonial.avatar} alt={testimonial.name} width={40} height={40} className="rounded-full" data-ai-hint="person portrait"/>
              <div>
                <div className="flex items-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-sm text-foreground mb-1">"{testimonial.text}"</p>
                <p className="text-xs font-medium text-muted-foreground">- {testimonial.name}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </aside>
  );
}
