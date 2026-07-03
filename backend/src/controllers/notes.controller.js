import { prisma } from "../libs/prisma.js";



// Listar todas las notas del usuario autenticado
export const listNotes = async (req, res, next) => {
  try {
    const notes = await prisma.note.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: 'desc' }
    });
    res.json({ notes });
  } catch (err) {
    next(err);
  }
};

export const getNote = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const note = await prisma.note.findFirst({
      where: { id, userId: req.user.id }
    });
    if (!note) return res.status(404).json({ error: 'Nota no encontrada' });
    res.json({ note });
  } catch (err) {
    next(err);
  }
};

export const createNote = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const note = await prisma.note.create({
      data: { title, content, userId: req.user.id }
    });
    res.status(201).json({ note });
  } catch (err) {
    next(err);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    // Verifica pertenencia del recurso
    const exists = await prisma.note.findFirst({
      where: { id, userId: req.user.id },
      select: { id: true }
    });
    if (!exists) return res.status(404).json({ error: 'Nota no encontrada' });

    const note = await prisma.note.update({
      where: { id },
      data: req.body
    });
    res.json({ note });
  } catch (err) {
    next(err);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const exists = await prisma.note.findFirst({
      where: { id, userId: req.user.id },
      select: { id: true }
    });
    if (!exists) return res.status(404).json({ error: 'Nota no encontrada' });

    await prisma.note.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
