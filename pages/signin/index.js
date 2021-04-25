/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Head from "next/head";
import useMediaQuery from "utils/useMediaQuery";
import Images from "@config/images";
import db from "@config/firebaseConfig";
import { Button, Checkbox, Divider, Form, Input, notification } from "antd";
import "./styles.module.less";

function Signin() {
  const { isXs, isMd } = useMediaQuery();
  const [form] = Form.useForm();

  const [formSwitch, setFormSwitch] = useState(false); // true for login Form, False for signup Form
  const [termscheck, setTermscheck] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const checkBoxValidation = (rule, value) => {
    return new Promise((resolve, reject) => {
      if (termscheck) {
        resolve(true);
      }
      reject("Please accept the terms and conditions");
    });
  };

  const onFinish = async ({ email }) => {
    if (btnLoading) return;
    const data = {
      email: email,
    };
    setBtnLoading(true);
    try {
      let result = await db.collection("users").add(data);
      if (result.id) {
        notification.success({
          message: "Success",
          description: "Your email is submitted successfully!",
        });
      }
      setBtnLoading(false);
      form.resetFields();
      setTermscheck(false);
    } catch (error) {
      console.error("Error adding document: ", error);
      notification.error({
        message: "Oops!",
        description: "something went wrong while submitting your email",
      });
      setBtnLoading(false);
    }
  };

  const renderMobileView = () => {
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
              name="passowrd"
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
            <Form.Item>
              <Button
                loading={btnLoading}
                type="primary"
                size="large"
                htmlType="submit"
                shape="round"
                block
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
        <div className="bottomText">
          {formSwitch ? (
            <span className="noSelect">
              Don't have an account yet?
              <a onClick={() => setFormSwitch(!formSwitch)}> Signup!</a>
            </span>
          ) : (
            <span className="noSelect">
              Already have an account?
              <a onClick={() => setFormSwitch(!formSwitch)}> Login!</a>
            </span>
          )}
        </div>
      </div>
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
          <div className="colFlex allCenter" style={{ flex: 6 }}>
            <div className="logoContainer2">
              <img src={Images.brandLogo} alt="logo" className="logo" />
              <span className="logoText fLogoText">IMINN</span>
            </div>
            <div className="welcomeTextSmall">
              {formSwitch ? "Welcome back to IMINN!" : "Welcome to IMINN!"}
            </div>
            <div className="welcomeTextBig bold">
              {formSwitch ? "Let's Login!" : "Let's Signup!"}
            </div>
          </div>
          <div className="bottomFlexDiv">
            <div className="formContainerLg">
              <Form
                form={form}
                className="form"
                onFinish={onFinish}
                wrapperCol={{ span: isMd ? 16 : 10, offset: isMd ? 4 : 7 }}
              >
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
                  name="passowrd"
                  rules={[{ required: true, message: "Password is required!" }]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Enter your password"
                  />
                </Form.Item>
                <Form.Item
                  name="terms"
                  rules={[{ validator: checkBoxValidation }]}
                >
                  <Checkbox
                    onChange={(e) => setTermscheck(e.target.checked)}
                    checked={termscheck}
                  >
                    {formSwitch
                      ? "Remember my credentials"
                      : "Accept terms and conditions"}
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Button
                    loading={btnLoading}
                    type="primary"
                    size="large"
                    htmlType="submit"
                    shape="round"
                    block
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
                          <img
                            src={Images.facebook}
                            height="100%"
                            width="auto"
                          />
                        </span>
                      </div>
                    </Form.Item>
                  </>
                )}
              </Form>
            </div>
            <div className="bottomText">
              {formSwitch ? (
                <span className="noSelect">
                  Don't have an account yet?
                  <a onClick={() => setFormSwitch(!formSwitch)}> Signup!</a>
                </span>
              ) : (
                <span className="noSelect">
                  Already have an account?
                  <a onClick={() => setFormSwitch(!formSwitch)}> Login!</a>
                </span>
              )}
            </div>
          </div>
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

export default Signin;
