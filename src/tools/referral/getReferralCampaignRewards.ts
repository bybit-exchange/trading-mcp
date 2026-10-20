// getReferralCampaignRewards.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getReferralCampaignRewards = {
  name: 'getReferralCampaignRewards',
  description: "Query referral rules and active base, fiat, and earn campaign task/reward configurations for the authenticated user's site. This is static configuration, not personal task progress, reward claims, or payout records. Each result.tasks item is a JSON string containing one schema_version 2 campaign; parse it before reading its tasks. A failed reward lookup can omit an individual task while keeping the campaign.",
  inputSchema: z.object({

  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/referral/campaign/rewards", input);
  },
};
