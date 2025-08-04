'use server';
/**
 * @fileOverview A flow to generate a blog article based on a daily schedule.
 *
 * - generateScheduledArticle - A function that triggers the daily article generation.
 */

import {ai} from '@/ai/genkit';
import { z } from 'genkit/zod';
import { generateSeoOptimizedBlogArticle } from './generate-seo-optimized-blog-article';
import { getDailyTopic } from '../daily-prompts';

const ScheduledArticleOutputSchema = z.object({
  title: z.string(),
  article: z.string(),
});

export async function generateScheduledArticle(): Promise<z.infer<typeof ScheduledArticleOutputSchema>> {
    return generateScheduledArticleFlow();
}

const generateScheduledArticleFlow = ai.defineFlow(
  {
    name: 'generateScheduledArticleFlow',
    outputSchema: ScheduledArticleOutputSchema,
  },
  async () => {
    console.log('Running scheduled article generation...');

    const dailyTopic = getDailyTopic();

    if (!dailyTopic) {
      console.log('No article to generate today.');
      return { title: 'No article today', article: '' };
    }

    console.log(`Generating article for topic: ${dailyTopic.subject}`);

    const articleOutput = await generateSeoOptimizedBlogArticle({
      subject: dailyTopic.subject,
      keywords: dailyTopic.keywords,
    });

    // Here you would typically save the article to your database.
    // For now, we'll just log it to the console.
    console.log('Generated Article:', articleOutput.title);
    
    // In a real application, you would save the full articleOutput to a database.
    // e.g., await db.collection('articles').add(articleOutput);

    return {
        title: articleOutput.title,
        article: articleOutput.article,
    };
  }
);