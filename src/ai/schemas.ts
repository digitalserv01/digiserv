/**
 * @fileOverview Schemas and types for AI flows.
 */
import {z} from 'zod';

export const GenerateSeoOptimizedBlogArticleInputSchema = z.object({
  subject: z.string().describe('The subject of the blog article.'),
  keywords: z.string().describe('The keywords for SEO optimization, comma separated.'),
  category: z.string().describe('The category of the article.'),
});
export type GenerateSeoOptimizedBlogArticleInput = z.infer<typeof GenerateSeoOptimizedBlogArticleInputSchema>;

export const GenerateSeoOptimizedBlogArticleOutputSchema = z.object({
  title: z.string().describe('The SEO-optimized H1 title of the blog article (60 characters max).'),
  slug: z.string().describe('The URL-friendly slug generated from the title.'),
  metaDescription: z.string().describe('The SEO-optimized meta description (155 characters max).'),
  article: z.string().describe('The full generated blog article in Markdown format.'),
  wordCount: z.number().describe('The total word count of the article.'),
  readingTime: z.string().describe('The estimated reading time (e.g., "6 min").'),
  ctaText: z.string().describe('The context-specific call-to-action text for the conclusion.'),
  ctaButton: z.string().describe('The text for the call-to-action button (e.g., "Discuss on WhatsApp").'),
  keywords: z.array(z.string()).describe('A list of 3-5 relevant SEO keywords for the article.'),
  category: z.string().describe('The category of the blog article.'),
  imageUrl: z.string().describe('The URL of the generated hero image for the article.'),
});
export type GenerateSeoOptimizedBlogArticleOutput = z.infer<typeof GenerateSeoOptimizedBlogArticleOutputSchema>;
