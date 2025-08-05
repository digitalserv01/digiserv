'use server';
/**
 * @fileOverview A flow to generate a blog article based on a daily schedule and save it to Firestore.
 *
 * - generateScheduledArticle - A function that triggers the daily article generation and saving.
 */

import {ai} from '@/ai/genkit';
import { generateSeoOptimizedBlogArticle } from './generate-seo-optimized-blog-article';
import { getDailyTopic } from '../daily-prompts';
import { GenerateSeoOptimizedBlogArticleOutput, GenerateSeoOptimizedBlogArticleOutputSchema } from '../schemas';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { z } from 'zod';


const GenerateScheduledArticleOutputSchema = GenerateSeoOptimizedBlogArticleOutputSchema.extend({
    articleId: z.string().optional(),
});
type GenerateScheduledArticleOutput = z.infer<typeof GenerateScheduledArticleOutputSchema>;


export async function generateScheduledArticle(): Promise<GenerateScheduledArticleOutput> {
    return generateScheduledArticleFlow();
}

const generateScheduledArticleFlow = ai.defineFlow(
  {
    name: 'generateScheduledArticleFlow',
    outputSchema: GenerateScheduledArticleOutputSchema,
  },
  async () => {
    console.log('Running scheduled article generation...');

    const dailyTopic = getDailyTopic();

    if (!dailyTopic) {
      console.log('No article to generate today.');
      // Return a compatible empty-like response
      return { 
        title: 'No article today', 
        article: '', 
        metaDescription: '',
        wordCount: 0,
        readingTime: '0 min',
        ctaText: '',
        ctaButton: '',
        keywords: [],
        category: '',
        imageUrl: '',
      };
    }

    console.log(`Generating article for topic: ${dailyTopic.subject}`);

    const articleOutput = await generateSeoOptimizedBlogArticle({
      subject: dailyTopic.subject,
      keywords: dailyTopic.keywords,
      category: dailyTopic.category,
    });

    console.log('Generated Article:', articleOutput.title);
    
    // Save the article to Firestore
    try {
        console.log('Saving article to Firestore...');
        const docRef = await addDoc(collection(db, 'articles'), {
            ...articleOutput,
            createdAt: serverTimestamp(),
        });
        console.log('Article saved to Firestore with ID:', docRef.id);
        return {
            ...articleOutput,
            articleId: docRef.id,
        };
    } catch (error) {
        console.error('Error saving article to Firestore:', error);
        throw new Error('Failed to save article to Firestore.');
    }
  }
);
