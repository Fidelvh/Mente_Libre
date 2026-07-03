// src/components/navigation/Navbar.jsx
import { useAuth } from "@/context/authContext";
import PublicNavbar from "./PublicNavbar";
import AuthNavbar from "./AuthNavbar";

export default function Navbar() {
  const { user, loading } = useAuth();

  if (loading) return null;

  return user ? <AuthNavbar /> : <PublicNavbar />;
}
