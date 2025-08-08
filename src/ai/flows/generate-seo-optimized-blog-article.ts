'use server';
/**
 * @fileOverview A flow that generates SEO-optimized blog articles in French, including a hero image.
 *
 * - generateSeoOptimizedBlogArticle - A function that handles the blog article generation process.
 */

import {ai} from '@/ai/genkit';
import { GenerateSeoOptimizedBlogArticleInput, GenerateSeoOptimizedBlogArticleInputSchema, GenerateSeoOptimizedBlogArticleOutput, GenerateSeoOptimizedBlogArticleOutputSchema } from '../schemas';

// Helper function to generate a URL-friendly slug
function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .normalize("NFD") // Decompose accented characters
        .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
        .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters except spaces and hyphens
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-'); // Replace multiple hyphens with a single one
}

export async function generateSeoOptimizedBlogArticle(input: GenerateSeoOptimizedBlogArticleInput): Promise<GenerateSeoOptimizedBlogArticleOutput> {
  return generateSeoOptimizedBlogArticleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSeoOptimizedBlogArticlePrompt',
  input: {schema: GenerateSeoOptimizedBlogArticleInputSchema},
  output: {schema: GenerateSeoOptimizedBlogArticleOutputSchema.omit({ imageUrl: true, slug: true })}, // The prompt itself doesn't generate the URL or slug
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
      *   Example for ctaText: "Our team develops professional showcase sites optimized for the French market starting at €209. Let's talk about your project on WhatsApp!"
      *   For ctaButton, use a concise and direct call to action like "Discuter sur WhatsApp" or "Réserver sur WhatsApp".

  5.  **Tone & Style**:
      *   Use a professional yet accessible tone. Use "vous" instead of "tu".
      *   Provide examples from various French sectors (e.g., retail, tech, artisan).
      *   Reference French legal aspects where relevant (RGPD, Code du Travail).

  **IMPERATIVE**: The article MUST be between 1000 and 1200 words and be COMPLETE with:
  - Complete introduction (150 words)
  - 7 detailed sections (120-150 words each)
  - Complete tools section (150 words)
  - COMPLETE case study with figures (200 words)
  - COMPLETE conclusion with CTA transition (150 words)
  
  VERIFY that the article is not truncated before returning it.

  **JSON Output**:
  You must return a complete JSON object matching the output schema.
  - Calculate wordCount and readingTime (based on 200 words per minute).
  - The article field must be a single string containing the full article formatted with Markdown.
  - Extract 3-5 main keywords for the keywords array.
  - Return the original category provided in the input.
`,
});

const generateSeoOptimizedBlogArticleFlow = ai.defineFlow(
  {
    name: 'generateSeoOptimizedBlogArticleFlow',
    inputSchema: GenerateSeoOptimizedBlogArticleInputSchema,
    outputSchema: GenerateSeoOptimizedBlogArticleOutputSchema,
  },
  async input => {
    // 1. Generate the text content of the article
    const {output} = await prompt(input);
    if (!output) {
        throw new Error('Failed to generate article text. The AI model did not return a valid JSON output.');
    }
    
    // 2. Generate the slug from the title
    const slug = generateSlug(output.title);

    // 3. Generate a dynamic Unsplash image URL based on the category
    const imageUrl = `https://source.unsplash.com/random/1200x600?${encodeURIComponent(input.category.replace(/-/g, ' '))}`;
    
    // 4. Combine text, slug, and image URL into the final output
    return {
      ...output,
      slug,
      imageUrl,
    };
  }
);
