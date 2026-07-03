// src/components/navigation/AuthNavbar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "@/context/authContext";

export default function AuthNavbar() {
  const { user, logout } = useAuth();

  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-900 text-neutral-100">
      <nav className="ml-container h-14 flex items-center justify-between">
        <Link to="/dashboard" className="font-semibold">
          Mente Libre
        </Link>

        <div className="flex items-center gap-4 text-sm">
          <span className="opacity-80">
            {user?.preferredName || user?.name}
          </span>
          <button
            onClick={logout}
            className="text-red-400 hover:text-red-500 transition"
          >
            Cerrar sesión
          </button>
        </div>
      </nav>
    </header>
  );
}
