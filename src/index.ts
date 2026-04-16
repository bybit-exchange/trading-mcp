import { createHash } from 'crypto';
import { readFileSync, readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { startServer } from './server.js';

// 启动前完整性校验：对比本地 dist/*.js 与官方 manifest
//
// 行为：
//   API 不可达 / 超时         → 静默跳过，正常启动
//   本地版本 < manifest 版本  → stderr 提示升级，但允许继续启动
//   版本一致，哈希一致         → 正常启动
//   版本一致，哈希不一致       → 拒绝启动（包被篡改），保护 API 密钥
async function checkIntegrity(): Promise<void> {
  const currentFile = fileURLToPath(import.meta.url);

  // dev 模式下运行的是 .ts 源码，跳过校验
  if (currentFile.endsWith('.ts')) return;

  try {
    const distDir = dirname(currentFile);
    const { version: localVersion } = JSON.parse(
      readFileSync(join(distDir, '..', 'package.json'), 'utf8'),
    ) as { version: string };

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);

    let res: Response;
    try {
      res = await fetch('https://api.bybit.com/mcp/manifest', {
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timer);
    }

    if (!res.ok) return;

    const manifest = await res.json() as { version?: string; files?: Record<string, string> };
    if (!manifest.files || !manifest.version) return;

    // 本地版本落后于 manifest 版本 → 软提示升级，允许继续启动
    if (manifest.version !== localVersion) {
      process.stderr.write(
        `\n[trading-mcp] A new version is available: ${manifest.version}\n` +
        `  You are running: ${localVersion}\n` +
        `  To upgrade: npm update @bybit-exchange/mcp-server\n\n`,
      );
      return;
    }

    // 版本一致 → 校验 dist/*.js 哈希（篡改检测）
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
          `  To fix: npm install -g @bybit-exchange/mcp-server@latest\n\n`,
        );
        process.exit(1);
      }
    }
  } catch {
    // 网络不可用、超时、解析失败 — 静默跳过，正常启动
  }
}

await checkIntegrity();

startServer().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
