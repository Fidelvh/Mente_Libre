// src/pages/public/programas/audio.jsx
import CardPrograma from '@/components/ui/cardProgramas.jsx'
import audioImg from '@/assets/images/programas/audio.jpg'

export default function Audio() {
  return (
      <section className="container py-5">
        <h2 className="text-center text-copper mb-4">Programas de Audio</h2>
        <p className="text-center text-muted mb-5"> 
        Disfruta de audios disenados para relajarte, meditar y ecnotrar tu paz interior. 
        </p>
        <CardPrograma
          title="Audio de relajación"
          description="Escucha audios diseñados para ayudarte a conectar con tu calma interior, liberar el estrés y mejorar tu descanso."
          image={audioImg}
          link="/programas/audio"
        />
        <CardPrograma
          title="Audio de relajación"
          description="Escucha audios diseñados para ayudarte a conectar con tu calma interior, liberar el estrés y mejorar tu descanso."
          image={audioImg}
          link="/programas/audio"
        />
        <CardPrograma
          title="Audio de relajación"
          description="Escucha audios diseñados para ayudarte a conectar con tu calma interior, liberar el estrés y mejorar tu descanso."
          image={audioImg}
          link="/programas/audio"
        />
      </section>
  )
}
