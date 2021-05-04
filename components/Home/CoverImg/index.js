import React from "react";
import { Col, Row } from "antd";
import Text from "@components/UI/Text";
import Card from "@components/UI/Card";
import Images from "@config/images";

const CoverImg = () => {
  return (
    <>
      <Card className="mb-2">
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
    </>
  );
};

export default CoverImg;
