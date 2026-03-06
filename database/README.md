# Database

PostgreSQL for the app. Deploy on its own or use a managed Postgres (Railway, Supabase, Neon, etc.) and set `DATABASE_URL` in the backend.

## Run with Docker Compose (standalone)

From repo root:

```bash
docker compose -f docker-compose.database.yml up -d
```

Then set `DATABASE_URL=postgresql://postgres:postgres@localhost:5432/appdb` (or your host) in the backend.

## Run the image only

```bash
docker build -f database/Dockerfile -t appdb .
docker run -p 5432:5432 -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=appdb appdb
```
