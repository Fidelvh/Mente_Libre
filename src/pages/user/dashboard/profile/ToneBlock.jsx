// src/pages/user/dashboard/profile/ToneBlock.jsx
function ToneBlock({ profile, onChange }) {
  const options = ["BREVE", "REFLEXIVO", "PREGUNTAS"];

  const toggle = value => {
    const current = profile.tonePreferences || [];
    const next = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];
    onChange("tonePreferences", next);
  };

  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">
        Cómo prefieres que te hablemos
      </h2>
      <div className="flex gap-3">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => toggle(opt)}
            className={`px-3 py-2 rounded-lg ${
              profile.tonePreferences?.includes(opt)
                ? "bg-emerald-500 text-black"
                : "bg-slate-800 text-slate-400"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </section>
  );
}

export default ToneBlock;