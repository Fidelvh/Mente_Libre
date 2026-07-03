// src/layouts/UserDashboardLayout.jsx
import { useAuth } from "@/context/authContext.jsx";
import { Link, Outlet } from "react-router-dom";
import Logo from "@/assets/images/Diseno-Logo-ML.png";
import Footer from "@/components/navigation/footer.jsx";
import { motion } from "framer-motion";
import { ProfileProvider } from "../context/profileContext";

// Layout para el dashboard del usuario autenticado
export default function UserDashboardLayout() {
  const { user, logout } = useAuth();

  return (
    <ProfileProvider> {
      <div className="h-screen w-screen flex bg-slate-950 text-white overflow-hidden">

        {/* SIDEBAR FIJA */}
        <aside className="w-64 flex flex-col bg-slate-900 border-r border-slate-800 p-6">

          {/* LOGO */}
          <div className="flex items-center gap-2 mb-10">
            <motion.img
              src={Logo}
              alt="Mente Libre"
              className="w-16 h-16 p-1 rounded-3xl object-contain drop-shadow-lg bg-gray-100/40 dark:bg-transparent"
              whileHover={{ scale: 1.1, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <span className="text-lg font-bold text-emerald-400">
              Mente Libre
            </span>
          </div>

          {/* MENÚ */}
          <nav className="flex flex-col gap-4 text-sm">
            <Link to="/dashboard" className="hover:text-emerald-400 ">Inicio</Link>
            <Link to="/dashboard/programas" className="hover:text-emerald-400">Mis Programas</Link>
            <Link to="/dashboard/foro" className="hover:text-emerald-400">Foro</Link>
            <Link to="/dashboard/memoria" className="hover:text-emerald-400">Memoria Viva</Link>
            <Link to="/dashboard/progreso" className="hover:text-emerald-400">Mi Progreso</Link>
            <Link to="/dashboard/perfil" className="hover:text-emerald-400">Mi Perfil</Link>
          </nav>

          {/* LOGOUT FIJO ABAJO */}
          <button
            onClick={logout}
            className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            Cerrar sesión
          </button>
        </aside>

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-1 overflow-y-auto p-8 bg-gradient-to-br from-slate-950 to-slate-900">

          {/* HEADER SUPERIOR */}
          <header className="mb-10">
            <h1 className="text-4xl font-bold">
              Que paha oe cahallin
            </h1>
            <p className="tex1t-slate-400">
              Naah mahmorrraa
            </p>
          </header>
    {/*       <header className="mb-10">
            <h1 className="text-4xl font-bold">
              Tu espacio personal, {user?.firstName || "Usuario"}
            </h1>
            <p className="text-slate-400">
              Este es tu espacio personal en Mente Libre.
            </p>
          </header> */}

          {/* RUTAS HIJAS: DashboardHome, Memoria, Perfil, etc */}
          <Outlet />

        </main>
      </div>
    }</ProfileProvider>// Cierre de ProfileProvider
  );
}
