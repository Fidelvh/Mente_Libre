// src/components/hero.jsx
import React from 'react'

export default function Hero() {
  return (
    <section className="hero-section hero-bg-zoom position-relative d-flex align-items-center justify-content-center text-white"
  style={{ backgroundImage: `url('/img/cordillera.png')`, height: '100vh' }}>
      
  <div className="container text-center py-5 rounded" data-aos="fade-down" data-aos-delay="300" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
    <h1 className="display-4 fw-bold" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#b8860b' }}>
      Descubre tu propósito interior
    </h1>
      <p className="lead mt-3" style={{ color: '#d2a679' }}> Bienvenido a <strong>Mente Libre</strong>, tu espacio para florecer en el autoconocimiento y la sanación.
    </p>
    <a href="#" className="btn btn-primary btn-lg mt-3">
      Explorar programas
    </a>
  </div>
</section>


  )
}
