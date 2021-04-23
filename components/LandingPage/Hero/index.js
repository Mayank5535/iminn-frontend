import React from "react";
import Images from "@config/images";
import { Button, Row } from "antd";
import { useRouter } from "next/router";
import useMediaQuery from "utils/useMediaQuery";
import "../styles.module.less";

function Hero() {
  const router = useRouter();
  const { isXs, isSm } = useMediaQuery();

  return (
    <section className={isXs || isSm ? "wrapperCol" : "heroContainer"}>
      <div className="leftSection">
        <Row className="logoContainer">
          <img src={Images.brandLogo} alt="logo" className="logo" />
          <span className="logoText fLogoText">IMINN</span>
        </Row>
        <div className="textSection">
          <div className="footballText">Football</div>
          <div className={`heroText ${isXs && "text-shaodw-theme"}`}>
            WHO's IN?
          </div>
          <div
            className={`heroText primaryColor ${isXs && "text-shadow-primary"}`}
          >
            I'M IN
          </div>
          <Button
            type="primary"
            size="large"
            shape="round"
            className="bigBtn"
            onClick={() => router.push("/get-early-access")}
          >
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
      <img src={Images.team_card} alt="background2" className="teamCard" />
    </section>
  );
}

export default Hero;
