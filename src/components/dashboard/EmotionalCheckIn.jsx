import { useState } from "react";

const emotions = [
  { label: "🌿 Tranquilo", value: "calm" },
  { label: "😐 Neutro", value: "neutral" },
  { label: "😔 Cansado", value: "tired" },
  { label: "😟 Ansioso", value: "anxious" },
  { label: "🙂 Esperanzado", value: "hopeful" },
];

export default function EmotionalCheckIn() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="mb-16">
      <div className="bg-slate-900/70 backdrop-blur rounded-2xl p-8 border border-slate-800">

        <h3 className="text-xl font-semibold text-white mb-2">
          ¿Cómo te sientes ahora mismo?
        </h3>

        <p className="text-slate-400 mb-6 text-sm">
          No hay respuestas correctas. Solo nota.
        </p>

        <div className="flex flex-wrap gap-3">
          {emotions.map((emotion) => (
            <button
              key={emotion.value}
              onClick={() => setSelected(emotion.value)}
              className={`px-5 py-2 rounded-full text-sm transition
                ${
                  selected === emotion.value
                    ? "bg-emerald-500 text-slate-900"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }
              `}
            >
              {emotion.label}
            </button>
          ))}
        </div>

        {selected && (
          <p className="mt-6 text-emerald-400 text-sm">
            Gracias por notarlo.
          </p>
        )}
      </div>
    </section>
  );
}
