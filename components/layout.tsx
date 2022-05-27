import { Container } from "@mui/material";
import Head from "next/head";
import { ReactElement } from "react";
import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
  children: ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Toy Box</title>
      </Head>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

export default Layout;
