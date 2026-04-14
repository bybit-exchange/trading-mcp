// getFeeRate.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getFeeRate = {
  name: 'getFeeRate',
  description: "Query the maker and taker fee rates for the specified product category.\nCan filter by symbol (spot/linear/inverse) or baseCoin (options only).\n\nRate limit: 10 req/s\n\nAgent hint: Use this to check fee rates before trading. The category parameter is required.\nUse symbol to filter for spot/linear/inverse. Use baseCoin for options (e.g., BTC, ETH, SOL).\nFee rates are returned as decimal strings (e.g., \"0.0006\" = 0.06%).",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse", "option"]),
    symbol: z.string().optional(),
    baseCoin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/account/fee-rate", input);
  },
};
