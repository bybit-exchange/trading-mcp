// getDcpInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const getDcpInfo = {
  name: 'getDcpInfo',
  description: "Query Disconnection Protection (DCP) configuration. Returns DCP status and\ntime window per product type. Must be pre-authorized by account manager.\n\nRate limit: 10 req/s\n\nAgent hint: Use this to check DCP settings. No parameters needed. Returns an array of\nproduct-level DCP configs with status and time window. Only works for accounts\nthat have DCP enabled by their account manager. Empty result means DCP is not configured.",
  inputSchema: z.object({

  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.getAuth("/v5/account/query-dcp-info", input, context);
  },
};
