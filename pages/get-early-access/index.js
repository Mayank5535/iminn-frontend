import React, { useState } from "react";
import Head from "next/head";
import useMediaQuery from "utils/useMediaQuery";
import Images from "@config/images";
import db from "@config/firebaseConfig";
import { Button, Checkbox, Form, Input, notification } from "antd";
import "./styles.module.less";

function GetEarlyAccess() {
  const { isXs, isMd } = useMediaQuery();
  const [form] = Form.useForm();

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

  // const seeData = () => {
  //   db.collection("users")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         console.log(`${doc.id} =>`, doc.data());
  //       });
  //     });
  // };

  const onFinish = async ({ email }) => {
    if (btnLoading) return;
    const data = {
      email: email,
    };
    setBtnLoading(true);
    try {
      let result = await db.collection("users").add(data);
      if (result.id) {
        console.log("successsssssss");
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
      <div className="mobileContainer">
        <div className="roundcontainer">
          <div className="logoContainer2">
            <img
              src={Images.brandLogoLight}
              alt="logo"
              className="logo-light-img"
            />
            <span className="logoText-light bigText">IMINN</span>
          </div>
          <p className="titleText">We are almost there!</p>
          <p className="subTitleText">
            Enter your email to be notified <br />
            when the app is ready!
          </p>
        </div>
        <div className="formContainer">
          <Form form={form} onFinish={onFinish} wrapperCol={{ span: 24 }}>
            <Form.Item
              name="email"
              rules={[
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item name="terms">
              <Checkbox
                onChange={(e) => setTermscheck(e.target.checked)}
                checked={termscheck}
              >
                Accept terms and conditions
              </Checkbox>
            </Form.Item>
            <Form.Item>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
              orci penatibus lorem dolor imperdiet. Viverra sem neque enim
              vulputate sagittis, aliquam, eget. Volutpat lacinia morbi urna
              varius dignissim consectetur nullam.
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                shape="round"
                block
              >
                SEND MAIL
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  };

  const renderNormalView = () => {
    return (
      <div className="fullContainerView">
        <img src={Images.football} className="cornerImg" />
        <div className="leftDiv">
          <p className="titleText">We are almost there!</p>
          <p className="subTitleText">
            Enter your email to be notified <br />
            when the app is ready!
          </p>
        </div>
        <div className="rightDiv">
          <div className="logoContainer2">
            <img src={Images.brandLogo} alt="logo" className="logo" />
            <span className="logoText fLogoText">IMINN</span>
          </div>
          <div>
            <Form
              form={form}
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
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="terms"
                rules={[{ validator: checkBoxValidation }]}
              >
                <Checkbox
                  onChange={(e) => setTermscheck(e.target.checked)}
                  checked={termscheck}
                >
                  Accept terms and conditions
                </Checkbox>
              </Form.Item>
              <Form.Item>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisi orci penatibus lorem dolor imperdiet. Viverra sem neque
                enim vulputate sagittis, aliquam, eget. Volutpat lacinia morbi
                urna varius dignissim consectetur nullam.
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
                  SEND MAIL
                </Button>
              </Form.Item>
            </Form>
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

export default GetEarlyAccess;
