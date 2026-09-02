// getPuzzleProjectList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPuzzleProjectList = {
  name: 'getPuzzleProjectList',
  description: "Returns a paginated list of Puzzle activities filtered by status.\nOptionally narrow results by project code or activity coin.\n\nAI agent can use this to help users browse available Puzzle activities\nor look up details of a specific project.\n\nAgent hint: Use this endpoint to list Puzzle activities. Filter by status (0=upcoming,\n1=ongoing, 2=ended). To look up a specific project, pass its code via\nprojectId. Use cursor/limit for pagination.",
  inputSchema: z.object({
    status: z.number().int().min(0).max(2),
    projectId: z.string().optional(),
    activityCoin: z.string().optional(),
    cursor: z.string().optional(),
    limit: z.number().int().min(1).max(10).default(10),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/spot-x/puzzle/project/list", input);
  },
};
