// closeGridBot.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const closeGridBot = {
  name: 'closeGridBot',
  description: "Closes a running spot grid bot. You must specify a close_mode to\ndetermine how remaining assets are settled:\n- 1 (BIT_MODE): settle in BIT\n- 2 (BASE_MODE): convert all to base token\n- 3 (QUOTE_MODE): convert all to quote token\n- 4 (BASE_AND_QUOTE_MODE): return assets as-is, no conversion\n\nThe bot must be in a closeable state (NEW or RUNNING). Bots in\nCANCELLING or COMPLETED state cannot be closed again.\n\nRate limit: 3 qps per UID.\n\nAgent hint: Use close_mode=3 (QUOTE_MODE) if the user wants to cash out to\nstablecoin. Use close_mode=4 if the user wants to keep both tokens.",
  inputSchema: z.object({
    grid_id: z.number().int(),
    close_mode: z.enum(["1", "2", "3", "4"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/grid/close-grid", input);
  },
};
