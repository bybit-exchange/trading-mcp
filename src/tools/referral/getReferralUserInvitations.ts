// getReferralUserInvitations.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getReferralUserInvitations = {
  name: 'getReferralUserInvitations',
  description: "Query invitation records for the authenticated referral user. Optionally filter by invitee IDs, time range, page, and friend status. Use YYYY-MM-DD HH:mm:ss for startTime and endTime; MCP rejects malformed or invalid calendar dates. Page must be a uint32 and pageSize must be 0–200. Page 0 becomes 1 and pageSize 0 becomes 10. Legacy snake_case inputs are local compatibility aliases; do not supply an alias and its camelCase counterpart together. Requests and responses use camelCase. Prefer userIdMask for display; userId is the unencrypted decimal invitee ID string. Honor notShowCommission when displaying commission information. totalBaseRewards is currently unpopulated (empty string), not evidence of zero earned rewards. Actual gateway int64/enum serialization requires authenticated verification.",
  inputSchema: z.object({
    userIdList: z.array(z.number().int().safe()).default([]).optional(),
    startTime: z.string().regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}$/).refine((value) => z.string().datetime({ precision: 0 }).safeParse(value.replace(" ", "T") + "Z").success, { message: "Use a valid date in YYYY-MM-DD HH:mm:ss format" }).optional(),
    endTime: z.string().regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}$/).refine((value) => z.string().datetime({ precision: 0 }).safeParse(value.replace(" ", "T") + "Z").success, { message: "Use a valid date in YYYY-MM-DD HH:mm:ss format" }).optional(),
    page: z.number().int().min(0).max(4294967295).default(1).optional(),
    pageSize: z.number().int().min(0).max(200).default(10).optional(),
    friendStatus: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10)]).optional(),
    user_id_list: z.array(z.number().int().safe()).optional().describe("Deprecated local alias of userIdList"),
    start_time: z.string().regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}$/).refine((value) => z.string().datetime({ precision: 0 }).safeParse(value.replace(" ", "T") + "Z").success, { message: "Use a valid date in YYYY-MM-DD HH:mm:ss format" }).optional().describe("Deprecated local alias of startTime"),
    end_time: z.string().regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}$/).refine((value) => z.string().datetime({ precision: 0 }).safeParse(value.replace(" ", "T") + "Z").success, { message: "Use a valid date in YYYY-MM-DD HH:mm:ss format" }).optional().describe("Deprecated local alias of endTime"),
    page_size: z.number().int().min(0).max(200).optional().describe("Deprecated local alias of pageSize"),
    friend_status: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10)]).optional().describe("Deprecated local alias of friendStatus"),
  }).superRefine((d, ctx) => {
    const pairs = [
      ['user_id_list', 'userIdList'], ['start_time', 'startTime'],
      ['end_time', 'endTime'], ['page_size', 'pageSize'], ['friend_status', 'friendStatus'],
    ] as const;
    for (const [alias, canonical] of pairs) {
      if (d[alias] !== undefined && d[canonical] !== undefined) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: [canonical], message: 'Provide only ' + canonical + ' or its legacy alias ' + alias });
      }
    }
  }).transform((d) => {
    const { user_id_list, start_time, end_time, page_size, friend_status, ...canonical } = d;
    return {
      ...canonical,
      ...(user_id_list !== undefined ? { userIdList: user_id_list } : {}),
      ...(start_time !== undefined ? { startTime: start_time } : {}),
      ...(end_time !== undefined ? { endTime: end_time } : {}),
      ...(page_size !== undefined ? { pageSize: page_size } : {}),
      ...(friend_status !== undefined ? { friendStatus: friend_status } : {}),
    };
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/referral/user/invitations", input);
  },
};
