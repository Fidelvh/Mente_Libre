// backend/src/api/auth.js

// maneja las solicitudes relacionadas con la autenticación
import { API_BASE, handleResponse, authHeaders, setToken } from './api.js';

// registra un nuevo usuario
export const register = async (email, password, name) => {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name })
  });
  const data = await handleResponse(res);
  setToken(data.token);
  return data;
};

export const login = async (email, password) => {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await handleResponse(res);
  setToken(data.token);
  return data;
};

export const me = async () => {
  const res = await fetch(`${API_BASE}/auth/me`, { headers: authHeaders() });
  return handleResponse(res);
};
