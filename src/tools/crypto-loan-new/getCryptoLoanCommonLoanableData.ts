// getCryptoLoanCommonLoanableData.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCryptoLoanCommonLoanableData = {
  name: 'getCryptoLoanCommonLoanableData',
  description: "Query information about currencies available for borrowing in the crypto loan system.\n\n**Features:**\n- Public endpoint (no authentication required)\n- Query by specific currency or get all loanable currencies\n- Filter by VIP level to see available rates and limits\n- Supports both flexible (hourly rate) and fixed-term (7D-180D) loans\n- Rate limit: 1000 requests per time window\n\n**Use Cases:**\n- Check if a currency is available for flexible or fixed-term borrowing\n- View interest rates for different VIP levels\n- Get minimum/maximum borrowing amounts\n- Compare market rates across different loan terms",
  inputSchema: z.object({
    currency: z.string().optional(),
    vipLevel: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/crypto-loan-common/loanable-data", input);
  },
};
