// recEasyBotStrategy.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const recEasyBotStrategy = {
  name: 'recEasyBotStrategy',
  description: "Returns a single Aurora-recommended strategy plus the bot business type\n(`biz`) for the given `symbol` + `product` + `direction` triple. Used by\nthe EasyBot one-click create flow.\n\nRate limit: 20 requests per second per UID per path.\n\nAgent hint: Use this when the user wants the simplest path to create a bot: they\ngive you a symbol, whether it's spot or futures, and which direction\nthey want, and Aurora picks the rest. The response includes `biz`\ntelling you which bot type (e.g. SPOT_GRID, FUTURE_GRID) was picked —\nfeed that into the corresponding create endpoint.",
  inputSchema: z.object({
    symbol: z.string(),
    product: z.enum(["0", "1", "2"]),
    direction: z.enum(["0", "1", "2", "3"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/aurora/easy", input);
  },
};
