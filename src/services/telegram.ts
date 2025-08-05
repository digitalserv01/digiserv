/**
 * @fileOverview A service to send notifications via Telegram.
 */

export async function sendTelegramNotification(message: string): Promise<void> {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
        console.error('Telegram bot token or chat ID is not configured in .env file.');
        return;
    }

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Telegram API error: ${errorData.description || response.statusText}`);
        }

        console.log('Telegram notification sent successfully.');
    } catch (error: any) {
        console.error('Failed to send Telegram notification:', error.message);
    }
}
