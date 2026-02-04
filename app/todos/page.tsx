"use client";
import useSWR from "swr";
import { useState } from "react";

type Todo = { id: number; title: string; completed: boolean };

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function TodosPage() {
  const { data, mutate } = useSWR<Todo[]>("/api/todos", fetcher);
  const [title, setTitle] = useState("");

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
            <div>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" checked={t.completed} onChange={() => toggle(t.id, !t.completed)} />
                <span className={t.completed ? "line-through text-slate-400" : ""}>{t.title}</span>
              </label>
            </div>
          </li>
        ))}
      </ul>
      {!data && <p className="text-slate-500 mt-4">加载中…</p>}
    </div>
  );
}