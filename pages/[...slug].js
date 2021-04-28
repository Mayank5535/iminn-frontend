import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useMediaQuery from "utils/useMediaQuery";
import Images from "@config/images";
import db from "@config/firebaseConfig";
import { Button, Checkbox, Form, Input, notification } from "antd";
import "../styles/dashboard.module.less";

function Home() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>Iminn - Get early access</title>
      </Head>
      <div>
        <h1>Welcome to Iminn</h1>
      </div>
    </>
  );
}

export default Home;