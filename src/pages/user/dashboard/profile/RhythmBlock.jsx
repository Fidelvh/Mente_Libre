// src/pages/user/dashboard/profile/RhythmBlock.jsx

function RhythmBlock({ profile, onChange }) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">Ritmo de acompañamiento</h2>
      <div className="flex gap-4">
        {["SOFT", "NORMAL", "PRESENT"].map(r => (
          <button
            key={r}
            onClick={() => onChange("rhythm", r)}
            className={`px-4 py-2 rounded-lg border ${
              profile.rhythm === r
                ? "border-emerald-400 text-emerald-400"
                : "border-slate-700 text-slate-400"
            }`}
          >
            {r}
          </button>
        ))}
      </div>
    </section>
  );
}
export default RhythmBlock; 
