'use server';

import { generateAndSaveScheduledArticle } from "@/ai/flows/generate-scheduled-article";

export async function handleGenerateAndSaveArticle(): Promise<{ success: boolean; message: string; generatedArticles: number }> {
  console.log("Triggering article generation flow...");
  try {
    const result = await generateAndSaveScheduledArticle();
    console.log("Flow result:", result);
    return { success: result.success, message: result.message, generatedArticles: result.generatedArticles };
  } catch (error: any) {
    console.error('Critical error in handleGenerateAndSaveArticle:', error);
    // Re-throw the raw error to be caught by the client component
    throw error;
  }
}
