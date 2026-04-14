// getMemberAccountType.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getMemberAccountType = {
  name: 'getMemberAccountType',
  description: "Get account type information for specified member IDs. Use master or sub-account's API key.\n\n**Important notes:**\n- Can query account types for multiple member IDs\n- Returns account types: SPOT, CONTRACT, OPTION, UNIFIED, FUND\n- UTA/UMA accounts have different account type combinations\n- Filters out invalid or inactive account types\n\n**Account Type Combinations:**\n- **UTA (Unified Trading Account):** Has CONTRACT, UNIFIED, FUND\n- **UMA (Unified Margin Account):** Has CONTRACT, UNIFIED, SPOT, FUND\n- **Classic Account:** Has SPOT, CONTRACT, OPTION, FUND separately\n\n**Account Types:**\n- `SPOT`: Spot trading account\n- `CONTRACT`: Perpetual and futures trading account\n- `OPTION`: Options trading account\n- `UNIFIED`: Unified margin/trading account\n- `FUND`: Funding/wallet account\n\n**Filtering Rules:**\n- UTA accounts: OPTION and SPOT types are excluded (consolidated into UNIFIED)\n- UMA accounts: OPTION type is excluded if UNIFIED exists\n- Only active account types are returned",
  inputSchema: z.object({
    memberIds: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/user/get-member-type", input);
  },
};
