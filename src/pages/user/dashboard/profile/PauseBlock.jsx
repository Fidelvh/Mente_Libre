
function PauseBlock({ profile, onChange }) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">Pausa consciente</h2>
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={profile.paused}
          onChange={e => onChange("paused", e.target.checked)}
        />
        <span className="text-slate-300">
          No recibir sugerencias por ahora
        </span>
      </label>
    </section>
  );
}
 export default PauseBlock;