"use client";
import { useCallback, useState, useRef } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  BackgroundVariant,
  Panel,
  ReactFlowInstance
} from "reactflow";
import "reactflow/dist/style.css";
import PageCard from "@/components/PageCard";
import CustomNode from "./components/CustomNode";
import { Card, Space, Button, Typography, Modal, Row, Col, Tooltip, Empty } from "antd";
import { DeleteOutlined, SaveOutlined, PlusOutlined, EditOutlined } from "@ant-design/icons";
import {
  PlayCircleOutlined,
  AppstoreOutlined,
  CheckCircleOutlined,
  BranchesOutlined,
  DatabaseOutlined,
  ApiOutlined,
  CloudUploadOutlined,
  SettingOutlined,
  FileTextOutlined,
  ThunderboltOutlined,
  ClockCircleOutlined,
  MailOutlined,
  UserOutlined
} from "@ant-design/icons";

const { Title, Text } = Typography;

const iconMap: Record<string, React.ReactNode> = {
  input: <PlayCircleOutlined />,
  output: <CheckCircleOutlined />,
  default: <AppstoreOutlined />,
  custom: <BranchesOutlined />,
  database: <DatabaseOutlined />,
  api: <ApiOutlined />,
  upload: <CloudUploadOutlined />,
  setting: <SettingOutlined />,
  document: <FileTextOutlined />,
  trigger: <ThunderboltOutlined />,
  timer: <ClockCircleOutlined />,
  email: <MailOutlined />,
  user: <UserOutlined />
};

const colorMap: Record<string, string> = {
  input: "#6366f1",
  output: "#8b5cf6",
  default: "#3b82f6",
  custom: "#f59e0b",
  database: "#ef4444",
  api: "#ec4899",
  upload: "#06b6d4",
  setting: "#64748b",
  document: "#0ea5e9",
  trigger: "#f97316",
  timer: "#14b8a6",
  email: "#6366f1",
  user: "#ec4899"
};

const initialNodes: Node[] = [
  { id: "1", type: "custom", data: { label: "开始节点", nodeType: "input" }, position: { x: 300, y: 50 } },
  { id: "2", type: "custom", data: { label: "处理节点", nodeType: "default" }, position: { x: 150, y: 180 } },
  { id: "3", type: "custom", data: { label: "决策节点", nodeType: "custom" }, position: { x: 450, y: 180 } },
  { id: "4", type: "custom", data: { label: "结束节点", nodeType: "output" }, position: { x: 300, y: 320 } }
];

const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    label: "条件 A",
    style: { stroke: "#cbd5e1", strokeWidth: 2 },
    labelStyle: { fontSize: 12, fontWeight: 500, fill: "#64748b", backgroundColor: "#fff" },
    animated: true,
    type: "smoothstep"
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    label: "条件 B",
    style: { stroke: "#cbd5e1", strokeWidth: 2 },
    labelStyle: { fontSize: 12, fontWeight: 500, fill: "#64748b", backgroundColor: "#fff" },
    animated: true,
    type: "smoothstep"
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    style: { stroke: "#cbd5e1", strokeWidth: 2 },
    animated: true,
    type: "smoothstep"
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    style: { stroke: "#cbd5e1", strokeWidth: 2 },
    animated: true,
    type: "smoothstep"
  }
];

const nodeTypeConfigs = [
  {
    type: "input",
    label: "开始节点",
    color: "#667eea",
    icon: <PlayCircleOutlined />,
    description: "流程的起始点"
  },
  {
    type: "default",
    label: "处理节点",
    color: "#3b82f6",
    icon: <AppstoreOutlined />,
    description: "执行数据处理或业务逻辑"
  },
  {
    type: "output",
    label: "结束节点",
    color: "#f093fb",
    icon: <CheckCircleOutlined />,
    description: "流程的终点"
  },
  {
    type: "custom",
    label: "决策节点",
    color: "#f59e0b",
    icon: <BranchesOutlined />,
    description: "条件分支判断"
  },
  {
    type: "database",
    label: "数据库节点",
    color: "#ef4444",
    icon: <DatabaseOutlined />,
    description: "数据库操作"
  },
  {
    type: "api",
    label: "API 节点",
    color: "#8b5cf6",
    icon: <ApiOutlined />,
    description: "调用外部 API"
  },
  {
    type: "upload",
    label: "上传节点",
    color: "#06b6d4",
    icon: <CloudUploadOutlined />,
    description: "文件上传处理"
  },
  {
    type: "setting",
    label: "配置节点",
    color: "#64748b",
    icon: <SettingOutlined />,
    description: "流程配置参数"
  },
  {
    type: "document",
    label: "文档节点",
    color: "#0ea5e9",
    icon: <FileTextOutlined />,
    description: "生成或处理文档"
  },
  {
    type: "trigger",
    label: "触发器节点",
    color: "#f97316",
    icon: <ThunderboltOutlined />,
    description: "触发事件"
  },
  {
    type: "timer",
    label: "定时器节点",
    color: "#14b8a6",
    icon: <ClockCircleOutlined />,
    description: "定时执行任务"
  },
  {
    type: "email",
    label: "邮件节点",
    color: "#6366f1",
    icon: <MailOutlined />,
    description: "发送邮件通知"
  },
  {
    type: "user",
    label: "用户节点",
    color: "#ec4899",
    icon: <UserOutlined />,
    description: "用户操作节点"
  }
];

export default function ReactFlowPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);
  const [nodeModalVisible, setNodeModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [nodeLabel, setNodeLabel] = useState("");

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            style: { stroke: "#cbd5e1", strokeWidth: 2 },
            animated: true,
            type: "smoothstep"
          },
          eds
        )
      ),
    [setEdges]
  );

  const onNodeClick = useCallback(
    (event: React.MouseEvent, node: Node) => {
      setSelectedNode(node);
      setNodeLabel(node.data.label as string);
      setEditModalVisible(true);
    },
    []
  );

  const connectToNode = (sourceNodeId: string, targetNodeId: string) => {
    const newEdge: Edge = {
      id: `e-${sourceNodeId}-${targetNodeId}-${Date.now()}`,
      source: sourceNodeId,
      target: targetNodeId,
      style: { stroke: "#cbd5e1", strokeWidth: 2 },
      animated: true,
      type: "smoothstep"
    };

    setEdges((eds) => [...eds, newEdge]);
  };

  const addNode = (nodeType: string) => {
    const nodeConfig = nodeTypeConfigs.find((n) => n.type === nodeType);
    const newNode: Node = {
      id: `${Date.now()}`,
      type: "custom",
      position: { x: Math.random() * 400 + 100, y: Math.random() * 300 + 50 },
      data: {
        label: nodeConfig?.label || `${nodeType} 节点`,
        nodeType: nodeType
      }
    };

    setNodes((nds) => [...nds, newNode]);
    setNodeModalVisible(false);
  };

  const updateNode = () => {
    if (selectedNode) {
      setNodes((nds) =>
        nds.map((node) =>
          node.id === selectedNode.id
            ? { ...node, data: { ...node.data, label: nodeLabel } }
            : node
        )
      );
      setEditModalVisible(false);
      setSelectedNode(null);
    }
  };

  const clearFlow = () => {
    setNodes([]);
    setEdges([]);
  };

  const saveFlow = () => {
    const flowData = JSON.stringify({ nodes, edges }, null, 2);
    console.log("保存的流程数据:", flowData);
    alert("流程已保存到控制台！");
  };

  return (
    <PageCard
      title="节点流编辑器"
      extra={
        <Space size="middle">
          <Tooltip title="点击画布空白处添加节点">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setNodeModalVisible(true)}
              style={{
                borderRadius: 8,
                height: 36,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                border: "none",
                fontWeight: 500
              }}
            >
              添加节点
            </Button>
          </Tooltip>
          <Tooltip title="保存当前流程到本地">
            <Button
              icon={<SaveOutlined />}
              onClick={saveFlow}
              style={{
                borderRadius: 8,
                height: 36,
                borderColor: "#667eea",
                color: "#667eea"
              }}
            >
              保存
            </Button>
          </Tooltip>
          <Tooltip title="清空所有节点和连线">
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={clearFlow}
              style={{
                borderRadius: 8,
                height: 36,
                borderColor: "#ef4444"
              }}
            >
              清空
            </Button>
          </Tooltip>
        </Space>
      }
    >
      <div style={{ height: 700, position: "relative" }}>
        <Card
          styles={{ body: { padding: 0, height: "100%" } }}
          style={{
            height: "100%",
            overflow: "hidden",
            borderRadius: 12,
            border: "1px solid #e5e7eb",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)"
          }}
        >
          <div ref={reactFlowWrapper} style={{ width: "100%", height: "100%" }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onNodeClick={onNodeClick}
              fitView
              nodeTypes={{
                custom: (props: any) => (
                  <CustomNode
                    {...props}
                    availableNodes={nodes.filter((n) => n.id !== props.id).map((n) => ({
                      id: n.id,
                      label: n.data.label,
                      nodeType: n.data.nodeType
                    }))}
                    onConnectToNode={connectToNode}
                  />
                )
              }}
              style={{ background: "#f8fafc" }}
            >
              <Background
                color="#e2e8f0"
                gap={20}
                size={1}
                variant={BackgroundVariant.Dots}
              />
              {nodes.length === 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "#9ca3af"
                  }}
                >
                  <Empty
                    description={
                      <div>
                        <div style={{ fontSize: 16, marginBottom: 8, color: "#6b7280" }}>
                          点击右上角"添加节点"按钮开始
                        </div>
                        <div style={{ fontSize: 14, color: "#9ca3af" }}>
                          添加节点后点击节点右侧的加号连接其他节点
                        </div>
                      </div>
                    }
                  />
                </div>
              )}
              <Controls
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(8px)",
                  borderRadius: 10,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #e5e7eb"
                }}
              />
              <MiniMap
                nodeColor={(node) =>
                  node.type === "input"
                    ? "#667eea"
                    : node.type === "output"
                      ? "#f093fb"
                      : "#3b82f6"
                }
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(8px)",
                  borderRadius: 10,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #e5e7eb"
                }}
              />
              <Background
                variant={BackgroundVariant.Dots}
                gap={16}
                size={1.5}
                color="#cbd5e1"
              />
            </ReactFlow>
          </div>
        </Card>
      </div>

      <Modal
        title="选择节点类型"
        open={nodeModalVisible}
        onCancel={() => setNodeModalVisible(false)}
        footer={null}
        width={800}
        styles={{
          body: { padding: 24 }
        }}
      >
        <Row gutter={[16, 16]}>
          {nodeTypeConfigs.map((node) => (
            <Col key={node.type} xs={12} sm={8} md={6} lg={6} xl={4}>
              <div
                onClick={() => addNode(node.type)}
                style={{
                  padding: "20px",
                  borderRadius: 12,
                  border: "2px solid #e5e7eb",
                  background: "#fff",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                  minHeight: 120
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = node.color;
                  e.currentTarget.style.boxShadow = `0 4px 12px ${node.color}25`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: 14,
                    background: `linear-gradient(135deg, ${node.color}20 0%, ${node.color}10 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: node.color,
                    fontSize: 28
                  }}
                >
                  {node.icon}
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#1f2937",
                      marginBottom: 4
                    }}
                  >
                    {node.label}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#9ca3af"
                    }}
                  >
                    {node.description}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Modal>

      <Modal
        title={
          <Space>
            <EditOutlined />
            编辑节点
          </Space>
        }
        open={editModalVisible}
        onOk={updateNode}
        onCancel={() => {
          setEditModalVisible(false);
          setSelectedNode(null);
        }}
        okText="保存"
        cancelText="取消"
      >
        <div style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 14, color: "#64748b" }}>节点名称</Text>
          <input
            type="text"
            value={nodeLabel}
            onChange={(e) => setNodeLabel(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              marginTop: 8,
              borderRadius: 8,
              border: "1px solid #d1d5db",
              fontSize: 14,
              outline: "none",
              transition: "border-color 0.2s"
            }}
            placeholder="请输入节点名称"
            autoFocus
          />
        </div>
        {selectedNode && (
          <div style={{ padding: "12px", background: "#f8fafc", borderRadius: 8 }}>
            <Text style={{ fontSize: 12, color: "#64748b" }}>
              当前节点: <strong>{selectedNode.data.label}</strong>
            </Text>
          </div>
        )}
        </Modal>
    </PageCard>
  );
}