import crypto from 'crypto';
import { prisma } from '../libs/prisma.js';

export const verifyEmail = async (req, res) => {
  const { token } = req.body;

  const hash = crypto.createHash('sha256').update(token).digest('hex');

  const record = await prisma.emailVerification.findFirst({
    where: {
      tokenHash: hash,
      used: false,
      expiresAt: { gt: new Date() }
    }
  });

  if (!record) return res.status(400).json({ error: 'Token inválido' });

  await prisma.user.update({
    where: { id: record.userId },
    data: { emailVerified: true }
  });

  await prisma.emailVerification.update({
    where: { id: record.id },
    data: { used: true }
  });

  res.json({ ok: true });
};
