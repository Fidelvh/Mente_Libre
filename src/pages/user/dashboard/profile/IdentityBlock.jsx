function IdentityBlock({ profile, onChange }) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">Cómo quieres que te llamemos</h2>
      <input
        type="text"
        value={profile.displayName || ""}
        onChange={e => onChange("displayName", e.target.value)}
        placeholder="Tu nombre dentro de Mente Libre"
        className="w-full bg-slate-800 rounded px-4 py-2"
      />
      <p className="text-slate-400 text-sm mt-1">
        Esto solo se usa dentro de tu espacio personal.
      </p>
    </section>
  );
}
 export default IdentityBlock;