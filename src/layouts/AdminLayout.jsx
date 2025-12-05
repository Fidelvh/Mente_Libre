// src/layouts/AdminLayout.jsx
import { Outlet, NavLink } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-slate-100">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Panel Admin</h2>

        <nav className="space-y-4">
          <NavLink to="/admin" className="block hover:text-amber-400">Usuarios</NavLink>
          <NavLink to="/admin/memorias" className="block hover:text-amber-400">Memorias</NavLink>
          <NavLink to="/admin/sistema" className="block hover:text-amber-400">Sistema</NavLink>
        </nav>
      </aside>

      {/* Contenido */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
}
