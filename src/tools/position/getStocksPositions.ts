// getStocksPositions.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getStocksPositions = {
  name: 'getStocksPositions',
  description: "查询当前 MM 账号下所有正股仓位快照，包含总持仓、可用持仓、在途数量等。\n`symbol` 不传时返回全部持仓；`showZero=false`（默认）时过滤零持仓。",
  inputSchema: z.object({
    symbol: z.string().optional(),
    showZero: z.boolean().default(false).optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/rwa/stocks/positions", input);
  },
};
