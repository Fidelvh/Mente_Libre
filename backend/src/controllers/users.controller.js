import { prisma } from '../libs/prisma.js';
import { hashPassword } from '../utils/hash.js';
import { signJwt } from '../utils/jwt.js';

// Crear nuevo usuario (Público)
export const createUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña son requeridos' });
    }

    // Verificar si el email ya está registrado
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      return res.status(409).json({ error: 'El email ya está registrado' });
    }

    // Encriptar la contraseña
    const passwordHash = await hashPassword(password);

    // Crear el usuario
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        name: name ?? null
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
        role: true
      }
    });

    // Generar token JWT
    const token = signJwt({ sub: user.id, email: user.email, role: user.role });

    return res.status(201).json({
      message: 'Usuario creado exitosamente',
      user,
      token
    });
  } catch (error) {
    console.error('❌ Error en createUser:', error);
    return res.status(500).json({ error: 'Error interno al crear el usuario' });
  }
};

export const listUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, email: true, name: true, createdAt: true }
    });
    return res.json({ users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al listar usuarios' });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    await prisma.user.delete({ where: { id: Number(id) } });

    return res.json({ message: `Usuario con ID ${id} eliminado correctamente` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};
