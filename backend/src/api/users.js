import { API_BASE, handleResponse, authHeaders } from './api.js';

export const listUsers = async () => handleResponse(await fetch(`${API_BASE}/users`, { headers: authHeaders() }));
export const deleteUser = async (id) => handleResponse(await fetch(`${API_BASE}/users/${id}`, {
  method: 'DELETE',
  headers: authHeaders()
}));
