import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0">&copy; {new Date().getFullYear()} Mente Libre.&reg; Todos los derechos reservados.</p>
        <ul className="list-inline mb-0">
          <li className="list-inline-item">
            <a href="/filosofia" className="text-light texts-decoration-none">Filosofía</a>
          </li>
          <li className="list-inline-item mx-2">|</li>
          <li className="list-inline-item">
            <a href="/contacto" className="text-light text-decoration-none">Contacto</a>
          </li>
          <li className="list-inline-item mx-2">|</li>
          <li className="list-inline-item">
            <a href="#" className="text-light text-decoration-none">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
