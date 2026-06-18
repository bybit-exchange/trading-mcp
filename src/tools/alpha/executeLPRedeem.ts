// executeLPRedeem.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const executeLPRedeem = {
  name: 'executeLPRedeem',
  description: "Execute LP redemption to withdraw liquidity from a pool position.\nReturns an order number that can be used to track redemption status.\n\n**Prerequisites (mandatory):**\n1. Call `getLPPositionList` to get position details and positionId\n2. Display redemption details (amount, expected tokens, fees) to user\n3. Obtain explicit user confirmation\n\n**AI agent must obtain explicit user confirmation before calling this endpoint.**\n\nResponse is an acknowledgment only — use `getLPOrderList` to confirm actual redemption.\nOn-chain confirmation and token transfer typically takes 10-60 seconds.\n\n**Do NOT** call this endpoint directly without user approval.\n\nAgent hint: Use this endpoint to execute LP redemption after getting user confirmation.\nNever call without user approval. Always call getLPPositionList first.\ndercRatio is the reduction ratio: \"0.5\" = 50% withdrawal, \"1\" = full withdrawal.",
  inputSchema: z.object({
    positionId: z.number().int(),
    poolAddress: z.string(),
    dercRatio: z.string(),
    receiveTokenCode: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/lp/redeem", input);
  },
};
