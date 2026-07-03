// src/components/auth/userRoute.jsx
import { useAuth } from "@/context/authContext";
import { Routes, Route, Navigate } from "react-router-dom";

export default function UserRoute({ children }) {
  const { user, token } = useAuth();

  if (!token || !user) {
    return <Navigate to="/login-register" replace />;
  }

  return children;
}
