//backend/src/app.js
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import pinoHttp from 'pino-http';
import { config } from './config.js';
import { logger } from './logger.js';
import { apiRouter } from './routes/index.js';
import { errorHandler } from './middlewares/error.js';
import { prisma }  from './libs/prisma.js';

//console.log("Cargando app.js");

export function buildApp() {
  const app = express();

// 1. Seguridad HTTP con Helmet, seguridad base
app.use(helmet({contentSecurityPolicy: false})); // Deshabilitar CSP por compatibilidad
  

// 2. Configuración CORS personalizada
const allowedOrigins = new Set(config.corsOrigin);

const corsOptions = {
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // Postman / curl

      if (config.env === 'development') {
        return callback(null, true);
      }

      if (allowedOrigins.has(origin)) {
        return callback(null, true);
      }

      return callback(null, false); // ⛔ nunca lanzar Error
    },
    credentials: true,
  };
// Configuración CORS personalizada
app.use(cors(corsOptions));




/* app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // permite herramientas locales (Postman, etc.)

      // 🔓 En desarrollo: acepta cualquier puerto localhost dinámico
      if (isDev) { if (origin.startsWith('localhost')) { return callback(null, true); }
      }
      return callback(new Error(`Origen no permitido por CORS: ${origin}`));

      // 🔒 En producción: valida contra lista definida en .env
      if (
        Array.isArray(config.corsOrigin) && config.corsOrigin.includes(origin)
      ) {
        return callback(null, true);
      } 

      // ❌ Bloquea cualquier otro origen
      return callback(new Error(`Origen no permitido por CORS: ${origin}`));
    },
    credentials: true,
  })
);
 */

/* app.use(
  cors({
    origin: true,
    credentials: true,
  })
); */


//
// Límite de tamaño de cuerpo, protege contra payloads abusivos
  app.use(express.json({ limit: '1mb' }));

// Logger HTTP
  app.use(
    pinoHttp({
      logger,
      customLogLevel: (_req, res, err) =>
        err ? 'error' : res.statusCode >= 500 ? 'error' : 'info',
      autoLogging: { ignore: (req) => req.url === '/healthz' || req.url === '/readyz' 
      }
    })
  );

// Health endpoints
  app.get('/status', (_req, res) => {
    res.json({
      service: 'mente-libre-api',
      status: 'ok',
      env: config.env,
      timestamp: new Date().toISOString(),
    });
  });

// Health checks
  app.get('/healthz', (_req, res) => res.json({ ok: true }));
  app.get('/readyz', async (_req, res) => {
    try { 
        await prisma.$queryRaw`SELECT 1`; res.json({ db: 'ok' });
    } catch {
      res.status(503).json({ db: 'down' });
    }
  });

// Rutas API
  app.use('/api', apiRouter);

  // 404
  app.use((req, res) => res.status(404).json({ error: 'Ruta no encontrada' }));

  // Error handler
  app.use(errorHandler);
  
  return app;
}

