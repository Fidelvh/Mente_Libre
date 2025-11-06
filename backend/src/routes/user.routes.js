import { Router } from 'express';
import { deleteUser, listUsers, createUser } from '../controllers/users.controller.js';
import { requireAuth } from '../middlewares/auth.js';

export const userRouter = Router();


// Crear nuevo usuario, Rutas públicas
userRouter.post('/', createUser);

// 🔐 Rutas protegidas (solo admin o usuarios logueados)
userRouter.get('/', requireAuth, listUsers); // listar usuarios (requiere token)
userRouter.delete('/:id', requireAuth, deleteUser); // eliminar usuario (requiere token)