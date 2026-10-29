// getMyAdDetails.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const getMyAdDetails = {
  name: 'getMyAdDetails',
  description: "Get details of a specific P2P advertisement.",
  inputSchema: z.object({
    itemId: z.string(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.postAuth("/v5/p2p/item/info", input, context);
  },
};
