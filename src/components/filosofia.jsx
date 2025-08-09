import React from 'react'

export default function Filosofia() {
  return (
    <section className="section bg-gradient-filosofia bg-white text-center section-fade">

      <div className="container">
        <h2 className="mb-4 text-accent" data-aos="fade-up">
          Nuestra Filosofía
        </h2>
        <p className="lead mb-5" data-aos="fade-up" data-aos-delay="100">
          En Mente Libre creemos que el autoconocimiento, la música, la psicología
          y la espiritualidad no son caminos separados, sino expresiones complementarias
          del mismo viaje interior.
        </p>

        <div className="row">
          <div
            className="col-md-4 mb-5 d-flex flex-column align-items-center feature-box"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <i className="bi bi-person-hearts display-4 text-copper mb-3"></i>
            <h4 className="text-copper">Psicología</h4>
            <p className="text-center px-3">
              Usamos la psicología para explorar emociones, patrones de conducta
              y heridas personales. Buscamos transformación auténtica desde la raíz.
            </p>
          </div>

          <div
            className="col-md-4 mb-5 d-flex flex-column align-items-center feature-box"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <i className="bi bi-stars display-4 text-copper mb-3"></i>
            <h4 className="text-copper">Espiritualidad</h4>
            <p className="text-center px-3">
              Nos basamos en una espiritualidad sin dogmas, enfocada en la conexión
              interior, el propósito y la autenticidad.
            </p>
          </div>

          <div
            className="col-md-4 mb-5 d-flex flex-column align-items-center feature-box"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <i className="bi bi-diagram-3 display-4 text-copper mb-3"></i>
            <h4 className="text-copper">Neurociencia</h4>
            <p className="text-center px-3">
              Aplicamos la neurociencia para comprender la mente y formar hábitos
              sostenibles que potencien el bienestar personal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
