import { sendEmail } from "../utils/email.js";
import { generateToken } from "../utils/jwt.js";
import { prisma }from "../libs/prisma.js";

export const sendResetPassword = async (req, res) => {
  const { email } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

  const token = generateToken({ userId: user.id }, "30m");

  const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

  await sendEmail({
    to: user.email,
    subject: "Recuperación de contraseña - Mente Libre",
    html: `
      <h2>Restablece tu contraseña</h2>
      <p>Haz clic en el siguiente enlace:</p>
      <a href="${resetUrl}">Restablecer contraseña</a>
    `
  });

  res.json({ message: "Correo enviado para recuperar contraseña" });
};
