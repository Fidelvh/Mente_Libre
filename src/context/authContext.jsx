import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token') || null)

  // ✅ Función para registrar
  const register = async (nombre, email, password) => {
    const res = await fetch('http://localhost:4000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: nombre, email, password })
    })

    if (!res.ok) {
      const errorData = await res.json()
      throw new Error(errorData.error || 'Error en el registro')
    }

    const data = await res.json()
    setUser(data.user)
    setToken(data.token)
    localStorage.setItem('token', data.token)
  }

  // ✅ Función para iniciar sesión
  const login = async (email, password) => {
    const res = await fetch('http://localhost:4000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    if (!res.ok) {
      const errorData = await res.json()
      throw new Error(errorData.error || 'Error en el inicio de sesión')
    }

    const data = await res.json()
    setUser(data.user)
    setToken(data.token)
    localStorage.setItem('token', data.token)
  }

  // ✅ Función para obtener el usuario autenticado desde el backend
  const fetchMe = async () => {
    if (!token) return
    const res = await fetch('http://localhost:4000/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` }
    })

    if (res.ok) {
      const data = await res.json()
      setUser(data.user)
    } else {
      setUser(null)
      localStorage.removeItem('token')
      setToken(null)
    }
  }

  // ✅ Cargar usuario automáticamente si hay token guardado
  useEffect(() => {
    fetchMe()
  }, [token])

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
