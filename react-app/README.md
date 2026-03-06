# React sample app (Railway-ready)

A minimal Vite + React app configured for deployment on [Railway](https://railway.app).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deploy to Railway

### Option 1: Railway CLI

1. Install the [Railway CLI](https://docs.railway.app/guides/cli) and log in.
2. From this directory:

   ```bash
   railway init
   railway up
   ```

3. In the Railway dashboard, open your service → **Settings** → **Networking** → **Generate Domain**.

### Option 2: Deploy from GitHub

1. Push this app to a GitHub repository.
2. Go to [railway.app/new](https://railway.app/new) and choose **Deploy from GitHub repo**.
3. Select the repo and (if needed) set the **Root Directory** to `react-app`.
4. After deploy, go to **Settings** → **Networking** → **Generate Domain**.

### Option 3: One-click template

Use [Railway’s React template](https://railway.com/templates/react) and then replace or merge in this app’s code and config.

## How it’s set up for Railway

- **Dockerfile**: Builds the app with Node and serves the built files with [Caddy](https://caddyserver.com/) (no dev server in production).
- **Caddyfile**: Serves the `dist` output on `$PORT`, with SPA fallback so client-side routes work.
- **.dockerignore**: Keeps `node_modules` and `dist` out of the image for faster builds.

## Scripts

| Command     | Description                |
| ----------- | -------------------------- |
| `npm run dev`   | Start Vite dev server      |
| `npm run build` | Build for production       |
| `npm run preview` | Preview production build locally |
