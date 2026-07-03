// backend/src/server.js
import { buildApp } from './app.js';
import { config } from './config.js';
import { logger } from './logger.js';
import { prisma } from './libs/prisma.js';

logger.info("Cargando server.js");
logger.info({ env: config.env, cors: config.corsOrigin }, "Configuración activa");
logger.info("DATABASE_URL ACTIVA:", config.dbUrl);

const app = buildApp();

// ---------------------------
//  Iniciar servidor
// ---------------------------
const server = app.listen(config.port, () => {
  logger.info(`API lista en http://localhost:${config.port}`);
});

// ---------------------------
//  Manejo de señales y errores
// ---------------------------
const shutdown = async (signal) => {
  logger.info(`${signal} recibido, cerrando servidor...`);

  server.close(async () => {
    await prisma.$disconnect();
    
    logger.info('Servidor HTTP cerrado Correctamente');
    logger.info('Prisma desconectado de la base de datos');

    process.exit(0);  
  });
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);


// Manejo de errores no capturados
process.on('unhandledRejection', (reason, promise) => {
logger.error('Rechazo no manejado en la promesa:', promise, 'razón:', reason);
process.exit(1);
}); 

process.on('uncaughtException', (err) => {
  logger.error('Excepción no capturada:', err);
  process.exit(1);
});




