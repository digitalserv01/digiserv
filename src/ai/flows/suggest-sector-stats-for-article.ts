'use server';
/**
 * @fileOverview A flow to determine if sector statistics would be useful and include them in an article.
 *
 * - suggestSectorStatsForArticle - A function that determines whether to include sector statistics in an article.
 * - SuggestSectorStatsForArticleInput - The input type for the suggestSectorStatsForArticle function.
 * - SuggestSectorStatsForArticleOutput - The return type for the suggestSectorStatsForArticle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSectorStatsForArticleInputSchema = z.object({
  articleContent: z.string().describe('The content of the article.'),
  articleTopic: z.string().describe('The main topic of the article.'),
});
export type SuggestSectorStatsForArticleInput = z.infer<typeof SuggestSectorStatsForArticleInputSchema>;

const SuggestSectorStatsForArticleOutputSchema = z.object({
  includeStats: z.boolean().describe('Whether sector statistics should be included.'),
  justification: z.string().describe('The reasoning behind the decision to include or not include statistics.'),
});
export type SuggestSectorStatsForArticleOutput = z.infer<typeof SuggestSectorStatsForArticleOutputSchema>;

export async function suggestSectorStatsForArticle(input: SuggestSectorStatsForArticleInput): Promise<SuggestSectorStatsForArticleOutput> {
  return suggestSectorStatsForArticleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestSectorStatsForArticlePrompt',
  input: {schema: SuggestSectorStatsForArticleInputSchema},
  output: {schema: SuggestSectorStatsForArticleOutputSchema},
  prompt: `You are an AI assistant helping to determine if sector statistics would be useful to enhance a blog article.

  Article Topic: {{{articleTopic}}}
  Article Content: {{{articleContent}}}

  Determine whether including sector statistics would make the article more informative and engaging for the reader.
  Consider the topic and content of the article. If the article discusses trends, growth, market size, or other quantifiable aspects of a sector, then statistics would likely be beneficial.
  If the article is more focused on abstract concepts, opinions, or qualitative advice, then statistics might not be necessary.

  Reason your decision step by step. Finally, set the includeStats field to true if you recommend including statistics, and false otherwise.
`,
});

const suggestSectorStatsForArticleFlow = ai.defineFlow(
  {
    name: 'suggestSectorStatsForArticleFlow',
    inputSchema: SuggestSectorStatsForArticleInputSchema,
    outputSchema: SuggestSectorStatsForArticleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
