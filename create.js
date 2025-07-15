#!/usr/bin/env node
import { execSync, spawnSync } from 'node:child_process';
import { cpSync, renameSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// ESM‑safe __dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

const [, , appName = 'my-app'] = process.argv;

console.log(`\n✨  Creating ${appName} from Vercel TS + Pass template…`);

/* ------------------------------------------------------------------ */
/* Copy template files                                                */
/* ------------------------------------------------------------------ */
cpSync(join(__dirname, 'template'), appName, { recursive: true });

/* Rename gitignore -> .gitignore (kept out of npm) */
const gitignore = join(appName, 'gitignore');
if (existsSync(gitignore)) renameSync(gitignore, join(appName, '.gitignore'));

/* ------------------------------------------------------------------ */
/* Install dependencies (tries pnpm ➜ yarn ➜ npm)                     */
/* ------------------------------------------------------------------ */
process.chdir(appName);
const tryRun = cmd => {
  try { execSync(cmd, { stdio: 'inherit' }); return true; }
  catch { return false; }
};

const has = bin => spawnSync('command', ['-v', bin]).status === 0;

if (has('pnpm') && tryRun('pnpm install')) { /* done */ }
else if (has('yarn') && tryRun('yarn install --ignore-engines')) { /* done */ }
else tryRun('npm install --legacy-peer-deps');

/* ------------------------------------------------------------------ */
/* Init shadcn/ui + example button                                    */
/* ------------------------------------------------------------------ */
execSync('npx shadcn@latest init -y', { stdio: 'inherit' });
execSync('npx shadcn add button', { stdio: 'inherit' });

console.log(`
✅  Done!

Next steps:
  cd ${appName}
  pnpm dev   # or yarn dev / npm run dev
`);
