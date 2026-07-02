// recExploreStrategy.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const recExploreStrategy = {
  name: 'recExploreStrategy',
  description: "Returns up to 6 Aurora-recommended strategies for a given `biz_type`,\nspanning multiple trading symbols. Used to populate the explore page\nwhere users browse strategies by bot type without picking a symbol\nfirst.\n\nRate limit: 20 requests per second per UID per path.\n\nAgent hint: Use this when the user wants to browse Aurora's picks for a specific\nbot type (e.g. \"show me good futures-grid strategies right now\")\nwithout committing to a symbol. To narrow down by symbol once chosen,\nswitch to `/v5/aurora/creation`.",
  inputSchema: z.object({
    biz_type: z.enum(["0", "1", "2", "3", "4", "5", "6", "7", "8"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/aurora/explore", input);
  },
};
