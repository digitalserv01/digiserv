import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Facebook, 
  Linkedin, 
  Mail, 
  MapPin, 
  MessageCircle,
} from 'lucide-react';
import NewsletterForm from '@/components/sections/NewsletterForm';
import Link from 'next/link';

const footerLinks = {
  services: [
    { name: 'CV Professionnel', href: '/services' },
    { name: 'Sites Web', href: '/services' },
    { name: 'E-commerce', href: '/services' },
    { name: 'Marketing Digital', href: '/services' },
    { name: 'Formation IA', href: '/services' },
    { name: 'Audit SEO', href: '/services' }
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Guides gratuits', href: '#' },
    { name: 'Études de cas', href: '/about' },
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
  const whatsappUrl = "https://wa.me/212699020158?text=Bonjour%20!%20J'ai%20vu%20votre%20site%20et%20je%20suis%20int%C3%A9ress%C3%A9(e).";

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-white/10 p-8 rounded-lg mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold font-headline text-white mb-2">Restez à la pointe de la tech</h3>
              <p className="text-primary-foreground/80">
                Recevez nos meilleurs conseils en IA, développement et marketing digital directement dans votre boîte mail.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Ressources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:nexusai.maroc@outlook.com" className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-gray-300 group-hover:text-accent transition-colors">
                  nexusai.maroc@outlook.com
                </span>
              </a>
              <a href={whatsappUrl} className="flex items-center gap-3 group" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-gray-300 group-hover:text-accent transition-colors">
                  +212 699 020 158
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  Oqba Avenue, Agdal<br/>Rabat, Morocco
                </div>
              </div>
            </div>
             <div className="mt-6 flex gap-3">
                <Link href="#" aria-label="LinkedIn" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Linkedin className="w-4 h-4 text-white" />
                </Link>
                <Link href="#" aria-label="Facebook" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Facebook className="w-4 h-4 text-white" />
                </Link>
              </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10 mt-16" />

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
