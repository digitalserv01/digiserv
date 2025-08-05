'use server';

import { generateScheduledArticle } from "@/ai/flows/generate-scheduled-article";
import type { GenerateSeoOptimizedBlogArticleOutput } from "@/ai/schemas";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

// This action is now simplified as the flow handles saving.
// It can be used to just trigger the flow and report back the result.
export async function handleGenerateArticle(): Promise<{ article?: GenerateSeoOptimizedBlogArticleOutput & { articleId?: string }; error?: string; }> {
  try {
    const result = await generateScheduledArticle();
    if (result.title === 'No article today') {
      return { article: result };
    }
    // The article is already saved by the flow. We can return the result which now includes the ID.
    return { article: result };
  } catch (error: any) {
    console.error('Error generating scheduled article:', error);
    return { error: error.message || 'Failed to generate article.' };
  }
}


// This action is no longer needed as saving is part of the generation flow.
// It is kept here in case you want to implement a manual save feature later,
// but it is not used by the current test page.
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
        return { success: true, articleId: docRef.id };
    } catch (error: any) {
        console.error('Error saving article to Firestore:', error);
        return { success: false, error: error.message || 'Failed to save article.' };
    }
}
