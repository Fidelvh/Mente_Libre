// backend/src/controllers/admin.controller.js
import { prisma }  from '../libs/prisma.js';

// Listar usuarios con filtros y paginación
export const listUsersAdmin = async (req, res) => {
  try {
    const { page = 1, limit = 10, role, search } = req.query;

    const where = {
      ...(role ? { role } : {}),
      ...(search ? {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { email: { contains: search, mode: 'insensitive' } },
        ]
      } : {})
    };

    const total = await prisma.user.count({ where });
    const users = await prisma.user.findMany({
      where,
      select: { id: true, name: true, email: true, role: true, createdAt: true },
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy: { createdAt: 'desc' }
    });

    // Contar notas por usuario
    const usersWithNotes = await Promise.all(users.map(async user => {
      const notesCount = await prisma.note.count({ where: { userId: user.id } });
      return { ...user, notesCount };
    }));

    res.json({
      page: Number(page),
      limit: Number(limit),
      total,
      users: usersWithNotes
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al listar usuarios' });
  }
};

// Actualizar rol de un usuario
export const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    if (!['user', 'admin'].includes(role)) {
      return res.status(400).json({ error: 'Rol inválido' });
    }

    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { role },
      select: { id: true, email: true, name: true, role: true }
    });

    res.json({ message: 'Rol actualizado', user });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar rol' });
  }
};
