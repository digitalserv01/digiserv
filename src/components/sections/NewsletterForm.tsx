'use client';
import { useActionState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { subscribeToNewsletter } from '@/app/actions/subscribe';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? (
        <>
          <Loader2 className="animate-spin" />
          <span>Inscription...</span>
        </>
      ) : (
        "S'inscrire"
      )}
    </Button>
  );
}

export default function NewsletterForm() {
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
    <form ref={formRef} action={formAction} className="w-full">
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
            <div className="relative flex-grow w-full">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                    type="email"
                    name="email"
                    placeholder="Votre adresse e-mail"
                    required
                    className="pl-10 text-base md:text-sm"
                />
            </div>
            <SubmitButton />
        </div>
    </form>
  );
}
