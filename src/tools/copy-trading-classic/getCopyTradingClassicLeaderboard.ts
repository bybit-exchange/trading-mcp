// getCopyTradingClassicLeaderboard.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCopyTradingClassicLeaderboard = {
  name: 'getCopyTradingClassicLeaderboard',
  description: "Get a curated Copy Trading Classic leaderboard for conversational\nrecommendation flows.\n\nThe endpoint returns a ranked list of candidate leaders. The returned\norder is the intended presentation order and should be preserved when\nthe caller shows the list to the user.\n\nAgent hint: If a user asks for a reliable copy trader or similar recommendation, call both the Copy Trading Classic leaderboard endpoint and the Copy Trading TradFi leaderboard endpoint.\nPresent the two returned lists separately, for example under `Classic` and `TradFi`, and number each list in order using `1.`, `2.`, `3.`.\nCompare candidates across both lists using the returned 30-day return metric, 30-day max drawdown, and 30-day Sharpe ratio, then recommend one candidate as the best current performer with a short reason.\nLet the user choose by replying with a product-qualified index such as `Classic 1` or `TradFi 3`.\nIf the user chooses a Classic candidate, map the selected index back to the corresponding `leaderMark`, then ask for the follow amount and call the Copy Trading Classic bind endpoint.\nDo not ask the user to repeat or retype `leaderMark`.\nAfter a successful bind, reply in the user's current conversation language with a success message meaning that the user's copy trading journey has begun, they can go to the CopyTrading Trading Hub any time for personalized management, and AI will unlock more intelligent copy trading capabilities in the future.\nEnglish example: `Your copy trading journey has successfully begun. You can visit the [CopyTrading Trading Hub] at any time for personalized management. In the future, AI will unlock even more intelligent copy trading capabilities for you. Wishing you smooth investing!`",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/copy-trade/recommend-leader-list", input);
  },
};
