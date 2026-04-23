// getBizTokenDetails.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getBizTokenDetails = {
  name: 'getBizTokenDetails',
  description: "Query detailed information for a specific on-chain token.\nReturns project description, social links (Twitter, website, whitepaper), risk flag,\norder quantity limits, and token status.\n\nAI agent should call this when user asks about a specific token's details, project info, or risk status.\nUse `chainCode` and `tokenAddress` from `getBizTokenList` or `getAssetList` response.\n\nWhen `showMessage=1`, display the `content` notification to the user. If `linkName` and `linkAddress`\nare provided, include the link in the notification.\n\n**Do NOT** use this endpoint to get token prices — use `getBizTokenPriceList` instead.\n**Do NOT** use this to browse available tokens — use `getBizTokenList`.\n\nAgent hint: Use this endpoint to get detailed token info including description, website, Twitter, whitepaper, and risk flags.\nRequires chainCode + tokenAddress — get these from getBizTokenList or getAssetList.\nWhen showMessage=1, display the content notification to the user.\nDo NOT use this for token prices — use getBizTokenPriceList.\nDo NOT use this to browse tokens — use getBizTokenList.",
  inputSchema: z.object({
    chainCode: z.string(),
    tokenAddress: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/trade/biz-token-details", input);
  },
};
