// getPositionInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPositionInfo = {
  name: 'getPositionInfo',
  description: "Query real-time position data, such as position size, cumulative realizedPNL.\n- Unified account covers: USDT perpetual / USDC contract / Inverse contract / Options\n- Classic account covers: USDT perpetual / Inverse contract\n\n**Unified account:**\n- For `linear`, either `symbol` or `settleCoin` is **required**\n- For `inverse`, either `symbol` or `settleCoin` is **required**\n- For `option`, `baseCoin` is optional; if not passed, returns all option positions\n\n**Info:**\n- If the position is in one-way mode and the position side is empty, it means no position is held in this symbol",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse", "option"]),
    symbol: z.string().optional(),
    baseCoin: z.string().optional(),
    settleCoin: z.string().optional(),
    limit: z.number().int().min(1).max(200).default(20).optional(),
    cursor: z.string().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/position/list", input);
  },
};
