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
  createdAt: Timestamp;
}
