// getBizTokenList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getBizTokenList = {
  name: 'getBizTokenList',
  description: "Query on-chain tokens available for trading, optionally filtered by tag.\nReturns `DEX_<id>` token code, contract address, risk flag, order quantity limits,\nand supported payment token codes.\n\nAI agent should call this when user wants to discover tokens or expresses buy intent\nwithout specifying a token. Use `tokenTag` to filter by category.\n\n**Do NOT** use this endpoint to get token prices or market data — use `getBizTokenPriceList`.\n**Do NOT** use this to get user's holdings — use `getAssetList`.\n\nAgent hint: Use this endpoint to discover tradable on-chain tokens and resolve token names to DEX token codes.\nCall when user asks what tokens are available or wants to browse tokens by category.\nWarn user if riskFlag=1 before proceeding to trade.\nDo NOT use this for prices — use getBizTokenPriceList.",
  inputSchema: z.object({
    tokenTag: z.enum(["0", "1", "2"]).default("0").optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/trade/biz-token-list", input);
  },
};
