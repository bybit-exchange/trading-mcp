// getCollateralInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCollateralInfo = {
  name: 'getCollateralInfo',
  description: "Query collateral information including borrowing rates, limits, and collateral\nsettings. Returns per-coin data on borrowing capacity, rates, and status.\n\nRate limit: 10 req/s\n\nAgent hint: Use this to check borrowing rates and collateral status. Pass currency to filter\nfor a specific coin. Key fields: hourlyBorrowRate, maxBorrowingAmount,\navailableToBorrow, borrowable, marginCollateral, collateralSwitch. Note that\nborrowing limits are shared across parent and sub-accounts.",
  inputSchema: z.object({
    currency: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/account/collateral-info", input);
  },
};
