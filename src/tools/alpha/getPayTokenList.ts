// getPayTokenList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPayTokenList = {
  name: 'getPayTokenList',
  description: "Query available payment tokens for trading.\nReturns token symbol, `CEX_<id>` token code, maximum trading limit, and supported blockchain list.\n\nAI agent should call this before executing a trade to resolve user input (e.g. \"USDT\") into\nthe proper `CEX_<id>` token code required by `getTradeQuote`.\n\n**Do NOT** use this endpoint to get on-chain tradable tokens — use `getBizTokenList` instead.\n**Do NOT** use this to get token market data or prices — use `getBizTokenPriceList`.\n\nAgent hint: Use this endpoint to get available payment tokens (USDT, USDC, etc.) and their CEX token codes before placing a trade.\nMaps user input like \"USDT\" to \"CEX_1\". Required before calling getTradeQuote.\nDo NOT use this to get on-chain tradable tokens — use getBizTokenList.\nDo NOT use this for token prices — use getBizTokenPriceList.",
  inputSchema: z.object({
    chainCode: z.string(),
    tokenAddress: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/trade/pay-token-list", input);
  },
};
