// postCryptoLoanCommonMaxLoan.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const postCryptoLoanCommonMaxLoan = {
  name: 'postCryptoLoanCommonMaxLoan',
  description: "Calculate the maximum amount that can be borrowed for a specific currency based on provided collateral.\n\n**Features:**\n- Private endpoint (authentication required)\n- Calculate max loan based on collateral list\n- Consider user's VIP level for quota limits\n- Account for existing borrowed amounts\n- Return both currency amount and USD notional value\n- Rate limit: 5 requests per time window per UID\n\n**Use Cases:**\n- Check how much can be borrowed before creating a loan order\n- Validate collateral is sufficient for desired loan amount\n- Compare borrowing capacity across different collateral combinations\n- Plan collateral allocation for optimal borrowing\n\n**Important:**\n- Considers user's VIP level quota limits\n- Accounts for existing borrowed amounts\n- Calculates based on real-time collateral ratios\n- Returns 0 if collateral insufficient or quota exhausted",
  inputSchema: z.object({
    currency: z.string(),
    collateralList: z.array(z.object({ ccy: z.string(), amount: z.string() })),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/crypto-loan-common/max-loan", input);
  },
};
