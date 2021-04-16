import React from "react";
import { Hero, Features, Work, Banner, Footer } from "@components";
import "antd/dist/antd.less";
import "../styles/commonStyles.module.less";

function LandingPage() {
  return (
    <div
      style={{
        margin: "0px auto",
        maxWidth: window?.innerWidth || "100%",
      }}
    >
      <Hero />
      <Features />
      <Work />
      <Banner />
      <Footer />
    </div>
  );
}

export default LandingPage;
