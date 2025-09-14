import { NextRequest, NextResponse } from 'next/server';

// Function to send Telegram notification
async function sendTelegramNotification(contactData: {
  name: string;
  email: string;
  company?: string;
  project?: string;
  message: string;
  ip: string;
}) {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    if (!botToken || !chatId) {
      console.warn('Telegram credentials not configured');
      return;
    }

    const message = `🔔 *Nouveau Contact AMADIGI*

👤 *Nom:* ${contactData.name}
📧 *Email:* ${contactData.email}
🏢 *Entreprise:* ${contactData.company || 'Non spécifiée'}
📋 *Projet:* ${contactData.project || 'Non spécifié'}

💬 *Message:*
${contactData.message}

⏰ *Date:* ${new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Casablanca' })}
🌐 *IP:* ${contactData.ip}`;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      console.error('Failed to send Telegram notification:', await response.text());
    } else {
      console.log('Telegram notification sent successfully');
    }
  } catch (error) {
    console.error('Error sending Telegram notification:', error);
  }
}

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

    // Préparer les données pour Telegram
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim() || '',
      project: project || '',
      message: message.trim(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    };

    // Envoyer notification Telegram
    await sendTelegramNotification(contactData);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message envoyé avec succès'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    
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
