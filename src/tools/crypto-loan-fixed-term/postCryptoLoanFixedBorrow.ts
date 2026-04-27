// postCryptoLoanFixedBorrow.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const postCryptoLoanFixedBorrow = {
  name: 'postCryptoLoanFixedBorrow',
  description: "Create a fixed-term borrow order with specified loan currency, amount, rate, term, and collateral.\n\n**Features:**\n- Private endpoint (authentication required)\n- Fixed-term loans with locked interest rates\n- Support multiple collateral currencies\n- Optional auto-repay setting\n- Rate limit: 1 request per time window per UID\n\n**Use Cases:**\n- Borrow crypto with fixed interest rate for specific term\n- Pledge multiple currencies as collateral\n- Lock in favorable rates for 7D, 14D, 30D, 60D, 90D, or 180D\n\n**Important:**\n- Order may match partially or fully based on available supply\n- Ensure collateral meets minimum LTV requirements\n- Check borrow-order-quote endpoint first for available rates",
  inputSchema: z.object({
    orderCurrency: z.string(),
    orderAmount: z.string(),
    annualRate: z.string(),
    term: z.enum(["7", "14", "30", "60", "90", "180"]),
    autoRepay: z.enum(["0", "1"]).optional(),
    collateralList: z.array(z.object({ currency: z.string(), amount: z.string() })),
    repayType: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/crypto-loan-fixed/borrow", input);
  },
};
