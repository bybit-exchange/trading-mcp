// quickRepayment.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const quickRepayment = {
  name: 'quickRepayment',
  description: "Execute quick repayment for specified coin",
  inputSchema: z.object({
    coin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/account/quick-repayment", input);
  },
};
