import { useAuth } from "@/context/authContext";
import { useProfile } from "@/context/profileContext";


export default function WelcomeBlock() {
  const { user } = useAuth();
  const { profile } = useProfile();


  return (
    <section
      className="
        relative overflow-hidden rounded-3xl p-10
        bg-gradient-to-br from-emerald-900/30 via-slate-900 to-slate-950
        border border-emerald-800/30
        shadow-xl
      "
    >
      {/* Fondo decorativo suave */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-3xl font-semibold text-white mb-4">Bienvenido,{" "}{profile?.displayName || user?.name || "estás en casa"}
        </h2>

        <p className="text-slate-300 leading-relaxed mb-8">
          Este es un espacio creado para que puedas pausar, respirar y
          reconectar contigo mismo. No hay exigencias aquí. Avanza a tu ritmo.
        </p>

        {/* Acción suave */}
        <button
          className="
            inline-flex items-center gap-2
            px-6 py-3 rounded-xl
            bg-emerald-500/90 hover:bg-emerald-500
            text-slate-900 font-medium
            transition
          "
        >
          Comenzar con un momento personal
        </button>

        {/* Texto de baja presión */}
        <p className="mt-4 text-xs text-slate-400">
          Solo tomará unos segundos. Puedes omitirlo cuando quieras.
        </p>
      </div>
    </section>
  );
}
