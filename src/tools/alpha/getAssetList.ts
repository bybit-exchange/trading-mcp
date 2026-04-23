// getAssetList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getAssetList = {
  name: 'getAssetList',
  description: "Query user's on-chain token portfolio.\nReturns total portfolio value in USD and individual token holdings with unrealized PnL,\ncost basis, and current market price.\n\nOnly tokens with non-zero balance are returned. Zero-balance tokens are filtered out.\n\nUse `tradeFlag` to determine if a token can be sold via `executeRedeem`.\nUse `tokenCode` from the response for quote and execution requests.\nUse `chainCode` + `tokenAddress` from the response to call `getAssetDetail` for more info.\n\n**Do NOT** use this endpoint to discover new tokens to buy — use `getBizTokenList` instead.\n**Do NOT** use this to get market data for tokens you don't hold — use `getBizTokenPriceList`.\n\nAgent hint: Use this endpoint when user asks about their assets, balance, holdings, portfolio, or profit/loss.\nReturns total USD value and per-token PnL. Check tradeFlag before attempting to sell.\nUse tokenCode from the response for quote and trade execution.\nDo NOT use this to discover new tokens — use getBizTokenList.\nDo NOT use this for market data on non-held tokens — use getBizTokenPriceList.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/trade/asset-list", input);
  },
};
