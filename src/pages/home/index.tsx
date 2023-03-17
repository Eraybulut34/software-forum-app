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

  const leftMenuStyle: React.CSSProperties = {
    backgroundColor: "#f0f2f5",
    padding: "1rem",
    margin: "8px",
    boxSizing: "border-box",
    borderRadius: "8px"
  };

function HomePage() {
  return (
    <div>
      <Row style={contentStyle}>
        {/* left menu with antd*/}
        <Col span={7} style={leftMenuStyle}>
          <List dataSource={entryTitles} renderItem={(item) => <List.Item>{item.title}</List.Item>} />
        </Col>
        <Col span={16}></Col>
      </Row>

    </div>
  );
}

export default HomePage;
