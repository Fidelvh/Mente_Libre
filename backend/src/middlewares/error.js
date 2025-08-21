import { logger } from '../logger.js';

// Debe ir al final de la cadena de middlewares
export const errorHandler = (err, req, res, next) => {
  const status = err.status ?? 500;
  const code = err.code ?? 'INTERNAL_ERROR';
  const msg = err.message ?? 'Error inesperado';

  logger.error({ err, path: req.path, code }, msg);
  res.status(status).json({ error: msg, code });
};
