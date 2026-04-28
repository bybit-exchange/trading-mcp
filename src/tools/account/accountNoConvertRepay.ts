// accountNoConvertRepay.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const accountNoConvertRepay = {
  name: 'accountNoConvertRepay',
  description: "Manual repay without asset conversion (lossless repay). The system will only use the spot available balance of the debt currency to repay.\n\n**Rules:**\n- If only `coin` is provided without `amount`, the system uses the available spot balance of the debt currency\n- If `coin` is not passed in input parameter, `amount` cannot be passed\n- Repayment is prohibited between 04:00 and 05:30 per hour\n- Interest is calculated based on the BorrowAmount at 05:00 per hour\n- Floating-rate liabilities are repaid before fixed-rate ones\n- BYUSDT cannot be used for repayment\n\n**Service:** bizasset-uta-loan-prod",
  inputSchema: z.object({
    coin: z.string().optional(),
    amount: z.string().optional(),
    repaymentType: z.enum(["ALL", "FIXED", "FLEXIBLE"]).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/account/no-convert-repay", input);
  },
};
