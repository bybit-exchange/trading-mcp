// modifyEarnPosition.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const modifyEarnPosition = {
  name: 'modifyEarnPosition',
  description: "Set or unset auto-reinvest for a fixed-term OnChain position (`SavingType=FixedTermSaving`).\n\n**Notes:**\n- Only supports `category=OnChain`\n- Flexible-term positions do not support auto-reinvest and will return `180028`\n- Various business rules may restrict enabling reinvest (inventory caps, APY decrease, etc.); disabling is always permitted unless within the forbidden window before settlement",
  inputSchema: z.object({
    category: z.enum(["OnChain"]),
    productId: z.number().int(),
    positionId: z.number().int(),
    autoReinvest: z.enum(["0", "1"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/earn/position/modify", input);
  },
};
