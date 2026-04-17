export const VERSION = '2.0.9';

export function commonHeaders(): Record<string, string> {
  return {
    'User-Agent': `bybit-ai-mcp/${VERSION}`,
    'X-Referer': 'bybit-ai-mcp',
  };
}
