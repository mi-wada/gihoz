import { NextPage } from "next";
import { Head, Html, Main, NextScript } from "next/document";
import { COLORS } from "../constants";

const Document: NextPage = () => {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta name="description" content="Toy Box" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body style={{backgroundColor: COLORS.bg}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;
