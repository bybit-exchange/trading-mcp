// getRiskLimit.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getRiskLimit = {
  name: 'getRiskLimit',
  description: "Query tiered risk limit parameters for perpetual and futures contracts, including\nposition size limits, initial/maintenance margin rates, and maximum leverage per tier.\n\nUse this endpoint when you need to:\n- Understand the risk tiers for a contract before placing large positions\n- Retrieve maximum leverage allowed at each risk tier (`maxLeverage`)\n- Check initial margin rate (`initialMargin`) and maintenance margin rate (`maintenanceMargin`) per tier\n\n**Supported Products:** USDT contract, USDC contract, Inverse contract\n\nReturns all risk tiers for the specified symbol. Supports cursor-based pagination.\n\n**Do not use** this endpoint for instrument-level leverage filter — use `getInstrumentsInfo` instead.\n\n**Notes:**\n- Returns tiered risk limit levels with corresponding margin requirements and leverage caps\n- No authentication required\n\nAgent hint: Use this endpoint to retrieve risk tier parameters for a contract symbol.\ncategory is required; symbol is optional (omit to get all symbols for the category).\nUse this before setting leverage or placing large orders to understand margin requirements.\nFor instrument-level leverage filter, use getInstrumentsInfo instead.",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse"]),
    symbol: z.string().optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/risk-limit", input);
  },
};
