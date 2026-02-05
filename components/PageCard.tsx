"use client";
import { Card } from "antd";
import { ReactNode } from "react";

interface PageCardProps {
  children: ReactNode;
  title?: string;
  extra?: ReactNode;
}

export default function PageCard({ children, title, extra }: PageCardProps) {
  return (
    <Card
      title={title}
      extra={extra}
      style={{
        margin: "16px 0",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)"
      }}
      bodyStyle={{
        padding: "24px"
      }}
    >
      {children}
    </Card>
  );
}