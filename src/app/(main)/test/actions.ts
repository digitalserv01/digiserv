
'use server';

import { generateAndSaveScheduledArticle } from "@/ai/flows/generate-scheduled-article";
import { db } from "@/lib/firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";
import { z } from "zod";

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

const updateImageSchema = z.object({
  articleId: z.string().min(1, 'Article ID is required.'),
  articleSlug: z.string().min(1, 'Article slug is required.'),
  imageUrl: z.string().url('Please enter a valid URL.'),
});

export async function updateArticleImage(prevState: any, formData: FormData) {
  const validatedFields = updateImageSchema.safeParse({
    articleId: formData.get('articleId'),
    articleSlug: formData.get('articleSlug'),
    imageUrl: formData.get('imageUrl'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.imageUrl?.[0] || 'Invalid data provided.',
    };
  }

  const { articleId, articleSlug, imageUrl } = validatedFields.data;

  try {
    const articleRef = doc(db, 'articles', articleId);
    await updateDoc(articleRef, {
      imageUrl: imageUrl,
    });
    
    // Revalidate the pages that display this article
    revalidatePath(`/blog/${articleSlug}`);
    revalidatePath('/blog');
    revalidatePath('/');
    
    return { message: 'Image updated successfully!' };
  } catch (error) {
    console.error('Error updating article image:', error);
    return { error: 'Failed to update image. Please try again.' };
  }
}


const deleteArticleSchema = z.object({
  articleId: z.string().min(1, 'Article ID is required.'),
  articleSlug: z.string().min(1, 'Article slug is required.'),
});

export async function deleteArticle(prevState: any, formData: FormData) {
  const validatedFields = deleteArticleSchema.safeParse({
    articleId: formData.get('articleId'),
    articleSlug: formData.get('articleSlug'),
  });

  if (!validatedFields.success) {
    return {
      error: 'Invalid Article ID provided.',
    };
  }
  
  const { articleId, articleSlug } = validatedFields.data;

  try {
    await deleteDoc(doc(db, "articles", articleId));
    
    // Revalidate all relevant paths
    revalidatePath(`/blog/${articleSlug}`);
    revalidatePath('/blog');
    revalidatePath('/');
    revalidatePath('/sitemap.xml');

    return { message: 'Article deleted successfully.' };
  } catch (error) {
    console.error('Error deleting article:', error);
    return { error: 'Failed to delete the article. Please try again.' };
  }
}
