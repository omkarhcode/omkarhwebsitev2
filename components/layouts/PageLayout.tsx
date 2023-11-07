import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

import Header from "../modules/Header/Header";
import Footer from "../modules/Footer/Footer";
import { ScreenSizeDisplay } from "../elements/ScreenSizeDisplay";

interface PageInterface {
  children: JSX.Element[] | JSX.Element;
}

const PageLayout = ({ children }: PageInterface) => {
  return (
    <>
      <Head>
        <title>OmkarH Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ScreenSizeDisplay />
      <Header />
      <Flex
        position="relative"
        py="120px"
        w="100%"
        direction="column"
        justifyContent="flex-start"
        px={{
          base: "20px",
          sm: "50px",
          md: "180px",
          lg: "80px",
          xl: "120px",
          "2xl": "180px",
        }}
      >
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default PageLayout;
