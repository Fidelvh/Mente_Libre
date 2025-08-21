import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import pinoHttp from 'pino-http';
import { config } from './config.js';
import { logger } from './logger.js';
import { apiRouter } from './routes/index.js';
import { errorHandler } from './middlewares/error.js';
import { prisma } from './libs/prisma.js';

export function buildApp() {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: config.corsOrigin, credentials: true }));
  app.use(express.json({ limit: '1mb' }));
  app.use(
    pinoHttp({
      logger,
      customLogLevel: (_req, res, err) =>
        err ? 'error' : res.statusCode >= 500 ? 'error' : 'info'
    })
  );

  // Health endpoints
  app.get('/', (req, res) => {
  logger.info('Alguien entró a la raíz 🚀');
  res.send('Hola Mundo con Logger!');
});

  app.get('/healthz', (_req, res) => res.json({ ok: true }));
  app.get('/readyz', async (_req, res) => {
    try { 
        await prisma.$queryRaw`SELECT 1`; res.json({ db: 'ok' });
    } catch {
      res.status(503).json({ db: 'down' });
    }
  });

  app.use('/api', apiRouter);

  // 404
  app.use((req, res) => res.status(404).json({ error: 'Ruta no encontrada' }));

  // Error handler
  app.use(errorHandler);

  return app;
}
