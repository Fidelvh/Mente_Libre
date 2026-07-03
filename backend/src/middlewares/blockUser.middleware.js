import { prisma } from "../libs/prisma.js";



export const blockUserMiddleware = async (req, res, next) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ error: "Usuario no autenticado" });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { isBlocked: true },
    });

    if (!user) {
      return res.status(404).json({ error: "Usuario no existe" });
    }

    if (user.isBlocked) {
      return res.status(403).json({
        error: "Tu cuenta ha sido bloqueada por un administrador",
      });
    }

    next();
  } catch (error) {
    console.error("Error middleware bloqueo:", error);
    res.status(500).json({ error: "Error interno de seguridad" });
  }
};
