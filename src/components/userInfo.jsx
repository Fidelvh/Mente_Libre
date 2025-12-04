// src/components/userInfo.jsx
import { useAuth } from '@/context/authContext.jsx'

export default function UserInfo() {
  const { user, logout } = useAuth()

  if (!user) {
    return (
      <div className="text-center mt-4">
        <p>No estás autenticado.</p>
      </div>
    )
  }

  return (
    <div className="card mt-4 p-3 shadow-sm">
      <h5>Usuario autenticado:</h5>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Correo:</strong> {user.email}</p>
      <p><strong>Nombre:</strong> {user.name || 'Sin nombre'}</p>
      <button className="btn btn-danger mt-2" onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  )
}
