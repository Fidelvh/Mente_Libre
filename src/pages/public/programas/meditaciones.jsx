// src/pages/public/programas/meditaciones.jsx
import CardPrograma from "@/components/ui/cardProgramas"
import meditacionImg from "@/assets/images/programas/meditacion.png"

export default function Meditaciones() {
  return (
      <section className="container py-5 text-center">
        <h2 className="text-copper mb-3">Meditaciones Guiadas</h2>
        <p>
          Accede a sesiones de meditación guiada que combinan respiración, atención
          plena y visualización para cultivar calma y claridad interior.
        </p>
        <CardPrograma
          title="Meditación para principiantes"
          description="Una guía paso a paso para comenzar tu viaje hacia la paz interior."
          image={meditacionImg}
          link="#"
        />
      </section>
  )
}
