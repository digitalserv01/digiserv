import { NextRequest, NextResponse } from 'next/server';

// Function to send Telegram notification for newsletter subscription
async function sendTelegramNotification(newsletterData: {
  email: string;
  ip: string;
}) {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    if (!botToken || !chatId) {
      console.warn('Telegram credentials not configured');
      return;
    }

    const message = `📧 *Nouvelle Inscription Newsletter AMADIGI*

📬 *Email:* ${newsletterData.email}
⏰ *Date:* ${new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Casablanca' })}
🌐 *IP:* ${newsletterData.ip}

🎉 *Nouvel abonné à la newsletter !*`;

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
      console.log('Newsletter Telegram notification sent successfully');
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

    // Préparer les données pour Telegram
    const newsletterData = {
      email: normalizedEmail,
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    };

    // Envoyer notification Telegram
    await sendTelegramNotification(newsletterData);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inscription à la newsletter réussie !'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de la newsletter:', error);
    
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
