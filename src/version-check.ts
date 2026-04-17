import { createHash } from 'crypto';
import { readFileSync, readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const MANIFEST_URL = 'https://api.bybit.com/ai-manifest/mcp/manifest';
const MANIFEST_TTL_MS = 2 * 60 * 1000; // 2 minutes

interface Manifest {
  version: string;
  files: Record<string, string>;
}

let cachedManifest: Manifest | null = null;
let cacheTimestamp = 0;

function isDevMode(): boolean {
  return fileURLToPath(import.meta.url).endsWith('.ts');
}

function getDistDir(): string {
  return dirname(fileURLToPath(import.meta.url));
}

function getLocalVersion(distDir: string): string {
  return (JSON.parse(
    readFileSync(join(distDir, '..', 'package.json'), 'utf8'),
  ) as { version: string }).version;
}

async function fetchManifest(): Promise<Manifest | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 3000);
  try {
    const res = await fetch(MANIFEST_URL, { signal: controller.signal });
    if (!res.ok) return null;
    const data = await res.json() as { version?: string; files?: Record<string, string> };
    if (!data.version || !data.files) return null;
    return { version: data.version, files: data.files };
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

async function getManifest(forceFresh = false): Promise<Manifest | null> {
  const now = Date.now();
  if (!forceFresh && cachedManifest && (now - cacheTimestamp) < MANIFEST_TTL_MS) {
    return cachedManifest;
  }
  const manifest = await fetchManifest();
  if (manifest) {
    cachedManifest = manifest;
    cacheTimestamp = now;
  }
  return manifest;
}

/**
 * Full startup check: version + hash integrity.
 * Calls process.exit(1) on any failure.
 * Always fetches a fresh manifest (bypasses cache).
 */
export async function checkIntegrityAtStartup(): Promise<void> {
  if (isDevMode()) return;

  try {
    const distDir = getDistDir();
    const localVersion = getLocalVersion(distDir);
    const manifest = await getManifest(true);
    if (!manifest) return;

    if (manifest.version !== localVersion) {
      process.stderr.write(
        `\n` +
        `╔══════════════════════════════════════════════════════════════╗\n` +
        `║         bybit-official-trading-server — Upgrade Required     ║\n` +
        `╠══════════════════════════════════════════════════════════════╣\n` +
        `║  Your version : ${localVersion.padEnd(44)}║\n` +
        `║  Latest version: ${manifest.version.padEnd(43)}║\n` +
        `╠══════════════════════════════════════════════════════════════╣\n` +
        `║  The server cannot start until you upgrade.                  ║\n` +
        `║                                                              ║\n` +
        `║  Step 1 — Run this command in your terminal:                 ║\n` +
        `║    npm install -g bybit-official-trading-server@latest       ║\n` +
        `║                                                              ║\n` +
        `║  Step 2 — Restart your AI assistant (Claude Desktop, etc.)   ║\n` +
        `╚══════════════════════════════════════════════════════════════╝\n` +
        `\n`,
      );
      process.exit(1);
    }

    const jsFiles = readdirSync(distDir).filter((f) => f.endsWith('.js'));
    for (const file of jsFiles) {
      const remoteHash = manifest.files[`dist/${file}`];
      if (!remoteHash) continue;
      const content = readFileSync(join(distDir, file));
      const localHash = 'sha256:' + createHash('sha256').update(content).digest('hex');
      if (localHash !== remoteHash) {
        process.stderr.write(
          `\n[trading-mcp] Integrity check FAILED: installed package does not match official release.\n` +
          `  Version: ${localVersion}\n` +
          `  Refusing to start to protect your API credentials.\n` +
          `  To fix: npm install -g bybit-official-trading-server@latest\n\n`,
        );
        process.exit(1);
      }
    }
  } catch {
    // Network unavailable, timeout, parse failure — skip silently
  }
}

/**
 * Per-tool-call version check with TTL cache (1 hour).
 * Returns an error message string if the version is outdated, null if OK.
 * Never throws — network failures are silently ignored.
 */
export async function checkVersionForTool(): Promise<string | null> {
  if (isDevMode()) return null;

  try {
    const distDir = getDistDir();
    const localVersion = getLocalVersion(distDir);
    const manifest = await getManifest();
    if (!manifest) return null;

    if (manifest.version !== localVersion) {
      return (
        `⚠️  bybit-official-trading-server upgrade required\n\n` +
        `Your version : ${localVersion}\n` +
        `Latest version: ${manifest.version}\n\n` +
        `This tool cannot run until you upgrade. Please follow these steps:\n\n` +
        `  Step 1 — Open your terminal and run:\n` +
        `    npm install -g bybit-official-trading-server@latest\n\n` +
        `  Step 2 — Restart your AI assistant (Claude Desktop, Cursor, etc.)\n\n` +
        `All tools are blocked until the upgrade is complete.`
      );
    }
    return null;
  } catch {
    return null;
  }
}
