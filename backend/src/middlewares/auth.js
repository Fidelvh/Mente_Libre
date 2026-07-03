// backend/src/middlewares/auth.js
import { verifyJwt } from '../utils/jwt.js';
import { prisma } from '../libs/prisma.js';

export const requireAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // ✅ Validación de header
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.log("❌ Falta header Authorization");
      return res.status(401).json({ error: 'Falta token Bearer' });
    }
    
    const token = authHeader.split(' ')[1];

    // ✅ Verificación de JWT
    const decoded = verifyJwt(token);

    // 🔍 LOG CLAVE PARA DEPURACIÓN (ESTE ES EL QUE TE PEDÍ)
    console.log("✅ JWT DECODIFICADO:", decoded);

    if (!decoded || !decoded.sub) {
      console.log("❌ Token sin sub válido:", decoded);
      return res.status(401).json({ error: 'Token sin usuario válido' });
    }

    const userId = Number(decoded.sub);

    // ✅ Búsqueda real en BD
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      console.log("❌ Usuario no encontrado en BD:", userId);
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    // ✅ Bloqueo de usuario
    if (user.isBlocked) {
      console.log("⛔ Usuario bloqueado:", userId);
      return res.status(403).json({ error: 'Usuario bloqueado' });
    }

    // ✅ Inyección segura del usuario
    req.user = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };

    next();

  } catch (err) {
    console.error('❌ JWT ERROR REAL:', err.message);

    return res.status(401).json({
      error: 'Token inválido o expirado',
      reason: err.message
    });
  }
};
