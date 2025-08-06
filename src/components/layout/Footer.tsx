import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Facebook, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
} from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'CV Professionnel', href: '#' },
    { name: 'Sites Web', href: '#' },
    { name: 'E-commerce', href: '#' },
    { name: 'Marketing Digital', href: '#' },
    { name: 'Formation IA', href: '#' },
    { name: 'Audit SEO', href: '#' }
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Guides gratuits', href: '#' },
    { name: 'Études de cas', href: '#' },
    { name: 'Templates', href: '#' },
    { name: 'Webinaires', href: '#' },
    { name: 'FAQ', href: '#' }
  ],
  legal: [
    { name: 'Mentions légales', href: '#' },
    { name: 'Politique RGPD', href: '#' },
    { name: 'Conditions Générales de Vente', href: '#' },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Ressources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:contact@amadigiconseils.com" className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-gray-300 group-hover:text-accent transition-colors">
                  contact@amadigiconseils.com
                </span>
              </a>
              <a href="tel:+33123456789" className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-gray-300 group-hover:text-accent transition-colors">
                  +33 1 23 45 67 89
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  123 Avenue des Entrepreneurs<br/>75001 Paris, France
                </div>
              </div>
            </div>
             <div className="mt-6 flex gap-3">
                <a href="#" aria-label="LinkedIn" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a href="#" aria-label="Facebook" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
              </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-1">
            <span className="text-2xl font-bold font-headline">Amadi</span>
            <span className="text-2xl font-bold font-headline text-accent">DigiConseils</span>
          </div>
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} amadigiconseils.com - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
