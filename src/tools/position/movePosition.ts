// movePosition.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const movePosition = {
  name: 'movePosition',
  description: "Transfer positions between two unified trading accounts (UIDs) without fees.\nSupports linear, inverse, spot, and option. Up to 25 legs per request.\nBoth accounts must be under the same master account.\n\nAgent hint: Use this to move positions between sub-accounts. Requires master API key.\nBoth UIDs must be UTA. Futures must be in one-way mode. Max 25 legs per request.\nPrice must be within 95%-105% of mark price for linear/inverse. No fees generated.\nCheck status via getMovePositionHistory if response status is Processing.",
  inputSchema: z.object({
    fromUid: z.string(),
    toUid: z.string(),
    list: z.array(z.object({ category: z.enum(["linear", "spot", "option", "inverse"]), symbol: z.string(), price: z.string(), side: z.enum(["Buy", "Sell"]), qty: z.string() })),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/position/move-positions", input);
  },
};
