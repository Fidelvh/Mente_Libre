import { prisma } from "../libs/prisma.js";
import { sendVerificationEmail } from "../utils/email.js";
import crypto from "crypto";

// =======================================================
//  Crear usuario (registro)
// =======================================================
export const createUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Verificar si ya existe
    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return res.status(409).json({ error: "El correo ya está registrado" });
    }

    // Crear usuario
    const user = await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });

    // Crear token de verificación
    const token = crypto.randomBytes(32).toString("hex");

    await prisma.emailVerificationToken.create({
      data: { token, userId: user.id },
    });

    // Enviar correo de verificación
    await sendVerificationEmail(user.email, token);

    return res.status(201).json({
      message: "Usuario creado. Revisa tu correo para verificar tu cuenta.",
    });
  } catch (err) {
    console.error("Error createUser:", err);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

// =======================================================
//  Listar usuarios
// =======================================================
export const listUsers = async (_req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    });

    return res.json(users);
  } catch (err) {
    console.error("Error listUsers:", err);
    return res.status(500).json({ error: "Error al listar usuarios" });
  }
};

// =======================================================
//  Eliminar usuario por ID
// =======================================================
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    await prisma.user.delete({
      where: { id },
    });

    return res.json({ message: "Usuario eliminado" });
  } catch (err) {
    console.error("Error deleteUser:", err);
    return res.status(500).json({ error: "Error al eliminar usuario" });
  }
};
