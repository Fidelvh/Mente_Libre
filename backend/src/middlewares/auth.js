import { verifyJwt } from '../utils/jwt.js';
import { prisma } from '../libs/prisma.js';

export const requireAuth = async (req, res, next) => {
  try {
    const hdr = req.headers.authorization ?? '';
    const token = hdr.startsWith('Bearer') ? hdr.slice(7) : null;
    if (!token) return res.status(401).json({ error: 'Falta token Bearer' });

    const decoded = verifyJwt(token);
    const user = await prisma.user.findUnique({ where: { id: decoded.sub } });
    if (!user) return res.status(401).json({ error: 'Usuario no válido' });

    req.user = { id: user.id, email: user.email, name: user.name };
    next();
  } catch {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
};
