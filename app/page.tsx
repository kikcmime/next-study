"use client";
import { useState } from "react";
import { Layout, Menu, Card, Typography, Space, Row, Col, Badge, Statistic } from "antd";
import {
  CheckSquareOutlined,
  LockOutlined,
  AppstoreOutlined,
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  FileTextOutlined,
  DashboardOutlined
} from "@ant-design/icons";
import Link from "next/link";

const { Header, Content, Sider } = Layout;
const { Title, Paragraph } = Typography;

type MenuItem = {
  key: string;
  icon: React.ReactNode;
  label: string;
  path?: string;
};

const menuItems: MenuItem[] = [
  {
    key: "1",
    icon: <DashboardOutlined />,
    label: "仪表盘",
    path: "/"
  },
  {
    key: "2",
    icon: <CheckSquareOutlined />,
    label: "待办事项",
    path: "/todos"
  },
  {
    key: "3",
    icon: <LockOutlined />,
    label: "认证演示",
    path: "/auth"
  },
  {
    key: "4",
    icon: <AppstoreOutlined />,
    label: "组件库",
    path: "/components"
  },
  {
    key: "5",
    icon: <DashboardOutlined />,
    label: "工作流",
    path: "/reactflow"
  },
  {
    key: "6",
    icon: <FileTextOutlined />,
    label: "文档中心",
    path: "/docs"
  },
  {
    key: "7",
    icon: <SettingOutlined />,
    label: "系统设置",
    path: "/settings"
  }
];

const featureCards = [
  {
    title: "待办事项管理",
    description: "完整的 CRUD 功能，使用 Prisma + SQLite 数据库",
    icon: <CheckSquareOutlined className="text-blue-500 text-3xl" />,
    path: "/todos",
    color: "blue"
  },
  {
    title: "用户认证",
    description: "NextAuth Credentials 认证方案",
    icon: <LockOutlined className="text-green-500 text-3xl" />,
    path: "/auth",
    color: "green"
  },
  {
    title: "组件库演示",
    description: "Button、Card、Modal 等常用组件",
    icon: <AppstoreOutlined className="text-purple-500 text-3xl" />,
    path: "/components",
    color: "purple"
  },
  {
    title: "工作流编辑器",
    description: "使用 React Flow 实现的可视化流程编辑",
    icon: <DashboardOutlined className="text-orange-500 text-3xl" />,
    path: "/reactflow",
    color: "orange"
  }
];

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh", height: "100vh", width: "100vw" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme="light"
        style={{
          boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
          height: "100vh",
          overflow: "auto"
        }}
      >
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid #f0f0f0"
          }}
        >
          <Title level={4} style={{ margin: 0, color: "#1890ff" }}>
            {collapsed ? "NS" : "Next Study"}
          </Title>
        </div>
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={menuItems.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: item.path ? (
              <Link href={item.path}>{item.label}</Link>
            ) : (
              item.label
            )
          }))}
        />
      </Sider>
      <Layout style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Header
          style={{
            padding: "0 24px",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            height: 64,
            flexShrink: 0
          }}
        >
          <Space>
            <HomeOutlined style={{ fontSize: 20, color: "#1890ff" }} />
            <Title level={4} style={{ margin: 0 }}>
              欢迎回来
            </Title>
          </Space>
          <Space size="large">
            <Badge count={3} offset={[-5, 5]}>
              <UserOutlined style={{ fontSize: 20, color: "#666" }} />
            </Badge>
          </Space>
        </Header>
        <Content style={{ padding: "24px", background: "#f5f5f5", flex: 1, overflow: "auto" }}>
          <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
            <Col xs={24} sm={12} md={6}>
              <Card>
                <Statistic
                  title="总待办"
                  value={12}
                  prefix={<CheckSquareOutlined />}
                  valueStyle={{ color: "#1890ff" }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card>
                <Statistic
                  title="已完成"
                  value={8}
                  prefix={<CheckSquareOutlined />}
                  valueStyle={{ color: "#52c41a" }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card>
                <Statistic
                  title="进行中"
                  value={4}
                  prefix={<FileTextOutlined />}
                  valueStyle={{ color: "#faad14" }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card>
                <Statistic
                  title="用户数"
                  value={156}
                  prefix={<UserOutlined />}
                  valueStyle={{ color: "#722ed1" }}
                />
              </Card>
            </Col>
          </Row>

          <Card
            title={
              <Space>
                <DashboardOutlined />
                <span>功能概览</span>
              </Space>
            }
            style={{ marginBottom: 24 }}
          >
            <Paragraph style={{ fontSize: 16, color: "#666", marginBottom: 24 }}>
              这是一个全栈练习项目，集成了 Tailwind CSS、Prisma + SQLite、NextAuth、SWR、React Hook Form、Framer
              Motion 等技术栈。
            </Paragraph>
            <Row gutter={[16, 16]}>
              {featureCards.map((card, index) => (
                <Col xs={24} sm={12} md={6} key={index}>
                  <Card
                    hoverable
                    style={{ height: "100%" }}
                    styles={{
                      body: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 12
                      }
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      {card.icon}
                      <Title level={5} style={{ margin: 0 }}>
                        {card.title}
                      </Title>
                    </div>
                    <Paragraph style={{ margin: 0, color: "#666" }}>
                      {card.description}
                    </Paragraph>
                    <Link href={card.path} style={{ marginTop: "auto" }}>
                      查看详情 →
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>

          <Card
            title={
              <Space>
                <FileTextOutlined />
                <span>技术栈</span>
              </Space>
            }
          >
            <Row gutter={[16, 16]}>
              {[
                "Next.js 14",
                "React 18",
                "TypeScript",
                "Tailwind CSS",
                "Prisma",
                "SQLite",
                "NextAuth",
                "SWR",
                "React Hook Form",
                "Framer Motion",
                "React Flow",
                "Ant Design",
                "Vitest"
              ].map((tech, index) => (
                <Col key={index}>
                  <Badge
                    count={tech}
                    style={{
                      backgroundColor: "#f0f0f0",
                      color: "#333",
                      fontSize: 14,
                      padding: "4px 12px",
                      borderRadius: 4
                    }}
                  />
                </Col>
              ))}
            </Row>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
}