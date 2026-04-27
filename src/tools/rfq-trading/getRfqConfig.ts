// getRfqConfig.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getRfqConfig = {
  name: 'getRfqConfig',
  description: "Retrieve the RFQ configuration for the authenticated account, including available counterparties,\nstrategy types, maximum legs, and minimum order quantities.\n\n**Rate Limit:** 50 requests per second.\n\n**Tip:** Call this endpoint before creating an RFQ to obtain valid counterparty deskCodes,\nallowed strategy types, and trading limits.\n\nAgent hint: Call this endpoint first to discover your deskCode, available counterparties, strategy types,\nand trading limits before creating RFQs or quotes.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/rfq/config", input);
  },
};
