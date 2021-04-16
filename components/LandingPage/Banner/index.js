/* eslint-disable react/prop-types */
import React from "react";
import { Button, Row } from "antd";

function Banner() {
  return (
    <section className="bannerContainer">
      <Row className="bannerTitle whiteColor">Become the first user</Row>
      <Row>
        <Button type="primary" size="large" shape="round" className="bigBtn">
          Get early access
        </Button>
      </Row>
    </section>
  );
}

export default Banner;
