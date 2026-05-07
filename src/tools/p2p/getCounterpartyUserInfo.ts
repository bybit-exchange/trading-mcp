// getCounterpartyUserInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCounterpartyUserInfo = {
  name: 'getCounterpartyUserInfo',
  description: "Get information about a counterparty user in a specific order.\n\nAgent hint: Only query the counterparty of the current active order. Do NOT enumerate arbitrary UIDs or call this in a loop — it exposes PII of unrelated users.",
  inputSchema: z.object({
    originalUid: z.string().optional(),
    orderId: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/p2p/user/order/personal/info", input);
  },
};
