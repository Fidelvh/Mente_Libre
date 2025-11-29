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

psql -h localhost -U filo -d mente_libre


ALTER USER filo WITH PASSWORD 'MenteLibre2025';
SELECT "id", "email", LEFT("passwordHash", 25) || '...' AS hash_preview FROM "User";
SELECT "id", "email" FROM "User";


git checkout main
git merge dev
git push

git branch

