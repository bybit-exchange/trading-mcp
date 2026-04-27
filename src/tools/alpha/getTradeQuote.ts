// getTradeQuote.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getTradeQuote = {
  name: 'getTradeQuote',
  description: "Get a price quote before executing a purchase or redeem trade.\nReturns estimated receive amount, exchange rate, platform fee, gas cost, and slippage.\n\n- **Purchase (buy):** set `tradeType=1`, `fromTokenCode` as CEX token (e.g. `CEX_1` for USDT), `toTokenCode` as DEX token\n- **Redeem (sell):** set `tradeType=2`, `fromTokenCode` as DEX token, `toTokenCode` as CEX token\n\nThe `fromTokenCode` and `toTokenCode` can be obtained from `/v5/alpha/trade/pay-token-list` (CEX tokens)\nand `/v5/alpha/trade/biz-token-list` (DEX tokens).\n\nAI agent must display the quote details (amount, fees, slippage) to the user before proceeding to execution.\n\n**Do NOT** call this endpoint without valid token codes. Use `getPayTokenList` and `getBizTokenList` first\nto resolve user input (e.g. \"USDT\", \"PEPE\") into proper token codes.\n\nAgent hint: Use this endpoint to get a price quote before buying or selling on-chain tokens.\nAlways show the quote to the user before executing.\nDo NOT call executePurchase or executeRedeem without first calling this endpoint.\nDo NOT use this for querying token prices only — use getBizTokenPriceList instead.",
  inputSchema: z.object({
    tradeType: z.enum(["1", "2"]),
    fromTokenCode: z.string(),
    fromTokenAmount: z.string(),
    toTokenCode: z.string(),
    quoteMode: z.enum(["0", "1", "2"]).default("0").optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/trade/quote", input);
  },
};
