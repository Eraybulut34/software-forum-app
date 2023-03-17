import React, { useState } from "react";
import Link from "next/link";
import { Card, Col, Row, Space } from "antd";

function Navbar() {
  const [logindialog, setLoginDialog] = useState(false);
  const [signup, setSignup] = useState(false);

  const handleSignup = () => {
    setSignup(true);
  };
  const closeSignup = () => {
    setSignup(false);
  };

  const handleOpen = () => {
    setLoginDialog(true);
  };

  const handleClose = () => {
    setLoginDialog(false);
  };

  const links = [
    {
      name: "Software Forum",
      link: "/",
    },
  ];
  return (
    <Card>
      <Row>
        <Col span={24}>
          <Space>
            {links.map((link: any) => (
              <Link href={link.link} key={link.name} style={{ color: "black",fontWeight:"bold",fontSize: 16 }}>
                {link.name}
              </Link>
            ))}
          </Space>
        </Col>
      </Row>
    </Card>
  );
}

export default Navbar;
