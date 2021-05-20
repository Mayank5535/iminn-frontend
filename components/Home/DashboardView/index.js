import React from "react";
import { Col } from "antd";
import { Header, Sider, Games, CoverImg } from "@components";

const DashboardView = () => {
  return (
    <>
      <Col flex="4">
        <Sider />
      </Col>
      <Col flex="20" className="pl-2">
        <Header />
        <CoverImg />
        {/* <Action /> */}
        <Games />
      </Col>
    </>
  );
};

export default DashboardView;
