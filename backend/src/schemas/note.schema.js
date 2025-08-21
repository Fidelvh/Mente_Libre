import { z } from 'zod';

export const noteCreateSchema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().min(1).max(10_000)
});

export const noteUpdateSchema = z.object({
  title: z.string().min(1).max(200).optional(),
  content: z.string().min(1).max(10_000).optional()
}).refine((d) => Object.keys(d).length > 0, {
  message: 'Debes enviar al menos un campo'
});
