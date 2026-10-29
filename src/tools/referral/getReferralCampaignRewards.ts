// getReferralCampaignRewards.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const getReferralCampaignRewards = {
  name: 'getReferralCampaignRewards',
  description: "Query referral rules and active base, fiat, and earn campaign task/reward configurations for the authenticated user's site. This is static configuration, not personal task progress, reward claims, or payout records. Each result.tasks item is a JSON string containing one schemaVersion 2 campaign; parse it before reading its tasks. Campaign and task fields use camelCase: campaignId, awardType, ruleTitle, ruleDescription, ruleParam, taskAwards, and m1Awards. Reward fields include productLine, startTime, and endTime; rebateRule uses depositAmount, tradeAmount, rebateRatioRules, and rebateDurationDays. A failed reward lookup can omit an individual task while keeping the campaign.",
  inputSchema: z.object({

  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.postAuth("/v5/referral/campaign/rewards", input, context);
  },
};
