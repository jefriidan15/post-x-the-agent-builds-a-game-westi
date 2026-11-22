// main.ts — entrypoint for post-x-the-agent-builds-a-game-from-20261122-1709.
// It copies POST.json (the X post's address) into the output directory,
// byte for byte, so the house can read the post and its counts.
// Node 22, standard library only. Run it as:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ?? (process.env.MAKEFUN_BOT_DIR
    ? join(process.env.MAKEFUN_BOT_DIR, 'out')
    : join(repoDir, 'out'));

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoDir, 'POST.json'), join(outputDir, 'POST.json'));
