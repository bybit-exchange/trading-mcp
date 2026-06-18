// getLPOrderList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getLPOrderList = {
  name: 'getLPOrderList',
  description: "Query the user's LP order history (stake and redeem operations) with optional filters.\nReturns paginated order list including order status, amounts, fees, and execution time.\n\nAI agent should call this after executing stake/redeem to confirm the result to the user.\nPoll with appropriate orderStatus filter to check if a pending order has completed.\n\n**Do NOT** use this endpoint to get position details — use `getLPPositionList` instead.\n\nAgent hint: Use this endpoint to check order status after executing stake/redeem, or when user asks about order history.\nAfter executeLPStake or executeLPRedeem, poll this with the orderNo to confirm completion.\nDo NOT use this to check current positions — use getLPPositionList for that.",
  inputSchema: z.object({
    orderType: z.enum(["0", "1", "2"]).default("0").optional(),
    tokenCode: z.string().optional(),
    orderStatus: z.array(z.enum(["1", "2", "3"])).optional(),
    days: z.number().int().min(0).max(365).default(90).optional(),
    limit: z.number().int().min(1).max(100).default(20).optional(),
    pageIndex: z.number().int().min(1).default(1).optional(),
    poolAddress: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/lp/order-list", input);
  },
};
