import { useState } from "react";

export default function MicroExercise() {
  const [started, setStarted] = useState(false);

  return (
    <section className="mt-14 max-w-xl">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

        {!started ? (
          <>
            <h3 className="text-base font-semibold text-emerald-400">
              Pausa breve
            </h3>

            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              No necesitas calmarte.<br />
              Solo volver un momento aquí.
            </p>

            <button
              onClick={() => setStarted(true)}
              className="mt-4 text-sm text-emerald-400 hover:text-emerald-300 transition"
            >
              Tomar esta pausa
            </button>
          </>
        ) : (
          <>
            <p className="text-sm text-slate-300 leading-relaxed">
              Inhala suave por la nariz.<br />
              Exhala lento por la boca.
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Hazlo a tu ritmo. No hay prisa.
            </p>

            <button
              onClick={() => setStarted(false)}
              className="mt-4 text-xs text-slate-500 hover:text-slate-300 transition"
            >
              Volver
            </button>
          </>
        )}
      </div>
    </section>
  );
}
