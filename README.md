# Vercel TS + Pass Template

**Instant‑start Starter Kit for Next.js 14**

Scaffold a production‑ready app with:

- **Next.js 14 + TypeScript** – App Router, ISR, edge‑ready  
- **Tailwind CSS** – pre‑configured (no additional setup)  
- **shadcn/ui** – run `npx shadcn add …` to drop in components  
- **Futureverse Pass Authentication** – sign‑in modal & wagmi config out of the box  
- **Vercel** – push → auto‑deploy (`vercel.json` included)  
- **CI** – GitHub Actions lint + build on every PR

```bash
npx github:<your‑gh‑user>/vercel-ts-pass-template my-app
cd my-app
npm run dev            # or pnpm / yarn
```

---

## ✨ Features

| Area | What you get |
|------|--------------|
| **Auth** | `@futureverse/auth-react` & `@futureverse/auth-ui` set up with wagmi + React Query |
| **Styling** | Tailwind 3.4 with dark‑mode class, `tailwindcss-animate`, global CSS ready |
| **Components** | `shadcn/ui` CLI compatible – add a component when you need it |
| **Toolchain** | TypeScript 5, ESM, Prettier 3, ESLint (Next config) |
| **CI** | GitHub Actions (`ci.yml`) – lint & build must pass before merge |
| **Deployment** | `vercel.json` pins `next build` so any Vercel project just works |

---

## 🏎️ Quick start

```bash
# 1. Scaffold
npx github:<your‑gh‑user>/vercel-ts-pass-template my-app
cd my-app

# 2. Configure env
cp env.example .env.local
# fill in NEXT_PUBLIC_FUTUREVERSE_CLIENT_ID, NEXT_PUBLIC_WC_PROJECT_ID, NEXT_PUBLIC_XAMAN_API_KEY

# 3. Dev
npm run dev
```

Open `http://localhost:3000` → click **“Sign in with Pass”** to see the auth flow.

---

## 🛠️ Project structure

```
.
├─ create.js               # scaffolder invoked by npx (not copied)
├─ template/               # everything below is copied to your new app
│  ├─ package.json
│  ├─ next.config.js
│  ├─ tailwind.config.ts
│  ├─ tsconfig.json
│  ├─ vercel.json
│  ├─ env.example
│  ├─ public/favicon.svg
│  ├─ src/
│  │   ├─ pages/_app.tsx   # PassAuth + providers wired here
│  │   ├─ pages/index.tsx  # demo page
│  │   └─ styles/globals.css
│  ├─ components/
│  │   └─ LoginButton.tsx  # example Pass sign‑in/out button
│  └─ .github/workflows/ci.yml
```

---

## 🔑 Environment variables

| Key | Where to get it |
|-----|-----------------|
| `NEXT_PUBLIC_FUTUREVERSE_CLIENT_ID` | Pass dashboard |
| `NEXT_PUBLIC_WC_PROJECT_ID` | walletconnect.com |
| `NEXT_PUBLIC_XAMAN_API_KEY` | Xaman API portal |

Put them in **`.env.local`** (not committed).

---

## 🚀 Deploy to Vercel

1. Push your repo to GitHub.  
2. In Vercel, **Add New → Project** → select the repo.  
3. Add the three env vars in **Settings → Environment Variables**.  
4. Click **Deploy**. Every push to `main` autodeploys.

---

## 🎨 Using shadcn/ui

```bash
npx shadcn@latest init      # if you skipped auto‑init
npx shadcn add button       # or accordion, card, etc.
```

Components are added under `components/ui/*` and already pick up Tailwind tokens.

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on <http://localhost:3000> |
| `npm run build` | Production build (`.next`) |
| `npm start` | Start prod server |
| `npm run lint` | ESLint with Next rules |

---

## 🧩 Customising

- **Upgrade deps** – bump versions in `package.json` as desired.  
- **Add tests** – integrate Jest, Playwright, etc.  
- **Edge functions** – move an API route to `export const runtime = 'edge'`.  
- **Docker** – add a `Dockerfile` if you prefer container deploys.

---

## 🗒️ License

MIT © 2025 Your Name
