import React from "react";
import { Col, Row, List } from "antd";
const entryTitles = [
  {
    title: "bugün bunlar oldu",
    link: "/",
  },
  {
    title: "bugün bunlar oldu",
    link: "/",
  },
  {
    title: "bugün bunlar oldu",
    link: "/",
  },
  {
    title: "bugün bunlar oldu",
    link: "/",
  }]

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
    },
  ];

  const contentStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
  };

function HomePage() {
  return (
    <div>
      <Row style={contentStyle}>
        {/* left menu with antd*/}
        <Col span={4} style={{ backgroundColor: "grey",padding: "1rem" }}>
          <List dataSource={entryTitles} renderItem={(item) => <List.Item>{item.title}</List.Item>} />
        </Col>
        <Col span={18}></Col>
      </Row>

    </div>
  );
}

export default HomePage;
