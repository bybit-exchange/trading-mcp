// executeRedeem.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const executeRedeem = {
  name: 'executeRedeem',
  description: "Place a sell order to redeem on-chain tokens for payment tokens.\nReturns an `orderNo` that can be used with `getOrderList` to track order status.\n\n**Prerequisites (mandatory):**\n1. Call `getTradeQuote` first to get `quoteData`, `correctingCode`, and `gas`\n2. Display quote details (amount, fees, slippage) to user\n3. Obtain explicit user confirmation\n\n**AI agent must obtain explicit user confirmation before calling this endpoint.**\n\nResponse is an acknowledgment only — use `getOrderList` to confirm actual order status.\nOn-chain confirmation typically takes 10-60 seconds.\n\n**Do NOT** call this endpoint directly without a valid quote. All of `quoteData`, `correctingCode`,\nand `gas` must come from a non-expired `getTradeQuote` response.\n\nAgent hint: Use this endpoint to execute a sell trade after getting a quote and user confirmation.\nNever call without user approval. Always call getTradeQuote first.\nDo NOT use this for buying — use executePurchase instead.\nDo NOT guess or fabricate quoteData/correctingCode values — they must come from getTradeQuote.",
  inputSchema: z.object({
    fromTokenCode: z.string(),
    fromTokenAmount: z.string(),
    toTokenCode: z.string(),
    slippage: z.string(),
    quoteData: z.string(),
    gas: z.string(),
    quoteMode: z.enum(["0", "1", "2"]),
    correctingCode: z.string(),
    tenant: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/trade/redeem", input);
  },
};
