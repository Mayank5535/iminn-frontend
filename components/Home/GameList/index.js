import React, { useContext, useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Text from "@components/UI/Text";
import Card from "@components/UI/Card";
import Button from "@components/UI/Button";
import { Header, MenuCtx, Sider } from "@components";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import db from "@config/firebaseConfig";
import Images from "@config/images";
import { Avatar, Col, Empty, Row, Spin } from "antd";
import { isEmpty } from "lodash";

const GAMES_DATA = [
  {
    id: 1,
    time: "5:00 pm",
    place: "London",
    teams: ["CUFC", "MUFC"],
    type: "Match Now",
  },
  {
    id: 1,
    time: "5:00 pm",
    place: "London",
    teams: ["CUFC", "MUFC"],
    type: "Game Nearby",
  },
];

function GameList() {
  const mc = useContext(MenuCtx);
  const [value, loading, error] = useCollection(db.collection("games"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const renderGamesCard = () => {
    return value.docs.map((game, index) => {
      console.log(game.data());
      const data = game.data();
      const type = "Match Now";
      const img = data?.image?.secure_url || false;
      return (
        <Col span={12} key={index}>
          <Card themed shadow padding="1.5rem" style={{ height: "100%" }}>
            <Row justify="space-between" align="top">
              <Col>
                {img ? (
                  <img
                    src={img}
                    width="134px"
                    height="132px"
                    style={{
                      objectFit: "cover",
                      borderRadius: 10,
                    }}
                  />
                ) : (
                  <Card
                    trans
                    small
                    padding="12px"
                    className="rowFlex allCenter mr-1"
                  >
                    <img
                      src={Images.emailSent}
                      width="75px"
                      height="75px"
                      className="m-1"
                    />
                  </Card>
                )}
              </Col>
              <Col>
                <Row justify="end" align="top">
                  <Text h4 semiBold primary={type === "Match Now"}>
                    {type}
                  </Text>
                </Row>
              </Col>
            </Row>
            <Row align="middle" style={{ marginTop: 10 }}>
              <Text h3 bold>
                Team A
              </Text>
              <Text h4 light style={{ marginLeft: 8, marginRight: 8 }}>
                VS
              </Text>
              <Text h3 bold>
                Team B
              </Text>
            </Row>
            <Row align="top">
              <Text light>{data.dateTime}</Text>
            </Row>
            <Row align="top">
              <Text>{data?.center?.Name || "-"}</Text> ,&nbsp;
              <Text light>{data?.center?.Address || "-"}</Text>
            </Row>
            <Row justify="space-between" align="middle" className="mt-1">
              <Col>
                <Row>
                  <Avatar
                    size={35}
                    icon={<UserOutlined />}
                    style={{
                      cursor: "pointer",
                      border: "2px solid white",
                    }}
                  />
                  {[1, 2, 3, 4].map((n) => {
                    return (
                      <Avatar
                        key={n}
                        size={35}
                        icon={<UserOutlined />}
                        style={{
                          cursor: "pointer",
                          marginLeft: -10,
                          border: "2px solid white",
                        }}
                      />
                    );
                  })}
                </Row>
              </Col>
              <Col>
                {type === "Match Now" ? (
                  <Button size="large" type="primary" shape="round">
                    JOIN NOW
                  </Button>
                ) : (
                  <Button size="large" type="primary" shape="round">
                    FULL
                  </Button>
                )}
              </Col>
            </Row>
          </Card>
        </Col>
      );
    });
  };

  const renderData = () => {
    if (loading) {
      return (
        <Row justify="center" align="center" className="w100">
          <Col
            span={24}
            className="w100 colFlex allCenter"
            style={{ height: "55vh" }}
          >
            <Spin spinning size="large" />
          </Col>
        </Row>
      );
    }
    if (error) {
      return (
        <Row justify="center" align="center">
          <Empty description="Something went wrong! Please try again later!" />
        </Row>
      );
    }
    if (isEmpty(value.docs)) {
      return (
        <Row justify="center" align="center">
          <Empty description="No games found!" />
        </Row>
      );
    }
    return (
      <Row gutter={[32, 32]} justify="space-between">
        {renderGamesCard()}
      </Row>
    );
  };

  return (
    <>
      <Col flex="4">
        <Sider>
          <Col span={24}>
            <Button
              type="text"
              icon={<ArrowLeftOutlined style={{ fontSize: 20 }} />}
              onClick={() => mc.setActiveMenu(1)}
            >
              <Text h4>Back</Text>
            </Button>
          </Col>
        </Sider>
      </Col>
      <Col flex="20" className="pl-2">
        <Header />
        <div>
          <Row justify="space-between" align="middle" className="mb-2 mt-2">
            <Col>
              <Text h2 className="robotoFamily" weight="500">
                Games
              </Text>
            </Col>
          </Row>
          <Row gutter={[32, 0]} justify="space-between">
            {renderData()}
          </Row>
        </div>
      </Col>
    </>
  );
}

export default GameList;
