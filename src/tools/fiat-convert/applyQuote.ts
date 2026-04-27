// applyQuote.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const applyQuote = {
  name: 'applyQuote',
  description: "Apply for a conversion quote. The system will return:\n- Quote ID (quoteTxId)\n- Real-time exchange rate\n- Quote expiration time\n- Conversion amounts\n\n**Quote Rules:**\n- Quotes have a time limit, typically 30 seconds\n- A new quote must be requested after expiration\n- The quote amount must be within the trading pair limits\n\n**Important:** Only API keys from the Master UID can call this endpoint.\n\n**Use Cases:**\n- Lock in an exchange rate before confirming a trade\n- Show users the exact amount they will receive\n- Validate trade parameters before execution",
  inputSchema: z.object({
    fromCoin: z.string(),
    fromCoinType: z.enum(["fiat", "crypto"]),
    toCoin: z.string(),
    toCoinType: z.enum(["fiat", "crypto"]),
    requestAmount: z.string(),
    requestCoinType: z.enum(["fiat", "crypto"]).default("fiat").optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/fiat/quote-apply", input);
  },
};
