
// backend/src/api/api.js
const API_BASE = 'http://localhost:4000/api';
let token = null;
export const setToken = (t) => { token = t; };
const authHeaders = () => token ? { Authorization: `Bearer ${token}` } : {};
export const handleResponse = async (res) => {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw data;
  return data;
};
export { API_BASE, authHeaders };
