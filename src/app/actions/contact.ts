'use server';
import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ContactSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez fournir une adresse e-mail valide." }),
  body: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

interface ContactFormState {
  message?: string;
  error?: string;
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const rawData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    body: formData.get('body') as string,
  };

  const validatedFields = ContactSchema.safeParse(rawData);

  if (!validatedFields.success) {
    // Return a generic error or a more detailed one
    return {
      error: validatedFields.error.flatten().fieldErrors.name?.[0] || validatedFields.error.flatten().fieldErrors.email?.[0] || validatedFields.error.flatten().fieldErrors.body?.[0] || "Erreur de validation.",
    };
  }

  try {
    const contactsRef = collection(db, 'contacts');
    
    await addDoc(contactsRef, {
      ...validatedFields.data,
      createdAt: serverTimestamp(),
    });

    return { message: "Merci pour votre message ! Nous reviendrons vers vous très prochainement." };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { error: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer plus tard." };
  }
}
