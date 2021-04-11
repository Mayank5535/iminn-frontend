import React from "react";
import Images from "@config/images";
import Document, { Head, Main, NextScript, Html } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Prata&display=swap"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Mulish:wght@200&display=swap"
            crossOrigin="true"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
