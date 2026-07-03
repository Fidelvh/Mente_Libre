// src/pages/user/loginRegister.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/authContext.jsx";
import { useNavigate } from "react-router-dom";

export default function LoginRegister() {
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // 🔐 LIMPIEZA TOTAL DE SESIÓN AL ENTRAR
 /*  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
  }, []);
 */
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      if (isRegister) {
        await register(form.name, form.email, form.password);
      } else {
        await login(form.email, form.password);
      }

      navigate("/dashboard", { replace: true }); // ✅ evita volver atrás con sesión sucia
    } catch (err) {
      alert("Error: " + (err.response?.data?.message || "Intenta nuevamente."));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">

        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          {isRegister ? "Crear cuenta" : "Iniciar sesión"}
        </h2>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>

          {isRegister && (
            <div>
              <label className="block mb-1 text-gray-800 dark:text-gray-200 font-medium">
                Nombre completo
              </label>
              <input
                name="name"
                onChange={handleChange}
                value={form.name}
                className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 border"
              />
            </div>
          )}

          <div>
            <label className="block mb-1 text-gray-800 dark:text-gray-200 font-medium">
              Correo
            </label>
            <input
              name="email"
              onChange={handleChange}
              value={form.email}
              className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 border"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-800 dark:text-gray-200 font-medium">
              Contraseña
            </label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              value={form.password}
              className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 border"
            />
          </div>

          <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition">
            {isRegister ? "Registrarse" : "Iniciar sesión"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
          {isRegister ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
          <span
            className="text-indigo-500 cursor-pointer hover:underline"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Inicia sesión" : "Regístrate aquí"}
          </span>
        </p>
      </div>
    </div>
  );
}
