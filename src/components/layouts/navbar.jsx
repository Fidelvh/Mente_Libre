// src/components/layouts/navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/authContext";
import Logo from "@/assets/images/Diseno-Logo-ML.png";
import {motion} from "framer-motion";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") document.documentElement.classList.add("dark");
  }, []);

  const toggleDark = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
  };

  return (
    <nav className="w-full bg-white dark:bg-[#0f172a] shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4 text-gray-800 dark:text-gray-100">

        {/* Logo */}

        <div className="flex items-center gap-3">
          <motion.img
            src={Logo}
            alt="logo"
            className="w-16 h-16 p-1 rounded-3xl object-contain drop-shadow-lg bg-gray-100/40 dark:bg-transparent"
            whileHover={{ scale: 1.20, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

          <Link to="/" className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300">
            Mente Libre
          </Link>
        </div>




        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {/* FILOSOFÍA – Mega Dropdown */}
          <div className="relative group">
            <button className="hover:text-indigo-400 transition">
              Filosofía
            </button>

            {/* Dropdown */}
            <div className="absolute left-0 mt-2 hidden group-hover:flex opacity-0 group-hover:opacity-100 
      transition-all duration-300 ease-out 
      bg-white dark:bg-[#1a2332] text-gray-800 dark:text-gray-100
      shadow-xl rounded-xl p-5 w-[320px] border border-gray-200 dark:border-gray-700">

              <div className="flex flex-col gap-3">

                {/* Imagen estilo mente libre */}
                <img
                  src="/src/assets/images/filosofia/filosofiahero.jpg"
                  alt="Filosofía"
                  className="rounded-lg h-32 w-full object-cover shadow-md"
                />

                <h3 className="text-lg font-semibold">Nuestra Filosofía</h3>

                <p className="text-sm opacity-80 leading-relaxed">
                  Creemos en el bienestar integral, la conexión interior y el crecimiento
                  consciente. Aprende cómo nació Mente Libre y hacia dónde vamos.
                </p>

                <Link
                  to="/filosofia"
                  className="mt-2 text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </div>

          {/* PROGRAMAS – Dropdown */}
          <div className="relative group">
            <button className="hover:text-indigo-400 transition">
              Programas
            </button>

            <div className="absolute left-0 mt-2 hidden group-hover:flex opacity-0 group-hover:opacity-100 
      transition-all duration-500 ease-out 
      bg-white dark:bg-[#1a2332] text-gray-800 dark:text-gray-100
      shadow-xl rounded-xl p-5 w-[260px] border border-gray-200 dark:border-gray-700">

              <div className="flex flex-col gap-3">

                <Link
                  to="/programas/audio"
                  className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition"
                >
                  🎧 <span>Audios Terapéuticos</span>
                </Link>

                <Link
                  to="/programas/meditaciones"
                  className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition"
                >
                  🧘‍♂️ <span>Meditaciones Guiadas</span>
                </Link>

                <Link
                  to="/programas/eventos"
                  className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition"
                >
                  🗓 <span>Eventos y Talleres</span>
                </Link>

              </div>
            </div>
          </div>


          <button onClick={toggleDark} className="px-2">🌓</button>

          {!user ? (
            <Link to="/login-register" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
              Iniciar sesión
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/dashboard">{user.name}</Link>
              <button onClick={logout} className="text-red-400">Cerrar sesión</button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-[#0f172a] px-4 pb-4 flex flex-col gap-3 shadow text-gray-800 dark:text-gray-100">
          <Link to="/programas/audio" onClick={() => setOpen(false)}>Programas</Link>
          <Link to="/programas/meditaciones" onClick={() => setOpen(false)}>Meditaciones</Link>
          <Link to="/programas/eventos" onClick={() => setOpen(false)}>Eventos</Link>

          <button onClick={toggleDark}>🌓 Modo oscuro</button>

          {!user ? (
            <Link to="/login-register" className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg">
              Iniciar sesión
            </Link>
          ) : (
            <>
              <Link to="/dashboard" onClick={() => setOpen(false)}>Mi Panel</Link>
              <button onClick={logout} className="text-red-400">Cerrar sesión</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
