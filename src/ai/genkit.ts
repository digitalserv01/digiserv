// This file is no longer used for article generation but is kept for potential future use with other Genkit features.
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.0-pro',
});
