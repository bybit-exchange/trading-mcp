// queryFixedAvailableInventory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryFixedAvailableInventory = {
  name: 'queryFixedAvailableInventory',
  description: "Query available inventory for fixed-rate borrowing by specifying currency, term, and annual rate.\n\n**Rules:**\n- All parameters (`currency`, `term`, `annualRate`) are required\n- `currency` must be uppercase (e.g. `USDT`, `BTC`)\n- Only coins supported by pledge borrowing (fixed-rate) are allowed\n- Available inventory = min(market supply + finance trial(50M), UTA user remaining borrow limit)\n- Precision: borrow precision, rounded down\n- Unified account only\n\n**Service:** bizasset-uta-loan-prod",
  inputSchema: z.object({
    currency: z.string(),
    term: z.string(),
    annualRate: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spot-margin-trade/fixed-available-inventory", input);
  },
};
