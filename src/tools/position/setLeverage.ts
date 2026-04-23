// setLeverage.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const setLeverage = {
  name: 'setLeverage',
  description: "Set the leverage for a contract position. Supports linear and inverse contracts.\nIn one-way mode or cross margin mode, buyLeverage and sellLeverage must be equal.\nIn isolated margin hedge mode, they can differ.\n\nAgent hint: Use this to change leverage on an existing or new position. Always set both buyLeverage and sellLeverage.\nFor one-way mode and cross margin, they must be identical. Do not set leverage to the current value or it will error.",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse"]),
    symbol: z.string(),
    buyLeverage: z.string(),
    sellLeverage: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/position/set-leverage", input);
  },
};
