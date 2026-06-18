// getLPPoolList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getLPPoolList = {
  name: 'getLPPoolList',
  description: "Query available liquidity pools with optional filtering by tag and token.\nReturns pool information including addresses, supported tokens, APY, and TVL.\n\nAI agent can use this to help users discover and compare liquidity pools.\n\nAgent hint: Use this endpoint when user wants to browse available LP pools or search for pools by token.\nFilter by tokenSymbol to find pools containing a specific token.",
  inputSchema: z.object({
    tokenSymbol: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/lp/pool-list", input);
  },
};
