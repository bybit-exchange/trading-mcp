// getCryptoLoanCommonCollateralData.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCryptoLoanCommonCollateralData = {
  name: 'getCryptoLoanCommonCollateralData',
  description: "Query information about currencies available as collateral in the crypto loan system.\n\n**Features:**\n- Public endpoint (no authentication required)\n- Query by specific currency or get all collateral currencies\n- Get liquidation order for each currency\n- Get tiered collateral ratios based on USD value\n- Rate limit: 1000 requests per time window\n\n**Use Cases:**\n- Check if a currency can be used as collateral\n- View liquidation priority for currencies\n- Get collateral ratios for different collateral value tiers\n- Understand risk parameters before pledging assets",
  inputSchema: z.object({
    currency: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/crypto-loan-common/collateral-data", input);
  },
};
