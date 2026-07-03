// backend/src/controllers/dashboard.controller.js

import { prisma }  from '../libs/prisma.js';

export const getDashboard = async (req, res) => {
  try {
    const userId = req.user.id;
    
    // Aquí podrías agregar lógica para obtener datos específicos del dashboard
    // Por ejemplo, estadísticas, resúmenes, etc.

    // información básica del usuario
    const user = {
      id: req.user.id,
      email: req.user.email,
      name: req.user.name,
      role: req.user.role,
      createdAt: req.user.createdAt,
      updatedAt: req.user.updatedAt
    };

    //numero de notas del usuario
    const notesCount = await prisma.note.count({
      where: { userId }
    });

    // últimas 5 notas del usuario
    const latestNotes = await prisma.note.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 5,
      select:{ id: true, title: true, content: true,  createdAt: true, updatedAt: true }
    });

    // Estadísticas: notas por mes (opcional)
  const notesByMonth = await prisma.$queryRaw`
    SELECT DATE_TRUNC('month', "createdAt") AS month, COUNT(*) AS count
    FROM "Note"
    WHERE "userId" = ${userId}
    GROUP BY month
    ORDER BY month DESC`;

  res.json({
    user,
    notesCount,
    latestNotes
  });
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener datos del dashboard' });
  }
};