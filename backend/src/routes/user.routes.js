import { Router } from "express";
import { requireAuth } from "../middlewares/auth.js";
import {
  deleteUser,
  listUsers,
  createUser
} from "../controllers/users.controller.js";

export const userRouter = Router();

// Público -> crear usuario
userRouter.post("/", createUser);

// Protegido -> listar y eliminar
userRouter.get("/", requireAuth, listUsers);
userRouter.delete("/:id", requireAuth, deleteUser);
