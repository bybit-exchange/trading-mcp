// getCryptoLoanCommonAdjustmentHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCryptoLoanCommonAdjustmentHistory = {
  name: 'getCryptoLoanCommonAdjustmentHistory',
  description: "Query historical collateral adjustment operations with pagination support.\n\n**Features:**\n- Private endpoint (authentication required)\n- Query by specific adjustId or filter by currency\n- Pagination support with cursor-based navigation\n- Shows before/after LTV for each adjustment\n- Track adjustment status (processing, success, failed)\n- Rate limit: 5 requests per time window per UID\n\n**Use Cases:**\n- Review past collateral adjustments\n- Track LTV changes over time\n- Verify adjustment operations\n- Audit collateral management activities\n\n**Query Modes:**\n- By adjustId: Get specific adjustment (no pagination)\n- By currency: Get all adjustments for a currency (with pagination)\n- All adjustments: Get complete history (with pagination)",
  inputSchema: z.object({
    adjustId: z.number().int().optional(),
    collateralCurrency: z.string().optional(),
    limit: z.number().int().optional(),
    cursor: z.number().int().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/crypto-loan-common/adjustment-history", input);
  },
};
