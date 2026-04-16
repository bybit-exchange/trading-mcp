// listSubAPIKeysV5.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const listSubAPIKeysV5 = {
  name: 'listSubAPIKeysV5',
  description: "Query all API keys of a sub-account with pagination support. Use master account's API key.\n\n**Important notes:**\n- Only **master account** can call this endpoint\n- Returns API keys belonging to the specified sub-account\n- **Secrets are NEVER returned for security**\n- Returns comprehensive metadata including permissions, IPs, expiration time\n- Sub-account must belong to the requesting master account\n- Supports cursor-based pagination (Base64 encoded)\n- Automatically filters out system API keys (Copper, Fireblocks, Tax)\n\n**Required Permissions:**\n- Master API key with appropriate permissions to query sub-account information\n\n**Pagination:**\n- Default page size: 20\n- Use Base64-encoded `cursor` for fetching next page\n- Returns empty cursor when no more API keys\n\n**Response includes:**\n- List of API keys for the sub-account\n- Each key's permissions breakdown\n- IP whitelist configuration\n- Read-only status\n- Creation and expiration timestamps\n- Expiration status (unlimited, unexpired, coming expired, expired)\n- Days until expiration\n- Key type (personal or third-party)\n- Note/description\n\n**Expiration Status:**\n- Status 1: Unlimited (no expiration)\n- Status 2: Unexpired (more than 7 days remaining)\n- Status 3: Coming expired (within 7 days)\n- Status 4: Expired\n\n**Filtered API Keys:**\n- Copper API keys (note contains \"Copper\")\n- Fireblocks API keys (note contains \"Fireblocks\")\n- Tax API keys (note contains \"Tax\")\n\n**Use Cases:**\n- Master account managing sub-account API keys\n- Auditing sub-account API key configurations\n- Monitoring API key expiration times\n- Reviewing permission assignments\n- Paginate through large numbers of API keys",
  inputSchema: z.object({
    subuid: z.number().int(),
    limit: z.number().int().min(1).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/user/sub-apikeys", input);
  },
};
