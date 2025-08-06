'use client';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { subscribeToNewsletter } from '@/app/actions/subscribe';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="animate-spin" />
          <span>Inscription...</span>
        </>
      ) : (
        "Télécharger Gratuitement"
      )}
    </Button>
  );
}

export default function SidebarNewsletterForm() {
  const [state, formAction] = useActionState(subscribeToNewsletter, { message: undefined, error: undefined });
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.message) {
      toast({
        title: "Succès",
        description: state.message,
        variant: 'default',
      });
      formRef.current?.reset(); // Reset form on success
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
    <form ref={formRef} action={formAction} className="space-y-3">
        <Input
            type="email"
            name="email"
            placeholder="Votre email professionnel"
            required
            className="bg-white/90 text-primary border-0"
        />
        <SubmitButton />
    </form>
  );
}
