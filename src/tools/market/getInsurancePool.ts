// getInsurancePool.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getInsurancePool = {
  name: 'getInsurancePool',
  description: "Query Bybit's insurance pool balances and USD-denominated values for various settlement coins.\nThe insurance fund absorbs losses from liquidations to prevent auto-deleveraging (ADL).\n\nUse this endpoint when you need to:\n- Monitor insurance fund health for a specific coin (BTC, USDT, USDC, etc.)\n- Understand which contracts share a pool vs use an isolated pool\n- Check current pool balance as a risk indicator for derivatives markets\n\nReturns all insurance coins if `coin` is omitted.\n\n**Do not use** this endpoint for ADL threshold details — use `getAdlAlert` instead.\n\n**Notes:**\n- Isolated pool updates every minute\n- Shared pool updates daily\n- No authentication required\n\nAgent hint: Use this endpoint to check Bybit's insurance pool balances for settlement coins.\nOmit coin to get all coins; provide a specific coin (e.g., USDT, BTC) for targeted results.\nFor ADL threshold details and PnL ratio, use getAdlAlert instead.",
  inputSchema: z.object({
    coin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/insurance", input);
  },
};
