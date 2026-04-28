// queryBalance.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryBalance = {
  name: 'queryBalance',
  description: "Query fiat or crypto account balances.\n\n**Query Parameters:**\n- accountCategory: Account type (fiat/crypto), defaults to fiat\n- currency: Currency code, omit to return all balances\n\n**Balance Information:**\n- totalBalance: Total balance\n- balance: Available balance\n- frozenBalance: Frozen (locked) balance\n\n**Use Cases:**\n- Display available balance before trading\n- Validate sufficient funds before quote application\n- Show detailed balance breakdown to users",
  inputSchema: z.object({
    accountCategory: z.enum(["fiat", "crypto"]).default("fiat").optional(),
    currency: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/fiat/balance-query", input);
  },
};
