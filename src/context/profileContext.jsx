import { createContext, useContext, useEffect, useState } from "react";
import api from "@/services/axios";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadProfile = async () => {
    try {
      const res = await api.get("/profile");
      setProfile(res.data);
    } catch (err) {
      console.error("Error cargando perfil", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, setProfile, loading }}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);
