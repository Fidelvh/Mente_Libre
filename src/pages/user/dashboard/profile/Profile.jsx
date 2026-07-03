// src/pages/user/dashboard/Profile.jsx
import { useEffect, useState } from "react";
import api from "@/services/axios";
import IdentityBlock from "./IdentityBlock";
import RhythmBlock from "./RhythmBlock";
import ToneBlock from "./ToneBlock";
import PauseBlock from "./PauseBlock";
import { useProfile } from "@/context/profileContext";



export default function Profile() {
  const [profile, setProfile] = useState(null);
  
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    api.get("/profile").then(res => setProfile(res.data));
  }, []);

  if (!profile) return null;

  const updateField = (key, value) => {
    setProfile(prev => ({ ...prev, [key]: value }));
  };

  const saveProfile = async () => {
  try {
    setSaving(true);
    setSaved(false);

    const payload = {
      displayName: profile.displayName ?? null,
      rhythm: profile.rhythm ?? null,
      tone: profile.tone ?? null,
      pauseLevel: profile.pauseLevel ?? null,
      tonePreferences: profile.tonePreferences ?? [],
      paused: profile.paused ?? false,
    };

    const res = await api.put("/profile", payload);
    setProfile(res.data);
    setProfileContext(res.data); // Actualiza el contexto global del perfil

    setSaved(true);

    setTimeout(() => setSaved(false), 2500);

  } catch (error) {
    console.error("Error guardando perfil:", error);
  } finally {
    setSaving(false);
  }
};


  return (
    <div className="max-w-3xl space-y-10">
      <IdentityBlock profile={profile} onChange={updateField} />
      <RhythmBlock profile={profile} onChange={updateField} />
      <ToneBlock profile={profile} onChange={updateField} />
      <PauseBlock profile={profile} onChange={updateField} />

      <button
        onClick={saveProfile}
        disabled={saving}
        className={`px-6 py-2 rounded-lg transition
                    ${saved 
                    ? "bg-emerald-300 text-black"
                    : "bg-emerald-500 hover:bg-emerald-600 text-black"}
                  `}
      >
        {saving && "Guardando..."}
        {!saving && !saved && "Guardar cambios"}
        {!saving && saved && "✓ Cambios guardados"}
      </button>

    </div>
  );
}
