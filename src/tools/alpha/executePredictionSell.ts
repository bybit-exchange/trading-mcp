// executePredictionSell.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const executePredictionSell = {
  name: 'executePredictionSell',
  description: "Execute a sell order for prediction outcome tokens.\nExchanges token shares for USDC.\n\n**Prerequisites (mandatory):**\n1. Call `getPredictionEngineStatus` — engine must be available\n2. Call `getPredictionPositionList` — verify the user holds the token shares\n3. Call `getPredictionOrderEstimate` — preview the sell order details\n4. Display the estimate to the user and obtain explicit confirmation\n\n**Do NOT call this endpoint without explicit user confirmation.**\n\nPhase 1 supports `orderType=1` (FOK) only.\nA FOK order that cannot be fully filled will be entirely cancelled.\nUse `slippage` to set price tolerance (e.g., \"0.05\" = 5%).\n\nResponse is an ACK only. Check `getPredictionOrderList` for final fill status.\n\nAgent hint: REQUIRES explicit user confirmation before calling.\nAlways call getPredictionEngineStatus, getPredictionPositionList, and getPredictionOrderEstimate first.\nShow estimate details to user and wait for explicit \"yes\" before proceeding.\norderType=1 (FOK) is the only supported type. size is in shares (not USDC).\nResponse is async ACK — check getPredictionOrderList for actual fill result.",
  inputSchema: z.object({
    tokenId: z.string(),
    size: z.string(),
    orderType: z.enum(["1"]),
    slippage: z.string(),
    eventId: z.string(),
    toTokenCode: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/prediction/sell", input);
  },
};
