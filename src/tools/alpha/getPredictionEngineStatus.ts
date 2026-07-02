// getPredictionEngineStatus.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPredictionEngineStatus = {
  name: 'getPredictionEngineStatus',
  description: "Query whether the prediction market matching engine is currently available.\nWhen the engine is unavailable, buy and sell orders cannot be submitted.\n\nAI agent should check engine status before attempting to place orders.\nIf the engine is unavailable, inform the user and do not proceed with trading.\n\nAgent hint: Call this before placing any buy or sell order to check if the matching engine is available.\nIf available=false, do not proceed with trading and inform the user that the market is temporarily unavailable.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/alpha/prediction/engine-status", input);
  },
};
