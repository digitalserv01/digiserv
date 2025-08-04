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
  { name: 'CV Professionnel', href: '#' },
  { name: 'Sites Web & Vitrine', href: '#' },
  { name: 'Marketing Digital', href: '#' },
  { name: 'Boutique E-commerce', href: '#' },
  { name: 'Formation IA', href: '#' }
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
      {/* AdSense Banner Placeholder */}
      <div className="bg-secondary/50 text-center py-2 text-sm text-muted-foreground">
        <div className="h-[90px] w-[728px] bg-secondary mx-auto flex items-center justify-center">Publicité (728x90)</div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <span className="text-2xl font-bold font-headline text-primary">DigiConseil</span>
              <span className="text-2xl font-bold font-headline text-accent">.fr</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-10">
            <Link href="/" className="text-sm font-medium text-primary hover:text-accent transition-colors">Accueil</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-sm font-medium text-primary hover:text-accent transition-colors outline-none">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link href={service.href}>{service.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="#" className="text-sm font-medium text-primary hover:text-accent transition-colors">Blog</Link>
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
              
              <Collapsible>
                <CollapsibleTrigger className="flex w-full justify-between items-center px-3 py-2 text-base font-medium text-primary rounded-md hover:bg-secondary">
                  Services <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-8 pt-2 space-y-2">
                   {services.map((service) => (
                    <Link key={service.name} href={service.href} className="block py-2 text-base font-medium text-muted-foreground rounded-md hover:text-primary" onClick={toggleMobileMenu}>
                      {service.name}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
              
              <Link href="#" className="block px-3 py-2 text-base font-medium text-primary rounded-md hover:bg-secondary" onClick={toggleMobileMenu}>Blog</Link>
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
