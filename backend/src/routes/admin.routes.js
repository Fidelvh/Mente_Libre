// backend/src/routes/admin.routes.js
import { Router } from 'express'
import { requireAuth } from '../middlewares/auth.js'
import { requireAdmin } from '../middlewares/role.js'
//import { getAdminPanel } from '../controllers/admin.controller.js'
import { listUsersAdmin, updateUserRole } from '../controllers/admin.controller.js'
import { prisma }  from '../libs/prisma.js';


export const adminRouter = Router();

// Todas las rutas de admin requieren autenticación y rol de admin
adminRouter.use(requireAuth);
adminRouter.use(requireAdmin);

/* // Actualizar rol de un usuario (solo admin)
adminRouter.patch('/users/:id/role', requireAuth, requireAdmin, async (req, res) => {
    try {
        const userId = Number(req.params.id);
        const { role } = req.body;

        // Validar rol
        if (!role || !['user', 'admin'].includes(role)) {
            return res.status(400).json({ error: 'Rol inválido' });
        }

        //Evitar que un admin se quite a sí mismo el rol de admin
        if (userId === req.user.id && role !== 'admin') {
            return res.status(400).json({ error: 'No puedes cambiar tu propio rol de admin' }); 
        }

        const user = await prisma.user.update({
            where: { id: userId },
            data: { role },
            select: { id: true, email: true, name: true, role: true, createdAt: true }
        });
        
        res.json({ message: 'Rol actualizado correctamente', user});
    } catch (err) {
        console.error(err);
        if (err.code === 'P2025') {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(500).json({ error: 'Error al actualizar rol' }); 
    }
});
 */

// GET /api/admin/users - Listar usuarios con filtros y paginación
adminRouter.get('/users', listUsersAdmin);

// PUT /api/admin/users/:id/role - Actualizar rol de un usuario
adminRouter.patch('/users/:id/role', updateUserRole);


// GET /api/admin - Obtener datos del panel de administración

adminRouter.get('/', requireAuth, requireAdmin /*, getAdminPanel*/ );


// 
// PATCH /api/admin/block-user/:id - Bloquear un usuario
adminRouter.patch("/block-user/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    const user = await prisma.user.update({
      where: { id: userId },
      data: { isBlocked: true },
    });

    await prisma.auditLog.create({
      data: {
        actorId: req.admin.id,
        action: "block_user",
        targetId: userId,
      },
    });

    res.json({ message: "Usuario bloqueado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al bloquear usuario" });
  }
});

// PATCH /api/admin/unblock-user/:id - Desbloquear un usuario
adminRouter.patch("/unblock-user/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    const user = await prisma.user.update({
      where: { id: userId },
      data: { isBlocked: false },
    });

    await prisma.auditLog.create({
      data: {
        actorId: req.admin.id,
        action: "unblock_user",
        targetId: userId,
      },
    });

    res.json({ message: "Usuario desbloqueado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al desbloquear usuario" });
  }
});


