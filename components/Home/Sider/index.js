/* eslint-disable react/prop-types */
import React, { isValidElement, useContext } from "react";
import { useRouter } from "next/router";
import { Button, Col, Row } from "antd";
import Text from "@components/UI/Text";
import Card from "@components/UI/Card";
import { PlusOutlined } from "@ant-design/icons";
import { navMenus } from "@config/staticData";
import { LogoutIcon } from "@components/UI/Icons";
import { signOut } from "utils/commonFunctions";
import { HeaderLogo, MenuCtx } from "@components";
import "./styles.module.less";

const activeKey = 1;

function Sider(props) {
  const router = useRouter();
  const mc = useContext(MenuCtx);

  const { children, bottomFix } = props;

  const renderMenuItems = () => {
    return navMenus.map((m) => {
      return (
        <Row
          key={m.id}
          align="middle"
          className={`menuItem ${m.id == activeKey && "menuItem-active"}`}
        >
          <Col>
            <div className="menuIconWrapper">{m.icon}</div>
          </Col>
          <Col>
            <Text>{m.name}</Text>
          </Col>
        </Row>
      );
    });
  };

  const renderCommonSider = () => {
    return (
      <>
        <Col span={24}>
          <Row>
            <Card trans padding="25px" className="rowFlex alignCenter mb-2">
              <Text bold primary className="robotoFamily">
                Add New Player
              </Text>
              <Card round className="plusButtonWrapper">
                <PlusOutlined className="plusButton" />
              </Card>
            </Card>
          </Row>
          {/* MENUS */}
          {renderMenuItems()}
        </Col>
        <Col span={24} className="lastMenuSection">
          <Row align="middle" className="menuItem" onClick={() => signOut()}>
            <Col>
              <div className="menuIconWrapper">
                <LogoutIcon />
              </div>
            </Col>
            <Col>
              <Text>Log Out</Text>
            </Col>
          </Row>
        </Col>
      </>
    );
  };

  const handleLogoClick = () => {
    if (router.asPath == "/") {
      mc && mc?.setActiveMenu(1);
    } else {
      mc && mc?.setActiveMenu(1);
      router.push("/");
    }
  };

  return (
    <div className={!children ? "siderContainer pr-2" : "siderContainer"}>
      <Row align="top">
        <Col span={24} className="pointer" onClick={() => handleLogoClick()}>
          <HeaderLogo /> {/* STATIC FOR ALL */}
        </Col>
        {children ? children : renderCommonSider()}
      </Row>
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
        }}
      >
        {isValidElement(bottomFix) && bottomFix}
      </div>
    </div>
  );
}

export default Sider;
