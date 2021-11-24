import React from "react";
import Head from "next/head";
import styled from "styled-components";

import Navbar from "./Navbar";
import MobileNav from "../components/Navbar/mobileNav"

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>saffron.finance</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi"
        />
        <meta property="og:type" content="website" />
        <meta name="description" content="" />
        <meta property="og:title" content="" />
        <meta property="og:site_name" content="" />
        <meta property="og:description" content="" />
        <link rel="stylesheet" href="https://use.typekit.net/cgn3hnk.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link href="https://use.typekit.net/yed0qhw.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar />
      <MobileNav />
      <Container>{children}</Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
