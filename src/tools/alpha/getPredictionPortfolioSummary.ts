// getPredictionPortfolioSummary.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPredictionPortfolioSummary = {
  name: 'getPredictionPortfolioSummary',
  description: "Query an aggregated summary of the authenticated user's prediction market portfolio.\nReturns total invested amount, current portfolio value, unrealized and realized P&L,\nand total number of active and historical positions.\n\nAI agent can use this to give users a quick overview of their prediction\nmarket performance without listing all individual positions.\n\nAgent hint: Use this for a high-level portfolio overview: total value, total P&L, position counts.\nFor individual position details, use getPredictionPositionList.\nFor historical P&L breakdown, use getPredictionPositionHistory.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/prediction/portfolio-summary", input);
  },
};
