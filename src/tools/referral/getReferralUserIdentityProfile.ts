// getReferralUserIdentityProfile.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getReferralUserIdentityProfile = {
  name: 'getReferralUserIdentityProfile',
  description: "Query the authenticated API Key owner's referral identity, affiliate status, and inviter/invitee relationships. The request has no user ID input. commissionInfo is available only when a matching M1 inviter record and commission data are found. Missing relationship records are normal and may leave related fields at their defaults.",
  inputSchema: z.object({

  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/referral/user/identity-profile", input);
  },
};
