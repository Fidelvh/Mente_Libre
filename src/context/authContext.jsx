import { createContext, useContext, useState, useEffect } from "react";
import api from "@/services/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // ===============================
  // USER (defensivo)
  // ===============================
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("user");
      if (!saved || saved === "undefined") return null;
      return JSON.parse(saved);
    } catch (error) {
      console.warn("AuthContext: user corrupto en localStorage, limpiando");
      localStorage.removeItem("user");
      return null;
    }
  });

  // ===============================
  // TOKEN (defensivo)
  // ===============================
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("token");
    return savedToken && savedToken !== "undefined" ? savedToken : null;
  });

  const [loading, setLoading] = useState(true);

  // ===============================
  // Activar token en Axios
  // ===============================
  useEffect(() => {
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);
    } else {
      delete api.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  // ===============================
  // Cargar sesión activa
  // ===============================
  const fetchMe = async () => {
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await api.get("/auth/me");
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    } catch (error) {
      logout();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMe();
  }, [token]);

  // ===============================
  // REGISTRO
  // ===============================
  const register = async (name, email, password) => {
    const res = await api.post("/auth/register", {
      name,
      email,
      password,
    });

    setUser(res.data.user);
    setToken(res.data.token);

    return res.data.user;
  };

  // ===============================
  // LOGIN
  // ===============================
  const login = async (email, password) => {
    const res = await api.post("/auth/login", {
      email,
      password,
    });

    setUser(res.data.user);
    setToken(res.data.token);

    return res.data.user;
  };

  // ===============================
  // LOGOUT
  // ===============================
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  // ===============================
  // PROVIDER
  // ===============================
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
