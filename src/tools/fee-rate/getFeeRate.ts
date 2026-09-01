// getFeeRate.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getFeeRate = {
  name: 'getFeeRate',
  description: "Query the current user's taker/maker fee rate for a specified product type.\n\n**Authentication required:** Yes (requires Options Trade or Position permission)\n\n**Rate Limit:** 1000 req/s (global), 5 req/s (per UID + Path)\n\n**Supported product types (category):**\n- `linear` — Linear contract (USDT/USDC Perpetual)\n- `inverse` — Inverse contract\n- `option` — Options",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse", "option"]),
    symbol: z.string().optional(),
    baseCoin: z.string().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/account/fee-rate", input);
  },
};
