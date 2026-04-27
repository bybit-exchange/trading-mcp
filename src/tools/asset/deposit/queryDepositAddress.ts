// queryDepositAddress.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const queryDepositAddress = {
  name: 'queryDepositAddress',
  description: "Query the deposit address information for the master account.\n- Only the **main** UID API key can call this endpoint\n- Sub-accounts are **not** allowed to access deposit addresses\n- Users banned from on-chain deposit will receive an error\n- Custody users will receive an error\n- UAE-restricted coins will be checked against whitelist",
  inputSchema: z.object({
    coin: z.string(),
    chainType: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/deposit/query-address", input);
  },
};
