// getReferralUserInvitations.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getReferralUserInvitations = {
  name: 'getReferralUserInvitations',
  description: "Query invitation records for the authenticated referral user. Optionally filter by invitee IDs, time range, page, and friend status. Use YYYY-MM-DD HH:mm:ss for start_time and end_time; invalid values are treated as unspecified. Page 0 becomes 1; page_size 0 or above 200 becomes 10. Response field casing and large ID representation should be checked against an authenticated response before relying on them.",
  inputSchema: z.object({
    user_id_list: z.array(z.number().int().safe()).default([]).optional(),
    start_time: z.string().optional(),
    end_time: z.string().optional(),
    page: z.number().int().min(0).max(4294967295).default(1).optional(),
    page_size: z.number().int().min(0).max(4294967295).default(10).optional(),
    friend_status: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10)]).optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/referral/user/invitations", input);
  },
};
