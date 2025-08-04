'use server';

import { generateScheduledArticle } from "@/ai/flows/generate-scheduled-article";

export async function handleGenerateArticle() {
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
