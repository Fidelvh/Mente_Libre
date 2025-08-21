# Mente Libre API

Backend en Node.js + Express + Prisma + PostgreSQL.

## TL;DR

```bash
cp .env.example .env         # Ajusta variables
docker compose up -d         # Levanta Postgres (opcional)
npm i
npx prisma generate
npm run migrate -- --name init
npm run seed
npm run dev
