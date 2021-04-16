/* eslint-disable react/prop-types */
import React from "react";
import { Col, Row } from "antd";
import Images from "@config/images";

function Footer() {
  return (
    <section className="commonContainer">
      <Row className="logoRow">
        <img src={Images.brandLogo} alt="logo" className="logo2" />
      </Row>
      <Row className="rowFlex">
        <Col className="links">
          <a href="/">About</a>
          <a href="/">Features</a>
          <a href="/">Help</a>
          <a href="/">Privacy Policy</a>
        </Col>
        <Col className="copyRightText">
          &copy;&nbsp;2021 All Rigth Reserved by IMINN
        </Col>
      </Row>
    </section>
  );
}

export default Footer;
