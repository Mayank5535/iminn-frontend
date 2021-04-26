import React from "react";
import Head from "next/head";
import { Hero, Features, Work, Banner, Footer } from "@components";
import db from "@config/firebaseConfig";

function LandingPage() {
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
        <Hero />
        <Features />
        <Work />
        <Banner />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
