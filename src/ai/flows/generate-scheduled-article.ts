'use server';
/**
 * @fileOverview A flow to generate a blog article based on a daily schedule and save it.
 *
 * - generateAndSaveScheduledArticle - Triggers article generation, saves to Firestore, and sends a notification.
 */

import {ai} from '@/ai/genkit';
import { generateSeoOptimizedBlogArticle } from './generate-seo-optimized-blog-article';
import { getDailyTopic } from '../daily-prompts';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { sendTelegramNotification } from '@/services/telegram';

interface GenerateAndSaveOutput {
  success: boolean;
  message: string;
  articleId?: string;
  articleTitle?: string;
}


export async function generateAndSaveScheduledArticle(): Promise<GenerateAndSaveOutput> {
    console.log('Running scheduled article generation...');

    const dailyTopic = getDailyTopic();

    if (!dailyTopic) {
      const message = 'No article to generate today.';
      console.log(message);
      return { success: true, message };
    }

    console.log(`Generating article for topic: ${dailyTopic.subject}`);
    
    try {
        const articleOutput = await generateSeoOptimizedBlogArticle({
          subject: dailyTopic.subject,
          keywords: dailyTopic.keywords,
          category: dailyTopic.category,
        });

        console.log(`Article "${articleOutput.title}" generated. Now saving to Firestore...`);

        const docRef = await addDoc(collection(db, 'articles'), {
            ...articleOutput,
            createdAt: serverTimestamp(),
        });

        const successMessage = `Article saved to Firestore with ID: ${docRef.id}`;
        console.log(successMessage);
        
        const notificationMessage = `New article published: "${articleOutput.title}". An image from Unsplash has been automatically assigned.`;
        await sendTelegramNotification(notificationMessage);

        return { success: true, message: successMessage, articleId: docRef.id, articleTitle: articleOutput.title };

    } catch (error: any) {
        console.error('Error during article generation or saving process:', error);
        const errorMessage = error.message || 'An unknown error occurred.';
        await sendTelegramNotification(`Failed to generate/save article. Error: ${errorMessage}`);
        return { success: false, message: errorMessage };
    }
}
