# Agency2

Full-stack app: **frontend** (React/Vite), **backend** (FastAPI), **database** (PostgreSQL). Each can be deployed on its own.

## Structure

| Folder / file | Deploy on its own |
|---------------|-------------------|
| **frontend/** | React app. Build with `VITE_API_URL` set to your backend URL when API is on another host. |
| **backend/**  | FastAPI app. Set `DATABASE_URL` to your Postgres (managed or database service). |
| **database/** | PostgreSQL. Run via compose or use Railway Postgres / Supabase / Neon and give its URL to the backend. |

## Deploy each service independently

### 1. Database

- **Option A — Docker (e.g. same host):**
  ```bash
  docker compose -f docker-compose.database.yml up -d
  ```
  Then use `DATABASE_URL=postgresql://postgres:postgres@<host>:5432/appdb` for the backend.

- **Option B — Managed Postgres (Railway, Supabase, Neon):**  
  Create a database, copy its connection URL, and set `DATABASE_URL` in the backend.

### 2. Backend

- Set **`DATABASE_URL`** to your database (from step 1).
- Build and run from **repo root** (so `backend/` is available):
  - **Docker:**  
    `docker compose -f docker-compose.backend.yml up -d`  
    (or build with `docker build -f backend/Dockerfile .` and run with `DATABASE_URL` set)
  - **Railway / Render / etc.:**  
    Use repo root, set build to `backend/Dockerfile` and root directory to `.`, and set `DATABASE_URL`.

### 3. Frontend

- Set **`VITE_API_URL`** at **build time** to your backend URL (e.g. `https://your-backend.up.railway.app`) if the API is on another host.
- **Docker (standalone):**
  ```bash
  docker compose -f docker-compose.frontend.yml up -d
  ```
  Build from `frontend/` (context `./frontend`, dockerfile `Dockerfile`).
- **Railway / Vercel / etc.:**  
  Use **root directory** `frontend/`, build command `npm run build`, and set `VITE_API_URL` in the build environment.

## Local development (all three together)

```bash
# Start database and backend
docker compose up -d

# Start frontend dev server (proxies /api to backend)
cd frontend && npm install && npm run dev
```

Then open http://localhost:5173. Backend: http://localhost:8000. Postgres: localhost:5432.

## Compose files

| File | Purpose |
|------|---------|
| `docker-compose.yml` | Database + backend (local dev). |
| `docker-compose.database.yml` | Database only. |
| `docker-compose.backend.yml` | Backend only (needs `DATABASE_URL`). |
| `docker-compose.frontend.yml` | Frontend only (static build + Caddy). |
