import WebSocket from 'ws';
import crypto from 'crypto';
import { resolveSignConfig, signHmac, signRsa } from '../utils/auth.js';
import { commonHeaders } from '../version.js';
import type { WsCategory } from './ws-client.js';

const WS_MAINNET: Record<WsCategory, string> = {
  linear:  'wss://stream.bybit.com/v5/public/linear',
  spot:    'wss://stream.bybit.com/v5/public/spot',
  inverse: 'wss://stream.bybit.com/v5/public/inverse',
  option:  'wss://stream.bybit.com/v5/public/option',
  private: 'wss://stream.bybit.com/v5/private',
  spread:  'wss://stream.bybit.com/v5/public/spread',
  misc:    'wss://stream.bybit.com/v5/public/misc/status',
};

const WS_TESTNET: Record<WsCategory, string> = {
  linear:  'wss://stream-testnet.bybit.com/v5/public/linear',
  spot:    'wss://stream-testnet.bybit.com/v5/public/spot',
  inverse: 'wss://stream-testnet.bybit.com/v5/public/inverse',
  option:  'wss://stream-testnet.bybit.com/v5/public/option',
  private: 'wss://stream-testnet.bybit.com/v5/private',
  spread:  'wss://stream-testnet.bybit.com/v5/public/spread',
  misc:    'wss://stream-testnet.bybit.com/v5/public/misc/status',
};

const MAX_MESSAGES = 500;
const IDLE_EXPIRE_MS = 5 * 60 * 1000;
const MAX_RECONNECT_ATTEMPTS = 3;
const RECONNECT_BASE_MS = 1000;

interface Subscription {
  id: string;
  ws: WebSocket | null;
  topic: string;
  category: WsCategory;
  requiresAuth: boolean;
  messages: unknown[];
  maxMessages: number;
  lastReadAt: number;
  createdAt: number;
  status: 'connecting' | 'active' | 'reconnecting' | 'closed';
  reconnectAttempts: number;
}

export interface StartOptions {
  category: WsCategory;
  topic: string;
  requiresAuth?: boolean;
  maxMessages?: number;
}

export interface ReadResult {
  subscriptionId: string;
  status: Subscription['status'];
  messageCount: number;
  messages: unknown[];
}

export class SubscriptionManager {
  private subs = new Map<string, Subscription>();
  private timer: ReturnType<typeof setInterval>;

  constructor() {
    this.timer = setInterval(() => this.expireIdle(), 60_000);
    if (typeof this.timer.unref === 'function') this.timer.unref();
  }

  start(opts: StartOptions): string {
    const id = `sub_${crypto.randomUUID().slice(0, 8)}`;
    const sub: Subscription = {
      id,
      ws: null,
      topic: opts.topic,
      category: opts.category,
      requiresAuth: opts.requiresAuth ?? false,
      messages: [],
      maxMessages: opts.maxMessages ?? MAX_MESSAGES,
      lastReadAt: Date.now(),
      createdAt: Date.now(),
      status: 'connecting',
      reconnectAttempts: 0,
    };
    this.subs.set(id, sub);
    this.openWebSocket(sub);
    return id;
  }

  read(id: string, limit?: number, clearAfterRead = true): ReadResult {
    const sub = this.subs.get(id);
    if (!sub) throw new Error(`Subscription not found: ${id}`);
    sub.lastReadAt = Date.now();
    const slice = limit ? sub.messages.slice(-limit) : [...sub.messages];
    if (clearAfterRead) sub.messages = [];
    return {
      subscriptionId: id,
      status: sub.status,
      messageCount: slice.length,
      messages: slice,
    };
  }

  stop(id: string): void {
    const sub = this.subs.get(id);
    if (!sub) return;
    sub.status = 'closed';
    try { sub.ws?.close(); } catch { /* already closed */ }
    this.subs.delete(id);
  }

  list(): Array<{ id: string; topic: string; status: string; buffered: number }> {
    return [...this.subs.values()].map((s) => ({
      id: s.id,
      topic: s.topic,
      status: s.status,
      buffered: s.messages.length,
    }));
  }

  private expireIdle(): void {
    const now = Date.now();
    for (const [id, sub] of this.subs) {
      if (now - sub.lastReadAt > IDLE_EXPIRE_MS) {
        console.error(`[subscription:${id}] idle expired`);
        sub.status = 'closed';
        try { sub.ws?.close(); } catch { /* already closed */ }
        this.subs.delete(id);
      }
    }
  }

  private openWebSocket(sub: Subscription): void {
    const urls = process.env.BYBIT_TESTNET === 'true' ? WS_TESTNET : WS_MAINNET;
    const ws = new WebSocket(urls[sub.category], { headers: commonHeaders() });
    sub.ws = ws;
    sub.status = 'connecting';

    ws.on('open', () => {
      if (sub.requiresAuth) {
        this.authenticate(
          ws,
          sub.topic,
          () => {
            sub.status = 'active';
            sub.reconnectAttempts = 0;
            ws.send(JSON.stringify({ op: 'subscribe', args: [sub.topic] }));
          },
          (err) => {
            console.error(`[subscription:${sub.id}] auth failed:`, err.message);
            sub.status = 'closed';
            ws.close();
          },
        );
      } else {
        sub.status = 'active';
        sub.reconnectAttempts = 0;
        ws.send(JSON.stringify({ op: 'subscribe', args: [sub.topic] }));
      }
    });

    ws.on('message', (raw) => {
      let msg: unknown;
      try { msg = JSON.parse(raw.toString()); } catch { return; }
      if (typeof msg !== 'object' || msg === null) return;
      const m = msg as Record<string, unknown>;

      if (sub.requiresAuth && m['op'] === 'auth') return;

      if ('topic' in m) {
        sub.messages.push(m);
        if (sub.messages.length > sub.maxMessages) {
          sub.messages.splice(0, sub.messages.length - sub.maxMessages);
        }
      }
    });

    ws.on('close', () => {
      if (sub.status === 'closed') return;
      this.scheduleReconnect(sub);
    });

    ws.on('error', (err) => {
      console.error(`[subscription:${sub.id}] ws error:`, err.message);
    });
  }

  private authenticate(
    ws: WebSocket,
    topic: string,
    onAuth: () => void,
    onFail: (e: Error) => void,
  ): void {
    const apiKey = process.env.BYBIT_API_KEY;
    if (!apiKey) { onFail(new Error('BYBIT_API_KEY not set')); return; }

    let signConfig;
    try { signConfig = resolveSignConfig(); } catch (e) {
      onFail(e instanceof Error ? e : new Error(String(e))); return;
    }

    const expires = Date.now() + 5000;
    const rawStr = `GET/realtime${expires}`;
    const sig = signConfig.type === 'rsa'
      ? signRsa(rawStr, signConfig.privateKey)
      : signHmac(rawStr, signConfig.secret);

    ws.send(JSON.stringify({ op: 'auth', args: [apiKey, expires, sig] }));

    const authTimer = setTimeout(() => {
      ws.off('message', onMessage);
      onFail(new Error('Auth timeout after 5s'));
    }, 5000);

    const onMessage = (raw: Buffer) => {
      let m: Record<string, unknown>;
      try { m = JSON.parse(raw.toString()); } catch { return; }
      if (m['op'] !== 'auth') return;
      clearTimeout(authTimer);
      ws.off('message', onMessage);
      if (m['success'] === true) { onAuth(); }
      else { onFail(new Error(`Auth failed: ${JSON.stringify(m)}`)); }
    };
    ws.on('message', onMessage);
  }

  private scheduleReconnect(sub: Subscription): void {
    if (sub.reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) {
      console.error(`[subscription:${sub.id}] max reconnect attempts reached, closing`);
      sub.status = 'closed';
      try { sub.ws?.close(); } catch { /* already closed */ }
      this.subs.delete(sub.id);
      return;
    }
    sub.status = 'reconnecting';
    const delay = RECONNECT_BASE_MS * Math.pow(2, sub.reconnectAttempts);
    sub.reconnectAttempts++;
    console.error(`[subscription:${sub.id}] reconnecting in ${delay}ms (attempt ${sub.reconnectAttempts})`);
    setTimeout(() => {
      if (!this.subs.has(sub.id)) return;
      this.openWebSocket(sub);
    }, delay);
  }
}

export const subscriptionManager = new SubscriptionManager();
