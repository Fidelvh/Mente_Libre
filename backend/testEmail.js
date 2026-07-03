// backend/testEmail.js
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY);
console.log("EMAIL_FROM:", process.env.EMAIL_FROM);

const resend = new Resend(process.env.RESEND_API_KEY);

async function main() {
  try {
    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: "fidel.valdes@gmail.com",       // <-- cámbialo por el tuyo
      subject: "Prueba desde Mente Libre",
      html: "<p>Hola Fidel, este es un correo de prueba funcionando correctamente.</p>",
    });

    console.log("Correo enviado:");
    console.log(result);
  } catch (error) {
    console.error("Error enviando correo:");
    console.error(error);
  }
}

main();
