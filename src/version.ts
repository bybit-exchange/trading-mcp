export const VERSION = '2.0.5';

export function commonHeaders(): Record<string, string> {
  return {
    'User-Agent': `bybit-mcp/${VERSION}`,
    'X-Referer': 'bybit-mcp',
  };
}
