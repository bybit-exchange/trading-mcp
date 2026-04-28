// postAd.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const postAd = {
  name: 'postAd',
  description: "Create a new P2P advertisement.",
  inputSchema: z.object({
    tokenId: z.string(),
    currencyId: z.string(),
    side: z.enum(["0", "1"]),
    priceType: z.enum(["0", "1"]),
    premium: z.string(),
    price: z.string(),
    minAmount: z.string(),
    maxAmount: z.string(),
    remark: z.string(),
    tradingPreferenceSet: z.object({ hasUnPostAd: z.string().optional(), isKyc: z.string().optional(), isEmail: z.string().optional(), isMobile: z.string().optional(), hasRegisterTime: z.string().optional(), registerTimeThreshold: z.string().optional(), orderFinishNumberDay30: z.string().optional(), completeRateDay30: z.string().optional(), nationalLimit: z.string().optional(), hasOrderFinishNumberDay30: z.string().optional(), hasCompleteRateDay30: z.string().optional(), hasNationalLimit: z.string().optional() }),
    paymentIds: z.array(z.string()),
    quantity: z.string(),
    paymentPeriod: z.string(),
    itemType: z.enum(["ORIGIN", "BULK"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/p2p/item/create", input);
  },
};
