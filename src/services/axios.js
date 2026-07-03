// src/services/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true, // ✅ PARA COOKIES DE REFRESH
});

// ✅ INTERCEPTOR DE RESPUESTA
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // El backend actual no implementa refresh token.
    // Si recibimos 401, limpiamos sesión y redirigimos a login.
    if (error.response?.status === 401) {
      console.warn("❌ Sesión vencida o token inválido");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login-register";
    }

    return Promise.reject(error);
  }
);

export default api;
