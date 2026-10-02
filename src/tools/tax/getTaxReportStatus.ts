// getTaxReportStatus.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getTaxReportStatus = {
  name: 'getTaxReportStatus',
  description: "Query the generation status of a specified tax report file task.\n\n**Return status values:**\n- `-1` — Generation failed\n- `0` — Not generated\n- `1` — Generating\n- `2` — Generated (can call Url endpoint to get download link)\n- `3` — Expired (need to re-create task)\n\n**Internal logic:** If the local record status is not 2 (generated) or 3 (expired),\nthe system queries the big data API in real-time to get the latest status and synchronizes the update.",
  inputSchema: z.object({
    queryId: z.string(),
  }),
  annotations: {"readOnlyHint":false,"destructiveHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/fht/compliance/tax/v3/private/status", input);
  },
};
