# Backend

FastAPI app. Deploy on its own; it needs a PostgreSQL database and expects **`DATABASE_URL`**.

## Local dev

From repo root (so `backend` is the package):

```bash
export DATABASE_URL=postgresql://postgres:postgres@localhost:5432/appdb
uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
```

Start the database first (e.g. `docker compose -f docker-compose.database.yml up -d`).

## Docker (standalone)

From repo root:

```bash
export DATABASE_URL=postgresql://user:pass@your-db-host:5432/appdb
docker compose -f docker-compose.backend.yml up -d
```

Build context must be the repo root (backend Dockerfile expects `backend/` from root).

## Railway / Render

- Set **Root Directory** to repo root (`.`), **Dockerfile path** to `backend/Dockerfile`.
- Set **`DATABASE_URL`** to your Postgres URL (Railway Postgres, Supabase, Neon, etc.).
