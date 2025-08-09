
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
      return { success: true, message, generatedArticles: 0 };
    }

    console.log(`Found ${dailyTopics.length} topics to generate for today.`);
    let generatedCount = 0;
    let totalSeoScore = 0;
    const allMessages: string[] = [];

    for (const topic of dailyTopics) {
        console.log(`Generating article for topic: ${topic.subject}`);
        
        try {
            const articleOutput = await generateSeoOptimizedBlogArticle({
              subject: topic.subject,
              keywords: topic.keywords,
              category: topic.category,
            });

            // Calculate SEO score
            const seoScore = calculateSEOScore(articleOutput);
            totalSeoScore += seoScore;
            
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
            generatedCount++;
            allMessages.push(successMessage);

        } catch (error: any) {
            console.error(`Error during article generation for topic "${topic.subject}":`, error);
            const errorMessage = error.message || 'An unknown error occurred.';
            const failureMessage = `Failed to generate article for "${topic.subject}": ${errorMessage}`;
            allMessages.push(failureMessage);
            
            const failureNotification = `❌ Échec de la génération d'article.
📰 Sujet: "${topic.subject}"
🐛 Erreur: ${errorMessage}`;
            await sendTelegramNotification(failureNotification);
        }
    }
    
    const finalMessage = `Batch generation complete. ${generatedCount}/${dailyTopics.length} articles generated. Average SEO score: ${generatedCount > 0 ? Math.round(totalSeoScore / generatedCount) : 0}.`;
    console.log(finalMessage);
    await sendTelegramNotification(`Fin de la tâche de génération. ${generatedCount}/${dailyTopics.length} articles créés.`);
    
    return { success: generatedCount > 0, message: finalMessage, generatedArticles: generatedCount };
}
