import { API_BASE, handleResponse, authHeaders } from './api.js';

export const listNotes = async () => handleResponse(await fetch(`${API_BASE}/notes`, { headers: authHeaders() }));
export const createNote = async (title, content) => handleResponse(await fetch(`${API_BASE}/notes`, {
  method: 'POST',
  headers: { ...authHeaders(), 'Content-Type': 'application/json' },
  body: JSON.stringify({ title, content })
}));
export const deleteNote = async (id) => handleResponse(await fetch(`${API_BASE}/notes/${id}`, {
  method: 'DELETE',
  headers: authHeaders()
}));
