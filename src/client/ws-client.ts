import WebSocket from 'ws';
import { resolveSignConfig, signHmac, signRsa } from '../utils/auth.js';
import { commonHeaders } from '../version.js';

/**
 * WebSocket base URLs by channel category.
 * Public channels are split by product type (determined at call time via `category`).
 */
const WS_MAINNET = {
  linear: 'wss://stream.bybit.com/v5/public/linear',
  spot: 'wss://stream.bybit.com/v5/public/spot',
  inverse: 'wss://stream.bybit.com/v5/public/inverse',
  option: 'wss://stream.bybit.com/v5/public/option',
  private: 'wss://stream.bybit.com/v5/private',
  spread: 'wss://stream.bybit.com/v5/public/spread',
  misc: 'wss://stream.bybit.com/v5/public/misc/status',
} as const;

const WS_TESTNET = {
  linear: 'wss://stream-testnet.bybit.com/v5/public/linear',
  spot: 'wss://stream-testnet.bybit.com/v5/public/spot',
  inverse: 'wss://stream-testnet.bybit.com/v5/public/inverse',
  option: 'wss://stream-testnet.bybit.com/v5/public/option',
  private: 'wss://stream-testnet.bybit.com/v5/private',
  spread: 'wss://stream-testnet.bybit.com/v5/public/spread',
  misc: 'wss://stream-testnet.bybit.com/v5/public/misc/status',
} as const;

export type WsCategory = keyof typeof WS_MAINNET;

export interface SnapshotOptions {
  /** WS URL category key */
  category: WsCategory;
  /** Full topic string, e.g. "orderbook.50.BTCUSDT" */
  topic: string;
  /** Whether to authenticate before subscribing */
  requiresAuth?: boolean;
  /** Number of messages to collect before resolving (default 1) */
  messageCount?: number;
  /** Max wait time in ms before resolving with whatever was collected (default 5000) */
  timeoutMs?: number;
}

// Env vars are read at call time so they can be set after module load.
function getCredentials() {
  return { apiKey: process.env.BYBIT_API_KEY };
}

export class WsClient {
  /**
   * Opens a WebSocket, subscribes to `topic`, collects `messageCount` messages
   * (or waits `timeoutMs` ms), then closes and returns the collected data.
   *
   * For authenticated channels, waits for the auth acknowledgement before
   * sending the subscribe, per Bybit's private WS protocol.
   */
  snapshot(opts: SnapshotOptions): Promise<unknown[]> {
    const {
      category,
      topic,
      requiresAuth = false,
      messageCount = 1,
      timeoutMs = 5000,
    } = opts;

    return new Promise((resolve, reject) => {
      const urls = process.env.BYBIT_TESTNET === 'true' ? WS_TESTNET : WS_MAINNET;
      const url = urls[category];
      const ws = new WebSocket(url, { headers: commonHeaders() });
      const messages: unknown[] = [];
      let settled = false;
      let timer: ReturnType<typeof setTimeout>;

      const done = () => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        ws.close();
        resolve(messages);
      };

      const fail = (err: Error) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        ws.close();
        reject(err);
      };

      ws.on('open', () => {
        timer = setTimeout(done, timeoutMs);

        if (requiresAuth) {
          const { apiKey } = getCredentials();
          if (!apiKey) {
            fail(new Error('BYBIT_API_KEY must be set for private channels.'));
            return;
          }
          let signConfig;
          try {
            signConfig = resolveSignConfig();
          } catch (e) {
            fail(e instanceof Error ? e : new Error(String(e)));
            return;
          }
          const expires = Date.now() + 5000;
          const rawStr = `GET/realtime${expires}`;
          const sig = signConfig.type === 'rsa'
            ? signRsa(rawStr, signConfig.privateKey)
            : signHmac(rawStr, signConfig.secret);
          // Send auth; subscribe will be sent after the auth ack arrives (see message handler).
          ws.send(JSON.stringify({ op: 'auth', args: [apiKey, expires, sig] }));
        } else {
          ws.send(JSON.stringify({ op: 'subscribe', args: [topic] }));
        }
      });

      ws.on('message', (raw) => {
        let msg: unknown;
        try {
          msg = JSON.parse(raw.toString());
        } catch {
          return;
        }

        if (typeof msg !== 'object' || msg === null) return;
        const m = msg as Record<string, unknown>;

        // For authenticated channels: wait for successful auth ack, then subscribe.
        if (requiresAuth && m['op'] === 'auth') {
          if (m['success'] === true) {
            ws.send(JSON.stringify({ op: 'subscribe', args: [topic] }));
          } else {
            fail(new Error(`WebSocket auth failed: ${JSON.stringify(m)}`));
          }
          return;
        }

        // Collect data messages (skip op responses like pong, subscribe confirmations).
        if ('topic' in m) {
          messages.push(m);
          if (messages.length >= messageCount) done();
        }
      });

      ws.on('error', (err) => {
        fail(err);
      });

      ws.on('close', () => {
        done();
      });
    });
  }
}

export const wsClient = new WsClient();
