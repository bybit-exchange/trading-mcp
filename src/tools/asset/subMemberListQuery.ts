// subMemberListQuery.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const subMemberListQuery = {
  name: 'subMemberListQuery',
  description: "Query sub UIDs under the current master UID.\nReturns both all sub UIDs and the sub UIDs that have universal transfer permission.\nMaster UID API key only.",
  inputSchema: z.object({

  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.getAuth("/v5/asset/transfer/query-sub-member-list", input, context);
  },
};
