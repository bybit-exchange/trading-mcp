// accountRepay.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const accountRepay = {
  name: 'accountRepay',
  description: "Manually repay the liabilities of Unified account.\n\n**Rules:**\n- If neither `coin` nor `amount` is provided, the system repays all liabilities\n- If only `coin` is provided (without `amount`), that coin's liability is fully repaid\n- If `coin` is not passed, `amount` cannot be passed\n- The system uses spot available balance first; remaining amounts trigger asset conversion per liquidation order\n- Floating-rate liabilities are repaid before fixed-rate liabilities\n- BYUSDT and MNT are excluded from standard conversion repayment\n- Repayment is blocked between 04:00–05:30 UTC hourly; interest is calculated at 05:00 UTC\n- Conversion fees use the higher asset rate with a USD 300,000 per-transaction limit\n\n**Service:** bizasset-uta-loan-prod",
  inputSchema: z.object({
    coin: z.string().optional(),
    amount: z.string().optional(),
    repaymentType: z.enum(["ALL", "FIXED", "FLEXIBLE"]).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/account/repay", input);
  },
};
