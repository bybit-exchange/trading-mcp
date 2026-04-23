// getBizTokenPriceList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getBizTokenPriceList = {
  name: 'getBizTokenPriceList',
  description: "Batch query token prices and market data by chain code + token address pairs.\nReturns current price, 24h price change, trading volume, market cap, liquidity,\nand holder count.\n\nUse `chainCode` and `tokenAddress` from `getBizTokenList`, `getAssetList`, or user input.\n\n**Do NOT** use this endpoint to discover new tokens — use `getBizTokenList` instead.\n\n**Do NOT** use this to get token project info (description, links) — use `getBizTokenDetails`.\n\nAgent hint: Use this endpoint to get token prices, 24h changes, volume, market cap, and other market data.\nAccepts chainCode + tokenAddress pairs — get these from getBizTokenList or getAssetList.\nDo NOT use this to discover tokens — use getBizTokenList.\n\nDo NOT use this for project info — use getBizTokenDetails.",
  inputSchema: z.object({
    tokenAddressInfo: z.array(z.string()),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/trade/biz-token-price-list", input);
  },
};
