// getTieredCollateralRatio.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getTieredCollateralRatio = {
  name: 'getTieredCollateralRatio',
  description: "Query UTA loan tiered collateral ratio for spot margin trading.\n- Returns collateral ratio tiers for all coins if `currency` is not specified.\n- Each tier defines a quantity range and its applicable collateral ratio.\n- An empty `maxQty` string indicates positive infinity (no upper limit).\n\nAgent hint: Public endpoint, no authentication needed. Use this to check how much collateral value a given coin contributes at different holding levels. Each tier has a minQty, maxQty, and collateralRatio. An empty maxQty means unlimited. Pass `currency` to filter for a specific coin.",
  inputSchema: z.object({
    currency: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/spot-margin-trade/collateral", input);
  },
};
