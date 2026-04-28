// confirmNewRiskLimit.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const confirmNewRiskLimit = {
  name: 'confirmNewRiskLimit',
  description: "Confirm the pending maintenance margin rate update for a position.\nThis removes the reduce-only restriction that was applied when Bybit adjusted the risk limit.\n\nAgent hint: Use this when a position has isReduceOnly=true due to a risk limit adjustment by Bybit.\nCalling this confirms the new MMR and removes the reduce-only restriction.\nCheck isReduceOnly in getPositionInfo to determine if this action is needed.",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse"]),
    symbol: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/position/confirm-pending-mmr", input);
  },
};
