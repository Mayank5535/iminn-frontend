import React from "react";
import Document, { Head, Main, NextScript, Html } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap"
            rel="stylesheet"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
            rel="stylesheet"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;800&display=swap"
            rel="stylesheet"
            crossOrigin="true"
          />
          <script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js"></script>
          <script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-analytics.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
