"use client";
import useSWR from "swr";
import { useState } from "react";
import { Input, Button, List, Checkbox, Space } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined, SaveOutlined, CloseOutlined } from "@ant-design/icons";
import PageCard from "@/components/PageCard";

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
    <PageCard title="待办事项管理">
      <Space.Compact style={{ width: "100%", marginBottom: 16 }}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="输入新的待办事项"
          onPressEnter={create}
        />
        <Button type="primary" icon={<PlusOutlined />} onClick={create}>
          添加
        </Button>
      </Space.Compact>

      <List
        loading={!data}
        dataSource={data || []}
        renderItem={(t) => (
          <List.Item
            actions={
              editingId !== t.id
                ? [
                    <Button
                      type="text"
                      icon={<EditOutlined />}
                      onClick={() => startEdit(t)}
                      key="edit"
                    />,
                    <Button
                      type="text"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => deleteTodo(t.id)}
                      key="delete"
                    />
                  ]
                : undefined
            }
          >
            {editingId === t.id ? (
              <Space.Compact style={{ width: "100%" }}>
                <Input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  onPressEnter={() => saveEdit(t.id)}
                  autoFocus
                />
                <Button type="primary" icon={<SaveOutlined />} onClick={() => saveEdit(t.id)}>
                  保存
                </Button>
                <Button icon={<CloseOutlined />} onClick={cancelEdit}>
                  取消
                </Button>
              </Space.Compact>
            ) : (
              <Checkbox
                checked={t.completed}
                onChange={() => toggle(t.id, !t.completed)}
              >
                <span style={{ textDecoration: t.completed ? "line-through" : "none", color: t.completed ? "#999" : "#333" }}>
                  {t.title}
                </span>
              </Checkbox>
            )}
          </List.Item>
        )}
      />
    </PageCard>
  );
}