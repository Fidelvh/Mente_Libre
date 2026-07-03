import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

// En desarrollo, todos los correos van a tu email para evitar errores de Resend
const DEV_EMAIL =
  process.env.NODE_ENV === "development"
    ? "fidel.valdes@gmail.com"
    : null;

export const sendEmail = async ({ to, subject, html }) => {
  try {
    const finalRecipient = DEV_EMAIL || to;

    const response = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: finalRecipient,
      subject,
      html,
    });

    console.log("Email enviado a:", finalRecipient);
    console.log("Respuesta Resend:", response);

    return response;
  } catch (error) {
    console.error("Error enviando email:", error);
    throw error;
  }
};

export const sendVerificationEmail = async (to, token) => {
  const verifyUrl = `${process.env.FRONTEND_URL}/verify-email/${token}`;

  return sendEmail({
    to,
    subject: "Confirma tu cuenta - Mente Libre",
    html: `
      <h2>Bienvenido a Mente Libre</h2>
      <p>Confirma tu cuenta aquí:</p>
      <a href="${verifyUrl}">${verifyUrl}</a>
    `,
  });
};

export const sendPasswordResetEmail = async (to, token) => {
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${token}`;

  return sendEmail({
    to,
    subject: "Restablece tu contraseña - Mente Libre",
    html: `
      <h2>Recuperación de contraseña</h2>
      <p>Puedes restablecer tu contraseña aquí:</p>
      <a href="${resetUrl}">${resetUrl}</a>
    `,
  });
};
