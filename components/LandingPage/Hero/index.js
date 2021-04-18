import React from "react";
import Images from "@config/images";
import { Button, Row } from "antd";
import "../styles.module.less";
import useMediaQuery from "utils/useMediaQuery";

function Hero() {
  const { isXs } = useMediaQuery();

  return (
    <section className={isXs ? "wrapperCol" : "heroContainer"}>
      <div className="leftSection">
        <Row className="logoContainer">
          <img src={Images.brandLogo} alt="logo" className="logo" />
          <span className="logoText fLogoText">IMINN</span>
        </Row>
        <div className="textSection">
          <div className="footballText">Football</div>
          <div className="heroText">WHO's IN?</div>
          <div className="heroText primaryColor">I'M IN</div>
          {/* <div className="primaryBtn">Get Early Access</div> */}
          <Button type="primary" size="large" shape="round" className="bigBtn">
            Get early access
          </Button>
        </div>
      </div>
      <img src={Images.heroEllipse} alt="backround1" className="heroCirlce" />
      <div className="phoneBase">
        <img src={Images.baseLessPhone} alt="background2" className="phone" />
      </div>
      <div className="profileCardDiv">
        <span className="circle1" />
        <span className="circle2" />
        <div className="profileBase">
          <img
            src={Images.profile_card}
            alt="background2"
            className="profileCard"
          />
        </div>
      </div>
      {/* <div className="teamCardbase"> */}
      <img src={Images.team_card} alt="background2" className="teamCard" />
      {/* </div> */}
    </section>
  );
}

export default Hero;
