import { Router } from "express";

import {
  register,
  login,
  verifyEmail,
  requestPasswordReset,
  resetPassword,
  me,
} from "../controllers/auth.controller.js";

import { requireAuth } from "../middlewares/auth.js";

const authRouter = Router();

// Registro y login
authRouter.post("/register", register);
authRouter.post("/login", login);

// Perfil del usuario autenticado
authRouter.get("/me", requireAuth, me);

// Verificación de correo
authRouter.get("/verify-email/:token", verifyEmail);

// Recuperación de contraseña
authRouter.post("/forgot-password", requestPasswordReset);
authRouter.post("/reset-password/:token", resetPassword);

export default authRouter;
