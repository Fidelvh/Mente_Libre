// src/layouts/UserDashboardLayout.jsx
import { useAuth } from "@/context/authContext.jsx";
import { Link } from "react-router-dom";
import Footer from "@/components/navigation/Footer.jsx";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6 text-gray-800 dark:text-gray-100">

      {/* HEADER */}
      <header className="mb-6">
        <h2 className="text-3xl font-bold">Hola, {user?.name || "Usuario"} 👋</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Bienvenido a tu espacio personal en Mente Libre.
        </p>
      </header>

      {/* ACCESOS RÁPIDOS */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Accesos rápidos</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Meditaciones */}
          <Link
            to="/dashboard/mis-programas?tab=meditaciones"
            className="p-5 rounded-xl shadow bg-white dark:bg-gray-800 hover:shadow-lg transition"
          >
            <h4 className="font-bold">Meditaciones</h4>
            <p>Explora meditaciones guiadas.</p>
          </Link>

          {/* Audios */}
          <Link
            to="/dashboard/mis-programas?tab=audios"
            className="p-5 rounded-xl shadow bg-white dark:bg-gray-800 hover:shadow-lg transition"
          >
            <h4 className="font-bold">Audios</h4>
            <p>Contenido sonoro para tu bienestar.</p>
          </Link>

          {/* Eventos */}
          <Link
            to="/dashboard/mis-programas?tab=eventos"
            className="p-5 rounded-xl shadow bg-white dark:bg-gray-800 hover:shadow-lg transition"
          >
            <h4 className="font-bold">Eventos</h4>
            <p>Charlas, talleres y actividades.</p>
          </Link>

          {/* Foro */}
          <Link
            to="/dashboard/foro"
            className="p-5 rounded-xl shadow bg-white dark:bg-gray-800 hover:shadow-lg transition"
          >
            <h4 className="font-bold">Foro</h4>
            <p>Comparte y conecta.</p>
          </Link>
        </div>
      </section>

      {/* PERFIL */}
      <section>
        <h3 className="text-xl font-semibold mb-3">Tu Perfil</h3>
        <Link
          to="/dashboard/perfil"
          className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Editar Perfil
        </Link>
      </section>
    </div>
  );
}
