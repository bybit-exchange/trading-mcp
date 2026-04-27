// getCryptoLoanFixedSupplyContractInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCryptoLoanFixedSupplyContractInfo = {
  name: 'getCryptoLoanFixedSupplyContractInfo',
  description: "Query active supply contracts (lending positions).\n\n**Rate limit:** 5 requests per UID",
  inputSchema: z.object({
    orderId: z.string().optional(),
    supplyId: z.string().optional(),
    supplyCurrency: z.string().optional(),
    term: z.string().optional(),
    limit: z.number().int().optional(),
    cursor: z.number().int().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/crypto-loan-fixed/supply-contract-info", input);
  },
};
