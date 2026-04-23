// createDCABot.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const createDCABot = {
  name: 'createDCABot',
  description: "Creates a DCA bot that automatically invests at regular intervals.\nSpecify investment frequency (in seconds), quote coin, trading pairs\nwith individual amounts, and optional max investment amount.\n\nPrerequisites:\n- User must be authenticated and pass KYC/compliance checks.\n- Trading pairs must be valid and not duplicated.\n- Minimum frequency is 10 seconds.\n- Maximum 5 trading pairs per bot.\n\nReturns bot_id on success. If the user is banned (status_code=421),\nban_reason_text provides a localized explanation.\n\nRate limit: 3 qps per UID.\n\nAgent hint: The parameters.frequency_in_second field controls how often the bot\ninvests. Common values: 600 (10 min), 3600 (1 hour), 86400 (1 day).\nEach pair in parameters.pairs specifies a base coin and its per-round\ninvestment amount.",
  inputSchema: z.object({
    parameters: z.string(),
    toolsDiscoveryParameter: z.record(z.unknown()).optional(),
    channel: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.post("/v5/dca/create-bot", input);
  },
};
