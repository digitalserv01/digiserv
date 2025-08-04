'use client';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function MobileCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white/80 backdrop-blur-lg border-t p-3 z-40 animate-in slide-in-from-bottom duration-500">
      <div className="flex gap-3">
        <Button size="lg" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
          Consultation Gratuite
        </Button>
        <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-white p-0 h-12 w-12 flex-shrink-0">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
