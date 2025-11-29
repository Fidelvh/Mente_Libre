// backend/src/routes/debug.js
import { Router } from 'express';

const router = Router();

// Error síncrono -> uncaughtException
router.get('/crash-sync', (_req, _res) => {
  throw new Error('💥 Error síncrono de prueba (uncaughtException)');
});

// Error asíncrono -> unhandledRejection
router.get('/crash-async', async (_req, res) => {
    setTimeout(() => { 
  Promise.reject(new Error('💥 Error async de prueba (unhandledRejection)'));
    }, 5);

  res.json({ status: 'triggered' });
});

export default router;
