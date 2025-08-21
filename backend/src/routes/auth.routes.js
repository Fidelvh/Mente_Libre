import { Router } from 'express';
import { validate } from '../middlewares/validate.js';
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';
import { register, login, me } from '../controllers/auth.controller.js';
import { requireAuth } from '../middlewares/auth.js';
import rateLimit from 'express-rate-limit';

export const authRouter = Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true
});

authRouter.post('/register', limiter, validate(registerSchema), register);
authRouter.post('/login', limiter, validate(loginSchema), login);
authRouter.get('/me', requireAuth, me);
