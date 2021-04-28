/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import firebase from "firebase";
import useMediaQuery from "utils/useMediaQuery";
import Images from "@config/images";
import {
  Avatar,
  Button,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  message,
  notification,
  Row,
  Upload,
} from "antd";
import moment from "moment";
import { UserOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import { useRouter } from "next/router";
import {
  getActiveSource,
  getBase64,
  uploadPhoto,
  validateImage,
} from "utils/commonFunctions";
import "./styles.module.less";
import { roles } from "@config/staticData";
import { isEmpty } from "lodash";
import db from "@config/firebaseConfig";

const dateFormat = "DD/MM/YYYY";

function CreateProfile() {
  const { isXs, isMd, isSm } = useMediaQuery();
  const [form] = Form.useForm();
  const router = useRouter();
  const [profileForm, setProfileForm] = useState(true); //render condtion
  const [profilePic, setProfilePic] = useState(""); // to be uploaded
  const [picBase64, setPicBase64] = useState(""); // to display preview
  const [selectedRole, setSelectedRole] = useState({}); // to display preview
  const [btnLoading, setBtnLoading] = useState(false); //Btn

  const handleProfileImage = async (info) => {
    const imageVal = validateImage(info);
    if (imageVal) {
      setProfilePic(info);
      getBase64(info, (imgUrl) => {
        setPicBase64(imgUrl);
      });
    }
  };

  const submitForm = async () => {
    const user = firebase.auth().currentUser;
    setBtnLoading(true);
    const userObject = {
      firstName: form.getFieldValue("firstName"),
      lastName: form.getFieldValue("lastName"),
      dob: form.getFieldValue("dob").format(dateFormat),
      role: selectedRole.name,
    };

    try {
      const res = await uploadPhoto(profilePic, user.uid);
      console.log("🚀 ~ file: index.js ~ line 62 ~ submitForm ~ res", res);
      userObject.profileImage = res;
    } catch (error) {
      message.error(error.message);
      console.error(error);
      setBtnLoading(false);
    }

    user
      .updateProfile({
        displayName:
          form.getFieldValue("firstName") +
          " " +
          form.getFieldValue("lastName"),
      })
      .then(() => console.log("updated auth profile"))
      .catch((e) => {
        message.error(e.message);
        console.error(e);
      });

    db.collection("users")
      .doc(user.uid)
      .update(userObject)
      .then(() => router.replace("/home"))
      .catch((e) => {
        message.error(e.message);
        console.error(e);
        setBtnLoading(false);
      });
  };

  const onFinish = (values) => {
    setProfileForm(false);
  };

  const handleContinue = () => {
    if (isEmpty(selectedRole)) {
      message.warning("Please select a role");
      return;
    }
    submitForm();
  };

  const handleRole = (item) => {
    setSelectedRole(item);
  };

  const renderMobileView = () => {
    return <></>;
    return (
      <div className="mobileContainer2">
        <div className="roundcontainer2">
          <div className="logoContainer2">
            <img
              src={Images.brandLogoLight}
              alt="logo"
              className="logo-light-img"
            />
            <span className="logoText-light bigText">IMINN</span>
          </div>
          <p className="subTitleText2">
            {formSwitch ? "Welcome back to IMINN!" : "Welcome to IMINN!"}
          </p>
          <p className="titleText2">
            {formSwitch ? "Let's Login!" : "Let's Signup!"}
          </p>
        </div>
        <div className="formContainer2">
          <Form form={form} onFinish={onFinish} wrapperCol={{ span: 24 }}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Email is required!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input size="large" placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Password is required!" }]}
            >
              <Input.Password size="large" placeholder="Enter your password" />
            </Form.Item>
            <Form.Item name="terms" rules={[{ validator: checkBoxValidation }]}>
              <Checkbox
                onChange={(e) => setTermscheck(e.target.checked)}
                checked={termscheck}
              >
                {formSwitch
                  ? "Remember my credentials"
                  : "Accept terms and conditions"}
              </Checkbox>
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <Button
                loading={btnLoading}
                type="primary"
                size="large"
                htmlType="submit"
                shape="round"
              >
                {formSwitch ? "LOGIN" : "SIGNUP"}
              </Button>
            </Form.Item>
            {!formSwitch && (
              <>
                <Form.Item>
                  <Divider>OR USING</Divider>
                </Form.Item>
                <Form.Item>
                  <div className="socialLoginContainer">
                    <span className="socialLoginButtons googleBtn">
                      <img src={Images.google} height="100%" width="auto" />
                    </span>
                    <span className="socialLoginButtons">
                      <img src={Images.facebook} height="100%" width="auto" />
                    </span>
                  </div>
                </Form.Item>
              </>
            )}
          </Form>
        </div>
      </div>
    );
  };

  const renderRole = () => {
    return (
      <>
        <Row className="roleContainerLg" justify="center" align="middle">
          <Col span={14} className="colFlex allCenter">
            <span className="stepTitle">Create Profile</span>
            <Row justify="center" align="middle" className="mt-2 mb-3">
              <Col className="textCenter">
                <span className="rolteTitle primaryColor">
                  Select a Role that's <br />
                  Fit with you!
                </span>
              </Col>
            </Row>
            <Row justify="center" align="middle" gutter={[16, 48]}>
              {roles.map((item) => {
                const isActive = selectedRole?.id === item.id;
                return (
                  <Col span={12} className="textCenter" key={item.id}>
                    <div
                      className="roleButton colFlex allCenter"
                      onClick={() => handleRole(item)}
                    >
                      <span
                        className={`roleName ${isActive && "primaryColor"}`}
                      >
                        {item.name}
                      </span>
                      <img
                        className="roleImg"
                        src={getActiveSource(item.icon, isActive)}
                      />
                    </div>
                  </Col>
                );
              })}
            </Row>
            <Row
              justify="center"
              align="middle"
              gutter={[16, 48]}
              className="w100 mt-2"
            >
              <Col span={16}>
                <Button
                  loading={btnLoading}
                  className="confirmBtn"
                  type="primary"
                  size="large"
                  shape="round"
                  onClick={() => (btnLoading ? null : handleContinue())}
                  block
                >
                  CONTINUE
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  };

  const renderProfile = () => {
    return (
      <>
        <div className="profileContainerLg">
          <Form
            form={form}
            className="form"
            onFinish={onFinish}
            wrapperCol={{
              span: isMd || isSm ? 16 : 10,
              offset: isMd || isSm ? 4 : 7,
            }}
          >
            <Form.Item style={{ textAlign: "center" }}>
              <span className="stepTitle">Create Profile</span>
            </Form.Item>
            <Form.Item>
              <ImgCrop rotate>
                <Upload
                  showUploadList={false}
                  beforeUpload={handleProfileImage}
                >
                  <div className="uploadBtnContainer">
                    <Avatar
                      size={130}
                      src={picBase64}
                      icon={<UserOutlined />}
                      style={{ cursor: "pointer" }}
                    />
                    <a className="uploadText">Change Image</a>
                  </div>
                </Upload>
              </ImgCrop>
            </Form.Item>
            <Form.Item
              name="firstName"
              rules={[{ required: true, message: "Please enter your name." }]}
            >
              <Input size="large" placeholder="Enter your name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[
                { required: true, message: "Please enter your surname." },
              ]}
            >
              <Input size="large" placeholder="Enter your surname" />
            </Form.Item>
            <Form.Item
              name="dob"
              rules={[
                { required: true, message: "Please enter your date of birth." },
              ]}
            >
              <DatePicker
                placeholder="Enter your date of birth"
                size="large"
                format={dateFormat}
              />
            </Form.Item>
            <Form.Item>
              <Button
                className="confirmBtn"
                type="primary"
                size="large"
                htmlType="submit"
                shape="round"
                block
              >
                CONTINUE
              </Button>
            </Form.Item>
          </Form>
        </div>
      </>
    );
  };

  const renderNormalView = () => {
    return (
      <div className="fullContainerView">
        <img src={Images.football} className="cornerImg" />
        <div className="leftDiv">
          <p className="titleText2">
            Let's Climb the Highest Ranking in Your City.
          </p>
          <p className="subTitleText2">
            Explore the game that will make you a superstars amongs thousands of
            players in your city. Awesome game, awesome you!
          </p>
        </div>
        <div className="rightDiv">
          {profileForm ? renderProfile() : renderRole()}
        </div>
      </div>
    );
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
      {isXs ? renderMobileView() : renderNormalView()}
    </>
  );
}

export default CreateProfile;
