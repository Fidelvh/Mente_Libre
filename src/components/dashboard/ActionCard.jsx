import { Link } from "react-router-dom";

export default function ActionCard() {
  return (
    <section className="mb-20">
      <div className="grid md:grid-cols-2 gap-6">

        {/* CONTINUAR */}
        <Link
          to="/dashboard/programas"
          className="group bg-slate-900/70 backdrop-blur border border-slate-800 rounded-2xl p-6 transition hover:border-emerald-500/40"
        >
          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400">
            Continuar donde quedé
          </h4>
          <p className="text-sm text-slate-400">
            Retoma tu proceso sin empezar de cero.
          </p>
        </Link>

        {/* EXPLORAR */}
        <Link
          to="/dashboard/memoria"
          className="group bg-slate-900/70 backdrop-blur border border-slate-800 rounded-2xl p-6 transition hover:border-indigo-400/40"
        >
          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400">
            Explorar algo breve
          </h4>
          <p className="text-sm text-slate-400">
            Un ejercicio corto, sin compromiso.
          </p>
        </Link>

      </div>
    </section>
  );
}
