import React, { useContext, useMemo } from "react";
import { Avatar, Col, Popover, Row } from "antd";
import Text from "@components/UI/Text";
import { HeartOutlined, UserOutlined } from "@ant-design/icons";
import {
  AwardIcon,
  BellIcon,
  DropArrow,
  InboxIcon,
  MoonIcon,
  PlusIcon,
  RankIcon,
  SunIcon,
  LogoutIcon,
} from "@components/UI/Icons";
import Searchbar from "@components/UI/Searchbar";
import { useSelector } from "react-redux";
import { useState } from "react";
import { MenuCtx } from "@components";
import {
  getActiveTheme,
  getInitials,
  signOut,
  switchTheme,
} from "utils/commonFunctions";
import "./styles.module.less";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";

function Header(props) {
  const { noSearch } = props;

  const { userData } = useSelector((state) => state.auth);
  const router = useRouter();
  const mc = useContext(MenuCtx);

  const [profileMenuVisible, setProfileMenuVisible] = useState(false);

  const menuData = useMemo(() => {
    if (isEmpty(userData)) {
      return [
        {
          id: 4,
          name: "Change Theme",
          icon: getActiveTheme() === "light" ? <MoonIcon /> : <SunIcon />,
        },
        {
          id: 6,
          name: "Signin",
          icon: <LogoutIcon className="logoutIconProfileMenu" />,
        },
      ];
    }

    return [
      {
        id: 1,
        name: "Legend",
        icon: <AwardIcon />,
      },
      {
        id: 2,
        name: "928",
        icon: <RankIcon />,
      },
      {
        id: 3,
        name: "Edit Profile",
        icon: <PlusIcon />,
      },
      {
        id: 4,
        name: "Change Theme",
        icon: getActiveTheme() === "light" ? <MoonIcon /> : <SunIcon />,
      },
      {
        id: 5,
        name: "Log Out",
        icon: <LogoutIcon className="logoutIconProfileMenu" />,
      },
    ];
  });

  const handleMenuClick = (item) => {
    if (item.id === 3) {
      mc.setActiveMenu(7);
      setProfileMenuVisible(false);
      return;
    }
    if (item.id === 4) {
      switchTheme();
      setProfileMenuVisible(false);
      return;
    }
    if (item.id === 5) {
      signOut();
      setProfileMenuVisible(false);
      return;
    }
    if (item.id === 6) {
      router.push("/signin");
      setProfileMenuVisible(false);
      return;
    }
  };

  const DropDownContent = () => {
    return (
      <div>
        {menuData.map((m) => {
          return (
            <Row
              onClick={() => handleMenuClick(m)}
              justify="space-between"
              align="middle"
              key={m.id}
              className="profileMenuItem"
            >
              <Col>
                <div className="mr-2">{m.icon}</div>
              </Col>
              <Col>
                <Text semiBold primary>
                  {m.name}
                </Text>
              </Col>
            </Row>
          );
        })}
      </div>
    );
  };

  return (
    <div className="mb-2">
      <Row justify="space-between" align="middle">
        <Col>{!noSearch && <Searchbar />}</Col>
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
              <Popover
                content={DropDownContent}
                overlayClassName="profilePover noSelect"
                trigger="hover"
                placement="bottomRight"
                visible={profileMenuVisible}
                onVisibleChange={(visible) => setProfileMenuVisible(visible)}
              >
                <Row
                  className={`headerMenuProfile ${
                    profileMenuVisible && "headerMenuProfile-active"
                  }`}
                >
                  <Avatar
                    size={60}
                    icon={<UserOutlined />}
                    className={!isEmpty(userData) ? "primaryBg" : ""}
                    src={userData?.profileImage?.secure_url || ""}
                  >
                    {getInitials(userData)}
                  </Avatar>
                  <DropArrow className="headerMenuProfileDropIcon" />
                </Row>
              </Popover>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
