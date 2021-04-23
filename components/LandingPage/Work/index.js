/* eslint-disable react/prop-types */
import React, { useLayoutEffect, useRef, useState } from "react";
import Images from "@config/images";
import { Col, Row } from "antd";
import useMediaQuery from "utils/useMediaQuery";

function Banner() {
  const { isXs, isSm } = useMediaQuery;
  const listRef = useRef();
  const [minHeight, setMinHeight] = useState("100%");

  useLayoutEffect(() => {
    const minH = listRef?.current?.clientHeight || "100%";
    setMinHeight(minH);
  }, []);

  return (
    <section className="commonContainer">
      <Row className="sectionHeading semiBold" justify="center" align="middle">
        <span>HOW IT&nbsp;</span>
        <span className="primaryColor">WORK</span>
      </Row>
      <Row
        justify="space-between"
        align="top"
        className="workBody"
        style={{ minHeight: minHeight }}
      >
        <img src={Images.vectorPhone1} className="vectorsImg1" />
        <img src={Images.vectorPhone2} className="vectorsImg2" />
        <span className="backCircle" />
        <Row className="workListContainer" ref={listRef}>
          <Col xs={{ span: 24 }} lg={{ span: 6 }} className="left">
            <div className="cirlceNumber  primaryLightBg colFlex allCenter primaryColor bold">
              1
            </div>
            <div className="stepText leftText">
              Create games and invite others via a joining link
            </div>
          </Col>
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 6, offset: 12 }}
            className="right"
          >
            <div className="cirlceNumber  primaryLightBg colFlex allCenter primaryColor bold">
              2
            </div>
            <div className="stepText textRight">
              Lorem iosum dolot sirt amet lorem iapsum.
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 6 }} className="left">
            <div className="cirlceNumber  primaryLightBg colFlex allCenter primaryColor bold">
              3
            </div>
            <div className="stepText leftText">
              Lorem iosum dolot sirt amet lorem iapsum.
            </div>
          </Col>
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 6, offset: 12 }}
            className="right"
          >
            <div className="cirlceNumber  primaryLightBg colFlex allCenter primaryColor bold">
              4
            </div>
            <div className="stepText textRight">
              Lorem iosum dolot sirt amet lorem iapsum.
            </div>
          </Col>
        </Row>
      </Row>
    </section>
  );
}

export default Banner;
