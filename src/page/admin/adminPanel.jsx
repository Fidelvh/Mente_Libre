
// src/page/admin/adminPanel.jsx
import { useEffect, useState } from "react";

const AdminPanel = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/admin", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) return <p className="p-6">Cargando panel...</p>;

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">Bienvenido, {data.user.name}</h1>

      <h2 className="text-2xl font-semibold mb-3">Usuarios registrados</h2>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Nombre</th>
              <th className="p-3">Email</th>
              <th className="p-3">Rol</th>
              <th className="p-3">Creado</th>
            </tr>
          </thead>

          <tbody>
            {data.users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-300 dark:border-gray-700"
              >
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">
                  {new Date(user.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* NOTAS */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">Últimas notas</h2>

      {data.latestNotes?.length > 0 ? (
        <ul className="space-y-2">
          {data.latestNotes.map((n) => (
            <li key={n.id} className="p-3 rounded bg-gray-100 dark:bg-gray-800">
              <strong>{n.title}</strong>: {n.content}
              <em className="block text-xs text-gray-500">
                {new Date(n.createdAt).toLocaleString()}
              </em>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay notas recientes</p>
      )}
    </div>
  );
};

export default AdminPanel;
