// backend/src/config.js
import 'dotenv/config';

console.log("Cargando config.js");


const isDev = process.env.NODE_ENV !== 'production'; // Define entorno dev para permitir CORS local

export const config = {
  env: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 4000),
  dbUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '7d',
  // esto hace que la API acepte solicitudes desde estos orígenes
  corsOrigin: process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(',').map((o) => o.trim())
    : (isDev ? ['http://localhost:5173'] : []),
};

if (!config.dbUrl) throw new Error('DATABASE_URL es obligatorio');
if (!config.jwtSecret) throw new Error('JWT_SECRET es obligatorio');
