// distributeAward.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const distributeAward = {
  name: 'distributeAward',
  description: "Distribute a voucher to a specified user.\n\n**Rate Limit:** 100 req/s\n\n**Notes:**\n- Spot airdrop amount supports up to 16 decimal places\n- Other voucher types support up to 4 decimal places\n- specCode is a distribution identifier code, up to 8 characters, used for idempotency and query",
  inputSchema: z.object({
    accountId: z.string(),
    awardId: z.string(),
    specCode: z.string(),
    amount: z.string(),
    brokerId: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/broker/award/distribute-award", input);
  },
};
