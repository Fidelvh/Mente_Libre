export default function Progreso() {
  return (
    <div className="text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-bold mb-6">Tu Progreso</h2>

      <div className="grid gap-6">

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Días de meditación</h3>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
            <div className="bg-indigo-600 h-4 rounded-full" style={{ width: "40%" }}></div>
          </div>
          <p className="mt-2 text-sm text-gray-500">12 / 30 días</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Lecciones completadas</h3>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
            <div className="bg-indigo-600 h-4 rounded-full" style={{ width: "70%" }}></div>
          </div>
          <p className="mt-2 text-sm text-gray-500">7 / 10 lecciones</p>
        </div>

      </div>
    </div>
  );
}
