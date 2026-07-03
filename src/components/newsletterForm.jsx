// src/components/newsletterForm.jsx
import { useState } from "react";

export default function NewsletterForm() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const consent = form.consent.checked;

    if (!email || !consent) {
      setFormStatus("Debes ingresar tu email y aceptar los términos.");
      return;
    }

    setFormStatus("Gracias por suscribirte.");
    form.reset();
  };

  return (
    <section className="py-20 bg-neutral-100 dark:bg-neutral-900">
      <div className="max-w-xl mx-auto px-6">
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-sm text-center">
          <h2 className="text-2xl font-serif mb-3 text-neutral-900 dark:text-neutral-100">
            Suscríbete al boletín
          </h2>

          <p className="mb-6 text-neutral-600 dark:text-neutral-300">
            Recibe meditaciones, artículos y novedades directamente en tu correo.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              className="w-full rounded-lg border border-neutral-300 dark:border-neutral-600
                         bg-neutral-50 dark:bg-neutral-700
                         text-neutral-900 dark:text-neutral-100
                         px-4 py-2"
              required
            />

            <label className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-300">
              <input type="checkbox" name="consent" className="mt-1" required />
              Acepto recibir correos de Mente Libre
            </label>

            <button
              type="submit"
              className="w-full mt-2 rounded-lg bg-indigo-600 hover:bg-indigo-700
                         text-white py-2 transition"
            >
              Enviar
            </button>
          </form>

          {formStatus && (
            <p className="mt-4 text-sm font-medium text-indigo-600">
              {formStatus}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
