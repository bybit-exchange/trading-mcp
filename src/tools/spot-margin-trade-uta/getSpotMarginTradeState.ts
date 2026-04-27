// getSpotMarginTradeState.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSpotMarginTradeState = {
  name: 'getSpotMarginTradeState',
  description: "Query the Spot margin status and leverage of the unified account.\n- Unified account only",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spot-margin-trade/state", input);
  },
};
