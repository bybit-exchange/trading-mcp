// getDcpInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getDcpInfo = {
  name: 'getDcpInfo',
  description: "Query Disconnection Protection (DCP) configuration. Returns DCP status and\ntime window per product type. Must be pre-authorized by account manager.\n\nRate limit: 10 req/s\n\nAgent hint: Use this to check DCP settings. No parameters needed. Returns an array of\nproduct-level DCP configs with status and time window. Only works for accounts\nthat have DCP enabled by their account manager. Empty result means DCP is not configured.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/account/query-dcp-info", input);
  },
};
