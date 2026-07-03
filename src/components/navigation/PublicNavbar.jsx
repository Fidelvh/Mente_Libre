// src/components/navigation/PublicNavbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/images/Diseno-Logo-ML.png";
import { motion } from "framer-motion";
import { useTheme } from "@/context/themeContext";

export default function PublicNavbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-950/80 backdrop-blur">
      <nav className="ml-container h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <motion.img
            src={Logo}
            alt="Mente Libre"
            className="w-10 h-10 rounded-xl"
            whileHover={{ scale: 1.05 }}
          />
          <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Mente Libre
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900" to="/filosofia">
            Filosofía
          </Link>
          <Link className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900" to="/programas">
            Programas
          </Link>

          <button
            onClick={toggleTheme}
            className="rounded-full px-3 py-1.5 text-sm font-medium
                       bg-neutral-200 dark:bg-neutral-800
                       text-neutral-800 dark:text-neutral-200
                       hover:bg-neutral-300 dark:hover:bg-neutral-700
                       transition"
          >
            {theme === "dark" ? "Claro" : "Oscuro"}
          </button>

          <Link
            to="/login-register"
            className="px-4 py-2 rounded-lg bg-primary text-white font-medium"
          >
            Ingresar
          </Link>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-neutral-800 dark:text-neutral-200"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>
    </header>
  );
}
