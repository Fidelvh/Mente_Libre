import { Router } from "express";
import { requireAuth } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";
import {
  noteCreateSchema,
  noteUpdateSchema
} from "../schemas/note.schema.js";

import {
  listNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote
} from "../controllers/notes.controller.js";

import { blockUserMiddleware } from "../middlewares/blockUser.middleware.js";

export const notesRouter = Router();

// Primero autenticación
notesRouter.use(requireAuth);

// Luego bloqueo de usuario
notesRouter.use(blockUserMiddleware);

// Rutas CRUD
notesRouter.get("/", listNotes);
notesRouter.get("/:id", getNote);
notesRouter.post("/", validate(noteCreateSchema), createNote);
notesRouter.put("/:id", validate(noteUpdateSchema), updateNote);
notesRouter.delete("/:id", deleteNote);
