'use server';
/**
 * @fileOverview A flow that generates SEO-optimized blog articles in French.
 *
 * - generateSeoOptimizedBlogArticle - A function that handles the blog article generation process.
 * - GenerateSeoOptimizedBlogArticleInput - The input type for the generateSeoOptimizedBlogArticle function.
 * - GenerateSeoOptimizedBlogArticleOutput - The return type for the generateSeoOptimizedBlogArticle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSeoOptimizedBlogArticleInputSchema = z.object({
  subject: z.string().describe('The subject of the blog article.'),
  keywords: z.string().describe('The keywords for SEO optimization, comma separated.'),
  category: z.string().describe('The category of the article.'),
});
export type GenerateSeoOptimizedBlogArticleInput = z.infer<typeof GenerateSeoOptimizedBlogArticleInputSchema>;

const GenerateSeoOptimizedBlogArticleOutputSchema = z.object({
  title: z.string().describe('The SEO-optimized H1 title of the blog article (60 characters max).'),
  metaDescription: z.string().describe('The SEO-optimized meta description (155 characters max).'),
  article: z.string().describe('The full generated blog article in Markdown format.'),
  wordCount: z.number().describe('The total word count of the article.'),
  readingTime: z.string().describe('The estimated reading time (e.g., "6 min").'),
  ctaText: z.string().describe('The context-specific call-to-action text for the conclusion.'),
  ctaButton: z.string().describe('The text for the call-to-action button (e.g., "Discuss on WhatsApp").'),
  keywords: z.array(z.string()).describe('A list of 3-5 relevant SEO keywords for the article.'),
});
export type GenerateSeoOptimizedBlogArticleOutput = z.infer<typeof GenerateSeoOptimizedBlogArticleOutputSchema>;

export async function generateSeoOptimizedBlogArticle(input: GenerateSeoOptimizedBlogArticleInput): Promise<GenerateSeoOptimizedBlogArticleOutput> {
  return generateSeoOptimizedBlogArticleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSeoOptimizedBlogArticlePrompt',
  input: {schema: GenerateSeoOptimizedBlogArticleInputSchema},
  output: {schema: GenerateSeoOptimizedBlogArticleOutputSchema},
  prompt: `
  You are an expert French content creator for a digital services blog. Your audience is French entrepreneurs and small business owners.
  Your task is to write a comprehensive, professional, and SEO-optimized blog post of 1000-1200 words on the given subject.

  **Subject**: {{{subject}}}
  **Keywords**: {{{keywords}}}
  **Category**: {{{category}}}

  **MANDATORY STRUCTURE & REQUIREMENTS**:

  1.  **Title (H1)**: SEO-optimized, 60 characters maximum.
  2.  **Meta Description**: 155 characters maximum. Must include main keywords, a benefit, and the current year.
  3.  **Article Content (Markdown)**:
      *   **Introduction (approx. 150 words)**: Start with a compelling French statistic, state a common problem for entrepreneurs, and promise a solution within the article.
      *   **Main Body (7-8 sections with H2/H3 headings)**:
          *   **7 Detailed Practical Tips**: Each tip should be a separate section with a clear heading (H2 or H3). Each tip must be 120-150 words long, providing actionable advice and concrete examples relevant to the French market.
          *   **Recommended Tools Section**: A dedicated section comparing 3-4 specific tools/platforms suitable for the French market. Include realistic pricing (e.g., hosting at 5€/month, domain at 12€/year) and links if applicable.
          *   **In-depth Case Study**: A section detailing a realistic success story of a French SME (e.g., a "boulanger" in Lyon, a "menuisier" in Bordeaux). Include before/after results and quantifiable achievements.
      *   **Conclusion (approx. 150 words)**: Summarize the key takeaways and provide encouragement. It MUST seamlessly transition to a specific, contextual Call-to-Action (CTA).

  4.  **Call-To-Action (CTA)**: The CTA must be specific to the article's topic and include a price.
      *   Example for a Web Dev article: "Our team develops professional showcase sites optimized for the French market starting at €209. Let's talk about your project on WhatsApp!"
      *   Example for a CV article: "If you want a professional CV that gets past all French ATS filters, our team can help you create one for just €17."

  5.  **Tone & Style**:
      *   Use a professional yet accessible tone. Use "vous" instead of "tu".
      *   Provide examples from various French sectors (e.g., retail, tech, artisan).
      *   Reference French legal aspects where relevant (RGPD, Code du Travail).

  **JSON Output**:
  You must return a complete JSON object matching the output schema.
  - Calculate `wordCount` and `readingTime` (based on 200 words per minute).
  - The `article` field must be a single string containing the full article formatted with Markdown.
  - Extract 3-5 main keywords for the `keywords` array.
`,
});

const generateSeoOptimizedBlogArticleFlow = ai.defineFlow(
  {
    name: 'generateSeoOptimizedBlogArticleFlow',
    inputSchema: GenerateSeoOptimizedBlogArticleInputSchema,
    outputSchema: GenerateSeoOptimizedBlogArticleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
