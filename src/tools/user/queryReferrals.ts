// queryReferrals.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryReferrals = {
  name: 'queryReferrals',
  description: "Query invited users (referrals) for the authenticated account. Use master or sub-account's API key.\n\n**Important notes (from official Bybit V5 documentation):**\n- Returns a list of users invited through friend referral program\n- Supports cursor-based pagination for efficient data retrieval\n- Only returns **Friend referral** (scene=2) invitation records\n- Results are sorted by invitation ID in descending order (newest first)\n- Maximum page size is 100 records per request\n- Default page size is 20 records if not specified or invalid\n\n**Process Flow:**\n1. Extract UID from BGW metadata (authentication context)\n2. Validate UID (must be > 0)\n3. Set default page size (20) if not provided or out of range [1-100]\n4. Parse cursor (must be valid int64 string or empty)\n5. Call domain layer QueryReferrals with scene=Friend (2)\n6. Convert domain results to proto response\n7. Set nextCursor if more pages available\n8. Return records with pagination info\n\n**Pagination Mechanism:**\n- **Cursor-based pagination**: Use `nextCursor` from response to fetch next page\n- Initial request: Don't provide cursor parameter (or empty string)\n- Subsequent requests: Use `nextCursor` value from previous response\n- When `nextCursor` is empty in response, there are no more pages\n- System fetches (size + 1) records internally to determine if next page exists\n\n**Status Values:**\n- `0`: Common/Active (AVAILABLE) - referral relationship is active\n- `1`: Closed/Inactive (UNAVAILABLE) - referral relationship is closed\n- If status parameter not provided, returns all statuses\n\n**Response Data:**\n- Each record includes invitation ID, invitee UID, status, and timestamps\n- `invitee_uid` (user_id): The UID of the invited user\n- `created_at` / `updated_at`: Unix timestamps in seconds\n\n**Business Rules:**\n- Only shows Friend referral invitations (scene=2, constant biz.Friend)\n- Must be authenticated with valid API key\n- UID extracted from BGW metadata (ParseBGWParameter)\n- Invalid or missing UID (uid <= 0) returns permission denied error\n- Cursor must be valid integer string (parseable as int64) or empty\n- Page size auto-adjusted: if <= 0 or > 100, defaults to 20\n\n**Use Cases:**\n- Query all users invited by the authenticated account\n- Check referral invitation status\n- Track referral program performance\n- Export referral data for analysis\n- Monitor active vs closed referral relationships",
  inputSchema: z.object({
    cursor: z.string().optional(),
    size: z.number().int().min(1).max(100).default(20).optional(),
    status: z.array(z.enum(["0", "1"])).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/user/invitation/referrals", input);
  },
};
