import { useAuth } from "@/context/authContext";
import { useState } from "react";

export default function Perfil() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || "");

  return (
    <div className="text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-bold mb-6">Mi Perfil</h2>

      <form className="max-w-lg space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        
        <div>
          <label className="font-semibold">Nombre</label>
          <input 
            type="text"
            className="w-full mt-1 p-2 rounded bg-gray-100 dark:bg-gray-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button 
          type="button"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Guardar cambios
        </button>
      </form>
    </div>
  );
}
