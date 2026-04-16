export const VERSION = '2.0.4';

export function commonHeaders(): Record<string, string> {
  return {
    'User-Agent': `bybit-mcp/${VERSION}`,
    'X-Referer': 'bybit-mcp',
  };
}
