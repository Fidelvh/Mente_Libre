import Layout from '../../components/layout'
import CardPrograma from '../../components/cardProgramas'
import eventosImg from '../../assets/programas/eventos.jpg'

export default function Eventos() {
  return (
    <Layout>
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
    </Layout>
  )
}
