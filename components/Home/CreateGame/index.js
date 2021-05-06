import React, { useState } from "react";
import {
  Avatar,
  Col,
  DatePicker,
  Divider,
  Row,
  Select,
  Space,
  Steps,
  Switch,
  Upload,
} from "antd";
import Text from "@components/UI/Text";
import { Header, Sider } from "@components";
import {
  FootballIcon,
  GalleryIcon,
  InfoCircleIcon,
  KickBallIcon,
  LockedIcon,
  MoneyIcon,
  PeoplesIcon,
  PitchIcon,
  PlaceIcon,
  SettingsIcon,
  TeamAIcon,
  TeamBIcon,
  TShirtIcon,
  UnLockedIcon,
} from "@components/UI/Icons";
import Card from "@components/UI/Card";
import { capitalize } from "lodash";
import {
  getActiveTheme,
  getBase64,
  theme,
  validateImage,
} from "utils/commonFunctions";
import TextInput from "@components/UI/TextInput";
import { CalendarOutlined, SearchOutlined } from "@ant-design/icons";
import Dropdown from "@components/UI/Dropdown";
import Button from "@components/UI/Button";
import ImgCrop from "antd-img-crop";
const { Option } = Select;

const { Step } = Steps;

function CreateGame(props) {
  const [currentStep, setCurrentStep] = useState(0);

  const [pitch, setPitch] = useState("");
  const [participants, setParticipants] = useState();
  const [gamePic, setGamePic] = useState(""); // to be uploaded
  const [picBase64, setPicBase64] = useState(""); // to display preview

  const handleProfileImage = async (info) => {
    const imageVal = validateImage(info);
    if (imageVal) {
      setGamePic(info);
      getBase64(info, (imgUrl) => {
        setPicBase64(imgUrl);
      });
    }
  };

  const handleContinue = () => {
    console.log("Onclick CONTINUE");
    if ([0, 1].includes(currentStep)) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle Publish
    }
  };

  const handleBack = () => {
    console.log("Onclick handleBack");
    if (currentStep === 0) {
      //Close Create Game
    } else if ([1, 2].includes(currentStep)) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderFirstStep = () => {
    return (
      <>
        <Row align="middle">
          <div className="mt-4 mb-1">
            <PitchIcon className="formLabelIcon" />
            <Text h4>Type Pitch</Text>
          </div>
        </Row>
        <Row gutter={24}>
          {["5vs5", "7vs7", "11vs11"].map((name) => {
            return (
              <Col key={name}>
                <Card
                  trans={pitch !== name}
                  className={`pitchCard ${
                    pitch !== name && "pitchCard-active"
                  }`}
                  onClick={() => setPitch(name)}
                >
                  <Text h4 bold primary={pitch !== name} white={pitch == name}>
                    {name}
                  </Text>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row align="middle">
          <div className="mt-2 mb-1">
            <PlaceIcon className="formLabelIcon" />
            <Text h4>Sports Center</Text>
          </div>
        </Row>
        <Row gutter={[48, 24]}>
          <Col span={10}>
            <TextInput
              placeholder="Search Sports Center"
              suffix={<SearchOutlined />}
              disabled={true}
            />
          </Col>
          <Col span={10}>
            <Dropdown placeholder="Payment" onChange={() => {}}>
              <Option value="cash">Cash</Option>
            </Dropdown>
          </Col>
          <Col span={10}>
            <TextInput
              placeholder="Cost per person"
              prefix={
                <Text primary style={{ fontSize: 16 }}>
                  &pound;
                </Text>
              }
            />
          </Col>
          <Col span={10}>
            <DatePicker allowClear={false} />
          </Col>
        </Row>
        <Row align="middle">
          <div className="mt-2 mb-1">
            <SettingsIcon className="formLabelIcon" />
            <Text h4>Advance Options</Text>
          </div>
        </Row>
        <Row gutter={[48, 24]}>
          <Col span={10}>
            <Dropdown placeholder="Cancellation terms">
              <Option value="4">4 hours</Option>
              <Option value="8">8 hours</Option>
              <Option value="12">12 hours</Option>
              <Option value="24">24 hours</Option>
            </Dropdown>
          </Col>
          <Col span={10}>
            <Row
              justify="space-between"
              align="middle"
              style={{ height: "100%" }}
            >
              <Text>Covered Pitch</Text>
              <div>
                <Switch onChange={() => {}} />
              </div>
            </Row>
          </Col>
        </Row>
        <Row align="middle">
          <div className="mt-2 mb-1">
            <PeoplesIcon className="formLabelIcon" />
            <Text h4>Participants</Text>
          </div>
        </Row>
        <Row gutter={24}>
          {["private", "public"].map((p) => {
            return (
              <Col key={p}>
                <Card
                  trans={participants !== p}
                  className={`pitchCard ${
                    participants === p && "pitchCard-active"
                  }`}
                  style={{
                    color:
                      participants === p
                        ? theme.colors.white
                        : theme.colors.primary,
                  }}
                  onClick={() => setParticipants(p)}
                >
                  {p === "public" ? (
                    <UnLockedIcon className="privacyIcons" />
                  ) : (
                    <LockedIcon className="privacyIcons" />
                  )}
                  <Text
                    h4
                    bold
                    primary={participants !== p}
                    white={participants == p}
                  >
                    {capitalize(p)}
                  </Text>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Text footnote className="mt-1">
            {participants === "private" &&
              "*Only People you decide to invite can participate."}
            {participants === "public" &&
              " *Anyone can request to participate."}
          </Text>
        </Row>
        <Row>
          <Col span={20}>
            <Row justify="end">
              <span className="mt-1 mb-4">
                <Button type="primary" onClick={handleContinue}>
                  CONTINUE
                </Button>
              </span>
            </Row>
          </Col>
        </Row>
      </>
    );
  };

  const renderSecondStep = () => {
    return (
      <>
        <Row align="middle">
          <div className="mt-4 mb-1">
            <TShirtIcon className="formLabelIcon" />
            <Text h4>Select Teams</Text>
          </div>
        </Row>
        <Row justify="start" align="bottom">
          <Col span={20}>
            <Row justify="center" align="middle">
              <Col span={11}>
                <Row justify="center" align="middle">
                  <TeamAIcon className="teamLogos" />
                </Row>
              </Col>
              <Col span={2}>
                <Row justify="center" align="middle">
                  <Text h2>VS</Text>
                </Row>
              </Col>
              <Col span={11}>
                <Row justify="center" align="middle">
                  <TeamBIcon className="teamLogos" />
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify="start">
          <Col span={20}>
            <Row justify="center" align="middle">
              <Col span={11}>
                <Row justify="center" align="middle">
                  <TextInput
                    placeholder="Team A"
                    className="teamNameInput ml-1 mr-1"
                  />
                </Row>
              </Col>
              <Col span={11} offset={2}>
                <Row justify="center" align="middle">
                  <TextInput
                    placeholder="Team B"
                    className="teamNameInput ml-1 mr-1"
                  />
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={20}>
            <Row justify="end">
              <span className="mt-2 mb-4">
                <Button type="text" className="mr-1" onClick={handleBack}>
                  BACK
                </Button>
                <Button type="primary" onClick={handleContinue}>
                  CONTINUE
                </Button>
              </span>
            </Row>
          </Col>
        </Row>
      </>
    );
  };

  const renderThirdStep = () => {
    return (
      <>
        <Row align="top" style={{ marginTop: "6rem" }}>
          <Col span={12}>
            <div className="rightBorder">
              <Row justify="center" align="middle">
                <div className="mb-1">
                  <GalleryIcon className="formLabelIcon" />
                  <Text h4>Cover Image</Text>
                </div>
              </Row>
              <Row justify="center">
                <Col>
                  <ImgCrop rotate>
                    <Upload
                      showUploadList={false}
                      beforeUpload={handleProfileImage}
                    >
                      <div className="gameAvatar mt-2">
                        <Avatar
                          shape="square"
                          className="gameAvatar"
                          size={140}
                          src={picBase64}
                          icon={<KickBallIcon />}
                          style={{ cursor: "pointer" }}
                        />
                        <a className="uploadText mt-1">Change Image</a>
                      </div>
                    </Upload>
                  </ImgCrop>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={12}>
            <Row justify="center" align="middle">
              <Col span={12}>
                <div className="mb-1">
                  <InfoCircleIcon className="formLabelIcon" />
                  <Text h4>Cover Image</Text>
                </div>
              </Col>
            </Row>
            <Row justify="center">
              <Col span={12}>
                <div className="mt-2">
                  <Space
                    direction="vertical"
                    size={16}
                    style={{ width: "100%" }}
                  >
                    <Row align="middle">
                      <Col flex="40px">
                        <FootballIcon className="formLabelIcon primaryColor" />
                      </Col>
                      <Col flex="auto">
                        <Text>5 vs 5</Text>
                      </Col>
                    </Row>
                    <Row align="middle">
                      <Col flex="40px">
                        <PlaceIcon className="formLabelIcon primaryColor" />
                      </Col>
                      <Col flex="auto">
                        <Row>
                          <Text>Stadium Name</Text>
                        </Row>
                        <Row>
                          <Text style={{ fontWeight: "400 !important" }}>
                            Stadium Address
                          </Text>
                        </Row>
                      </Col>
                    </Row>
                    <Row align="middle">
                      <Col flex="40px">
                        <CalendarOutlined
                          style={{ fontSize: 20 }}
                          className="formLabelIcon primaryColor"
                        />
                      </Col>
                      <Col flex="auto">
                        <Text>2nd of December, 4:15 PM</Text>
                      </Col>
                    </Row>
                    <Row align="middle">
                      <Col flex="40px">
                        <MoneyIcon className="formLabelIcon primaryColor" />
                      </Col>
                      <Col flex="auto">
                        <Text>6.00 $ per person</Text>
                      </Col>
                    </Row>
                  </Space>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify="end" align="bottom">
          <span className="mt-3 mb-4">
            <Button type="text" className="mr-1" onClick={handleBack}>
              BACK
            </Button>
            <Button type="primary" onClick={handleContinue}>
              CONTINUE
            </Button>
          </span>
        </Row>
      </>
    );
  };

  return (
    <>
      <Col flex="4">
        <Sider>
          <Col span={24}>
            <Text h3 className="robotoFamily mb-2" weight="500">
              Create Game
            </Text>
            <Col>
              <div className="mt-2 stepsCounter">
                <Steps direction="vertical" current={currentStep}>
                  <Step title="Game information" />
                  <Step title="In Progress" />
                  <Step title="Recap & Publish" />
                </Steps>
              </div>
            </Col>
          </Col>
        </Sider>
      </Col>
      <Col flex="20" className="pl-2">
        <Header />
        {currentStep === 0 && renderFirstStep()}
        {currentStep === 1 && renderSecondStep()}
        {currentStep === 2 && renderThirdStep()}
      </Col>
    </>
  );
}

export default CreateGame;
