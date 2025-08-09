
'use server';
/**
 * @fileOverview A flow to generate a blog article based on a daily schedule and save it.
 *
 * - generateAndSaveScheduledArticle - Triggers article generation, saves to Firestore, and sends a notification.
 */

import { generateSeoOptimizedBlogArticle } from './generate-seo-optimized-blog-article';
import { getDailyTopics } from '../daily-prompts';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { sendTelegramNotification } from '@/services/telegram';
import { GenerateSeoOptimizedBlogArticleOutput } from '../schemas';


interface GenerateAndSaveOutput {
  success: boolean;
  message: string;
  articleId?: string;
  articleTitle?: string;
  seoScore?: number;
}

// SEO Score Calculator
function calculateSEOScore(article: GenerateSeoOptimizedBlogArticleOutput): number {
  let score = 0;
  const maxScore = 100;

  if (!article.keywords) article.keywords = [];

  // Title optimization (20 points)
  if (article.title && article.title.length >= 30 && article.title.length <= 60) score += 15;
  if (article.title && article.keywords.some((kw: string) => article.title.toLowerCase().includes(kw.toLowerCase()))) score += 5;

  // Meta description (15 points)
  if (article.metaDescription && article.metaDescription.length >= 120 && article.metaDescription.length <= 155) score += 10;
  if (article.metaDescription && article.keywords.some((kw: string) => article.metaDescription.toLowerCase().includes(kw.toLowerCase()))) score += 5;

  // Content length (20 points)
  if (article.wordCount >= 1000 && article.wordCount <= 1200) score += 20;
  else if (article.wordCount >= 800) score += 15;

  // Keyword usage (20 points)
  if (article.article) {
      const keywordDensity = article.keywords.reduce((acc: number, keyword: string) => {
        const occurrences = (article.article.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'g')) || []).length;
        return acc + occurrences;
      }, 0);
      
      if (keywordDensity >= 3 && keywordDensity <= 8) score += 20;
      else if (keywordDensity >= 1) score += 10;
  }

  // Structure (15 points)
  if (article.article) {
    const hasH2 = article.article.includes('## ');
    const hasH3 = article.article.includes('### ');
    const hasConclusion = article.article.toLowerCase().includes('conclusion');
    
    if (hasH2) score += 5;
    if (hasH3) score += 5;
    if (hasConclusion) score += 5;
  }


  // CTA presence (10 points)
  if (article.ctaText && article.ctaButton) score += 10;

  return Math.min(score, maxScore);
}


export async function generateAndSaveScheduledArticle(): Promise<{ success: boolean; message: string; generatedArticles: number }> {
    console.log('Running scheduled article generation with DeepSeek...');

    const dailyTopics = getDailyTopics();

    if (!dailyTopics || dailyTopics.length === 0) {
      const message = 'No articles to generate today.';
      console.log(message);
      // For cron job, this is a valid state. For test page, we throw.
      throw new Error(message);
    }
    
    console.log(`Found ${dailyTopics.length} articles to generate for today.`);

    let successCount = 0;
    let failureCount = 0;
    const errors: string[] = [];

    for (const topic of dailyTopics) {
        try {
            console.log(`Generating article for topic: ${topic.subject}`);
            
            const articleOutput = await generateSeoOptimizedBlogArticle({
              subject: topic.subject,
              keywords: topic.keywords,
              category: topic.category,
            });

            const seoScore = calculateSEOScore(articleOutput);
            
            console.log(`Article "${articleOutput.title}" generated with SEO score: ${seoScore}/100`);

            const docRef = await addDoc(collection(db, 'articles'), {
                ...articleOutput,
                seoScore,
                createdAt: serverTimestamp(),
            });

            const successMessage = `Article "${articleOutput.title}" saved to Firestore with ID: ${docRef.id}. Score: ${seoScore}/100`;
            console.log(successMessage);
            
            const notificationMessage = `✅ Nouvel article publié !
📰 "${articleOutput.title}"
📊 Score SEO: ${seoScore}/100
📝 ${articleOutput.wordCount} mots`;

            await sendTelegramNotification(notificationMessage);
            successCount++;

        } catch (error: any) {
            console.error(`Error during article generation for topic "${topic.subject}":`, error);
            const errorMessage = error.message || 'An unknown error occurred.';
            const failureMessage = `Failed to generate article for "${topic.subject}": ${errorMessage}`;
            errors.push(failureMessage);
            
            const failureNotification = `❌ Échec de la génération d'article.
📰 Sujet: "${topic.subject}"
🐛 Erreur: ${errorMessage}`;
            
            await sendTelegramNotification(failureNotification);
            failureCount++;
        }
    }
    
    let finalMessage = `Generation complete. Successfully generated ${successCount} articles.`;
    if(failureCount > 0) {
        finalMessage += ` Failed to generate ${failureCount} articles. Errors: ${errors.join('; ')}`;
    }

    if(failureCount > 0 && successCount === 0) {
        // If all articles failed, we throw the concatenated error messages
        throw new Error(finalMessage);
    }

    return { 
      success: true, 
      message: finalMessage, 
      generatedArticles: successCount,
    };
}
