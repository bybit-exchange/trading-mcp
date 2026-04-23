// cancelRfq.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const cancelRfq = {
  name: 'cancelRfq',
  description: "Cancel an active RFQ. You must pass either `rfqId` or `rfqLinkId`.\nIf both are provided, only `rfqId` is considered.\nWhen an inquirer cancels an order, all corresponding quotes become invalid.\n\n**Rate Limit:** 50 requests per second.\n\nAgent hint: Pass either rfqId or rfqLinkId to cancel an RFQ. If both are provided, rfqId takes priority.\nCancelling an RFQ invalidates all associated quotes.",
  inputSchema: z.object({
    rfqId: z.string().optional(),
    rfqLinkId: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/rfq/cancel-rfq", input);
  },
};
