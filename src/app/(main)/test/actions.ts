'use server';

import { generateScheduledArticle } from "@/ai/flows/generate-scheduled-article";
import type { GenerateSeoOptimizedBlogArticleOutput } from "@/ai/flows/generate-seo-optimized-blog-article";

export async function handleGenerateArticle(): Promise<{ article?: GenerateSeoOptimizedBlogArticleOutput; error?: string; }> {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) {
    return { error: 'CRON_SECRET environment variable not set.' };
  }

  try {
    const article = await generateScheduledArticle();
    return { article };
  } catch (error: any) {
    console.error('Error generating scheduled article:', error);
    return { error: error.message || 'Failed to generate article.' };
  }
}
