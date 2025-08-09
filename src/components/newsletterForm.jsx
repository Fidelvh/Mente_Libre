import React, { useState } from 'react'

export default function NewsletterForm() {
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value.trim()
    const consent = form.consent.checked

    if (!email || !consent) {
      setFormStatus('Debes ingresar tu email y aceptar los términos.')
      return
    }

    // Aquí conectarás con el backend (API REST)
    setFormStatus('¡Gracias por suscribirte!')
    form.reset()
  }

  return (
    <section className="bg-white py-5 border-top">
      <div className="container text-center">
        <h2 className="mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Suscríbete al boletín
        </h2>
        <p className="mb-4">
          Recibe meditaciones, artículos y novedades directamente en tu correo.
        </p>

        <form onSubmit={handleSubmit} className="row justify-content-center">
          <div className="col-md-4 mb-2">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Tu correo electrónico"
              required
            />
          </div>
          <div className="col-md-4 mb-2 text-start">
            <div className="form-check">
              <input
                type="checkbox"
                name="consent"
                className="form-check-input"
                id="consentCheck"
                required
              />
              <label className="form-check-label" htmlFor="consentCheck">
                Acepto recibir correos de Mente Libre
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>

        {formStatus && (
          <p className="mt-3 fw-semibold text-danger">{formStatus}</p>
        )}
      </div>
    </section>
  )
}
