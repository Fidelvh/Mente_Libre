// backend/src/controllers/auth.controller.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import  { prisma } from "../libs/prisma.js";
import { sendVerificationEmail, sendPasswordResetEmail } from "../utils/email.js";

export const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      return res.status(409).json({ message: "El correo ya está registrado" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        passwordHash,
      },
    });

    const token = crypto.randomUUID();
    // Guardamos SOLO el hash del token en BD para no exponer el token real
    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60);

    await prisma.emailVerification.create({
      data: {
        tokenHash,
        userId: user.id,
        expiresAt,
      },
    });

    await sendVerificationEmail(email, token);

    // Mantener contrato consistente con el frontend: retornar user + token
    const jwtToken = jwt.sign(
      { sub: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      message: "Usuario registrado. Verifica tu correo electrónico.",
      token: jwtToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        emailVerified: user.emailVerified,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    // El token viene por params según la ruta /verify-email/:token
    const { token } = req.params;
    // Convertimos el token recibido a hash para comparar contra la BD
    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");

    const record = await prisma.emailVerification.findUnique({
      where: { tokenHash },
    });

    if (!record || record.used || record.expiresAt < new Date()) {
      return res.status(400).json({ message: "Token inválido o expirado" });
    }

    await prisma.user.update({
      where: { id: record.userId },
      data: { emailVerified: true },
    });

    await prisma.emailVerification.update({
      where: { id: record.id },
      data: { used: true },
    });

    return res.json({ message: "Correo verificado correctamente" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) return res.status(403).json({ message: "Credenciales inválidas" });

    if (user.isBlocked)
      return res.status(403).json({ message: "Usuario bloqueado" });

    if (!(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(403).json({ message: "Credenciales inválidas" });
    }

    const token = jwt.sign(
      { sub: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error interno" });
  }
};

export const requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) return res.json({ message: "Si existe, se enviará un correo" });

    const token = crypto.randomUUID();
    // Guardamos SOLO el hash del token en BD para no exponer el token real
    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
    const expiresAt = new Date(Date.now() + 1000 * 60 * 30);

    await prisma.passwordReset.create({
      data: {
        tokenHash,
        userId: user.id,
        expiresAt,
      },
    });

    await sendPasswordResetEmail(email, token);

    return res.json({
      message: "Si existe, se enviará un correo con instrucciones",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error interno" });
  }
};

export const resetPassword = async (req, res) => {
  try {
    // El token viene por params según la ruta /reset-password/:token
    const { token } = req.params;
    // Convertimos el token recibido a hash para comparar contra la BD
    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
    const { password } = req.body;

    const record = await prisma.passwordReset.findUnique({
      where: { tokenHash },
    });

    if (!record || record.used || record.expiresAt < new Date()) {
      return res.status(400).json({ message: "Token inválido o expirado" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { id: record.userId },
      data: { passwordHash },
    });

    await prisma.passwordReset.update({
      where: { id: record.id },
      data: { used: true },
    });

    return res.json({ message: "Contraseña actualizada correctamente" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error interno" });
  }
};
export const me = async (req, res) => {
  try {
    // req.user proviene de tu middleware requireAuth
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        emailVerified: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Contrato esperado por el frontend: { user }
    return res.json({ user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
