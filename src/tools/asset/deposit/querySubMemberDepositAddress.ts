// querySubMemberDepositAddress.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const querySubMemberDepositAddress = {
  name: 'querySubMemberDepositAddress',
  description: "Query deposit address for a sub-account. Requires **master UID** API key only.\n- Custodial sub-account addresses are unavailable\n- Validates parent-child relationship between master and sub accounts\n- Sub-accounts bound to Copper custody are not allowed\n- UAE coin restrictions apply",
  inputSchema: z.object({
    coin: z.string(),
    chainType: z.string(),
    subMemberId: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/deposit/query-sub-member-address", input);
  },
};
