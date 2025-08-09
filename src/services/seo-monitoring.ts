/**
 * @fileOverview A service to fetch SEO metrics for the admin dashboard.
 */
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Article, ArticleDocument } from '@/types/article';

export interface SEOMetrics {
  totalArticles: number;
  averageSeoScore: number;
  topPerformingArticles: Article[];
  recentArticles: Article[];
}

export class SEOMonitoringService {
  static async getDashboardMetrics(): Promise<SEOMetrics> {
    try {
      const articlesRef = collection(db, 'articles');
      
      const allArticlesQuery = query(articlesRef, orderBy('createdAt', 'desc'));
      const allArticlesSnapshot = await getDocs(allArticlesQuery);
      
      const allArticles = allArticlesSnapshot.docs.map(doc => {
        const data = doc.data() as ArticleDocument;
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toJSON() || new Date().toJSON(),
        } as Article;
      });

      const totalArticles = allArticles.length;
      
      const averageSeoScore = totalArticles > 0 
        ? Math.round(allArticles.reduce((sum, article) => sum + (article.seoScore || 0), 0) / totalArticles)
        : 0;
      
      const topPerformingArticles = [...allArticles]
        .sort((a, b) => (b.seoScore || 0) - (a.seoScore || 0))
        .slice(0, 5);

      const recentArticles = allArticles.slice(0, 10);

      return {
        totalArticles,
        averageSeoScore,
        topPerformingArticles,
        recentArticles,
      };
    } catch (error) {
      console.error('Error fetching dashboard metrics:', error);
      throw error;
    }
  }
}
