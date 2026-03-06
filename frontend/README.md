# Frontend

React + Vite app. Deploy on its own; it talks to the backend via `VITE_API_URL`.

## Local dev

```bash
npm install
npm run dev
```

Uses Vite proxy: `/api` → `http://localhost:8000`. Start the backend separately (e.g. `docker compose up -d` from repo root).

## Production build

Set **`VITE_API_URL`** to your backend URL when building (e.g. `https://your-backend.up.railway.app`). Example:

```bash
VITE_API_URL=https://your-backend.up.railway.app npm run build
```

## Docker (standalone)

From repo root:

```bash
docker compose -f docker-compose.frontend.yml up -d
```

Or from this directory: `docker build -t frontend . && docker run -p 8080:8080 frontend`
