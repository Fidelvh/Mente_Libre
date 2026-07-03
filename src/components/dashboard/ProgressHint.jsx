export default function ProgressHint() {
  return (
    <section className="mt-16">
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/70 to-slate-950/80 p-6">

        {/* LÍNEA SUAVE DECORATIVA */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

        <p className="text-sm text-slate-300 leading-relaxed">
          Tu proceso sigue activo, incluso cuando descansas.
        </p>

        <p className="mt-2 text-xs text-slate-500">
          Volver cuando lo necesites también es avanzar.
        </p>
      </div>
    </section>
  );
}
