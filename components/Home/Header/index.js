import React from "react";
import { Avatar, Col, Row } from "antd";
import Images from "@config/images";
import Text from "@components/UI/Text";
import Card from "@components/UI/Card";
import { HeartOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import {
  BellIcon,
  DropArrow,
  HeartIcon,
  InboxIcon,
  KickBallIcon,
  LogoutIcon,
} from "@components/UI/Icons";
import { signOut } from "utils/commonFunctions";
import Searchbar from "@components/UI/Searchbar";
import "./styles.module.less";
import { useSelector } from "react-redux";

function Header(props) {
  const { userData } = useSelector((state) => state.auth);
  console.log("===> ~ Header ~ userData", userData);

  return (
    <Row justify="space-between" align="middle">
      <Col>
        <Searchbar />
      </Col>
      <Col>
        <Row align="middle">
          <Col>
            <HeartOutlined className="headerMenu" />
          </Col>
          <Col>
            <InboxIcon className="headerMenu" />
          </Col>
          <Col>
            <BellIcon className="headerMenu" />
          </Col>
          <Col>
            <Row className="headerMenuProfile">
              <Avatar
                size={60}
                icon={<UserOutlined />}
                src={userData.profileImage.secure_url}
              />
              <DropArrow className="headerMenuProfileDropIcon" />
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
