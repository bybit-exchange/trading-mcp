// getAdlAlert.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getAdlAlert = {
  name: 'getAdlAlert',
  description: "Query ADL (Auto-Deleveraging) alert data and insurance fund metrics for derivative contracts,\nindicating the current ADL risk level and activation thresholds.\n\nUse this endpoint when you need to:\n- Monitor ADL risk levels for specific contract symbols in real-time\n- Check the current insurance fund balance (`balance`) and PnL drawdown ratio (`pnlRatio`)\n- Understand the thresholds at which ADL would activate (`insurancePnlRatio`, `adlTriggerThreshold`)\n\n**Supported Products:** USDT Perpetual, USDT Delivery, USDC Perpetual, USDC Delivery, Inverse contract\n\nData updates every 1 minute. Omit `symbol` to retrieve data for all symbols.\n\n**Do not use** this endpoint for general insurance pool balances — use `getInsurancePool` instead.\n\n**Notes:**\n- Data updates every 1 minute\n- No authentication required\n\nAgent hint: Use this endpoint to monitor ADL (Auto-Deleveraging) risk levels for contract symbols.\nOmit symbol to get ADL data for all supported symbols.\nHigh pnlRatio (more negative than insurancePnlRatio) indicates elevated ADL risk.\nFor general insurance pool balance information, use getInsurancePool instead.",
  inputSchema: z.object({
    symbol: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/adlAlert", input);
  },
};
