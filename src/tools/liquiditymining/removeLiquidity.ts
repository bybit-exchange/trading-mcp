// removeLiquidity.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const removeLiquidity = {
  name: 'removeLiquidity',
  description: "Withdraw funds from a Liquidity Mining pool position.\n\n- `removeRate`: integer percentage 1~100; omitting or setting to 0 means 100% full redemption\n- `removeType`: defaults to `Normal` (proportional redemption of both coins)\n\n**Rate Limit:** 5 req/s (UID)",
  inputSchema: z.object({
    productId: z.string(),
    orderLinkId: z.string(),
    positionId: z.string(),
    removeRate: z.number().int().min(0).max(100).optional(),
    removeType: z.enum(["Normal", "SingleQuoteCoin", "SingleBaseCoin"]).default("Normal").optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/earn/liquidity-mining/remove-liquidity", input);
  },
};
