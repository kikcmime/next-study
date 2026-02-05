"use client";

import { useState } from "react";
import { Input, Button, Form, Typography, Alert } from "antd";
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import PageCard from "@/components/PageCard";

const { Text } = Typography;

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
    setMsg(JSON.stringify(data, null, 2));
  }

  return (
    <PageCard title="认证演示" extra={<Text type="secondary">NextAuth Credentials</Text>}>
      <Form layout="vertical" style={{ maxWidth: 500 }}>
        <Form.Item label="邮箱">
          <Input
            prefix={<UserOutlined />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="请输入邮箱"
          />
        </Form.Item>
        <Form.Item label="密码">
          <Input.Password
            prefix={<LockOutlined />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="请输入密码"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" icon={<LoginOutlined />} onClick={signIn} block>
            Demo 登录
          </Button>
        </Form.Item>
      </Form>
      {msg && (
        <Alert
          message="登录结果"
          description={<pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>{msg}</pre>}
          type="info"
          style={{ marginTop: 16 }}
        />
      )}
      <Alert
        message="说明"
        description="示例仅用于学习，生产环境请不要使用明文密码存储。"
        type="warning"
        showIcon
        style={{ marginTop: 16 }}
      />
    </PageCard>
  );
}