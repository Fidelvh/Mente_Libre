// src/pages/admin/adminRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/authContext.jsx';


export default function AdminRoute() {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user || user.role !== "admin") {
    return <Navigate to="/dasboard" replace />;
  }

  return <Outlet />;
}
