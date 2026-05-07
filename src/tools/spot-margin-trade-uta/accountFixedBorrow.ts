// accountFixedBorrow.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const accountFixedBorrow = {
  name: 'accountFixedBorrow',
  description: "Create a fixed-rate borrow order for Unified account.\n\n**Rules:**\n- Supports fixed terms: 7, 14, 30, 90, 180 days\n- Order strategy: `PARTIAL` (partial fill or cancel) or `FULL` (fill or kill)\n- Maturity handling: `1` (auto-repay) or `2` (convert to flexible-rate loan)\n- Borrowing depends on available supply in the fixed-rate lending market\n- Unified account only\n\n**Service:** bizasset-uta-loan-prod\n\nAgent hint: IMPORTANT: This creates a real loan with interest obligations. Before executing, you MUST ask the user to explicitly confirm the loan amount, annual rate, and term. Do not execute automatically.",
  inputSchema: z.object({
    orderCurrency: z.string(),
    orderAmount: z.string(),
    annualRate: z.string(),
    term: z.enum(["7", "14", "30", "90", "180"]),
    repayType: z.enum(["1", "2"]).optional(),
    strategyType: z.enum(["PARTIAL", "FULL"]).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/spot-margin-trade/fixedborrow", input);
  },
};
