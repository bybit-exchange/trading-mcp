// insLoanCoinDeltaAmount.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const insLoanCoinDeltaAmount = {
  name: 'insLoanCoinDeltaAmount',
  description: "Query coin delta amount details for institutional lending hedge product.\n\n**Rules:**\n- Returns the risk unit delta amount and per-coin delta details\n- Unified account only\n- Optional `coin` filter; if omitted, returns all coins\n\n**Service:** margin-server-web",
  inputSchema: z.object({
    coin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/ins-loan/coin-delta-amount", input);
  },
};
