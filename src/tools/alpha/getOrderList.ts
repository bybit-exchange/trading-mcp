// getOrderList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getOrderList = {
  name: 'getOrderList',
  description: "Query the user's trade order history with optional filters.\nReturns paginated order list including order status, token amounts, fees, and execution time.\n\nAI agent should call this after executing a trade to confirm the result to the user.\nPoll with `orderStatus=[1]` filter to check if a pending order has completed.\n\n**Do NOT** use this endpoint to get token prices or market data — use `getBizTokenPriceList` instead.\n**Do NOT** use this to check asset holdings — use `getAssetList` instead.\n\nAgent hint: Use this endpoint to check order status after executing a trade, or when user asks about their trade history.\nAfter executePurchase or executeRedeem, poll this with the orderNo to confirm completion.\nDo NOT use this to get token prices — use getBizTokenPriceList.\nDo NOT use this to check portfolio holdings — use getAssetList.",
  inputSchema: z.object({
    tradeType: z.enum(["0", "1", "2"]).default("0").optional(),
    tokenCode: z.string().optional(),
    orderStatus: z.array(z.enum(["1", "2", "3"])).optional(),
    days: z.number().int().min(0).max(90).default(0).optional(),
    limit: z.number().int().min(1).max(100).default(20).optional(),
    pageIndex: z.number().int().min(1).default(1).optional(),
    direction: z.enum(["prev", "next"]).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/trade/order-list", input);
  },
};
