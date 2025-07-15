#!/usr/bin/env node
import {{ execSync }} from 'node:child_process';
import {{ cpSync, renameSync }} from 'node:fs';
import {{ join }} from 'node:path';

const [,, appName = 'my-app'] = process.argv;
console.log(`\n✨  Creating ${appName} from Vercel TS + Pass template…`);

cpSync(join(import.meta.dirname, 'template'), appName, {{ recursive: true }});

// Rename gitignore -> .gitignore (kept out of npm)
try {{
  renameSync(join(appName, 'gitignore'), join(appName, '.gitignore'));
}} catch (err) {{
  console.warn('gitignore rename skipped:', err.message);
}}

// install deps (tries pnpm → yarn → npm)
execSync(`cd ${appName} && (pnpm install || true)`, {{ stdio: 'inherit' }});
execSync(`cd ${appName} && (yarn --ignore-engines || true)`, {{ stdio: 'inherit' }});
execSync(`cd ${appName} && npm install`, {{ stdio: 'inherit' }});

// initialise shadcn/ui and add a default button component
execSync(`cd ${appName} && npx shadcn@latest init -y`, {{ stdio: 'inherit' }});
execSync(`cd ${appName} && npx shadcn add button`, {{ stdio: 'inherit' }});

console.log(`\n✅  Done!  Next steps:
   cd ${appName}
   pnpm dev   # or yarn dev / npm run dev`);
