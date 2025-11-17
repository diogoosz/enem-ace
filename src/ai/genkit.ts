
import {genkit, configureGenkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

// Esta é a forma robusta de garantir que a chave seja lida tanto em desenvolvimento (do .env)
// quanto em produção (do segredo configurado no App Hosting).
configureGenkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

export const ai = genkit({
  model: 'googleai/gemini-1.5-flash-latest',
});
