"use client";
import { DragOutlined } from "@ant-design/icons";
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

interface DraggableNodeProps {
  type: string;
  label: string;
  color: string;
  icon?: React.ReactNode;
}

export default function DraggableNode({ type, label, color, icon }: DraggableNodeProps) {
  const onDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData("application/reactflow", type);
    event.dataTransfer.effectAllowed = "move";
  };

  const displayIcon = icon || iconMap[type] || <DragOutlined />;

  return (
    <div
      draggable
      onDragStart={onDragStart}
      style={{
        position: "relative",
        padding: "18px 20px",
        borderRadius: "12px",
        cursor: "move",
        backgroundColor: "#ffffff",
        border: "2px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        transition: "all 0.25s ease",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.06)",
        userSelect: "none",
        overflow: "hidden",
        minHeight: "80px"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.boxShadow = `0 6px 20px ${color}25`;
        e.currentTarget.style.transform = "translateX(6px)";
        e.currentTarget.style.background = "linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#e5e7eb";
        e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.06)";
        e.currentTarget.style.transform = "translateX(0)";
        e.currentTarget.style.background = "#ffffff";
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: "5px",
          height: "70%",
          borderRadius: "0 6px 6px 0",
          backgroundColor: color,
          transition: "all 0.25s ease",
          opacity: 0.9
        }}
      />
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "11px",
          background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color,
          fontSize: "20px",
          transition: "all 0.25s ease"
        }}
      >
        {displayIcon}
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: "15px",
            fontWeight: 600,
            color: "#1f2937",
            marginBottom: "4px"
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "#9ca3af",
            fontWeight: 400
          }}
        >
          拖拽到画布
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          opacity: 0.5
        }}
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "#d1d5db"
            }}
          />
        ))}
      </div>
    </div>
  );
}