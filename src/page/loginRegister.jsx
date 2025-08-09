/**
 * LoginRegister.jsx
 *
 * Página combinada de inicio de sesión y registro.
 * El usuario puede alternar entre ambos formularios sin recargar la página.
 * Preparado para conectar con backend (autenticación y creación de cuenta).
 */

import { useState } from 'react'
import Layout from '../components/layout'

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
  })

  const toggleForm = () => setIsLogin((prev) => !prev)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const endpoint = isLogin ? '/api/login' : '/api/register'

    // ⚠️ Aquí se conectará con tu backend Express más adelante
    console.log(`POST a ${endpoint}`, formData)

    alert(isLogin ? 'Inicio de sesión exitoso' : 'Registro exitoso')
    setFormData({ nombre: '', email: '', password: '' })
  }

  return (
    <Layout>
      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center mb-4">
              <h2 className="text-copper fw-bold">
                {isLogin ? 'Inicia sesión' : 'Crea una cuenta'}
              </h2>
              <p>
                {isLogin
                  ? 'Ingresa tus credenciales para continuar.'
                  : 'Regístrate para acceder a todo el contenido.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
              {!isLogin && (
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              )}

              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                {isLogin ? 'Iniciar sesión' : 'Registrarse'}
              </button>
            </form>

            <div className="text-center mt-3">
              <button className="btn btn-link" onClick={toggleForm}>
                {isLogin
                  ? '¿No tienes cuenta? Regístrate aquí'
                  : '¿Ya tienes cuenta? Inicia sesión'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
