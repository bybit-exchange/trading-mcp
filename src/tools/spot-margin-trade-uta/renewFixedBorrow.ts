// renewFixedBorrow.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const renewFixedBorrow = {
  name: 'renewFixedBorrow',
  description: "Renew (extend) an existing fixed-rate borrow contract.\n\n**Rules:**\n- The contract must have prepayment amount available (`allowApplyAmount` = ALLOW_APPLY)\n- If `qty` is not provided, the full prepayment amount of the contract is used\n- The renewal amount must be greater than 0\n- Unified account only\n\n**Service:** bizasset-uta-loan-prod\n\nAgent hint: IMPORTANT: This renews an existing loan, committing to a new term and interest rate. Before executing, you MUST ask the user to explicitly confirm the contract ID, new term, and rate. Do not execute automatically.",
  inputSchema: z.object({
    loanId: z.string(),
    qty: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/spot-margin-trade/fixedborrow-renew", input);
  },
};
