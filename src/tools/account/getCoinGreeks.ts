// getCoinGreeks.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCoinGreeks = {
  name: 'getCoinGreeks',
  description: "Query option Greeks aggregated by base coin. Returns delta, gamma, vega, and\ntheta for each base coin with option positions.\n\nRate limit: 10 req/s\n\nAgent hint: Use this for options risk management. Pass baseCoin to filter (e.g., BTC, ETH, SOL).\nIf omitted, returns Greeks for all base coins. All Greek values are returned as\nstring numbers.",
  inputSchema: z.object({
    baseCoin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/coin-greeks", input);
  },
};
