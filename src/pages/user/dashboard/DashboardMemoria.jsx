import { useEffect, useState } from "react";
import { useAuth } from "@/context/authContext";
import { apiRequest } from "@/services/api";

// Memoria Viva – Editor tipo "Book / Chapters" (inspiración directa Dribbble)
export default function DashboardMemoria() {
  const { token: contextToken, loading: authLoading } = useAuth();
  const token = contextToken || localStorage.getItem("token");

  const [notes, setNotes] = useState([]);
  const [activeNoteId, setActiveNoteId] = useState(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  /* =========================
      CARGAR MEMORIAS
  ========================= */
  const loadNotes = async () => {
    if (!token) return;
    try {
      setLoading(true);
      const data = await apiRequest("/notes", "GET", null, token);
      const list = Array.isArray(data) ? data : data.notes || [];
      setNotes(list);
      if (!activeNoteId && list.length > 0) selectNote(list[0]);
    } catch {
      setError("Error cargando memorias");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!authLoading) loadNotes();
  }, [token, authLoading]);

  /* =========================
        ACCIONES
  ========================= */
  const selectNote = (note) => {
    setActiveNoteId(note.id);
    setTitle(note.title || "");
    setContent(note.content || "");
  };

  const newNote = () => {
    setActiveNoteId(null);
    setTitle("");
    setContent("");
  };

  const saveNote = async () => {
    if (!title.trim() || !content.trim()) return;
    try {
      setSaving(true);
      if (activeNoteId) {
        await apiRequest(`/notes/${activeNoteId}`, "PUT", { title, content }, token);
      } else {
        await apiRequest("/notes", "POST", { title, content }, token);
      }
      await loadNotes();
    } catch {
      setError("Error al guardar memoria");
    } finally {
      setSaving(false);
    }
  };

  if (authLoading) return <p className="p-6">Verificando sesión…</p>;
  if (!token) return <p className="p-6">Debes iniciar sesión.</p>;

  return (
    /* =========================
        EDITOR CON TOOLBAR (MVP 1)
    ========================= */
    <div className="flex h-screen bg-neutral-100 dark:bg-neutral-900">
      {/* SIDEBAR – LIBRO / CAPÍTULOS */}
      <aside className="w-72 bg-neutral-900 text-neutral-100 flex flex-col">
        <div className="px-6 py-6 text-xl font-semibold tracking-wide">
          Memoria Viva
        </div>

        <button
          onClick={newNote}
          className="mx-4 mb-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium"
        >
          + Nueva Memoria
        </button>

        <div className="flex-1 overflow-y-auto px-2 space-y-1">
          {loading ? (
            <p className="text-sm text-neutral-400 px-4">Cargando…</p>
          ) : notes.length === 0 ? (
            <p className="text-sm text-neutral-400 px-4">Sin memorias aún</p>
          ) : (
            notes.map((note, index) => (
              <button
                key={note.id}
                onClick={() => selectNote(note)}
                className={`w-full text-left px-4 py-3 rounded-lg transition
                  ${note.id === activeNoteId
                    ? "bg-neutral-700 text-white"
                    : "text-neutral-300 hover:bg-neutral-800"}`}
              >
                <div className="text-xs uppercase opacity-60">Memoria {index + 1}</div>
                <div className="font-medium truncate">
                  {note.title || "Sin título"}
                </div>
              </button>
            ))
          )}
        </div>
      </aside>

      {/* CONTENIDO – LIBRO */}
      <main className="flex-1 flex justify-center overflow-auto bg-[#0f1b2d] dark:bg-[#0b1423]">
        <div className="w-full max-w-3xl my-12 bg-[#f8f9fb] dark:bg-[#0f1b2d] rounded-xl shadow-2xl px-12 py-10">
          {error && (
            <div className="bg-red-100 text-red-800 p-3 rounded mb-4">{error}</div>
          )}

          {/* TOOLBAR */}
          <div className="flex items-center gap-2 mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-3">
            <button type="button" onClick={() => setContent(content + "**texto**")} className="px-2 py-1 text-sm rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 font-bold">B</button>
            <button type="button" onClick={() => setContent(content + "*texto*")} className="px-2 py-1 text-sm rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 italic">I</button>
            <button type="button" onClick={() => setContent(content + `
# Título
`)} className="px-2 py-1 text-sm rounded hover:bg-neutral-200 dark:hover:bg-neutral-700">H1</button>
            <button type="button" onClick={() => setContent(content + `
## Subtítulo
`)} className="px-2 py-1 text-sm rounded hover:bg-neutral-200 dark:hover:bg-neutral-700">H2</button>
            <button type="button" onClick={() => setContent(content + `
- item
`)} className="px-2 py-1 text-sm rounded hover:bg-neutral-200 dark:hover:bg-neutral-700">• Lista</button>
          </div>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título del capítulo"
            className="w-full mb-8 text-4xl font-serif font-semibold bg-transparent border-none focus:outline-none text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400"
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Escribe como si fuera un libro…"
            className="w-full min-h-[60vh] resize-none bg-transparent font-serif text-lg leading-loose focus:outline-none text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400"
          />

          <div className="mt-10 flex justify-end">
            <button
              onClick={saveNote}
              disabled={saving}
              className="px-8 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium disabled:opacity-50"
            >
              {saving ? "Guardando…" : "Guardar Memoria"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
