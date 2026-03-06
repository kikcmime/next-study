"use client";
import { Card, Typography, Row, Col, Tag, Divider, Space, Badge, Statistic } from "antd";
import {
  CodeOutlined,
  DatabaseOutlined,
  ApiOutlined,
  LayoutOutlined,
  RocketOutlined,
  CheckCircleOutlined,
  ToolOutlined,
  CloudOutlined,
  SecurityScanOutlined,
  ThunderboltOutlined,
  TeamOutlined,
  StarOutlined,
  AppstoreAddOutlined
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

export default function ProjectIntro() {
  const techStack = [
    {
      category: "前端框架",
      items: [
        { name: "Next.js 14", desc: "App Router 架构", icon: <LayoutOutlined /> },
        { name: "React 18", desc: "最新版本 React", icon: <CodeOutlined /> },
        { name: "TypeScript", desc: "类型安全", icon: <CodeOutlined /> },
        { name: "Tailwind CSS", desc: "实用优先 CSS", icon: <LayoutOutlined /> }
      ]
    },
    {
      category: "UI 组件",
      items: [
        { name: "Ant Design", desc: "企业级组件库", icon: <ToolOutlined /> },
        { name: "React Flow", desc: "节点流编辑器", icon: <LayoutOutlined /> },
        { name: "Framer Motion", desc: "动画库", icon: <ThunderboltOutlined /> },
        { name: "React Hook Form", desc: "表单处理", icon: <ToolOutlined /> }
      ]
    },
    {
      category: "后端技术",
      items: [
        { name: "Next.js API", desc: "API 路由", icon: <ApiOutlined /> },
        { name: "Prisma ORM", desc: "数据库 ORM", icon: <DatabaseOutlined /> },
        { name: "SQLite", desc: "轻量级数据库", icon: <DatabaseOutlined /> },
        { name: "NextAuth", desc: "认证系统", icon: <SecurityScanOutlined /> }
      ]
    },
    {
      category: "工具库",
      items: [
        { name: "SWR", desc: "数据获取缓存", icon: <CloudOutlined /> },
        { name: "Zod", desc: "数据验证", icon: <CheckCircleOutlined /> },
        { name: "Vitest", desc: "测试框架", icon: <CheckCircleOutlined /> }
      ]
    }
  ];

  const features = [
    {
      title: "待办事项系统",
      desc: "完整的 CRUD 操作，数据库存储，API 接口设计，表单验证",
      icon: <CheckCircleOutlined />,
      color: "#52c41a"
    },
    {
      title: "工作流编辑器",
      desc: "节点流可视化编辑，自定义节点类型，节点连接和交互，美观的 UI 设计",
      icon: <LayoutOutlined />,
      color: "#1890ff"
    },
    {
      title: "认证系统",
      desc: "演示登录功能，NextAuth 集成，会话管理",
      icon: <SecurityScanOutlined />,
      color: "#faad14"
    },
    {
      title: "组件展示",
      desc: "组件库展示，样式和布局示例",
      icon: <AppstoreAddOutlined />,
      color: "#722ed1"
    }
  ];

  const highlights = [
    "现代化架构：使用 Next.js 14 App Router，实现了文件系统路由和服务器组件",
    "全栈集成：前端和后端代码在同一项目中，开发效率高",
    "类型安全：全面使用 TypeScript，确保代码质量",
    "响应式设计：使用 Tailwind CSS 实现响应式布局",
    "数据库集成：Prisma ORM 提供了优雅的数据库操作方式",
    "UI 组件：集成 Ant Design 提供专业的 UI 组件",
    "动画效果：使用 Framer Motion 添加流畅的动画",
    "表单处理：React Hook Form 提供了高效的表单管理",
    "数据获取：SWR 实现了数据的缓存和自动更新",
    "工作流可视化：React Flow 实现了直观的工作流编辑"
  ];

  const projectStats = [
    { title: "技术栈", value: "10+", suffix: " 项" },
    { title: "核心功能", value: "4", suffix: " 个" },
    { title: "API 接口", value: "5", suffix: " 个" },
    { title: "组件数量", value: "20+", suffix: " 个" }
  ];

  return (
    <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <Title level={1} style={{ marginBottom: "16px" }}>
          <RocketOutlined /> Next-Study 项目介绍
        </Title>
        <Paragraph style={{ fontSize: "18px", color: "#666", maxWidth: "800px", margin: "0 auto" }}>
          基于 Next.js 14 的全栈练习项目，集成了现代前端和后端技术栈，
          构建了一个包含认证系统、待办事项管理和工作流编辑器的完整应用
        </Paragraph>
      </div>

      <Row gutter={[24, 24]} style={{ marginBottom: "48px" }}>
        {projectStats.map((stat, index) => (
          <Col xs={12} sm={6} key={index}>
            <Card
              bordered={false}
              style={{
                textAlign: "center",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white"
              }}
            >
              <Statistic
                title={<span style={{ color: "rgba(255,255,255,0.8)" }}>{stat.title}</span>}
                value={stat.value}
                suffix={stat.suffix}
                valueStyle={{ color: "white", fontSize: "32px", fontWeight: "bold" }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Title level={2} style={{ marginBottom: "24px" }}>
        <StarOutlined /> 项目亮点
      </Title>
      <Card style={{ marginBottom: "48px" }}>
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          {highlights.map((highlight, index) => (
            <div key={index} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <CheckCircleOutlined style={{ color: "#52c41a", fontSize: "20px", marginTop: "2px" }} />
              <Text style={{ fontSize: "16px", lineHeight: "1.8" }}>{highlight}</Text>
            </div>
          ))}
        </Space>
      </Card>

      <Title level={2} style={{ marginBottom: "24px" }}>
        <ToolOutlined /> 核心功能模块
      </Title>
      <Row gutter={[24, 24]} style={{ marginBottom: "48px" }}>
        {features.map((feature, index) => (
          <Col xs={24} sm={12} key={index}>
            <Card
              hoverable
              style={{ height: "100%", borderTop: `4px solid ${feature.color}` }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: `${feature.color}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  color: feature.color
                }}>
                  {feature.icon}
                </div>
                <Title level={4} style={{ margin: 0 }}>{feature.title}</Title>
              </div>
              <Paragraph style={{ color: "#666", marginBottom: 0 }}>{feature.desc}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <Title level={2} style={{ marginBottom: "24px" }}>
        <CodeOutlined /> 技术栈
      </Title>
      <Row gutter={[24, 24]} style={{ marginBottom: "48px" }}>
        {techStack.map((category, categoryIndex) => (
          <Col xs={24} sm={12} lg={6} key={categoryIndex}>
            <Card
              title={
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Badge color={["#1890ff", "#52c41a", "#faad14", "#722ed1"][categoryIndex]} />
                  {category.category}
                </div>
              }
              bordered={false}
              style={{ height: "100%", background: "#fafafa" }}
            >
              <Space direction="vertical" size="small" style={{ width: "100%" }}>
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#666" }}>{item.icon}</span>
                    <div>
                      <div style={{ fontWeight: 500 }}>{item.name}</div>
                      <Text type="secondary" style={{ fontSize: "12px" }}>{item.desc}</Text>
                    </div>
                  </div>
                ))}
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      <Title level={2} style={{ marginBottom: "24px" }}>
        <TeamOutlined /> 项目价值
      </Title>
      <Row gutter={[24, 24]} style={{ marginBottom: "48px" }}>
        <Col xs={24} sm={12} md={6}>
          <Card bordered={false} style={{ textAlign: "center", height: "100%" }}>
            <div style={{ fontSize: "48px", color: "#1890ff", marginBottom: "16px" }}>📚</div>
            <Title level={4} style={{ marginBottom: "8px" }}>学习价值</Title>
            <Paragraph style={{ color: "#666", marginBottom: 0 }}>
              集成了现代前端和后端技术栈，是学习全栈开发的优质资源
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card bordered={false} style={{ textAlign: "center", height: "100%" }}>
            <div style={{ fontSize: "48px", color: "#52c41a", marginBottom: "16px" }}>🚀</div>
            <Title level={4} style={{ marginBottom: "8px" }}>实践价值</Title>
            <Paragraph style={{ color: "#666", marginBottom: 0 }}>
              包含了真实项目中常见的功能模块，可直接参考使用
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card bordered={false} style={{ textAlign: "center", height: "100%" }}>
            <div style={{ fontSize: "48px", color: "#faad14", marginBottom: "16px" }}>🔧</div>
            <Title level={4} style={{ marginBottom: "8px" }}>可扩展性</Title>
            <Paragraph style={{ color: "#666", marginBottom: 0 }}>
              架构设计合理，易于添加新功能和模块
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card bordered={false} style={{ textAlign: "center", height: "100%" }}>
            <div style={{ fontSize: "48px", color: "#722ed1", marginBottom: "16px" }}>✨</div>
            <Title level={4} style={{ marginBottom: "8px" }}>代码质量</Title>
            <Paragraph style={{ color: "#666", marginBottom: 0 }}>
              使用 TypeScript 和现代工具，代码质量高，易于维护
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Title level={2} style={{ marginBottom: "24px" }}>
        <CloudOutlined /> 开发和部署
      </Title>
      <Card style={{ marginBottom: "48px" }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Title level={4} style={{ marginBottom: "16px" }}>开发脚本</Title>
            <Space direction="vertical" size="small" style={{ width: "100%" }}>
              <div>
                <Tag color="blue">npm run dev</Tag>
                <Text style={{ marginLeft: "8px" }}>启动开发服务器</Text>
              </div>
              <div>
                <Tag color="blue">npm run build</Tag>
                <Text style={{ marginLeft: "8px" }}>构建生产版本</Text>
              </div>
              <div>
                <Tag color="blue">npm run lint</Tag>
                <Text style={{ marginLeft: "8px" }}>代码 linting</Text>
              </div>
              <div>
                <Tag color="blue">npm run typecheck</Tag>
                <Text style={{ marginLeft: "8px" }}>TypeScript 类型检查</Text>
              </div>
              <div>
                <Tag color="green">npm run prisma:migrate</Tag>
                <Text style={{ marginLeft: "8px" }}>数据库迁移</Text>
              </div>
              <div>
                <Tag color="green">npm run prisma:seed</Tag>
                <Text style={{ marginLeft: "8px" }}>填充种子数据</Text>
              </div>
            </Space>
          </Col>
          <Col xs={24} md={12}>
            <Title level={4} style={{ marginBottom: "16px" }}>部署配置</Title>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <div>
                <CheckCircleOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
                <Text>配置了 GitHub Actions 工作流</Text>
              </div>
              <div>
                <CheckCircleOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
                <Text>自动部署到 GitHub Pages</Text>
              </div>
              <div>
                <CheckCircleOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
                <Text>支持 CI/CD 自动化流程</Text>
              </div>
            </Space>
          </Col>
        </Row>
      </Card>

      <Divider />

      <div style={{ textAlign: "center", padding: "24px 0" }}>
        <Title level={3} style={{ marginBottom: "16px" }}>🎉 开始使用</Title>
        <Paragraph style={{ fontSize: "16px", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
          这是一个功能完整、技术现代化的全栈项目，涵盖了前端和后端开发的各个方面。
          项目结构清晰，代码质量高，是学习现代 web 开发技术的优秀范例。
        </Paragraph>
      </div>
    </div>
  );
}