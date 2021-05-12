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
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import db from "@config/firebaseConfig";
import { Avatar, Col, Divider, Empty, Row, Space, Spin, Tag } from "antd";
import { useDocument } from "react-firebase-hooks/firestore";
import { isEmpty, map } from "lodash";
import { useSelector } from "react-redux";
import Images from "@config/images";
import {
  MoneyIcon,
  PitchIcon,
  PlaceIcon,
  TShirtIcon,
} from "@components/UI/Icons";
import "./styles.module.less";
import { theme } from "utils/commonFunctions";
import ConfirmModal from "@components/UI/ConfirmModal";
import SelectTeamModal from "../SelectTeamModal";
import SquadModal from "../SquadModal";

function GameDetails() {
  const router = useRouter();
  const { userData } = useSelector((state) => state.auth);

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSquadModal, setShowSquadModal] = useState(false);
  const [showSelectTeamModal, setShowSelectTeamModal] = useState(false);
  const [myTeam, setMyTeam] = useState(null);

  const [btnLoading, setBtnLoading] = useState(false);
  const [finalLoader, setFinalLoader] = useState(true);
  const [manager, setManager] = useState({});

  const [value, loading] = useDocument(
    db.doc(`games/${router?.query.matches[0]}`),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const joinTeam = (team) => {
    const playerData = {
      playerId: userData.userId,
      firstName: userData.firstName,
      lastName: userData.lastName,
      avatar: userData.profileImage.secure_url,
      role: userData.role,
      email: userData.email,
    };
    setBtnLoading(true);
    db.collection("games")
      .doc(`${router?.query.matches[0]}`)
      .update({
        [`teams.team${team}`]:
          firebase.firestore.FieldValue.arrayUnion(playerData),
      })
      .then(() => {
        console.log("Document successfully written!");
        setBtnLoading(false);
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
        setBtnLoading(false);
      });
  };

  const unJoinTeam = () => {
    const playerData = {
      playerId: userData.userId,
      firstName: userData.firstName,
      lastName: userData.lastName,
      avatar: userData.profileImage.secure_url,
      role: userData.role,
      email: userData.email,
    };
    setBtnLoading(true);
    db.collection("games")
      .doc(`${router?.query.matches[0]}`)
      .update({
        [`teams.team${myTeam}`]:
          firebase.firestore.FieldValue.arrayRemove(playerData),
      })
      .then(() => {
        console.log("Document successfully written!");
        setBtnLoading(false);
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
        setBtnLoading(false);
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
      return value.data();
    }
  }, [value]);

  const showUnJoinBtn = ["A", "B"].includes(myTeam);

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
            <Row align="middle" className="mb-2 mt-2">
              <Col>
                <PitchIcon className="primaryColor mr-1" />
              </Col>
              <Col>
                <Text h3 className="robotoFamily" weight="500">
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
              <Col>
                <Divider type="horizontal" className="divider" />
                <Row>
                  <Col>
                    <Avatar
                      className="mr-2"
                      size={85}
                      icon={<UserOutlined />}
                      src={(manager && manager?.profileImage?.secure_url) || ""}
                    />
                  </Col>
                  <Col>
                    <Row align="center">
                      <Text
                        bold
                        h4
                      >{`${manager.firstName} ${manager.lastName}`}</Text>
                    </Row>
                    <Row>
                      <Tag color={theme.colors.primary}>Manager</Tag>
                    </Row>
                  </Col>
                </Row>
                <Divider type="horizontal" className="divider" />
                <Row
                  align="middle"
                  justify="space-between"
                  className="seeSquadLink"
                  onClick={() => setShowSquadModal(true)}
                >
                  <Col>
                    <Row align="middle">
                      <TShirtIcon className="primaryColor mr-1" />
                      <Row align="middle">
                        <Text bold h3 style={{ color: "inherit" }}>
                          See squad
                        </Text>
                      </Row>
                    </Row>
                  </Col>
                  <Col>
                    <RightOutlined style={{ fontSize: 24 }} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row justify="end">
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
            </Row>
          </div>
        ) : (
          <Empty
            image={Images.emailSent}
            description="Oops! We didn't find the match you are looking for!"
          />
        )}
        <ConfirmModal
          message="Do you want to join the match?"
          visible={showConfirmModal}
          dismiss={(isConfirm) => {
            if (isConfirm) {
              setShowSelectTeamModal(true);
            }
            setShowConfirmModal(false);
          }}
        />
        <SelectTeamModal
          visible={showSelectTeamModal}
          dismiss={(team) => {
            setShowSelectTeamModal(false);
            if (team) {
              joinTeam(team);
            }
          }}
        />
        <SquadModal
          teams={value?.exists ? value.data().teams : {}}
          visible={showSquadModal}
          dismiss={() => setShowSquadModal(false)}
        />
      </Col>
    </>
  );
}

export default GameDetails;
