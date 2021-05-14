/* eslint-disable react/prop-types */
import React, { useMemo, useState } from "react";
import firebase from "firebase";
import { useRouter } from "next/router";
import Text from "@components/UI/Text";
import Button from "@components/UI/Button";
import { Header, Sider } from "@components";
import {
  ArrowLeftOutlined,
  CalendarOutlined,
  HeartFilled,
  HeartOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import db from "@config/firebaseConfig";
import {
  Avatar,
  Badge,
  Col,
  Divider,
  Dropdown,
  Empty,
  Menu,
  Popover,
  Row,
  Space,
  Spin,
  Tag,
} from "antd";
import { useDocument } from "react-firebase-hooks/firestore";
import { capitalize, has, isArray, isEmpty, map } from "lodash";
import { useSelector } from "react-redux";
import Images from "@config/images";
import {
  MoneyIcon,
  PitchIcon,
  PlaceIcon,
  TeamAIcon,
  TeamBIcon,
  TShirtIcon,
} from "@components/UI/Icons";
import "./styles.module.less";
import { theme } from "utils/commonFunctions";
import Card from "@components/UI/Card";
import { shareMsg } from "@config/staticData";
import siteConfig from "@config/siteConfig";

const leftSpan = 14;

function GameDetails() {
  const router = useRouter();
  const { userData } = useSelector((state) => state.auth);

  // const [showConfirmModal, setShowConfirmModal] = useState(false);
  // const [showSquadModal, setShowSquadModal] = useState(false);
  // const [showSelectTeamModal, setShowSelectTeamModal] = useState(false);
  const [myTeam, setMyTeam] = useState(null);

  const [btnLoadingA, setBtnLoadingA] = useState(false);
  const [btnLoadingB, setBtnLoadingB] = useState(false);
  const [finalLoader, setFinalLoader] = useState(true);
  const [manager, setManager] = useState({});
  const [following, setFollowing] = useState(false);

  const [value, loading] = useDocument(
    db.doc(`games/${router?.query.matches[0]}`),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const handleLoader = (type = "A", action) => {
    if (type == "A") {
      setBtnLoadingA(action);
    } else {
      setBtnLoadingB(action);
    }
  };

  const joinTeam = (team) => {
    const playerData = {
      playerId: userData.userId,
      firstName: userData.firstName,
      lastName: userData.lastName,
      avatar: userData.profileImage.secure_url,
      role: userData.role,
      email: userData.email,
    };
    handleLoader(team, true);
    db.collection("games")
      .doc(`${router?.query.matches[0]}`)
      .update({
        [`teams.team${team}`]:
          firebase.firestore.FieldValue.arrayUnion(playerData),
      })
      .then(() => {
        console.log("Document successfully written!");
        handleLoader(team, false);
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
        handleLoader(team, false);
      });
  };

  const unJoinTeam = (team) => {
    const playerData = {
      playerId: userData.userId,
      firstName: userData.firstName,
      lastName: userData.lastName,
      avatar: userData.profileImage.secure_url,
      role: userData.role,
      email: userData.email,
    };
    handleLoader(team, true);
    db.collection("games")
      .doc(`${router?.query.matches[0]}`)
      .update({
        [`teams.team${team}`]:
          firebase.firestore.FieldValue.arrayRemove(playerData),
      })
      .then(() => {
        console.log(`Team ${team} Unjoined successfully!`);
        handleLoader(team, false);
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
        handleLoader(team, false);
      });
  };

  const data = useMemo(() => {
    if (value && value.exists) {
      if (isEmpty(manager)) {
        db.collection("users")
          .doc(value.data().managerId)
          .get()
          .then((d) => {
            if (d.exists) {
              setManager(d.data());
              setFinalLoader(false);
            }
          })
          .catch((e) => console.log(e));
      }
      let myTeam;
      map(value.data().teams.teamA, (v) => {
        if (v.playerId === userData.userId) {
          myTeam = "A";
        }
      });
      map(value.data().teams.teamB, (v) => {
        if (v.playerId === userData.userId) {
          myTeam = "B";
        }
      });
      if (myTeam) {
        setMyTeam(myTeam);
      } else {
        setMyTeam(null);
      }
      if (
        has(value.data(), "followers") &&
        value.data().followers.includes(userData.userId)
      ) {
        setFollowing(true);
      } else {
        setFollowing(false);
      }
      console.log("%cALL DATA", "color:blue", value.data());
      return value.data();
    }
  }, [value]);

  const handleFollow = () => {
    const operationType = !following ? "arrayUnion" : "arrayRemove";
    db.collection("games")
      .doc(`${router?.query.matches[0]}`)
      .update({
        followers: firebase.firestore.FieldValue[operationType](
          userData.userId
        ),
      })
      .then((d) => console.log("Follow/Unfollow Success", d))
      .catch((e) => console.log(e));
  };

  const handleShare = ({ key }) => {
    if (!value.exists) {
      return;
    }
    let url = "";
    const postUrl = `http://${siteConfig.domainUrl}/matches/${value.id}`;
    if (key == 1) {
      url = `https://www.facebook.com/sharer.php?u=${postUrl}`;
    }
    if (key == 2) {
      url = `https://twitter.com/share?url=${postUrl}&text=${shareMsg}`;
    }
    if (key == 3) {
      url = `https://api.whatsapp.com/send?text=${shareMsg} ${postUrl}`;
    }
    console.log("===> ~ handleShare ~ url", key, url);

    window && window.open(url, "_blank");
  };

  const renderShareLinks = () => (
    <Menu onClick={handleShare}>
      <Menu.Item
        key="1"
        icon={
          <img
            className="mr-1"
            src={Images.fbShare}
            height="26px"
            width="26px"
            alt="socialLink"
          />
        }
      >
        <Text>Via Facebook</Text>
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={
          <img
            className="mr-1"
            src={Images.twitterShare}
            height="26px"
            width="26px"
            alt="socialLink"
          />
        }
      >
        <Text>Via Twitter</Text>
      </Menu.Item>
      <Menu.Item
        key="3"
        icon={
          <img
            className="mr-1"
            src={Images.whatsappShare}
            height="26px"
            width="26px"
            alt="socialLink"
          />
        }
      >
        <Text>Via Whatsapp</Text>
      </Menu.Item>
    </Menu>
  );

  const renderTeam = (name) => {
    const { teams } = value ? value.data() : [];
    let listRender = [];
    if (name == "A" && !isEmpty(teams.teamA) && isArray(teams.teamA)) {
      listRender = teams.teamA.map((p, index) => {
        return (
          <Row align="middle" key={index} className="mt-1 pl-2">
            <Col flex="60px">
              <Avatar size={44} src={p.avatar || ""} icon={<UserOutlined />} />
            </Col>
            <Col flex="auto">
              <Row>
                <Text bold small>
                  {`${p.firstName} ${p.lastName}`}
                </Text>
              </Row>
              <Row>
                <Text primary light small>
                  {capitalize(p.role)}
                </Text>
              </Row>
            </Col>
          </Row>
        );
      });
    }
    if (name == "B" && !isEmpty(teams.teamB) && isArray(teams.teamB)) {
      listRender = teams.teamB.map((p, index) => {
        return (
          <Row align="middle" key={index} className="mt-1 pl-2">
            <Col flex="60px">
              <Badge count={2} overflowCount={999} offset={[-5, 3]}>
                <Avatar
                  size={50}
                  src={p.avatar || ""}
                  icon={<UserOutlined />}
                />
              </Badge>
            </Col>
            <Col flex="auto">
              <Row>
                <Text black bold small>
                  {`${p.firstName} ${p.lastName}`}
                </Text>
              </Row>
              <Row>
                <Text primary light small>
                  {capitalize(p.role)}
                </Text>
              </Row>
            </Col>
          </Row>
        );
      });
    }

    listRender.push(
      <Row justify="center" align="middle">
        <Button
          className="mt-1"
          type="primary"
          disabled={
            (myTeam === "A" && name === "B") || (myTeam === "B" && name === "A")
          }
          // loading={name === "A" ? btnLoadingA : btnLoadingB}
          onClick={() =>
            !(name === "A" ? btnLoadingA : btnLoadingB)
              ? myTeam == name
                ? unJoinTeam(name)
                : joinTeam(name)
              : null
          }
        >
          {myTeam == name ? "UNJOIN" : "JOIN"}
        </Button>
      </Row>
    );

    return listRender;
  };

  let totalA = 0;
  let totalB = 0;

  return (
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
        {loading || finalLoader ? (
          <Row justify="center" align="middle" style={{ height: "50vh" }}>
            <Spin spinning size="large" />
          </Row>
        ) : value.exists ? (
          <div className="minHeight">
            <Row align="middle" className=" mt-2">
              <Col>
                <Row align="middle">
                  <PitchIcon className="primaryColor mr-1" />
                </Row>
              </Col>
              <Col>
                <Text h3 className="bold" weight="500">
                  Team A vs Team B
                </Text>
              </Col>
            </Row>
            <Row justify="space-between">
              <Space direction="vertical" className="mt-2">
                <Row align="top">
                  <Col style={{ width: 36 }}>
                    <PlaceIcon className="formLabelIcon primaryColor mr-1" />
                  </Col>
                  <Col>
                    <Row>
                      <Text>{data.center.Name || "-"}</Text>
                    </Row>
                    <Row>
                      <Text style={{ fontWeight: "400 !important" }}>
                        {data.center.Address || "-"}
                      </Text>
                    </Row>
                  </Col>
                </Row>
                <Row align="middle">
                  <Col style={{ width: 36 }}>
                    <CalendarOutlined
                      style={{ fontSize: 20 }}
                      className="formLabelIcon primaryColor mr-1"
                    />
                  </Col>
                  <Col>
                    <Text>{data.dateTime}</Text>
                  </Col>
                </Row>
                <Row align="middle">
                  <Col style={{ width: 36 }}>
                    <MoneyIcon className="formLabelIcon primaryColor mr-1" />
                  </Col>
                  <Col>
                    <Text>{data.cost} £ per person</Text>
                  </Col>
                </Row>
              </Space>
            </Row>
            <Row>
              <Col span={leftSpan}>
                <Divider type="horizontal" className="divider" />
                <Row align="middle">
                  <Col>
                    <Avatar
                      className="mr-2"
                      size={85}
                      icon={<UserOutlined />}
                      src={(manager && manager?.profileImage?.secure_url) || ""}
                    />
                  </Col>
                  <Col>
                    <Space direction="vertical">
                      <Row align="middle">
                        <Text
                          bold
                          h4
                        >{`${manager.firstName} ${manager.lastName}`}</Text>
                      </Row>
                      <Row align="middle">
                        <Tag color={theme.colors.primary}>Manager</Tag>
                      </Row>
                    </Space>
                  </Col>
                </Row>
                <Divider type="horizontal" className="divider" />
                <Row align="middle" justify="space-between">
                  <Col>
                    <Row align="middle">
                      <TShirtIcon className="primaryColor mr-1" />
                      <Row align="middle">
                        <Text bold h3 style={{ color: "inherit" }}>
                          Squad
                        </Text>
                      </Row>
                    </Row>
                  </Col>
                  {/* <Col>
                    <RightOutlined style={{ fontSize: 24 }} />
                  </Col> */}
                </Row>
              </Col>
            </Row>
            {/* <Row justify="end">
              <span className="mt-2 mb-2">
                <Button
                  type="primary"
                  loading={btnLoading}
                  onClick={() =>
                    !btnLoading
                      ? showUnJoinBtn
                        ? unJoinTeam()
                        : setShowConfirmModal(true)
                      : null
                  }
                >
                  {showUnJoinBtn ? "UNJOIN" : "JOIN"}
                </Button>
              </span>
            </Row> */}
            <Row>
              <Col span={leftSpan} className="colFlex allCenter mt-1">
                <Row justify="center" align="stretch" className="w100">
                  <Col span={11} className="colFlex allCenter">
                    <Row>
                      <TeamAIcon stle={{ height: 80, width: 80 }} />
                    </Row>
                    <Row>
                      <Text bold>Team A</Text>
                    </Row>
                    <Row>
                      <Card
                        style={{ height: 36, width: 36, marginTop: 10 }}
                        className="rowFlex allCenter mb-1"
                      >
                        <Text white>{totalA}</Text>
                      </Card>
                    </Row>
                  </Col>
                  <Col span={2} className="colFlex textCenter">
                    <Text black style={{ marginTop: 58 }}>
                      VS
                    </Text>
                  </Col>
                  <Col span={11} className="colFlex allCenter">
                    <Row>
                      <TeamBIcon stle={{ height: 80, width: 80 }} />
                    </Row>
                    <Row>
                      <Text bold>Team B</Text>
                    </Row>
                    <Row>
                      <Card
                        style={{ height: 36, width: 36, marginTop: 10 }}
                        className="rowFlex allCenter mb-1"
                      >
                        <Text white>{totalB}</Text>
                      </Card>
                    </Row>
                  </Col>
                </Row>
                <Row justify="space-between" className="w100">
                  <Col span={11}>{renderTeam("A")}</Col>
                  <Col offset={2} span={11}>
                    {renderTeam("B")}
                  </Col>
                </Row>
                <Divider type="horizontal" className="divider" />
              </Col>
              <Col span={leftSpan}>
                <Row>
                  <Button
                    style={{ display: "flex", width: 145 }}
                    onClick={() => handleFollow()}
                    type="text"
                    icon={
                      following ? (
                        <HeartFilled className="shareFollowIcon primaryColor" />
                      ) : (
                        <HeartOutlined className="shareFollowIcon" />
                      )
                    }
                  >
                    {following ? "Following" : "Follow"}
                  </Button>
                  <Dropdown overlay={renderShareLinks} arrow trigger="click">
                    <Button
                      style={{ display: "flex" }}
                      type="text"
                      icon={<ShareAltOutlined className="shareFollowIcon" />}
                    >
                      Share
                    </Button>
                  </Dropdown>
                </Row>
              </Col>
            </Row>
          </div>
        ) : (
          <Empty
            image={Images.emailSent}
            description="Oops! We didn't find the match you are looking for!"
          />
        )}
        {/* <ConfirmModal
          message="Do you want to join the match?"
          visible={showConfirmModal}
          dismiss={(isConfirm) => {
            if (isConfirm) {
              setShowSelectTeamModal(true);
            }
            setShowConfirmModal(false);
          }}
        /> */}
        {/* <SelectTeamModal
          visible={showSelectTeamModal}
          dismiss={(team) => {
            setShowSelectTeamModal(false);
            if (team) {
              joinTeam(team);
            }
          }}
        /> */}
        {/* <SquadModal
          teams={value?.exists ? value.data().teams : {}}
          visible={showSquadModal}
          dismiss={() => setShowSquadModal(false)}
        /> */}
      </Col>
    </>
  );
}

export default GameDetails;
