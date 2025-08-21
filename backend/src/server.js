import { buildApp } from './app.js';
import { config } from './config.js';
import { logger } from './logger.js';

const app = buildApp();

app.listen(config.port, () => {
  logger.info(`API lista en http://localhost:${config.port}`);
});
