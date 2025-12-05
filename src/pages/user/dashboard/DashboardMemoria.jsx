// src/pages/user/dashboard/DashboardMemoria.jsx
import { useEffect, useState } from "react";
import { useAuth } from "@/context/authContext";
import { apiRequest } from "@/services/api";

export default function DashboardMemoria() {
  const { token: contextToken, loading: authLoading } = useAuth();

  // ✅ Fallback blindado
  const token = contextToken || localStorage.getItem("token");

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savingEdit, setSavingEdit] = useState(false);

  const [error, setError] = useState(null);

  const [editingNote, setEditingNote] = useState(null);

  const [showConfirmClear, setShowConfirmClear] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  /* =========================
      CARGAR MEMORIAS
  ========================= */
  const loadNotes = async () => {
    setError(null);

    if (!token) {
      setNotes([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const data = await apiRequest("/notes", "GET", null, token);
      setNotes(Array.isArray(data) ? data : data.notes || []);
    } catch (err) {
      console.error("Error cargando notas:", err);
      setError(err?.message || "Error cargando memorias");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authLoading) return;
    loadNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, authLoading]);

  /* =========================
        CREAR / EDITAR
  ========================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!title.trim() || !content.trim()) {
      setError("Título y contenido son requeridos.");
      return;
    }

    if (!token) {
      setError("Debes iniciar sesión.");
      return;
    }

    try {
      if (editingNote) {
        setSavingEdit(true);

        await apiRequest(
          `/notes/${editingNote.id}`,
          "PUT",
          {
            title: title.trim(),
            content: content.trim(),
          },
          token
        );
      } else {
        setSaving(true);

        await apiRequest(
          "/notes",
          "POST",
          {
            title: title.trim(),
            content: content.trim(),
          },
          token
        );
      }

      setTitle("");
      setContent("");
      setEditingNote(null);

      await loadNotes();
    } catch (err) {
      console.error("Error guardando nota:", err);
      setError(err?.message || "Error al guardar la nota.");
    } finally {
      setSaving(false);
      setSavingEdit(false);
    }
  };

  /* =========================
        UI STATES
  ========================= */
  if (authLoading) return <p className="p-6">Verificando sesión...</p>;

  if (!token)
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">Memoria Viva</h2>
        <p className="text-sm text-gray-600">
          Debes iniciar sesión para acceder a tus memorias.
        </p>
      </div>
    );

  /* =========================
            RENDER
  ========================= */
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-2">Memoria Viva 🧠</h1>
      <p className="text-sm text-gray-500 mb-4">
        Escribe reflexiones, emociones y recuerdos conscientes.
      </p>

      {error && (
        <div className="bg-red-100 text-red-800 p-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* ========================= FORM ========================= */}
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          className="w-full p-3 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-white border mb-2"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full p-3 rounded bg-white dark:bg-slate-800 text-gray-900 dark:text-white border mb-3 min-h-[120px]"
          placeholder="Escribe tu memoria..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={saving || savingEdit}
            className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            {saving || savingEdit
              ? "Guardando..."
              : editingNote
              ? "Guardar cambios"
              : "Guardar memoria"}
          </button>

          {editingNote && (
            <button
              type="button"
              onClick={() => {
                setEditingNote(null);
                setTitle("");
                setContent("");
              }}
              className="px-4 py-2 rounded bg-slate-300 dark:bg-slate-700 text-black dark:text-white"
            >
              Cancelar edición
            </button>
          )}

          <button
            type="button"
            onClick={() => setShowConfirmClear(true)}
            className="px-4 py-2 rounded bg-amber-500 hover:bg-amber-600 text-white transition"
          >
            Limpiar texto
          </button>

          <div className="ml-auto text-xs text-gray-500">
            {notes.length} memorias
          </div>
        </div>
      </form>

      <hr className="my-4" />

      {/* ========================= LISTADO ========================= */}
      {loading ? (
        <p>Cargando tus memorias...</p>
      ) : notes.length === 0 ? (
        <p className="text-sm text-gray-500">
          Aún no has registrado ninguna memoria.
        </p>
      ) : (
        <div className="grid gap-4">
          {notes.map((n) => (
            <article
              key={n.id}
              className="border p-4 rounded bg-white dark:bg-gray-800 shadow"
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold">{n.title || "Sin título"}</h3>
                  <p className="text-xs text-gray-400">
                    {new Date(n.createdAt).toLocaleString()}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setEditingNote(n);
                      setTitle(n.title);
                      setContent(n.content);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-emerald-500 text-sm hover:text-emerald-700"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => setNoteToDelete(n)}
                    className="text-red-500 text-sm hover:text-red-700"
                  >
                    Eliminar
                  </button>
                </div>
              </div>

              <p className="mt-3 text-sm whitespace-pre-line">{n.content}</p>
            </article>
          ))}
        </div>
      )}

      {/* ========================= MODAL LIMPIAR ========================= */}
      {showConfirmClear && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl w-full max-w-md">
            <h2 className="text-lg font-semibold mb-2">
              ¿Seguro que quieres limpiar?
            </h2>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirmClear(false)}
                className="px-4 py-2 bg-gray-300 dark:bg-slate-700 rounded"
              >
                Cancelar
              </button>

              <button
                onClick={() => {
                  setContent("");
                  setShowConfirmClear(false);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Sí, limpiar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================= MODAL ELIMINAR ========================= */}
      {noteToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl w-full max-w-md">
            <h2 className="text-lg font-semibold mb-2">
              ¿Eliminar esta memoria?
            </h2>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setNoteToDelete(null)}
                className="px-4 py-2 bg-gray-300 dark:bg-slate-700 rounded"
              >
                Cancelar
              </button>

              <button
                onClick={async () => {
                  try {
                    await apiRequest(
                      `/notes/${noteToDelete.id}`,
                      "DELETE",
                      null,
                      token
                    );
                    setNoteToDelete(null);
                    await loadNotes();
                  } catch {
                    setError("No se pudo eliminar la memoria.");
                  }
                }}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Sí, eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
