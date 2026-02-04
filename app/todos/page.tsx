"use client";
import useSWR from "swr";
import { useState } from "react";

type Todo = { id: number; title: string; completed: boolean };

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function TodosPage() {
  const { data, mutate } = useSWR<Todo[]>("/api/todos", fetcher);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");

  async function create() {
    await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    });
    setTitle("");
    mutate();
  }

  async function toggle(id: number, next: boolean) {
    await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: next })
    });
    mutate();
  }

  async function updateTitle(id: number, newTitle: string) {
    await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle })
    });
    setEditingId(null);
    mutate();
  }

  async function deleteTodo(id: number) {
    await fetch(`/api/todos/${id}`, {
      method: "DELETE"
    });
    mutate();
  }

  function startEdit(todo: Todo) {
    setEditingId(todo.id);
    setEditTitle(todo.title);
  }

  function cancelEdit() {
    setEditingId(null);
    setEditTitle("");
  }

  function saveEdit(id: number) {
    if (editTitle.trim()) {
      updateTitle(id, editTitle.trim());
    } else {
      cancelEdit();
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Todos 示例</h2>

      <div className="mb-4 flex gap-2">
        <input
          className="border rounded px-3 py-2 flex-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="新 Todo"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={create}>
          添加
        </button>
      </div>

      <ul className="space-y-2">
        {data?.map((t) => (
          <li key={t.id} className="flex items-center justify-between bg-white p-3 rounded shadow">
            <div className="flex-1">
              {editingId === t.id ? (
                <div className="flex gap-2">
                  <input
                    className="border rounded px-2 py-1 flex-1"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && saveEdit(t.id)}
                    autoFocus
                  />
                  <button className="bg-green-600 text-white px-3 py-1 rounded text-sm" onClick={() => saveEdit(t.id)}>
                    保存
                  </button>
                  <button className="bg-slate-400 text-white px-3 py-1 rounded text-sm" onClick={cancelEdit}>
                    取消
                  </button>
                </div>
              ) : (
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" checked={t.completed} onChange={() => toggle(t.id, !t.completed)} />
                  <span className={t.completed ? "line-through text-slate-400" : ""}>{t.title}</span>
                </label>
              )}
            </div>
            {editingId !== t.id && (
              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-800 text-sm" onClick={() => startEdit(t)}>
                  编辑
                </button>
                <button className="text-red-600 hover:text-red-800 text-sm" onClick={() => deleteTodo(t.id)}>
                  删除
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
      {!data && <p className="text-slate-500 mt-4">加载中…</p>}
    </div>
  );
}