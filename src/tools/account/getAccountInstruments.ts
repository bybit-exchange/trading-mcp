// getAccountInstruments.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getAccountInstruments = {
  name: 'getAccountInstruments',
  description: "Query tradable instrument specifications for the user's account. Supports spot,\nlinear (USDT/USDC perpetual and futures), and inverse contracts. Returns contract\ndetails, leverage, price, and lot size filters.\n\nRate limit: 10 req/s\n\nAgent hint: Use this to get trading rules before placing orders. The category parameter is\nrequired. For linear/inverse, use symbol to filter to a specific contract. Response\nstructure differs between spot and linear/inverse categories. Spot does not support\npagination.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse"]),
    symbol: z.string().optional(),
    limit: z.number().int().min(1).max(200).default(200).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/account/instruments-info", input);
  },
};
