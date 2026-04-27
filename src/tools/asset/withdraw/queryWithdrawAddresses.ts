// queryWithdrawAddresses.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const queryWithdrawAddresses = {
  name: 'queryWithdrawAddresses',
  description: "Retrieve withdrawal addresses from the address book.\n- API key must have withdrawal permissions.\n- Business rules (from code):\n  - When addressType is 1 (internal transfer) or 2 (all), coin and chain parameters are ignored\n  - Records with failed address signature verification will be filtered out\n  - If user has enabled 24-hour new address no-verification security policy, new address status=1 means unavailable within 24 hours\n  - Use baseCoin as coin to query universal addresses",
  inputSchema: z.object({
    coin: z.string().optional(),
    chain: z.string().optional(),
    addressType: z.enum(["0", "1", "2"]).default("0").optional(),
    limit: z.number().int().min(1).max(50).default(50).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/withdraw/query-address", input);
  },
};
