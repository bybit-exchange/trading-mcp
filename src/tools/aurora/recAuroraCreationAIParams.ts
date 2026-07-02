// recAuroraCreationAIParams.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const recAuroraCreationAIParams = {
  name: 'recAuroraCreationAIParams',
  description: "Returns the strategies Aurora recommends when a user is on the bot\ncreation page for a specific `biz_type` (e.g. SPOT_GRID) and `symbol`\n(e.g. BTCUSDT). Up to 6 strategies are returned.\n\nAlso returns `market_mode` — Aurora's view of the current best market\ndirection for this symbol (long / short / neutral).\n\nRate limit: 20 requests per second per UID per path.\n\nAgent hint: Call this when the user is creating a bot and you know both the bot\ntype and the trading pair. Use `market_mode` to pre-select grid\ndirection in the UI, and present the `data` list as starting-point\nparams the user can pick from.",
  inputSchema: z.object({
    biz_type: z.enum(["0", "1", "2", "3", "4", "5", "6", "7", "8"]),
    symbol: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/aurora/creation", input);
  },
};
