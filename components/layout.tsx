import { Container, Typography } from "@mui/material";
import Head from "next/head";
import { ReactElement } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

type LayoutProps = {
  children: ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Toy Box</title>
      </Head>
      <Navbar />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

export default Layout;
