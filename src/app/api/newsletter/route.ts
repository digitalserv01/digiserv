import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';

// Configuration Firebase (sécurisée côté serveur)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialiser Firebase (une seule fois)
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const db = getFirestore(app);

export async function POST(request: NextRequest) {
  try {
    // Vérifier la méthode HTTP
    if (request.method !== 'POST') {
      return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
    }

    // Récupérer les données du formulaire
    const body = await request.json();
    const { email } = body;

    // Validation de l'email
    if (!email) {
      return NextResponse.json(
        { error: 'L\'adresse email est requise' },
        { status: 400 }
      );
    }

    // Validation du format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Vérifier si l'email existe déjà
    const q = query(collection(db, 'newsletter'), where('email', '==', normalizedEmail));
    const existingSubscriptions = await getDocs(q);

    if (!existingSubscriptions.empty) {
      return NextResponse.json(
        { error: 'Cette adresse email est déjà inscrite à notre newsletter' },
        { status: 409 }
      );
    }

    // Préparer les données pour Firebase
    const newsletterData = {
      email: normalizedEmail,
      timestamp: serverTimestamp(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
      source: 'website'
    };

    // Sauvegarder dans Firebase
    const docRef = await addDoc(collection(db, 'newsletter'), newsletterData);

    // Log de succès (optionnel, pour le monitoring)
    console.log('Nouvelle inscription newsletter:', docRef.id);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inscription à la newsletter réussie !',
        id: docRef.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'inscription à la newsletter:', error);
    
    return NextResponse.json(
      { 
        error: 'Erreur interne du serveur. Veuillez réessayer plus tard.' 
      },
      { status: 500 }
    );
  }
}

// Gérer les autres méthodes HTTP
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
