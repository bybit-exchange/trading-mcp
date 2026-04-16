// getNewDeliveryPrice.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getNewDeliveryPrice = {
  name: 'getNewDeliveryPrice',
  description: "Retrieve historical option delivery prices grouped by base coin and settlement coin,\nreturned in reverse chronological order (most recent settlement first).\n\nUse this endpoint when you need to:\n- Look up recent option settlement prices by base coin (BTC, ETH, etc.) without knowing specific contract symbols\n- Retrieve the latest delivery price shortly after settlement completes\n- Access settlement history for a specific base coin / settlement coin pair\n\n**Supported Products:** Option only\n\n**Do not use** this endpoint for futures delivery prices — use `getDeliveryPrice` instead.\n**Do not use** this endpoint if you need settlement prices for a specific contract symbol — use `getDeliveryPrice` instead.\n\n**Notes:**\n- Query at least 1 minute after settlement completes, as data may be delayed by up to 1 minute\n- Default limit is `50` records\n- No authentication required\n\nAgent hint: Use this endpoint to retrieve recent option delivery prices by baseCoin (e.g., BTC, ETH).\ncategory=option and baseCoin are required; settleCoin defaults to USDT.\nWait at least 1 minute after settlement before querying to ensure data availability.\nFor futures delivery prices or symbol-specific queries, use getDeliveryPrice instead.",
  inputSchema: z.object({
    category: z.enum(["option"]),
    baseCoin: z.string(),
    settleCoin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/new-delivery-price", input);
  },
};
