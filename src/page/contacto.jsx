/**
 * Contacto.jsx
 *
 * Página de contacto donde los usuarios pueden enviar
 * consultas, sugerencias o solicitudes de información.
 *
 * Este formulario está preparado para enviar datos al backend
 * (por ejemplo, a una ruta POST `/api/contacto`)
 */

import Layout from '../components/layout'
import { useState } from 'react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Aquí iría la conexión con el backend (ej. vía fetch o axios)
    console.log('Enviando datos de contacto:', formData)
    alert('Mensaje enviado. ¡Gracias por contactarnos!')
    setFormData({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <Layout>
      <section className="container py-5">
        <h2 className="text-center text-copper mb-4">Contáctanos</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label fw-semibold">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label fw-semibold">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="form-control"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}
