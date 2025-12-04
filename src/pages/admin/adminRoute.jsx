// src/pages/admin/adminRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/authContext.jsx';

export default function AdminRoute() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/acceso" />; // no logueado
  if (user.role !== 'admin') return <Navigate to="/" />; // no es admin

  return <Outlet />; // renderiza rutas hijas
}
