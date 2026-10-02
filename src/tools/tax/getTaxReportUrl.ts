// getTaxReportUrl.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import { sanitizeTaxDownloadInfoField } from '../../utils/tax-download.js';

export const getTaxReportUrl = {
  name: 'getTaxReportUrl',
  description: "Get the download URL of a completed tax report file.\n\n**Prerequisite:** Confirm file status is `2` (generated) via the Status endpoint first.\n\n**Response notes:** The `url` field returns a JSON string containing the file list and base path,\nformatted as `{\"Files\":[\"file1.csv\",\"file2.csv\"],\"Basepath\":\"https://...\"}`.",
  inputSchema: z.object({
    queryId: z.string(),
  }),
  annotations: {"readOnlyHint":false,"destructiveHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    const result = await restClient.postAuth("/fht/compliance/tax/v3/private/url", input) as any;
        if (result?.result?.url === undefined) throw new Error('Tax download response is missing a URL descriptor.');
    result.result.url = sanitizeTaxDownloadInfoField(result.result.url);
    return result;
  },
};
