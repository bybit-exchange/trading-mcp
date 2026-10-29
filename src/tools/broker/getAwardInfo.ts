// getAwardInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const getAwardInfo = {
  name: 'getAwardInfo',
  description: "Get basic information of a specified voucher, including coin, denomination unit, product line, total amount, and distributed amount.\n\n**Rate Limit:** 50 req/s",
  inputSchema: z.object({
    id: z.string(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.postAuth("/v5/broker/award/info", input, context);
  },
};
