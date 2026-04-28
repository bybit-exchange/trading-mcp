// getVipMarginData.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getVipMarginData = {
  name: 'getVipMarginData',
  description: "Query margin data for Unified accounts by VIP level and/or coin.\n- Returns borrowing availability, interest rates, collateral settings, and liquidation order.\n- The `collateralRatio` field is deprecated since Feb 19, 2025. Use the Tiered Collateral Ratio endpoint instead.\n\nAgent hint: Public endpoint, no authentication needed. Use this to check borrowing terms (max amount, hourly rate, collateral eligibility) for each coin at each VIP level. Note: the `collateralRatio` field is deprecated — use getTieredCollateralRatio instead for accurate collateral ratios.",
  inputSchema: z.object({
    vipLevel: z.string().optional(),
    currency: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/spot-margin-trade/data", input);
  },
};
