# Mente Libre API

Backend en Node.js + Express + Prisma + PostgreSQL.

## TL;DR

```bash
cp .env.example .env         # Ajusta variables
docker compose up -d         # Levanta Postgres (opcional)
npm i
npx prisma generate
npm run migrate -- --name init
npx prisma studio
npm run seed
npm run dev

brew services stop postgresql@15
brew services start postgresql@15
brew services restart postgresql@15

ALTER USER filo WITH PASSWORD 'MenteLibre2025';