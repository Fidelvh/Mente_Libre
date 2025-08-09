import React from 'react'
import meditacionImg from '../assets/programas/meditacion.png'
import audioImg from '../assets/programas/audio.jpg'
import eventosImg from '../assets/programas/eventos.jpg'
import { Link } from 'react-router-dom'

export default function Programas() {
  return (
    <section className="section bg-light section-fade">
      <div className="container">
        <h2 className="text-center text-accent mb-5" data-aos="fade-up">
          Nuestros Programas
        </h2>

        {/* Programa 1: Audio Terapéutico */}
        <div className="row align-items-center mb-5" data-aos="fade-right">
          <div className="col-md-6">
            <img
              src={meditacionImg}
              alt="Audio Terapéutico"
              className="programa-img img-fluid rounded shadow-sm hover-scale"
            />
          </div>
          <div className="col-md-6">
            <h3 className="text-copper">Audio Terapéutico</h3>
            <p>
              Disfruta música y paisajes sonoros diseñados para inducir estados de
              calma, enfoque y meditación profunda.
            </p>
            <Link to="/programas/audio" className="btn btn-outline-copper">
              Ver más
            </Link>
          </div>
        </div>

        {/* Programa 2: Meditaciones Guiadas */}
        <div className="row align-items-center mb-5 flex-md-row-reverse" data-aos="fade-left">
          <div className="col-md-6">
            <img
              src={audioImg}
              alt="Meditaciones guiadas"
              className=" programa-img img-fluid rounded shadow-sm hover-scale"
            />
          </div>
          <div className="col-md-6">
            <h3 className="text-copper">Meditaciones Guiadas</h3>
            <p>
              Prácticas que combinan respiración, atención plena y visualización
              para cultivar equilibrio interior.
            </p>
            <Link to="/programas/meditaciones" className="btn btn-outline-copper">
              Ver más
            </Link>
          </div>
        </div>

        {/* Programa 3: Eventos y Talleres */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-md-6">
            <img
              src={eventosImg}
              alt="Eventos y talleres"
              className=" programa-img img-fluid rounded shadow-sm hover-scale"
            />
          </div>
          <div className="col-md-6">
            <h3 className="text-copper">Eventos & Talleres</h3>
            <p>
              Participa en encuentros presenciales y virtuales donde podrás
              compartir, sanar y expandir tu experiencia en comunidad.
            </p>
            <Link to="/programas/eventos" className="btn btn-outline-copper">
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}