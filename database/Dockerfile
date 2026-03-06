# Standalone PostgreSQL for the app. Deploy this service alone, or use a managed Postgres (Railway, Supabase, Neon) and set DATABASE_URL in the backend.
FROM postgres:16-alpine

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=appdb

EXPOSE 5432
