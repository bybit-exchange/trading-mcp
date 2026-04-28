// addReduceMargin.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const addReduceMargin = {
  name: 'addReduceMargin',
  description: "Add or reduce margin for a position in isolated margin mode.\nUse a positive value to add margin, or a negative value to reduce margin.\nReturns updated position details after the margin adjustment.\n\nAgent hint: Use this to manually adjust margin on isolated margin positions. Pass positive margin to add, negative to reduce (e.g., \"10\" or \"-10\").\nMax 4 decimal places. In hedge mode, specify positionIdx. Returns full updated position info including new liqPrice.",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse"]),
    symbol: z.string(),
    margin: z.string(),
    positionIdx: z.enum(["0", "1", "2"]).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/position/add-margin", input);
  },
};
