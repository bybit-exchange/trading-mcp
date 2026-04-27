// confirmQuote.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const confirmQuote = {
  name: 'confirmQuote',
  description: "Confirm the quote and execute the conversion trade.\n\n**Important:**\n- Must confirm within the quote validity period\n- Trade execution is asynchronous and will not complete immediately\n- Use the trade query endpoint to verify the final status\n- Webhook configuration is recommended to receive trade completion notifications\n\n**Trade Status:**\n- `processing`: Trade is being processed\n- `success`: Trade completed successfully\n- `failed`: Trade failed\n\n**Use Cases:**\n- Execute the trade after user confirms the quote\n- Submit trade with custom tracking ID (merchantRequestId)\n- Configure webhook for real-time status updates",
  inputSchema: z.object({
    quoteTxId: z.string(),
    subUserId: z.string(),
    webhookUrl: z.string().optional(),
    merchantRequestId: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/fiat/trade-execute", input);
  },
};
