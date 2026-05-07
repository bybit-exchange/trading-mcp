// queryBorrowLiability.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryBorrowLiability = {
  name: 'queryBorrowLiability',
  description: "Query the borrow liability breakdown for a specific coin, including fixed-rate and flexible-rate liabilities.\n\n**Rules:**\n- Returns total, fixed-rate, flexible-rate, spot, and derivatives borrow amounts\n- `currency` is required\n- Data is aggregated from Asset wallet and UTA user positions\n- Unified account only\n\n**Service:** bizasset-uta-loan-prod",
  inputSchema: z.object({
    currency: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spot-margin-trade/Liability", input);
  },
};
