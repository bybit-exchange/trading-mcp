// getReferralCommissionRecords.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getReferralCommissionRecords = {
  name: 'getReferralCommissionRecords',
  description: "Query referral commission records for the authenticated inviter. Optionally filter by invitee IDs, time range, product line, and page. Use YYYY-MM-DD HH:mm:ss for startTime and endTime; MCP rejects malformed or invalid calendar dates. Page must be a uint32 and pageSize must be 0–200. Page 0 becomes 1 and pageSize 0 becomes 10. Returned invitee userId values are masked; paymentTime is a Unix timestamp in seconds.",
  inputSchema: z.object({
    userIdList: z.array(z.number().int().safe()).optional(),
    startTime: z.string().regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}$/).refine((value) => z.string().datetime({ precision: 0 }).safeParse(value.replace(" ", "T") + "Z").success, { message: "Use a valid date in YYYY-MM-DD HH:mm:ss format" }).optional(),
    endTime: z.string().regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}$/).refine((value) => z.string().datetime({ precision: 0 }).safeParse(value.replace(" ", "T") + "Z").success, { message: "Use a valid date in YYYY-MM-DD HH:mm:ss format" }).optional(),
    page: z.number().int().min(0).max(4294967295).default(1).optional(),
    pageSize: z.number().int().min(0).max(200).default(10).optional(),
    productLine: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(6), z.literal(9)]).optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/referral/commission/records", input);
  },
};
