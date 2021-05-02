import React from "react";
import Head from "next/head";
import Images from "@config/images";
import { Col, Row } from "antd";
import { Header, Sider, Action, Games } from "@components";
import Text from "@components/UI/Text";
import Card from "@components/UI/Card";
import "./styles.module.less";

const CoverImg = () => {
  return (
    <Card className="mt-2 mb-2">
      <Row align="middle" justify="end">
        <Col flex="auto">
          <div className="textSectonOnImg">
            <Row align="middle">
              <Text h1 bold className="whiteColor coverTitle">
                Hi, John!
              </Text>
            </Row>
            <Row align="middle">
              <Text className="whiteColor coverText">
                Ready to play game with your partner, enjoy
              </Text>
            </Row>
          </div>
        </Col>
        <Col>
          <div className="coverGradientWrapper" />
          <img src={Images.goalCover} height="auto" width="100%" />
        </Col>
      </Row>
    </Card>
  );
};

function Home() {
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
        <div style={{ flex: 4 }}>
          <Sider />
        </div>
        <div style={{ flex: 20 }} className="pl-2">
          <Header />
          <CoverImg />
          <Action />
          <Games />
        </div>
      </Row>
    </>
  );
}

export default Home;
