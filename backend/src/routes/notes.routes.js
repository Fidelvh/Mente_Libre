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

export const notesRouter = Router();

notesRouter.use(requireAuth); // todas requieren auth
notesRouter.get('/', listNotes);
notesRouter.get('/:id', getNote);
notesRouter.post('/', validate(noteCreateSchema), createNote);
notesRouter.put('/:id', validate(noteUpdateSchema), updateNote);
notesRouter.delete('/:id', deleteNote);
