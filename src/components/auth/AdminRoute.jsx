import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/authContext"; // Casing correcto del path (sensible en Linux)

export default function AdminRoute() {
  const { user, token, loading } = useAuth();

  if (loading) return null;

  // Bloquea acceso si no hay sesión o el rol no es admin
  if (!token || user?.role !== "admin") {
    return <Navigate to="/login-register" replace />;
  }

  return <Outlet />;
}
