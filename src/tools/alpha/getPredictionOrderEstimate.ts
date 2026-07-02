// getPredictionOrderEstimate.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPredictionOrderEstimate = {
  name: 'getPredictionOrderEstimate',
  description: "Get estimated execution details for a prediction market order before placing it.\nReturns estimated average fill price, total shares received/sold, fee, and\nwhether the FOK order can be fully filled.\n\n**Mandatory before any buy or sell.** AI agent must show estimated results to\nthe user before proceeding to execution.\n\n- **BUY**: set `side=1`, `amount` = USDC to invest, `payTokenCode` = \"USDC\"\n- **SELL**: set `side=2`, `amount` = number of shares to sell\n\nPhase 1 supports `orderType=1` (FOK) only.\nA FOK order that cannot be fully filled will be cancelled entirely.\n\nAgent hint: REQUIRED before calling buy or sell. Always show the estimate to the user first.\nside=1 is BUY (amount in USDC), side=2 is SELL (amount in shares).\norderType=1 (FOK) is the only supported type in Phase 1.\nShow estimatedCost, estimatedReceive, feeAmount, and toWin (BUY only) to the user.\nDo NOT call buy/sell without user confirmation after viewing the estimate.",
  inputSchema: z.object({
    tokenId: z.string(),
    side: z.enum(["1", "2"]),
    eventId: z.string(),
    amount: z.string(),
    orderType: z.enum(["1"]),
    payTokenCode: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/prediction/order-estimate", input);
  },
};
