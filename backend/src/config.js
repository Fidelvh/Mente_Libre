import 'dotenv/config';

console.log("Cargando config.js");


export const config = {
  env: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 4000),
  dbUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  corsOrigin: process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(',').map((o) => o.trim())
    : '*'
};

if (!config.dbUrl) throw new Error('DATABASE_URL es obligatorio');
if (!config.jwtSecret) throw new Error('JWT_SECRET es obligatorio');