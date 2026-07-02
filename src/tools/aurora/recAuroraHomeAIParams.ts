// recAuroraHomeAIParams.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const recAuroraHomeAIParams = {
  name: 'recAuroraHomeAIParams',
  description: "Returns a curated list of Aurora AI strategy recommendations for the\nhome feed of the trading-bot product. Mixed across bot types\n(spot grid / futures grid / martingale / combo) — see each strategy's\n`biz_type` field.\n\nUp to 18 strategies are returned (6 for Copy Trading leaders).\n\nRate limit: 20 requests per second per UID per path.\n\nAgent hint: Use this when a user opens the trading-bot home page and wants to see\nwhat Aurora is currently recommending. The request takes no parameters.\nFor each strategy, pass `aurora_id` to `/v5/aurora/info` to refetch\nfull details, or use the per-bot-type create endpoints to act on it.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/aurora/home", input);
  },
};
