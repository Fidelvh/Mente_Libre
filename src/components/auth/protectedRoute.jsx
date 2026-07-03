// src/components/auth/protectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/authContext";

const ProtectedRoute = ({ redirectTo = "/login-register" }) => {
  const { user, token, loading } = useAuth();

  // 1. Mientras AuthContext está validando token → NO redirigir
  if (loading) return null; // puedes poner un loader si quieres

  // 2. Si no hay token → prohibir
  if (!token) return <Navigate to={redirectTo} replace />;

  // 3. Si hay token pero user todavía está cargándose → permitir acceso
  // (porque AuthContext llenará user en segundos)
  return <Outlet />;
};

export default ProtectedRoute;
