'use server';

import { generateScheduledArticle } from "@/ai/flows/generate-scheduled-article";
import type { GenerateSeoOptimizedBlogArticleOutput } from "@/ai/schemas";
import { db } from "@/lib/firebase";
import { uploadImage } from "@/services/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export async function handleGenerateArticle(): Promise<{ article?: GenerateSeoOptimizedBlogArticleOutput; error?: string; }> {
  try {
    const result = await generateScheduledArticle();
    return { article: result };
  } catch (error: any) {
    console.error('Error generating scheduled article:', error);
    return { error: error.message || 'Failed to generate article.' };
  }
}

export async function handleSaveArticle(article: GenerateSeoOptimizedBlogArticleOutput): Promise<{ success: boolean; error?: string; articleId?: string }> {
    if (!article || !article.title || article.title === 'No article today') {
        return { success: false, error: 'Invalid article data provided.' };
    }
    try {
        console.log('Uploading hero image to Firebase Storage...');
        const publicImageUrl = await uploadImage(article.imageUrl, 'blogs');
        console.log('Image uploaded successfully:', publicImageUrl);

        const articleToSave = {
            ...article,
            imageUrl: publicImageUrl,
        };

        console.log('Saving article to Firestore...');
        const docRef = await addDoc(collection(db, 'articles'), {
            ...articleToSave,
            createdAt: serverTimestamp(),
        });
        console.log('Article saved to Firestore with ID:', docRef.id);
        return { success: true, articleId: docRef.id };
    } catch (error: any) {
        console.error('Error in handleSaveArticle:', error);
        return { success: false, error: error.message || 'Failed to save article.' };
    }
}
