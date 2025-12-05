// backend/src/routes/notes.routes.js
import { Router } from 'express';
import { requireAuth } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { noteCreateSchema, noteUpdateSchema } from '../schemas/note.schema.js';
import {
  listNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote
} from '../controllers/notes.controller.js';
import { blockUserMiddleware } from '../middlewares/blockUser.middleware.js';

export const notesRouter = Router();

// ✅ PRIMERO AUTENTICACIÓN
notesRouter.use(requireAuth);

// ✅ DESPUÉS BLOQUEO
notesRouter.use(blockUserMiddleware);

// ✅ Rutas
notesRouter.get('/', listNotes);
notesRouter.get('/:id', getNote);
notesRouter.post('/', validate(noteCreateSchema), createNote);
notesRouter.put('/:id', validate(noteUpdateSchema), updateNote);
notesRouter.delete('/:id', deleteNote);
