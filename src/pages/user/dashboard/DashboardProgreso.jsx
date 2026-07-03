export default function DashboardProgreso() {
  return (
    <div className="space-y-8 max-w-5xl">

      {/* 1️⃣ HEADER EMOCIONAL */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-white">
          Tu progreso
        </h2>
        <p className="text-slate-400 max-w-xl">
          El avance no siempre es visible día a día.
          Aquí puedes observar tu proceso con más perspectiva.
        </p>
      </section>

      {/* 2️⃣ TENDENCIA GENERAL */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-medium text-white mb-4">
          Tendencia reciente
        </h3>

        {/* Visual placeholder (sin números aún) */}
        <div className="flex items-end gap-3 h-32">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div
              key={i}
              className="flex-1 rounded-lg bg-gradient-to-t from-emerald-500/20 to-emerald-400/40"
              style={{ height: `${40 + i * 5}%` }}
            />
          ))}
        </div>

        <p className="mt-4 text-sm text-slate-400">
          Vista general de los últimos días.
        </p>
      </section>

      {/* 3️⃣ LECTURA INTERPRETATIVA */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-medium text-white mb-3">
          Lectura del proceso
        </h3>

        <p className="text-slate-300 leading-relaxed max-w-2xl">
          En este período se percibe una mayor estabilidad emocional,
          con variaciones normales. No se observa retroceso,
          sino adaptación progresiva.
        </p>
      </section>

      {/* 4️⃣ MICRO-LOGROS SILENCIOSOS */}
      <section className="space-y-4">
        <h3 className="text-lg font-medium text-white">
          Pequeñas continuidades
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "Has sostenido este espacio durante la semana.",
            "Volviste incluso después de un día difícil.",
            "Estás construyendo constancia sin exigencia.",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-slate-300 text-sm"
            >
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* 5️⃣ CIERRE CONTENEDOR */}
      <section className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
        <p className="text-emerald-300">
          No hay nada que mejorar ahora.
          Solo seguir presente.
        </p>
      </section>

    </div>
  );
}
