// batchQueryTaxReports.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const batchQueryTaxReports = {
  name: 'batchQueryTaxReports',
  description: "Query all child export tasks in a tax report batch, including their statuses and\ndownload URLs. Poll this endpoint at the recommended interval of 30 seconds.\n\nA child task's `url` is populated only when its status is `2` (completed). The value is a\nJSON-encoded string containing `Files` and `Basepath`, matching the legacy `url` endpoint.\nEach child task receives a `queryId` when the batch is created, so it may be present even\nwhile the child status is `0` (pending).\nThe `batchId` is checked against the authenticated user context.",
  inputSchema: z.object({
    batchId: z.string().min(1),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/fht/compliance/tax/private/batch_query", input);
  },
};
