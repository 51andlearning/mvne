# Deployment

## GitHub Setup

1. Create a new repo on GitHub (e.g., `centurion-mvno-proposal`)
2. From the project root:
   ```bash
   git init
   git add .
   git commit -m "Initial build: centurion-mvno-proposal"
   git remote add origin https://github.com/<org>/centurion-mvno-proposal.git
   git push -u origin main
   ```

## Vercel Project Setup

1. Go to vercel.com → Add New Project
2. Import the GitHub repo
3. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** `.` (project root — leave blank)
   - **Build Command:** `npm run build`
   - **Output Directory:** leave blank (Next.js default)
   - **Install Command:** `npm install`

## Root Directory Rules

- Do NOT set root directory to a subdirectory unless the repo is a monorepo.
- The `package.json` and `next.config.ts` must be at the root Vercel sees.

## Environment Variables

| Variable | Where set | Purpose |
|----------|-----------|---------|
| `NEXT_PUBLIC_GA_ID` | Vercel dashboard → Environment Variables | Google Analytics ID (optional) |
| `NEXT_PUBLIC_SITE_URL` | Vercel dashboard | Canonical URL for OG tags |

- Never commit `.env.local` to git.
- Add `.env.local` to `.gitignore` (Next.js does this by default).

## How to Redeploy

- **Auto:** Every push to `main` triggers a Vercel deployment automatically.
- **Manual:** Vercel dashboard → Deployments → Redeploy.
- **Preview:** Every PR branch gets a unique preview URL from Vercel.

## Build Command Reference

```bash
npm run dev      # Local development (http://localhost:3000)
npm run build    # Production build (check for TS/lint errors)
npm run start    # Serve production build locally
npm run lint     # ESLint check
```
