// createRfq.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const createRfq = {
  name: 'createRfq',
  description: "Create a new Request for Quote (RFQ) to solicit pricing from selected counterparties.\nThe inquirer specifies one or more legs (instruments) and a list of counterparties to receive the RFQ.\nEach leg defines a product category, symbol, direction, and quantity.\n\n**Rate Limit:** 50 requests per second.\n\n**Tip:** Use the Get RFQ Config endpoint to retrieve available counterparties, strategy types,\nand maximum leg count before creating an RFQ.\n\nAgent hint: Use this endpoint to create a new RFQ. You must first call Get RFQ Config to obtain valid\ncounterparty deskCodes and the maximum number of legs allowed. All legs must share the same\nbase and settlement coins.",
  inputSchema: z.object({
    counterparties: z.array(z.string()),
    rfqLinkId: z.string().optional(),
    anonymous: z.boolean().default(false).optional(),
    strategyType: z.string().default("custom").optional(),
    list: z.array(z.record(z.unknown())),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/rfq/create-rfq", input);
  },
};
