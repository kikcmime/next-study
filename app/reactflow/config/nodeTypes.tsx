"use client";

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
  UserOutlined,
  MessageOutlined,
  SearchOutlined,
  FileTextOutlined as DocumentOutlined,
  RobotOutlined,
  TagsOutlined,
  SplitCellsOutlined
} from "@ant-design/icons";

export interface NodeTypeConfig {
  type: string;
  label: string;
  color: string;
  icon: React.ReactNode;
  description: string;
}

export const nodeTypeConfigs: NodeTypeConfig[] = [
  {
    type: "input",
    label: "开始节点",
    color: "#6366f1",
    icon: <PlayCircleOutlined />,
    description: "流程的起始点"
  },
  {
    type: "llm",
    label: "LLM",
    color: "#8b5cf6",
    icon: <MessageOutlined />,
    description: "调用大语言模型回答问题或者对自然语言进行处理"
  },
  {
    type: "knowledge",
    label: "知识检索",
    color: "#10b981",
    icon: <SearchOutlined />,
    description: "允许你从知识库查询与用户问题相关的文本内容"
  },
  {
    type: "direct",
    label: "直接回复",
    color: "#f97316",
    icon: <DocumentOutlined />,
    description: "定义一个聊天对话的回复内容"
  },
  {
    type: "agent",
    label: "Agent",
    color: "#ec4899",
    icon: <RobotOutlined />,
    description: "调用大语言模型回答问题或者对自然语言进行处理"
  },
  {
    type: "classifier",
    label: "问题分类器",
    color: "#3b82f6",
    icon: <TagsOutlined />,
    description: "定义用户问题的分类条件，LLM能够根据分类描述定义对话的进展方式"
  },
  {
    type: "condition",
    label: "条件分支",
    color: "#f59e0b",
    icon: <SplitCellsOutlined />,
    description: "允许你根据if/else将workflow分成两个分支"
  },
  {
    type: "output",
    label: "结束节点",
    color: "#64748b",
    icon: <CheckCircleOutlined />,
    description: "流程的终点"
  }
];

export const getNodeConfig = (type: string): NodeTypeConfig => {
  return nodeTypeConfigs.find((n) => n.type === type) || nodeTypeConfigs[0];
};