/**
 * Contacto.jsx
 *
 * Página de contacto donde los usuarios pueden enviar
 * consultas, sugerencias o solicitudes de información.
 *
 * Este formulario está preparado para enviar datos al backend
 * (por ejemplo, a una ruta POST `/api/contacto`)
 */
// src/page/contacto.jsx
import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [status, setStatus] = useState("");

  const enviar = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      setStatus("Mensaje enviado con éxito. Te responderemos pronto.");
      setForm({ nombre: "", email: "", mensaje: "" });
    } else {
      setStatus("Ocurrió un error. Intenta nuevamente.");
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Contáctanos</h1>

      <form onSubmit={enviar} className="flex flex-col gap-4 bg-gray-800 p-6 rounded-xl border border-gray-700">

        <input
          type="text"
          placeholder="Tu nombre"
          className="p-3 rounded bg-gray-900 border border-gray-700"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
        />

        <input
          type="email"
          placeholder="Tu correo"
          className="p-3 rounded bg-gray-900 border border-gray-700"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          placeholder="Escribe tu mensaje..."
          className="p-3 rounded bg-gray-900 border border-gray-700 h-32"
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
        />

        <button className="py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg">
          Enviar
        </button>

        {status && <p className="text-sm mt-2 opacity-80">{status}</p>}
      </form>
    </div>
  );
}
