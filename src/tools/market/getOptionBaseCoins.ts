// getOptionBaseCoins.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getOptionBaseCoins = {
  name: 'getOptionBaseCoins',
  description: "Retrieve the option base coins available on Bybit, including their quote and settlement\ncoins, display names, online times, symbol availability, and underlying asset types.\n\nUse this endpoint when you need to:\n- Discover available option underlyings without maintaining a hard-coded coin list\n- Filter option base coins by underlying asset type\n- Check whether an option base coin currently has tradable symbols\n\n**Notes:**\n- `underlyingType` is the only supported query parameter\n- No authentication required\n\nAgent hint: Use this endpoint to discover option base coins and their market metadata.\nOptionally filter by underlyingType: 0 for crypto, 1 for commodity, 2 for stock,\n3 for forex, or 4 for oil.\nCheck hasSymbol before querying instruments for a returned base coin.",
  inputSchema: z.object({
    underlyingType: z.number().int().min(0).max(4).optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/option-base-coins", input);
  },
};
