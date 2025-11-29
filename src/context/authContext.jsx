// src/context/authContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  // Configurar axios UNA SOLA VEZ cuando cambie el token
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  // Obtener usuario autenticado
  const fetchMe = async () => {
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await axios.get("http://localhost:4000/api/auth/me");
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    } catch (err) {
      console.warn("⚠️ Token inválido, cerrando sesión.");
      logout();
    } finally {
      setLoading(false);
    }
  };

  // Ejecutar cuando cargue la página o cambie token
  useEffect(() => {
    fetchMe();
  }, [token]);

  // Registrar
  const register = async (name, email, password) => {
    const res = await axios.post("http://localhost:4000/api/auth/register", {
      name,
      email,
      password,
    });

    const { user, token } = res.data;

    setUser(user);
    setToken(token);

    return user;
  };

  // Login
  const login = async (email, password) => {
    const res = await axios.post("http://localhost:4000/api/auth/login", {
      email,
      password,
    });

    const { user, token } = res.data;

    setUser(user);
    setToken(token);

    return user;
  };

  // Logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

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
