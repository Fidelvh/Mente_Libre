// src/components/layouts/footer.jsx
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";


export default function Footer() {
  return (
    <footer className="mt-10 w-full border-t border-gray-200 dark:border-gray-800 py-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Navegación */}
        <nav className="flex gap-6 text-gray-700 dark:text-gray-300 text-sm">
          <Link to="/filosofia" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            Filosofía
          </Link>

          <Link to="/contacto" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            Contacto
          </Link>

          <a
            href="https://instagram.com/mentelibre-app" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1"
          >
            <Instagram size={16} />
            Instagram
          </a>
        </nav>

        {/* Marca */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Mente Libre. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
