'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

// Function to update Google's consent state
const updateGtagConsent = (granted: boolean) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
            analytics_storage: granted ? 'granted' : 'denied'
        });
    }
};

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      // If no consent is stored, show the banner
      setIsVisible(true);
    } else if (consent === 'granted') {
      // If consent was granted, update gtag just in case
      updateGtagConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'granted');
    updateGtagConsent(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'denied');
    updateGtagConsent(false);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Card className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 p-4 shadow-2xl animate-in slide-in-from-bottom duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-grow">
          <h4 className="font-bold text-sm">Gestion des Cookies</h4>
          <p className="text-xs text-muted-foreground mt-1">
            Nous utilisons des cookies pour analyser le trafic et améliorer l'expérience utilisateur. 
            En acceptant, vous consentez à notre utilisation des cookies. 
            <Link href="/legal/politique-de-confidentialite" className="underline hover:text-primary">
              En savoir plus
            </Link>.
          </p>
        </div>
        <div className="flex-shrink-0 flex gap-2 w-full sm:w-auto">
          <Button onClick={handleAccept} className="flex-1 sm:flex-auto">Accepter</Button>
          <Button onClick={handleDecline} variant="outline" className="flex-1 sm:flex-auto">Refuser</Button>
        </div>
      </div>
    </Card>
  );
}
