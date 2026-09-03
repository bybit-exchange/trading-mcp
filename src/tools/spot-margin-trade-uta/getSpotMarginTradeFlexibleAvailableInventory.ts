// getSpotMarginTradeFlexibleAvailableInventory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSpotMarginTradeFlexibleAvailableInventory = {
  name: 'getSpotMarginTradeFlexibleAvailableInventory',
  description: "Retrieve the flexible available inventory (remaining borrowable amount from the lending pool) for a specified cryptocurrency in spot margin trading.\n- Unified account only",
  inputSchema: z.object({
    currency: z.string(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spot-margin-trade/flexible-available-inventory", input);
  },
};
