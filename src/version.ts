export const VERSION = '2.1.0';

export function commonHeaders(): Record<string, string> {
  return {
    'User-Agent': `bybit-ai-mcp/${VERSION}`,
    'X-Referer': 'bybit-ai-mcp',
  };
}
