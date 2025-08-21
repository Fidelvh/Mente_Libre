import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email().max(200),
  password: z.string().min(8).max(128),
  name: z.string().min(1).max(100).optional().nullable()
});

export const loginSchema = z.object({
  email: z.string().email().max(200),
  password: z.string().min(8).max(128)
});
