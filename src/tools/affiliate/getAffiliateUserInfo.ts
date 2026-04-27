// getAffiliateUserInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getAffiliateUserInfo = {
  name: 'getAffiliateUserInfo',
  description: "Query detailed information for a specified direct client user under the affiliate account,\nincluding VIP level, KYC level, wallet balance range, 30-day / 365-day trading volume,\ndeposit amount, and commission data.\n\n**Notes:**\n- Must use an API Key with `affiliate` permission bound to a Master UID.\n- `uid` is the Master UID of the direct client to query.\n- `depositAmount30Day` / `depositAmount365Day` are updated every 5 minutes.\n- Trading volume covers three business lines: derivatives, options, and spot.\n- Commission data is for reference only; refer to the Affiliate Portal for authoritative figures.\n- `totalWalletBalance` returns a range value, not an exact balance:\n  - `\"1\"` → < 100 USDT\n  - `\"2\"` → 100–500 USDT\n  - `\"3\"` → 500–1000 USDT (or similar tier)\n  - `\"4\"` → > 500 USDT",
  inputSchema: z.object({
    uid: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/user/aff-customer-info", input);
  },
};
