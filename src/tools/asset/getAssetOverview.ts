// getAssetOverview.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getAssetOverview = {
  name: 'getAssetOverview',
  description: "Query the total asset overview for the current account, including per-account-type equity breakdowns, category details, and coin-level details.\n\n**Notes:**\n- This endpoint requires authentication.\n- Supports parent-sub account query: if API key belongs to a sub-account, the parent UID is used automatically.\n- `memberId` can be specified to query a specific sub-account's assets.\n- Accounts with zero balance are filtered out, except for `UnifiedTradingAccount` and `FundingAccount` account types (always returned), or accounts explicitly passed in `accountType` parameter.\n- Valuation currency defaults to `USD` if not provided.\n- For `UnifiedTradingAccount`, DirectStocks assets are merged as a `STOCKS` category under UTA (not returned as a separate account type).\n- For accounts with `isHaveProductType=true` (Earn, TradingBot, CopyTrading, Alpha), response includes `categories` breakdown.\n- For `CopyTrading` and `TradFi` account types, negative equity is treated as zero when calculating `totalEquity`.\n- Zero-equity categories and zero-equity coins are filtered from the response.\n- Maps internally to `AssetArgusQueryService.queryTotalAssetForOpenapi()`.",
  inputSchema: z.object({
    accountType: z.string().optional(),
    memberId: z.string().optional(),
    valuationCurrency: z.string().default("USD").optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/asset-overview", input);
  },
};
