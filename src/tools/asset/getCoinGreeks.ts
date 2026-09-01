// getCoinGreeks.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCoinGreeks = {
  name: 'getCoinGreeks',
  description: "Get current account Greeks information for options positions.\n- Unified account only.\n- Returns the aggregated Greeks (delta, gamma, vega, theta) per base coin.",
  inputSchema: z.object({
    baseCoin: z.string().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/coin-greeks", input);
  },
};
