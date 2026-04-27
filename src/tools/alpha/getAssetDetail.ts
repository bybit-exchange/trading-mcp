// getAssetDetail.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getAssetDetail = {
  name: 'getAssetDetail',
  description: "Query detailed holding information for a specific token by chain code and token address.\nReturns quantity, USD value, unrealized PnL, cost price, and current market price.\n\nThe result contains an `assetList` array with 0 or 1 element.\nAn empty `assetList` means the user does not hold this token or the token is not available.\n\nUse `chainCode` and `tokenAddress` from `getAssetList` response or from `getBizTokenList`.\n\n**Do NOT** use this endpoint to get general token market data — use `getBizTokenPriceList` instead.\n**Do NOT** use this to get project info (description, links) — use `getBizTokenDetails` instead.\n\nAgent hint: Use this endpoint to get detailed holding info for a specific token when user asks about a particular asset.\nRequires chainCode + tokenAddress — get these from getAssetList or getBizTokenList.\nResponse has assetList array with 0 or 1 element. Empty means user doesn't hold this token.\nDo NOT use this for general market data — use getBizTokenPriceList.\nDo NOT use this for token project info — use getBizTokenDetails.",
  inputSchema: z.object({
    chainCode: z.string(),
    tokenAddress: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/trade/asset-detail", input);
  },
};
