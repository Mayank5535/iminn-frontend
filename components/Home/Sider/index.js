import React from "react";
import { Col, Row } from "antd";
import Images from "@config/images";
import Text from "@components/UI/Text";
import Card from "@components/UI/Card";
import { PlusOutlined } from "@ant-design/icons";
import { navMenus } from "@config/staticData";
import { LogoutIcon } from "@components/UI/Icons";
import { signOut } from "utils/commonFunctions";
import "./styles.module.less";

const activeKey = 1;

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

function Sider(props) {
  return (
    <Row className="siderContainer">
      <Col span={24}>
        <Row>
          <div className="brandLogoContainer rowFlex allCenter">
            <img src={Images.brandLogo} />
            <Text className="logoText logoText2">IMINN</Text>
          </div>
        </Row>
        <Row>
          <Card trans padding="25px" className="rowFlex alignCenter mt-2 mb-2">
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
    </Row>
  );
}

export default Sider;