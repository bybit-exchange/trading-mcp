// executeLPStake.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const executeLPStake = {
  name: 'executeLPStake',
  description: "Execute LP stake to provide liquidity and earn rewards.\nReturns a position ID that can be used to track the position status.\n\n**Prerequisites (mandatory):**\n1. Call `getLPPayTokenList` to verify sufficient balance\n2. Call `getLPPoolInfo` to understand pool parameters\n3. Display stake details (amount, fees, expected APY) to user\n4. Obtain explicit user confirmation\n\n**AI agent must obtain explicit user confirmation before calling this endpoint.**\n\nResponse is an acknowledgment only — use `getLPPositionList` to confirm actual position.\nPosition activation typically takes 10-60 seconds for on-chain confirmation.\n\n**Do NOT** call this endpoint directly without user approval.\n\nAgent hint: Use this endpoint to execute LP stake after getting user confirmation.\nNever call without user approval. Always call getLPPayTokenList and getLPPoolInfo first.\npositionId=0 creates new position; non-zero adds to existing position.\nEither use rangeLower/rangeUpper OR priceLower/priceUpper, not both.",
  inputSchema: z.object({
    positionId: z.number().int().min(0),
    poolAddress: z.string(),
    payTokenAmount: z.string(),
    payTokenCode: z.string(),
    rangeUpper: z.string().optional(),
    rangeLower: z.string().optional(),
    priceUpper: z.string().optional(),
    priceLower: z.string().optional(),
  }).refine(
    (d) => {
      const hasRange = d.rangeLower !== undefined || d.rangeUpper !== undefined;
      const hasPrice = d.priceLower !== undefined || d.priceUpper !== undefined;
      return !(hasRange && hasPrice);
    },
    { message: 'Use either rangeLower/rangeUpper OR priceLower/priceUpper, not both' }
  ),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/lp/stake", input);
  },
};
