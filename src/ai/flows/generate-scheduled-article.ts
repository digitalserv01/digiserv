'use server';
/**
 * @fileOverview A flow to generate a blog article based on a daily schedule.
 *
 * - generateScheduledArticle - A function that triggers the daily article generation.
 */

import {ai} from '@/ai/genkit';
import { generateSeoOptimizedBlogArticle } from './generate-seo-optimized-blog-article';
import { getDailyTopic } from '../daily-prompts';
import { GenerateSeoOptimizedBlogArticleOutput, GenerateSeoOptimizedBlogArticleOutputSchema } from '../schemas';


export async function generateScheduledArticle(): Promise<GenerateSeoOptimizedBlogArticleOutput> {
    return generateScheduledArticleFlow();
}

const generateScheduledArticleFlow = ai.defineFlow(
  {
    name: 'generateScheduledArticleFlow',
    outputSchema: GenerateSeoOptimizedBlogArticleOutputSchema,
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
    
    // The article is no longer saved here automatically. 
    // It is returned and can be saved by the calling function.
    return articleOutput;
  }
);
