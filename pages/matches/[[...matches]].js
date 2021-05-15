import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useCollection } from "react-firebase-hooks/firestore";
import Text from "@components/UI/Text";
import Button from "@components/UI/Button";
import { GameDetails, Header, MenuCtx, Sider } from "@components";
import { ArrowLeftOutlined } from "@ant-design/icons";
import db from "@config/firebaseConfig";
import { Col, Empty, Row, Spin } from "antd";
import { has, isEmpty } from "lodash";
import "./styles.module.less";
import { GameListCard } from "@components/Matches/GameListCard";

function GameList() {
  const router = useRouter();
  const { theme } = useSelector((state) => state.theme);

  const [value, loading, error] = useCollection(db.collection("games"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const handleNavigation = (game) => {
    if (game) {
      router.push(`${game.id}`);
    } else {
      router.back();
    }
  };

  const renderGamesCard = () => {
    return value.docs.map((game, index) => {
      return (
        <Col span={12} key={index}>
          <GameListCard
            data={game.data()}
            onOpen={() => handleNavigation(game)}
          />
        </Col>
      );
    });
  };

  const renderSkeleton = () => {
    return [...new Array(6)].map((i, n) => {
      return (
        <Col span={12} key={n}>
          <GameListCard skeleton />
        </Col>
      );
    });
  };

  const renderData = () => {
    if (loading) {
      return (
        <Row gutter={[32, 32]} justify="space-between" className="w100">
          {renderSkeleton()}
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

  const GameList = () => (
    <>
      <Col flex="4">
        <Sider>
          <Col span={24}>
            <Button
              type="text"
              icon={<ArrowLeftOutlined style={{ fontSize: 20 }} />}
              onClick={() => router.back()}
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

  const routeBased = () => {
    let Theme = theme; // !IMPORTANT FOR RERENDERING ON CHANGE THEME

    if (
      !isEmpty(router) &&
      !isEmpty(router.query) &&
      has(router.query, "matches") &&
      router?.query?.matches.length === 1
    ) {
      return <GameDetails />;
    } else if (
      !isEmpty(router) &&
      !isEmpty(router.query) &&
      has(router.query, "matches") &&
      router?.query?.matches.length != 1
    ) {
      router.replace("/matches");
    } else {
      return <GameList />;
    }
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>Iminn - Get early access</title>
      </Head>
      <Row className="layoutContainer">{routeBased()}</Row>
    </>
  );
}

export default GameList;
