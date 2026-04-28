// getSpotMarginTradeCoinState.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSpotMarginTradeCoinState = {
  name: 'getSpotMarginTradeCoinState',
  description: "Retrieve spot margin leverage information for cryptocurrencies.\n- Unified account only\n- If `currency` is not passed, returns all coin states",
  inputSchema: z.object({
    currency: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spot-margin-trade/coinstate", input);
  },
};
