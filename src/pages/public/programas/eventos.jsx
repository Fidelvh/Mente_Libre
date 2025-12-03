// src/pages/public/programas/eventos.jsx
import CardPrograma from '@/components/ui/cardProgramas'
import eventosImg from '@/assets/images/programas/eventos.jpg'

export default function Eventos() {
  return (
      <section className="container py-5 text-center">
        <h2 className="text-copper mb-3">Eventos y Talleres</h2>
        <p>
          Participa en experiencias en vivo —presenciales y virtuales— enfocadas en el
          crecimiento personal, el bienestar y la conexión consciente.
        </p>
        <CardPrograma
          title="Taller de mindfulness"
          description="Aprende a vivir el presente a través de ejercicios prácticos."
          image={eventosImg}
          link="#"
        />
      </section>
  )
}
