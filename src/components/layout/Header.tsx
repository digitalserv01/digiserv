'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const services = [
  { name: 'CV Professionnel', href: '/services' },
  { name: 'Sites Web & Vitrine', href: '/services' },
  { name: 'Marketing Digital', href: '/services' },
  { name: 'Boutique E-commerce', href: '/services' },
  { name: 'Formation IA', href: '/services' }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={`sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg transition-all duration-300 ${isScrolled ? 'shadow-md border-b' : 'border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <span className="text-2xl font-bold font-headline text-primary">Amadi</span>
              <span className="text-2xl font-bold font-headline text-accent">DigiConseils</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-10">
            <Link href="/" className="text-sm font-medium text-primary hover:text-accent transition-colors">Accueil</Link>
            
            <Link href="/services" className="text-sm font-medium text-primary hover:text-accent transition-colors">Services</Link>

            <Link href="/blog" className="text-sm font-medium text-primary hover:text-accent transition-colors">Blog</Link>
            <Link href="#" className="text-sm font-medium text-primary hover:text-accent transition-colors">À propos</Link>
            <Link href="#" className="text-sm font-medium text-primary hover:text-accent transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden lg:flex bg-accent hover:bg-accent/90 text-accent-foreground">Consultation Gratuite</Button>
            <button
              type="button"
              className="lg:hidden text-primary hover:text-accent"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-primary rounded-md hover:bg-secondary" onClick={toggleMobileMenu}>Accueil</Link>
              
              <Link href="/services" className="block px-3 py-2 text-base font-medium text-primary rounded-md hover:bg-secondary" onClick={toggleMobileMenu}>Services</Link>
              
              <Link href="/blog" className="block px-3 py-2 text-base font-medium text-primary rounded-md hover:bg-secondary" onClick={toggleMobileMenu}>Blog</Link>
              <Link href="#" className="block px-3 py-2 text-base font-medium text-primary rounded-md hover:bg-secondary" onClick={toggleMobileMenu}>À propos</Link>
              <Link href="#" className="block px-3 py-2 text-base font-medium text-primary rounded-md hover:bg-secondary" onClick={toggleMobileMenu}>Contact</Link>
              <div className="pt-4">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" onClick={toggleMobileMenu}>Consultation Gratuite</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
