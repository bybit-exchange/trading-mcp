import { checkIntegrityAtStartup } from './version-check.js';
import { startServer } from './server.js';

await checkIntegrityAtStartup();

startServer().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
