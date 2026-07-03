// src/pages/user/dashboard/DashboardForo.jsx
/* export default function Foro() {
  return (
    <div className="text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-bold mb-6">Foro</h2>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <p className="text-gray-500 dark:text-gray-400">
          Este foro estará pronto disponible. Aquí podrás compartir experiencias y conversar con la comunidad.
        </p>
      </div>
    </div>
  );
}
 */
export default function Foro() {
  const temasEjemplo = [
    {
      id: 1,
      titulo: '¿Cómo iniciar en la meditación diaria?',
      autor: 'María',
      fecha: '2025-07-28',
      respuestas: 3,
    },
    {
      id: 2,
      titulo: 'Recomendaciones de libros para el autoconocimiento',
      autor: 'Carlos',
      fecha: '2025-07-29',
      respuestas: 5,
    },
    {
      id: 3,
      titulo: '¿Cómo mantener la calma en tiempos difíciles?',
      autor: 'Lucía',
      fecha: '2025-07-30',
      respuestas: 2,
    },
  ]

  return (
      <section className="container py-5">
        <h2 className="text-center text-copper mb-4">Foro de Conversación</h2>

        <div className="list-group">
          {temasEjemplo.map((tema) => (
            <a
              key={tema.id}
              href="#"
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            >
              <div>
                <h5 className="mb-1">{tema.titulo}</h5>
                <small>
                  por {tema.autor} — {tema.fecha}
                </small>
              </div>
              <span className="badge bg-primary rounded-pill">
                {tema.respuestas} respuestas
              </span>
            </a>
          ))}
        </div>
      </section>
  )
}

