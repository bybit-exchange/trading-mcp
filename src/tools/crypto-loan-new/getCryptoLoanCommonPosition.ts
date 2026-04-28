// getCryptoLoanCommonPosition.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCryptoLoanCommonPosition = {
  name: 'getCryptoLoanCommonPosition',
  description: "Query the user's current crypto loan position with comprehensive details.\n\n**Features:**\n- Private endpoint (authentication required)\n- Get overall position metrics (LTV, total debt, total collateral)\n- View detailed borrowing breakdown by currency\n- View collateral breakdown by currency\n- View supply (lending) breakdown by currency\n- Separate flexible and fixed-term debt information\n- Rate limit: 5 requests per time window per UID\n\n**Use Cases:**\n- Monitor current LTV ratio and liquidation risk\n- View total debt and collateral values\n- Track borrowing across multiple currencies\n- Review collateral distribution\n- Check lending positions\n- Assess overall portfolio health\n\n**Important:**\n- Returns empty position if user has no active loans\n- All USD values calculated using real-time prices\n- Flexible and fixed debt tracked separately",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/crypto-loan-common/position", input);
  },
};
