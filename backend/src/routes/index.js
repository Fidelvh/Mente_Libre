//backend/src/routes/index.js
import { Router } from 'express';
import { authRouter } from './auth.routes.js';
import { notesRouter } from './notes.routes.js';
import { userRouter } from './user.routes.js';


export const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/notes', notesRouter);
apiRouter.use('/users', userRouter);

