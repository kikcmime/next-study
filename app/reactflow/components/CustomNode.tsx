"use client";
import { memo, useState } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { Popover, Row, Col } from "antd";
import {
  PlayCircleOutlined,
  CheckCircleOutlined,
  DatabaseOutlined,
  ApiOutlined,
  CloudUploadOutlined,
  SettingOutlined,
  FileTextOutlined,
  ThunderboltOutlined,
  ClockCircleOutlined,
  MailOutlined,
  UserOutlined,
  BranchesOutlined,
  AppstoreOutlined,
  PlusOutlined
} from "@ant-design/icons";

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

interface CustomNodeProps extends NodeProps {
  availableNodes?: Array<{ id: string; label: string; nodeType: string }>;
  onConnectToNode?: (sourceNodeId: string, targetNodeId: string) => void;
}

const CustomNode = memo(({ id, data, type, availableNodes = [], onConnectToNode }: CustomNodeProps) => {
  const color = colorMap[type || "#3b82f6"];
  const icon = iconMap[type] || <AppstoreOutlined />;
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleNodeSelect = (targetNodeId: string) => {
    onConnectToNode?.(id, targetNodeId);
    setPopoverOpen(false);
  };

  return (
    <div
      style={{
        padding: "20px 28px",
        borderRadius: "16px",
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        border: `1px solid ${color}30`,
        boxShadow: `0 8px 24px ${color}15, 0 2px 8px rgba(0, 0, 0, 0.04)`,
        minWidth: 200,
        maxWidth: 280,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
        backdropFilter: "blur(10px)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}60`;
        e.currentTarget.style.boxShadow = `0 12px 32px ${color}25, 0 4px 12px rgba(0, 0, 0, 0.08)`;
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${color}30`;
        e.currentTarget.style.boxShadow = `0 8px 24px ${color}15, 0 2px 8px rgba(0, 0, 0, 0.04)`;
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{
          width: 14,
          height: 14,
          background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
          border: "3px solid #fff",
          boxShadow: `0 2px 8px ${color}40`,
          transition: "all 0.2s ease"
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16
        }}
      >
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "14px",
            background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "24px",
            boxShadow: `0 4px 12px ${color}40`,
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)"
            }}
          />
          {icon}
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: "15px",
              fontWeight: 700,
              color: "#1e293b",
              marginBottom: 4,
              letterSpacing: "-0.02em"
            }}
          >
            {data.label}
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "#64748b",
              fontWeight: 500
            }}
          >
            {type === "input" && "流程开始"}
            {type === "output" && "流程结束"}
            {type === "default" && "数据处理"}
            {type === "custom" && "条件判断"}
            {type === "database" && "数据库操作"}
            {type === "api" && "API 调用"}
            {type === "upload" && "文件上传"}
            {type === "setting" && "参数配置"}
            {type === "document" && "文档处理"}
            {type === "trigger" && "事件触发"}
            {type === "timer" && "定时任务"}
            {type === "email" && "邮件通知"}
            {type === "user" && "用户操作"}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: "-12px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10
        }}
      >
        <Popover
          open={popoverOpen}
          onOpenChange={setPopoverOpen}
          trigger="click"
          placement="rightTop"
          content={
            <div style={{ width: 280, maxHeight: 320, overflowY: "auto" }}>
              <Row gutter={[8, 8]}>
                {availableNodes.map((node) => (
                  <Col key={node.id} span={12}>
                    <div
                      onClick={() => handleNodeSelect(node.id)}
                      style={{
                        padding: "14px",
                        borderRadius: 12,
                        border: "2px solid #e5e7eb",
                        background: "#fff",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 10,
                        minHeight: 90
                      }}
                      onMouseEnter={(e) => {
                        const nodeColor = colorMap[node.nodeType] || "#3b82f6";
                        e.currentTarget.style.borderColor = nodeColor;
                        e.currentTarget.style.boxShadow = `0 4px 12px ${nodeColor}25`;
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#e5e7eb";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: 10,
                          background: `linear-gradient(135deg, ${(colorMap[node.nodeType] || "#3b82f6")} 0%, ${(colorMap[node.nodeType] || "#3b82f6")}cc 100%)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: 20,
                          boxShadow: `0 4px 12px ${(colorMap[node.nodeType] || "#3b82f6")}40`
                        }}
                      >
                        {iconMap[node.nodeType] || <AppstoreOutlined />}
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <div
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: "#1f2937",
                            marginBottom: 2
                          }}
                        >
                          {node.label}
                        </div>
                        <div
                          style={{
                            fontSize: 10,
                            color: "#9ca3af"
                          }}
                        >
                          {node.nodeType}
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
              {availableNodes.length === 0 && (
                <div style={{ textAlign: "center", padding: "20px", color: "#9ca3af", fontSize: 12 }}>
                  没有可连接的节点
                </div>
              )}
            </div>
          }
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              setPopoverOpen(!popoverOpen);
            }}
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
              border: "3px solid #fff",
              boxShadow: `0 4px 12px ${color}40, 0 2px 6px rgba(0, 0, 0, 0.1)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.15)";
              e.currentTarget.style.boxShadow = `0 6px 16px ${color}50, 0 3px 8px rgba(0, 0, 0, 0.15)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = `0 4px 12px ${color}40, 0 2px 6px rgba(0, 0, 0, 0.1)`;
            }}
          >
            <PlusOutlined style={{ color: "#fff", fontSize: 14 }} />
          </div>
        </Popover>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        style={{
          width: 14,
          height: 14,
          background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
          border: "3px solid #fff",
          boxShadow: `0 2px 8px ${color}40`,
          transition: "all 0.2s ease"
        }}
      />
    </div>
  );
});

CustomNode.displayName = "CustomNode";

export default CustomNode;