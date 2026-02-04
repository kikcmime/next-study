"use client";

import { useState } from "react";

export default function AuthPage() {
  const [email, setEmail] = useState("alice@example.com");
  const [password, setPassword] = useState("pass1234");
  const [msg, setMsg] = useState("");

  async function signIn() {
    const res = await fetch("/api/auth/demo-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    setMsg(JSON.stringify(data));
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Auth Demo（示例 Credentials）</h2>
      <div className="space-y-2 max-w-md">
        <input className="border rounded px-3 py-2 w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          className="border rounded px-3 py-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex gap-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={signIn}>
            Demo 登录 (创建 / 返回 token)
          </button>
        </div>
        <pre className="bg-slate-100 p-3 rounded">{msg}</pre>
      </div>
      <p className="mt-4 text-slate-500">说明：示例仅用于学习，生产环境请不要用明文密码。</p>
    </div>
  );
}