# Mente Libre API

Backend en Node.js + Express + Prisma + PostgreSQL.

## TL;DR




```bash
cp .env.example .env 
open -a Docker               # Abrir Docer Desktop
docker ps                    # contenedores en uso
docker-compose up -d         # Levanta Postgres (opcional)
docker-compose up --build    # Modo "real/produccion"
docker-compose down          # Bajo Servidores docker.
osascript -e 'quit app "Docker Desktop"' # Cierra Docker Desktop
docker-compose down -v       # Bajo Postgres, limpia volumenes y borra base de datos
npm i
npx prisma generate
npx prisma migrate dev --name add_notes #se le agrega las notas de la migracion
npm run migrate -- --name init
npx prisma studio
npm run seed
npm run dev
npm audit fix

# de forma local, pero levantamos docker
brew services stop postgresql@15
brew services start postgresql@15
brew services restart postgresql@15
brew services list


psql -h localhost -U filo -d mente_libre


ALTER USER filo WITH PASSWORD 'MenteLibre2025';
SELECT "id", "email", LEFT("passwordHash", 25) || '...' AS hash_preview FROM "User";
SELECT "id", "email" FROM "User";


git checkout main
git merge dev
git push

git branch

lsof -i :4000  
kill -9
lsof -iTCP -sTCP:LISTEN | grep node
