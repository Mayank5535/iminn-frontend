import React, { useEffect, useState } from "react";
import LpHeader from "@components";
const { Header, Footer, Sider, Content } = Layout;

function LandingPage(props) {
  return (
    <>
      <Header>
        <LpHeader />
      </Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </>
  );
}

export default LandingPage;
