//backend/src/routes/index.js
import { Router } from 'express';
import { authRouter } from './auth.routes.js';
import { notesRouter } from './notes.routes.js';
import { userRouter } from './user.routes.js';
import { dashboardRouter } from './dashboard.routes.js';
import { adminRouter } from './admin.routes.js';
import debugRouter from './debug.js';


export const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/notes', notesRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/dashboard', dashboardRouter);
apiRouter.use('/admin', adminRouter);  
apiRouter.use('/debug', debugRouter);
