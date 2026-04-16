// getPortfolioMargin.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPortfolioMargin = {
  name: 'getPortfolioMargin',
  description: "Query the portfolio margin information including wallet balance, margin rates, and asset PNL range.\n\n**Notes:**\n- This endpoint requires authentication.\n- If `baseCoin` is not specified, returns all base coins.\n- Maps internally to `/option/usdc/private/asset/query/protoMarginInfos`.",
  inputSchema: z.object({
    baseCoin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/portfolio-margin", input);
  },
};
