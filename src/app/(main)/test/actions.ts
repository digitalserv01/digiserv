'use server';

import { generateAndSaveScheduledArticle } from "@/ai/flows/generate-scheduled-article";

export async function handleGenerateAndSaveArticle(): Promise<{ success: boolean; message: string; articleId?: string }> {
  try {
    const result = await generateAndSaveScheduledArticle();
    return { success: result.success, message: result.message, articleId: result.articleId };
  } catch (error: any) {
    console.error('Error in handleGenerateAndSaveArticle:', error);
    return { success: false, message: error.message || 'Failed to generate and save article.' };
  }
}
