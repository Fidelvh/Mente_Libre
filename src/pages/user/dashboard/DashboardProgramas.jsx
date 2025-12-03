// src/components/dashboard/misProgramas.jsx
import { useSearchParams } from "react-router-dom";

export default function MisProgramas() {
  const [params, setParams] = useSearchParams();
  const tab = params.get("tab") || "meditaciones";

  const tabs = [
    { id: "meditaciones", label: "Meditaciones" },
    { id: "audios", label: "Audios" },
    { id: "eventos", label: "Eventos" },
  ];

  return (
    <div className="text-gray-800 dark:text-gray-100">

      <h2 className="text-2xl font-bold mb-4">Mis Programas</h2>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700 mb-6">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setParams({ tab: t.id })}
            className={`pb-2 ${
              tab === t.id 
                ? "border-b-2 border-indigo-500 font-semibold" 
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Contenido dinámico */}
      {tab === "meditaciones" && <div>Meditaciones disponibles aquí…</div>}
      {tab === "audios" && <div>Audios para bienestar…</div>}
      {tab === "eventos" && <div>Eventos y talleres…</div>}
    </div>
  );
}
