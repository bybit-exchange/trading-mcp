// createGridBot.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const createGridBot = {
  name: 'createGridBot',
  description: "Creates a spot grid bot with the specified trading pair, price range,\ngrid count, and investment amount. Optionally supports entry price,\nstop-loss/take-profit, trailing stop, and grid trailing (auto-shift).\n\nPrerequisites:\n- Call validateGridInput first to ensure parameters are valid.\n- User must be authenticated and pass KYC/compliance checks.\n\nReturns grid_id on success. If the user is banned (status_code=421),\nban_reason_text provides a localized explanation.\n\nRate limit: 3 qps per UID.\n\nAgent hint: Always call validateGridInput before this endpoint. The symbol field\nuses uppercase format like \"BTCUSDT\". Use invest_mode to control\nwhether to invest in quote only (0), base only (1), or both (2).",
  inputSchema: z.object({
    symbol: z.string(),
    max_price: z.string(),
    min_price: z.string(),
    total_investment: z.string(),
    cell_number: z.number().int().min(2),
    followed_grid_id: z.number().int().default(0).optional(),
    source: z.string().optional(),
    entry_price: z.string().optional(),
    stop_loss_price: z.string().optional(),
    take_profit_price: z.string().optional(),
    toolsDiscoveryParameter: z.record(z.unknown()).optional(),
    base_investment: z.string().optional(),
    quote_investment: z.string().optional(),
    invest_mode: z.string().optional(),
    block_source: z.string().optional(),
    create_type: z.string().optional(),
    ts_percent: z.string().optional(),
    enable_trailing: z.boolean().default(false).optional(),
    limit_up_price: z.string().optional(),
    channel: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.post("/v5/grid/create-grid", input);
  },
};
