'use server';
import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';

const SubscribeSchema = z.object({
  email: z.string().email({ message: "Veuillez fournir une adresse e-mail valide." }),
});

interface SubscribeState {
  message?: string;
  error?: string;
}

export async function subscribeToNewsletter(prevState: SubscribeState, formData: FormData): Promise<SubscribeState> {
  const email = formData.get('email') as string;

  const validatedFields = SubscribeSchema.safeParse({ email });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.email?.[0],
    };
  }
  
  const validatedEmail = validatedFields.data.email;

  try {
    const subscribersRef = collection(db, 'subscribers');
    
    // Check if email already exists to avoid duplicates
    const q = query(subscribersRef, where('email', '==', validatedEmail));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        return { message: "Vous êtes déjà abonné à notre newsletter. Merci !" };
    }

    // Add new subscriber
    await addDoc(subscribersRef, {
      email: validatedEmail,
      subscribedAt: serverTimestamp(),
    });

    return { message: "Merci pour votre inscription ! Vous recevrez bientôt nos actualités." };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return { error: "Une erreur est survenue. Veuillez réessayer plus tard." };
  }
}
