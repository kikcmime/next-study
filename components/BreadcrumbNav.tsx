"use client";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";

const routeMap: Record<string, string> = {
  "/": "首页",
  "/todos": "待办事项",
  "/auth": "认证演示",
  "/components": "组件库",
  "/reactflow": "节点流",
  "/docs": "文档中心",
  "/settings": "系统设置"
};

export default function BreadcrumbNav() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  const pathSegments = pathname.split("/").filter(Boolean);
  const breadcrumbItems = [
    {
      title: (
        <a href="/">
          <HomeOutlined />
        </a>
      ),
      key: "home"
    },
    ...pathSegments.map((segment, index) => {
      const path = "/" + pathSegments.slice(0, index + 1).join("/");
      const title = routeMap[path] || segment;
      const isLast = index === pathSegments.length - 1;

      return {
        title: isLast ? title : <a href={path}>{title}</a>,
        key: path
      };
    })
  ];

  return (
    <div style={{ padding: "16px 0" }}>
      <Breadcrumb
        items={breadcrumbItems}
        style={{ marginBottom: 16 }}
        separator="/"
      />
    </div>
  );
}