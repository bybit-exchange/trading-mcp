// updateAd.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const updateAd = {
  name: 'updateAd',
  description: "Update or relist a P2P advertisement.\nNote: A single advertisement can be modified no more than 10 times within 5 minutes.",
  inputSchema: z.object({
    id: z.string(),
    priceType: z.enum(["0", "1"]),
    premium: z.string(),
    price: z.string(),
    minAmount: z.string(),
    maxAmount: z.string(),
    remark: z.string(),
    tradingPreferenceSet: z.object({ hasUnPostAd: z.string().optional(), isKyc: z.string().optional(), isEmail: z.string().optional(), isMobile: z.string().optional(), hasRegisterTime: z.string().optional(), registerTimeThreshold: z.string().optional(), orderFinishNumberDay30: z.string().optional(), completeRateDay30: z.string().optional(), nationalLimit: z.string().optional(), hasOrderFinishNumberDay30: z.string().optional(), hasCompleteRateDay30: z.string().optional(), hasNationalLimit: z.string().optional() }),
    paymentIds: z.array(z.string()),
    actionType: z.enum(["MODIFY", "ACTIVE"]),
    quantity: z.string(),
    paymentPeriod: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/p2p/item/update", input);
  },
};
