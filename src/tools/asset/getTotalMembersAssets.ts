// getTotalMembersAssets.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const getTotalMembersAssets = {
  name: 'getTotalMembersAssets',
  description: "Query the aggregated total assets overview for parent and sub accounts.\n\n**Notes:**\n- This endpoint requires authentication.\n- Supports parent-sub account query; if `parentUid` exists, uses the parent account UID.\n- If `coin` is specified, the total assets will be denominated in that coin.",
  inputSchema: z.object({
    coin: z.string().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.getAuth("/v5/asset/total-members-assets", input, context);
  },
};
