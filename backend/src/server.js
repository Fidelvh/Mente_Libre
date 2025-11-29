import { buildApp } from './app.js';
import { config } from './config.js';
import { logger } from './logger.js';

console.log("Cargando server.js");

const app = buildApp();

// ---------------------------
//  Iniciar servidor
// ---------------------------
app.listen(config.port, () => {
  logger.info(`API lista en http://localhost:${config.port}`);
});
