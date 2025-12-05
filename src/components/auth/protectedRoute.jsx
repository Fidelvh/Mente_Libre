// src/components/auth/protectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/authContext";

const ProtectedRoute = ({ redirectTo = "/login-register" }) => {
  const { user, token } = useAuth();
  return token && user ? <Outlet /> : <Navigate to={redirectTo} replace />;

};

export default ProtectedRoute;
