// subMemberListQuery.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const subMemberListQuery = {
  name: 'subMemberListQuery',
  description: "Query sub UIDs under the current master UID.\nReturns both all sub UIDs and the sub UIDs that have universal transfer permission.\nMaster UID API key only.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/transfer/query-sub-member-list", input);
  },
};
