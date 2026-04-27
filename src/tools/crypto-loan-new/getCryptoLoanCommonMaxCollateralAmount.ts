// getCryptoLoanCommonMaxCollateralAmount.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCryptoLoanCommonMaxCollateralAmount = {
  name: 'getCryptoLoanCommonMaxCollateralAmount',
  description: "Query the maximum amount of collateral that can be redeemed (withdrawn) for a specific currency.\n\n**Features:**\n- Private endpoint (authentication required)\n- Calculate safe withdrawal amount that maintains healthy LTV\n- Prevents accidental liquidation by showing maximum safe withdrawal\n- Rate limit: 5 requests per time window per UID\n\n**Use Cases:**\n- Check how much collateral can be safely withdrawn\n- Ensure sufficient collateral remains after redemption\n- Prevent liquidation by validating withdrawal amounts\n\n**Important:**\n- Returns 0 if withdrawing any amount would cause liquidation\n- Amount is calculated to maintain LTV below liquidation threshold",
  inputSchema: z.object({
    currency: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/crypto-loan-common/max-collateral-amount", input);
  },
};
