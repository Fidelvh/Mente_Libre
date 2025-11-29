// src/components/protectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/authContext";

const ProtectedRoute = ({ redirectTo = "/login" }) => {
  const { user, token } = useAuth();

  if (!user || !token) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
