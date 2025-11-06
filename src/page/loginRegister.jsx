import { useState } from 'react'
import Layout from '../components/layout'
import { useAuth } from '../context/authContext'
import UserInfo from '../components/userInfo'


export default function LoginRegister() {
  const { login, register } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const toggleForm = () => {
    setError(null)
    setIsLogin((prev) => !prev)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      if (isLogin) {
        await login(formData.email, formData.password)
        alert('✅ Inicio de sesión exitoso')
      } else {
        await register(formData.nombre, formData.email, formData.password)
        alert('✅ Registro exitoso')
      }
      setFormData({ nombre: '', email: '', password: '' })
    } catch (err) {
      setError('❌ ' + err.message)
    } finally {
      setLoading(false)
    }
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

              {error && <p className="text-danger text-center">{error}</p>}

              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? 'Procesando...' : isLogin ? 'Iniciar sesión' : 'Registrarse'}
              </button>
            </form>
            <UserInfo />


            <div className="text-center mt-4">
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
