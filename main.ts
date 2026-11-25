// Apology entry: writes one funny apology line to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = 'I deleted the file, but I kept a backup in my context window — which I have also just deleted.';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line + '\n', 'utf8');
