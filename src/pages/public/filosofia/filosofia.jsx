// src/pages/public/filosofia/filosofia.jsx
import { motion } from "framer-motion";

export default function FilosofiaPage() {
  return (
    <div className="bg-[var(--color-surface)] text-[var(--color-text-main)] p-6 rounded-xl">


      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] text-3xl font-bold mb-6"
    

      >
        Nuestra Filosofía
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg opacity-90 leading-relaxed"
      >
        En Mente Libre creemos que la sanación emocional, la claridad mental y el
        autoconocimiento son pilares para una vida plena. Creamos herramientas que
        combinan tecnología, espiritualidad y psicología moderna para ayudarte a
        transformar tu bienestar de forma profunda.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-10 grid md:grid-cols-3 gap-6"
      >
        {[
          "Conexión interior",
          "Sanación emocional",
          "Crecimiento consciente",
        ].map((item, i) => (
          <motion.div
            key={i}
            className="p-6 bg-gray-800 rounded-2xl border border-gray-700 text-center"
          >
            <h3 className="text-xl font-semibold mb-2">{item}</h3>
            <p className="text-sm opacity-80">
              Parte fundamental del camino hacia una vida más plena.
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
