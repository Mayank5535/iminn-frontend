import React, { useContext } from "react";
import { Col, Drawer } from "antd";
import { Header, Sider, Games, CoverImg, MenuCtx } from "@components";
import useMediaQuery from "utils/useMediaQuery";

const DashboardView = () => {
  const { isXs, isSm } = useMediaQuery();
  const mc = useContext(MenuCtx);

  if (isXs || isSm) {
    return (
      <>
        <Drawer
          placement="left"
          closable
          onClose={() => mc && mc?.setSideDrawer(false)}
          visible={(mc && mc?.sideDrawer) || false}
          getContainer={false}
          style={{ position: "absolute" }}
        >
          <Sider />
        </Drawer>
        <Col>
          <Header />
          <CoverImg />
          {/* <Action /> */}
          <Games />
        </Col>
      </>
    );
  }

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
