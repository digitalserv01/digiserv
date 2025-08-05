'use server';

import { generateScheduledArticle } from "@/ai/flows/generate-scheduled-article";
import type { GenerateSeoOptimizedBlogArticleOutput } from "@/ai/schemas";
import { db } from "@/lib/firebase";
import { sendTelegramNotification } from "@/services/telegram";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export async function handleGenerateArticle(): Promise<{ article?: GenerateSeoOptimizedBlogArticleOutput; error?: string; }> {
  try {
    const result = await generateScheduledArticle();
    if (result.title === 'No article today') {
        return { article: result };
    }
    return { article: result };
  } catch (error: any) {
    console.error('Error in handleGenerateArticle:', error);
    return { error: error.message || 'Failed to generate article.' };
  }
}

export async function handleSaveArticle(article: GenerateSeoOptimizedBlogArticleOutput): Promise<{ success: boolean; error?: string; articleId?: string }> {
    if (!article || !article.title || article.title === 'No article today') {
        return { success: false, error: 'Invalid article data provided.' };
    }
    try {
        console.log('Saving article to Firestore...');
        const docRef = await addDoc(collection(db, 'articles'), {
            ...article,
            createdAt: serverTimestamp(),
        });
        console.log('Article saved to Firestore with ID:', docRef.id);
        
        // Send Telegram notification
        const notificationMessage = `New article saved: "${article.title}".\n\nPlease upload the corresponding image to the assets folder with the filename: "${article.imageUrl.split('/').pop()}".`;
        await sendTelegramNotification(notificationMessage);


        return { success: true, articleId: docRef.id };
    } catch (error: any) {
        console.error('Error in handleSaveArticle:', error);
        // Log the specific Firebase error
        const errorMessage = error.message || 'An unknown error occurred while saving.';
        console.error('Firestore save error:', errorMessage);
        return { success: false, error: `Failed to save article to Firestore. Details: ${errorMessage}` };
    }
}
