import { Router } from 'express';
import { authRouter } from './auth.routes.js';
import { notesRouter } from './notes.routes.js';

export const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/notes', notesRouter);
