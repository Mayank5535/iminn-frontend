import React from "react";
import { Button, Col, Row } from "antd";
import Text from "@components/UI/Text";
import Card from "@components/UI/Card";
import Images from "@config/images";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";

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

const renderGamesCard = () => {
  return GAMES_DATA.map((mI) => {
    return (
      <Col span={12} key={mI.id}>
        <Card themed shadow padding="1.5rem">
          <Row justify="space-between" align="top">
            <Col>
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
            </Col>
            <Col>
              <Row justify="end" align="top">
                <Text h4 semiBold primary={mI.type === "Match Now"}>
                  {mI.type}
                </Text>
              </Row>
            </Col>
          </Row>
          <Row align="middle" style={{ marginTop: 10 }}>
            <Text h3 bold>
              {mI.teams[0]}
            </Text>
            <Text h4 light style={{ marginLeft: 8, marginRight: 8 }}>
              VS
            </Text>
            <Text h3 bold>
              {mI.teams[1]}
            </Text>
          </Row>
          <Row align="top">
            <Text light>
              {mI.time}, {mI.place}
            </Text>
          </Row>
          <Row justify="space-between" align="middle" className="mt-1">
            <Col>
              <Row>
                <Avatar
                  size={35}
                  src={`https://picsum.photos/seed/picsum/200/300`}
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
                      src="https://picsum.photos/400"
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
              {mI.type === "Match Now" ? (
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

function Games(props) {
  return (
    <div>
      <Row justify="space-between" align="middle" className="mb-1 mt-2">
        <Col>
          <Text h2 className="robotoFamily" weight="500">
            Games
          </Text>
        </Col>
        <Col>
          <Text h4 primary className="robotoFamily" weight="500">
            See all
          </Text>
        </Col>
      </Row>
      <Row gutter={[32, 0]} justify="space-between">
        {renderGamesCard()}
      </Row>
    </div>
  );
}

export default Games;
