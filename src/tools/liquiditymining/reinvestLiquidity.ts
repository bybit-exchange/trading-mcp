// reinvestLiquidity.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const reinvestLiquidity = {
  name: 'reinvestLiquidity',
  description: "Reinvest accumulated interest back into an existing Liquidity Mining position.\n\n**Rate Limit:** 5 req/s (UID)",
  inputSchema: z.object({
    productId: z.string(),
    orderLinkId: z.string(),
    positionId: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/earn/liquidity-mining/reinvest", input);
  },
};
