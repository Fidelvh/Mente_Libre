import React from 'react'
import { Link } from 'react-router-dom'

import meditacionImg from '@/assets/images/programas/meditacion.png'
import audioImg from '@/assets/images/programas/audio.jpg'
import eventosImg from '@/assets/images/programas/eventos.jpg'

const programas = [
  {
    title: 'Audio Terapéutico',
    description:
      'Disfruta música y paisajes sonoros diseñados para inducir estados de calma, enfoque y meditación profunda.',
    img: meditacionImg,
    alt: 'Audio Terapéutico',
    link: '/programas/audio',
    aos: 'fade-right',
    reverse: false,
    cta: 'Explorar audios'
  },
  {
    title: 'Meditaciones Guiadas',
    description:
      'Prácticas que combinan respiración, atención plena y visualización para cultivar equilibrio interior.',
    img: audioImg,
    alt: 'Meditaciones guiadas',
    link: '/programas/meditaciones',
    aos: 'fade-left',
    reverse: true,
    cta: 'Comenzar práctica'
  },
  {
    title: 'Eventos & Talleres',
    description:
      'Participa en encuentros presenciales y virtuales donde podrás compartir, sanar y expandir tu experiencia en comunidad.',
    img: eventosImg,
    alt: 'Eventos y talleres',
    link: '/programas/eventos',
    aos: 'fade-up',
    reverse: false,
    cta: 'Ver eventos'
  }
]

export default function Programas() {
  return (
    <section className="section bg-light section-fade">
      <div className="container">
        <h2
          className="text-center text-accent mb-3"
          data-aos="fade-up"
        >
          Nuestros Programas
        </h2>

        <p
          className="text-center text-muted mb-5"
          data-aos="fade-up"
        >
          Programas diseñados para acompañarte en tu bienestar emocional y mental.
        </p>

        {programas.map((programa, index) => (
          <div
            key={index}
            className={`row align-items-center mb-5 ${
              programa.reverse ? 'flex-md-row-reverse' : ''
            }`}
            data-aos={programa.aos}
          >
            <div className="col-md-6">
              <img
                src={programa.img}
                alt={programa.alt}
                className="programa-img img-fluid rounded shadow-sm hover-scale"
              />
            </div>

            <div className="col-md-6">
              <h3 className="text-copper">{programa.title}</h3>
              <p>{programa.description}</p>
              <Link
                to={programa.link}
                className="btn btn-outline-copper"
              >
                {programa.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
