// queryReferralCode.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryReferralCode = {
  name: 'queryReferralCode',
  description: "Query the referral codes owned by the current user and their corresponding referral registration links.\n\n- Sub-accounts will return the parent account's referral codes.\n- Only active (non-expired) referral codes are returned.\n- The referral link is generated based on the user's site and language preference.\n\n:::tip\nRequires authentication via API Key (HMAC / RSA).\n:::",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/user/invitation/code", input);
  },
};
