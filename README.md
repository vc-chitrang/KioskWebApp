# KioskWebApp

A fullstack Hello World app with React (Vite) frontend and Node.js + Express backend.

## Architecture

```
Browser
  └── visits Vercel URL
        └── loads React app (HTML + JS)
              └── React calls fetch() to Render backend
                    └── Express returns JSON { message: "Hello from the Backend!" }
                          └── React displays it on screen
```

## Local Development

**Terminal 1 — Backend:**
```bash
cd backend
npm install
npm start
```

**Terminal 2 — Frontend:**
```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

## Deployment

| Service | Platform | URL |
|---|---|---|
| Frontend | Vercel | Set `VITE_API_URL` env var to your Render URL |
| Backend | Render | Root directory: `backend`, Start: `npm start` |

## CI/CD

GitHub Actions auto-deploys on every push to `main`:
- Changes in `backend/**` → triggers Render deploy hook
- Changes in `frontend/**` → builds and deploys to Vercel

### Required GitHub Secrets

| Secret | Description |
|---|---|
| `RENDER_DEPLOY_HOOK_URL` | From Render → Settings → Deploy Hook |
| `VERCEL_TOKEN` | From Vercel → Settings → Tokens |
| `VERCEL_ORG_ID` | From `.vercel/project.json` after `vercel link` |
| `VERCEL_PROJECT_ID` | From `.vercel/project.json` after `vercel link` |
