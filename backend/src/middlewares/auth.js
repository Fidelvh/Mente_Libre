// backend/src/middlewares/auth.middleware.js
import { verifyJwt } from '../utils/jwt.js';
import { prisma } from '../libs/prisma.js';
import { use } from 'react';

export const requireAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer '))
      return res.status(401).json({ error: 'Falta token Bearer' });

    const token = authHeader.split(' ')[1];
    const decoded = verifyJwt(token);

    if (!decoded || !decoded.sub)
      return res.status(401).json({ error: 'Token inválido o expirado' });

    const user = await prisma.user.findUnique({ where: { id: decoded.sub } });

    if (!user)
      return res.status(401).json({ error: 'Usuario no encontrado o eliminado' });

    req.user = { id: user.id, email: user.email, name: user.name, role: user.role };
    next();
  } catch (err) {
    console.error('Error en requireAuth:', err);
    return res.status(401).json({ error: 'No autorizado' });
  }
};
