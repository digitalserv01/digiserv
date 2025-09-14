import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

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
    const { name, email, company, project, message } = body;

    // Validation des champs requis
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Les champs nom, email et message sont requis' },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Protection contre le spam (limitation de longueur)
    if (message.length > 2000) {
      return NextResponse.json(
        { error: 'Le message est trop long (maximum 2000 caractères)' },
        { status: 400 }
      );
    }

    // Préparer les données pour Firebase
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim() || '',
      project: project || '',
      message: message.trim(),
      timestamp: serverTimestamp(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    };

    // Sauvegarder dans Firebase
    const docRef = await addDoc(collection(db, 'contacts'), contactData);

    // Log de succès (optionnel, pour le monitoring)
    console.log('Nouveau contact sauvegardé:', docRef.id);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message envoyé avec succès',
        id: docRef.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de la sauvegarde du contact:', error);
    
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
