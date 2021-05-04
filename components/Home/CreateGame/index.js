import React from "react";
import { Col, Row } from "antd";
import Text from "@components/UI/Text";
import Card from "@components/UI/Card";
import {
  CreateGameIcon,
  CreateMatchIcon,
  CreateTeamIcon,
} from "@components/UI/Icons";
import { Header, Sider } from "@components";

function CreateGame(props) {
  return (
    <>
      <Sider>
        <Col span={24}>
          <div>THI IS A SIDER COL</div>
        </Col>
      </Sider>
      <div style={{ flex: 20 }} className="pl-2">
        <Header />
        <div>
          <Row>
            <Text h2 className="robotoFamily mb-1" weight="500">
              CreateGame
            </Text>
          </Row>
        </div>
      </div>
    </>
  );
}

export default CreateGame;
