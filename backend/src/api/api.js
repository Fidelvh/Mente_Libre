
// backend/src/api/api.js
// establece la configuración base para las solicitudes API
const API_BASE = 'http://localhost:4000/api';
let token = null;

// permite establecer el token de autenticación
export const setToken = (t) => { token = t; };

// genera los encabezados de autenticación
const authHeaders = () => token ? { Authorization: `Bearer ${token}` } : {};

// maneja la respuesta de la API, lanzando errores si es necesario 
export const handleResponse = async (res) => {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw data;
  return data;
};
export { API_BASE, authHeaders };
