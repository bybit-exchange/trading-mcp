// createSubMember.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const createSubMember = {
  name: 'createSubMember',
  description: "Create a new sub user ID. Use master account's API key.\n\n**Important notes:**\n- The API key must have at least one of the following permissions:\n  - Account Transfer\n  - Subaccount Transfer\n  - Withdrawal\n- Only **master API key** can call this endpoint\n- **Subaccounts cannot create subaccounts**\n- **KYC or KYB verification is required** before creating sub-accounts\n- Custody accounts (e.g., Copper, Fireblocks, Cactus, Zodia) are **NOT supported** to create subaccounts via this API\n- Turkish users cannot create custodial subaccounts (memberType=6)\n\n**Rate Limits:**\n- Default: 1 request per second per master account\n- Whitelisted accounts: Higher QPS limits may apply (contact support)\n\n**Username requirements:**\n- 6-16 characters\n- Must include both numbers and letters\n- Cannot be the same as existing or deleted usernames\n\n**Password requirements (if provided):**\n- 8-30 characters\n- Must include at least one number, one uppercase letter, and one lowercase letter\n- Password will be automatically SHA256 hashed by the server\n- If not provided, sub-account will be created with no password (noPwd=1) and cannot login until password is set",
  inputSchema: z.object({
    username: z.string(),
    password: z.string().optional(),
    memberType: z.enum(["1", "6"]),
    switch: z.enum(["0", "1"]).default("0").optional(),
    isUta: z.boolean().default(true).optional(),
    note: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/user/create-sub-member", input);
  },
};
