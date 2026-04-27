// setAutoRepayMode.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const setAutoRepayMode = {
  name: 'setAutoRepayMode',
  description: "Set spot automatic repayment mode.\n\nWhen enabled (`autoRepayMode: \"1\"`), the system will automatically make repayments without asset conversion to that currency at 0 and 30 minutes every hour. The repayment amount equals the minimum of available spot balance and current liability for that currency.\n\n- If `currency` is omitted, auto-repay is enabled/disabled for **all** currencies.\n- If `currency` is specified, auto-repay is set only for that currency.\n\n**Service:** bizasset-uta-loan-prod",
  inputSchema: z.object({
    currency: z.string().optional(),
    autoRepayMode: z.enum(["1", "0"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/spot-margin-trade/set-auto-repay-mode", input);
  },
};
