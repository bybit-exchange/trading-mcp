// getPredictionPayTokenList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPredictionPayTokenList = {
  name: 'getPredictionPayTokenList',
  description: "Query available payment tokens for prediction market trading.\nReturns token symbol, code, and supported blockchain list.\n\nAI agent should call this before executing a trade to verify supported payment tokens.\nPrediction market Phase 1 supports USDC only.\n\nAgent hint: Use this endpoint to get available payment tokens before placing a prediction market buy order.\nReturns USDC token info. Use the token code in buy requests (payTokenCode field).",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/alpha/prediction/pay-token-list", input);
  },
};
