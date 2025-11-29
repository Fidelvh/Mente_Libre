//backend/src/controllers/auth.controller.js
import { prisma } from '../libs/prisma.js';
import { hashPassword, verifyPassword } from '../utils/hash.js';
import { signJwt } from '../utils/jwt.js';

// Registro de un nuevo usuario
export const register = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;

    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) return res.status(409).json({ error: 'Email ya registrado' });

    const passwordHash = await hashPassword(password);
    const user = await prisma.user.create({
      data: { email, passwordHash, name: name ?? null },
      select: { id: true, email: true, name: true, createdAt: true, updatedAt: true,  role: true }
    });

    const token = signJwt({ sub: user.id, email: user.email, role: user.role });
    res.status(201).json({ user, token });
  } catch (err) {
    next(err);
  }
};

// Login de un usuario existente
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: 'Credenciales inválidas' });

    const ok = await verifyPassword(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: 'Credenciales inválidas' });

    const token = signJwt({ sub: user.id, email: user.email, role: user.role });
    res.json({
      user: { id: user.id, email: user.email, name: user.name, createdAt: user.createdAt, updatedAt: user.updatedAt, role: user.role },
      token
    });
  } catch (err) {
    next(err);
  }
};

export const me = async (req, res) => {
  res.json({ user: req.user });
};
