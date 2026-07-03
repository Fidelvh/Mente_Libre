// src/components/navigation/footer.jsx
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";


export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-950">
      <div className="ml-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Marca */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Mente Libre
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Una plataforma para el bienestar emocional, la consciencia y el desarrollo
              personal sostenido.
            </p>
          </div>

          {/* Navegación */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="footer-link">Inicio</Link>
              </li>
              <li>
                <Link to="/programas" className="footer-link">Programas</Link>
              </li>
              <li>
                <Link to="/beneficios" className="footer-link">Beneficios</Link>
              </li>
              <li>
                <Link to="/contacto" className="footer-link">Contacto</Link>
              </li>
            </ul>

          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terminos" className="footer-link">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="footer-link">
                  Política de privacidad
                </Link>
              </li>
            </ul>

          </div>

        </div>

        {/* Línea inferior */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Mente Libre. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
