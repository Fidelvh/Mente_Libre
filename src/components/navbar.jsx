import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' 
import logo from '/src/assets/Diseno Logo ML.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = `navbar navbar-expand-lg fixed-top transition-all ${
    scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
  }`

  const linkClass = `nav-link fw-semibold ${
    scrolled ? 'text-copper' : 'text-white'
  }`

  const buttonClass = `btn ${scrolled ? 'btn-outline-copper' : 'btn-light'} ms-lg-3`

  return (
    <nav className={navClass}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <div className="d-flex align-items-center">
  <img
    src={logo}
    alt="Mente Libre"
    height="50"
    className="rounded-circle shadow-sm me-2"
  />
  <span
    className={scrolled ? 'text-copper' : 'text-navbar-light'}
    style={{
      fontFamily: 'Cormorant Garamond, serif',
      fontWeight: 600,
      fontSize: '1.25rem'
    }}
  >
    Mente Libre
  </span>
</div>

        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className={linkClass} href="/">Inicio</a></li>
            <li className="nav-item">
              <Link className="nav-link" to="/filosofia">Filosofía</Link></li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Programas
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/programas/audio">Audio</Link></li>
                <li><Link className="dropdown-item" to="/programas/meditaciones">Meditaciones</Link></li>
                <li><Link className="dropdown-item" to="/programas/eventos">Eventos</Link></li>
              </ul>
            </li>
            <li className="nav-item"><a className={linkClass} href="/page/foro">Foro</a></li>
            <li className="nav-item">
              <a className={buttonClass} href="/page/loginRegister">Suscríbete</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
