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
});
export type GenerateSeoOptimizedBlogArticleInput = z.infer<typeof GenerateSeoOptimizedBlogArticleInputSchema>;

const GenerateSeoOptimizedBlogArticleOutputSchema = z.object({
  title: z.string().describe('The SEO-optimized title of the blog article.'),
  metaDescription: z.string().describe('The SEO-optimized meta description of the blog article.'),
  article: z.string().describe('The generated blog article in French.'),
});
export type GenerateSeoOptimizedBlogArticleOutput = z.infer<typeof GenerateSeoOptimizedBlogArticleOutputSchema>;

export async function generateSeoOptimizedBlogArticle(input: GenerateSeoOptimizedBlogArticleInput): Promise<GenerateSeoOptimizedBlogArticleOutput> {
  return generateSeoOptimizedBlogArticleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSeoOptimizedBlogArticlePrompt',
  input: {schema: GenerateSeoOptimizedBlogArticleInputSchema},
  output: {schema: GenerateSeoOptimizedBlogArticleOutputSchema},
  prompt: `Écris un article de blog professionnel en français pour entrepreneurs français sur {{{subject}}}. Include :
- Titre SEO optimisé
- Meta description SEO optimisée
- Introduction accrocheuse avec statistique française
- 5-7 conseils pratiques avec exemples français
- Cas d'étude TPE/PME française
- Conclusion avec call-to-action naturel
- Mots-clés : {{{keywords}}}
- Ton : professionnel mais accessible, expertise française
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
