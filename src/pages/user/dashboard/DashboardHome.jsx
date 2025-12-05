// src/pages/user/dashboard/DashboardHome.jsx
/* import { Link, Outlet } from "react-router-dom"; */
import { useAuth } from "@/context/authContext.jsx";


/* export default function UserDashboardLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="flex min-h-screen bg-mlwhite dark:bg-gray-900">
 */
      {/* SIDEBAR (desktop) */}
      {/* <aside className="hidden md:flex w-64 flex-col bg-white dark:bg-gray-800 border-r border-gray-100 dark:border-gray-800 p-6">
        <div className="flex flex-col items-center">
          <img src={Logo} alt="Mente Libre" className="w-20 h-20 rounded-full mb-3 object-cover" />
          <h3 className="text-lg font-semibold text-mldeep dark:text-mlbeige">Mente Libre</h3>
        </div> */}

        {/* {<nav className="mt-8 flex flex-col gap-2">
          <Link to="/dashboard" className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-mldeep dark:text-mlbeige">
            Inicio
          </Link>
          <Link to="/dashboard/mis-programas" className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-mldeep dark:text-mlbeige">
            Mis Programas
          </Link>
          <Link to="/dashboard/progreso" className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-mldeep dark:text-mlbeige">
            Mi Progreso
          </Link>
          <Link to="/dashboard/perfil" className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-mldeep dark:text-mlbeige">
            Mi Perfil
          </Link>
        </nav>} */}

        {/* <div className="mt-auto">
          <button
            onClick={logout}
            className="w-full px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Cerrar sesión
          </button>
        </div>
      </aside> */}

      {/* MAIN */}
      {/*  */}

        {/* MAIN CONTENT */}
        {/* <main className="flex-1 p-6">
          <div className="mb-6 rounded-lg">
            <h1 className="text-2xl font-semibold text-mldeep dark:text-mlbeige">
              Hola, {user?.name || "Usuario"} 👋
            </h1>
          </div> */}

          {/* React Router renderiza componentes hijos */}
         {/*  <Outlet />
        </main> */}

        {/* FOOTER ✔ ahora visible dentro del dashboard */}
       {/*  <Footer />
      </div> */}
{/*     </div>
  );
} */}

export default function DashboardHome() {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Bienvenido, {user?.name || "Usuario"} 👋
      </h2>

      <p className="text-slate-400">
        Desde aquí podrás acceder a tus programas, memorias, progreso y perfil.
      </p>

      {/* Aquí después pondremos stats, cards, progreso, etc */}
    </div>
  );
}
