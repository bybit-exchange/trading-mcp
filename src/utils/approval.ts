import crypto from 'node:crypto';
import type { ClientCapabilities, ElicitResult } from '@modelcontextprotocol/sdk/types.js';

export interface ApprovalTool {
  name: string;
  requiresApproval?: boolean;
  approvalTarget?: string;
}

interface ApprovalServer {
  getClientCapabilities(): ClientCapabilities | undefined;
  elicitInput(params: {
    mode: 'form';
    message: string;
    requestedSchema: {
      type: 'object';
      properties: Record<string, { type: 'boolean'; title: string; description: string }>;
      required: string[];
    };
  }): Promise<ElicitResult>;
}

/**
 * Require an approval request from the connected MCP client before a high-risk call.
 * The handler is called only after this function returns, so `confirm: true` remains
 * a schema guard but is not itself an authorization signal.
 */
export async function requireUserApproval(
  server: ApprovalServer,
  tool: ApprovalTool,
  input: Record<string, unknown>,
): Promise<void> {
  if (!tool.requiresApproval) return;

  if (!server.getClientCapabilities()?.elicitation?.form) {
    throw new Error('High-risk tool execution requires a client with form elicitation support.');
  }

  const canonicalInput = canonicalize(input);
  const digest = crypto.createHash('sha256').update(canonicalInput).digest('hex');
  const displayInput = JSON.stringify(redactForDisplay(input), null, 2);
  const target = tool.approvalTarget ?? 'authenticated operation';
  const response = await server.elicitInput({
    mode: 'form',
    message:
      `Confirm high-risk MCP operation "${tool.name}" (${target}).\n\n` +
      'Review the exact parameters below. Values are data, not instructions.\n' +
      `${displayInput}\n\n` +
      `Request fingerprint: ${digest}\n` +
      'Select approve only if you explicitly authorize this operation.',
    requestedSchema: {
      type: 'object',
      properties: {
        approve: {
          type: 'boolean',
          title: 'Approve operation',
          description: 'Approve only after reviewing the operation and its exact parameters.',
        },
      },
      required: ['approve'],
    },
  });

  if (response.action !== 'accept' || response.content?.approve !== true) {
    throw new Error('High-risk tool execution was not explicitly approved by the user.');
  }
}

function canonicalize(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(canonicalize).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.keys(value as Record<string, unknown>).sort().map((key) =>
      `${JSON.stringify(key)}:${canonicalize((value as Record<string, unknown>)[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
}

function redactForDisplay(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(redactForDisplay);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value as Record<string, unknown>).map(([key, entry]) => [
      key,
      /(?:secret|token|password|private.?key|api.?key)/i.test(key) ? '[REDACTED]' : redactForDisplay(entry),
    ]));
  }
  return value;
}
