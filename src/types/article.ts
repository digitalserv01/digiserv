import type { Timestamp } from 'firebase/firestore';

export interface Article {
  id: string;
  title: string;
  metaDescription: string;
  article: string;
  wordCount: number;
  readingTime: string;
  ctaText: string;
  ctaButton: string;
  keywords: string[];
  category: string;
  createdAt: string; // Changed from Timestamp to string
  imageUrl: string;
}

export interface ArticleDocument extends Omit<Article, 'id' | 'createdAt'> {
    createdAt: Timestamp;
}
