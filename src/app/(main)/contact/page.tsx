'use client';
import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Send, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { submitContactForm } from '@/app/actions/contact';


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="animate-spin" />
          <span>Envoi en cours...</span>
        </>
      ) : (
        <>
          <Send />
          Envoyer le Message
        </>
      )}
    </Button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useActionState(submitContactForm, { message: undefined, error: undefined });
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const whatsappUrl = "https://wa.me/212699020158?text=Bonjour%20!%20J'ai%20vu%20votre%20site%20et%20je%20suis%20int%C3%A9ress%C3%A9(e).";

  useEffect(() => {
    if (state?.message) {
      toast({
        title: "Message Envoyé !",
        description: state.message,
        variant: 'default',
      });
      formRef.current?.reset();
    }
    if (state?.error) {
      toast({
        title: "Erreur",
        description: state.error,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <div className="bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-headline text-primary">Contactez-nous</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Une question, un projet ? Nous sommes à votre écoute. Remplissez le formulaire ou contactez-nous directement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card>
              <CardHeader>
                <CardTitle>Envoyez-nous un message</CardTitle>
                <CardDescription>Nous vous répondrons dans les plus brefs délais.</CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} action={formAction} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Adresse e-mail</Label>
                    <Input id="email" name="email" type="email" placeholder="john.doe@exemple.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="body">Votre message</Label>
                    <Textarea id="body" name="body" placeholder="Bonjour, je souhaiterais discuter de..." rows={6} required />
                  </div>
                  <SubmitButton />
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-5">
            <Card className="bg-primary text-primary-foreground h-full">
              <CardHeader>
                <CardTitle>Contact Direct</CardTitle>
                <CardDescription className="text-primary-foreground/80">Pour une réponse encore plus rapide.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white" size="lg" asChild>
                  <Link href={whatsappUrl} target="_blank">
                    <MessageCircle className="mr-2"/> Discuter sur WhatsApp
                  </Link>
                </Button>
                <div className="space-y-4 text-sm">
                   <a href="mailto:nexusai.maroc@outlook.com" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-accent"/>
                    </div>
                    <div>
                        <p className="font-semibold text-white">Email</p>
                        <p className="text-primary-foreground/80 group-hover:text-accent transition-colors">nexusai.maroc@outlook.com</p>
                    </div>
                   </a>
                   <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-accent"/>
                    </div>
                    <div>
                        <p className="font-semibold text-white">Téléphone</p>
                        <p className="text-primary-foreground/80">+212 699 020 158</p>
                    </div>
                   </div>
                   <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-accent"/>
                    </div>
                    <div>
                        <p className="font-semibold text-white">Adresse</p>
                        <p className="text-primary-foreground/80">Oqba Avenue, Agdal<br/>Rabat, Morocco</p>
                    </div>
                   </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
