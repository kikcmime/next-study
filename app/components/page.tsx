"use client";
import { Card, Button, Modal, Space, Typography, Row, Col } from "antd";
import { PlusOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import PageCard from "@/components/PageCard";

const { Title, Paragraph, Text } = Typography;

export default function ComponentsPage() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <PageCard title="组件库演示">
      <Paragraph style={{ marginBottom: 24 }}>
        这里展示了项目中使用的 Ant Design 组件示例。
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="按钮组件"
            extra={<InfoCircleOutlined />}
            hoverable
          >
            <Space direction="vertical" style={{ width: "100%" }}>
              <Button type="primary">主要按钮</Button>
              <Button>默认按钮</Button>
              <Button type="dashed">虚线按钮</Button>
              <Button type="link">链接按钮</Button>
              <Button type="primary" icon={<PlusOutlined />}>
                带图标
              </Button>
            </Space>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            title="卡片组件"
            extra={<InfoCircleOutlined />}
            hoverable
          >
            <Paragraph>
              这是一个卡片组件，可以包含标题、内容和额外的操作按钮。
            </Paragraph>
            <Space>
              <Button type="primary">确定</Button>
              <Button>取消</Button>
            </Space>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            title="模态框组件"
            extra={<InfoCircleOutlined />}
            hoverable
          >
            <Paragraph>
              点击下方按钮打开模态框示例。
            </Paragraph>
            <Button type="primary" onClick={() => setModalVisible(true)}>
              打开模态框
            </Button>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            title="文本组件"
            extra={<InfoCircleOutlined />}
            hoverable
          >
            <Space direction="vertical">
              <Title level={5}>标题文本</Title>
              <Paragraph>
                段落文本，用于展示较长的内容描述。
              </Paragraph>
              <Text type="secondary">次要文本</Text>
              <Text type="success">成功文本</Text>
              <Text type="warning">警告文本</Text>
              <Text type="danger">危险文本</Text>
            </Space>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            title="布局组件"
            extra={<InfoCircleOutlined />}
            hoverable
          >
            <Paragraph>
              使用 Row 和 Col 组件实现响应式布局。
            </Paragraph>
            <Row gutter={[8, 8]}>
              <Col span={12}>
                <div style={{ background: "#f0f0f0", padding: 8, textAlign: "center" }}>
                  Col-12
                </div>
              </Col>
              <Col span={12}>
                <div style={{ background: "#f0f0f0", padding: 8, textAlign: "center" }}>
                  Col-12
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            title="间距组件"
            extra={<InfoCircleOutlined />}
            hoverable
          >
            <Paragraph>
              使用 Space 组件设置元素间距。
            </Paragraph>
            <Space size="middle">
              <Button>按钮1</Button>
              <Button>按钮2</Button>
              <Button>按钮3</Button>
            </Space>
          </Card>
        </Col>
      </Row>

      <Modal
        title="模态框示例"
        open={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      >
        <Paragraph>
          这是一个模态框组件示例。模态框用于需要用户处理事务，又不希望跳转页面时，可以使用 Modal 在当前页面弹出一个对话框承载相关操作。
        </Paragraph>
      </Modal>
    </PageCard>
  );
}