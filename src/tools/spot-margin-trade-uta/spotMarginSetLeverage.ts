// spotMarginSetLeverage.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const spotMarginSetLeverage = {
  name: 'spotMarginSetLeverage',
  description: "Set the maximum leverage for spot cross margin trading. Account must have spot margin activated first. Valid leverage range is 2 to 10.",
  inputSchema: z.object({
    leverage: z.string(),
    currency: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/spot-margin-trade/set-leverage", input);
  },
};
