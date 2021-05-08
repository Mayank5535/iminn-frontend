import React, { useContext, useState } from "react";
import Head from "next/head";
import { Col, Row } from "antd";
import {
  Header,
  Sider,
  Action,
  Games,
  CoverImg,
  MenuCtx,
  GameList,
} from "@components";
import CreateGame from "./CreateGame";
import "./styles.module.less";

function Home() {
  const [activeMenu, setActiveMenu] = useState(1);
  // CUSTOM VIEWS
  const DashboardView = () => (
    <>
      <Col flex="4">
        <Sider />
      </Col>
      <Col flex="20" className="pl-2">
        <Header />
        <CoverImg />
        <Action />
        <Games />
      </Col>
    </>
  );

  const StatsView = () => (
    <>
      <div style={{ flex: 4 }}>
        <Sider />
      </div>
      <div style={{ flex: 20 }} className="pl-2">
        Coming Soon
      </div>
    </>
  );

  const RatesView = () => (
    <>
      <div style={{ flex: 4 }}>
        <Sider />
      </div>
      <div style={{ flex: 20 }} className="pl-2">
        Coming Soon
      </div>
    </>
  );

  const SettingsView = () => (
    <>
      <div style={{ flex: 4 }}>
        <Sider />
      </div>
      <div style={{ flex: 20 }} className="pl-2">
        Coming Soon
      </div>
    </>
  );

  const MatchesView = () => (
    <>
      <div style={{ flex: 4 }}>
        <Sider />
      </div>
      <div style={{ flex: 20 }} className="pl-2">
        Coming Soon
      </div>
    </>
  );

  const renderContent = () => {
    switch (activeMenu) {
      case 1:
        return <DashboardView />;
      case 2:
        return <StatsView />;
      case 3:
        return <RatesView />;
      case 4:
        return <SettingsView />;
      case 5:
        return <MatchesView />;
      case 6:
        return <CreateGame />;
      case 7:
        return <GameList />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>Iminn - Get early access</title>
      </Head>
      <Row className="layoutContainer">
        <MenuCtx.Provider
          value={{ active: activeMenu, setActiveMenu: setActiveMenu }}
        >
          {renderContent()}
        </MenuCtx.Provider>
      </Row>
    </>
  );
}

export default Home;
