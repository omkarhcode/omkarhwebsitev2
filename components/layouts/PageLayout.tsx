import NextLink from "next/link";
import {
  Box,
  Button,
  Flex,
  HStack,
  Kbd,
  Link,
  Spacer,
  Text,
  chakra,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Image from "next/image";

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
      {/* screen size display - start  */}
      <Box
        position="fixed"
        zIndex={"99999"}
        color={"white"}
        background="transparent"
        pt={"5px"}
        w={"full"}
        justifyContent={"center"}
        display={
          process.env.NEXT_PUBLIC_ENV === "development" ? "inline-flex" : "none"
        }
      >
        <Text
          display={{
            base: "flex",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "none",
            "2xl": "none",
          }}
        >
          screen size - <strong>BASE</strong>
        </Text>
        <Text
          display={{
            base: "none",
            sm: "flex",
            md: "none",
            lg: "none",
            xl: "none",
            "2xl": "none",
          }}
        >
          screen size - <strong>SM</strong>
        </Text>
        <Text
          display={{
            base: "none",
            sm: "none",
            md: "flex",
            lg: "none",
            xl: "none",
            "2xl": "none",
          }}
        >
          screen size - <strong>MD</strong>
        </Text>
        <Text
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "none",
            "2xl": "none",
          }}
        >
          screen size - <strong>LG</strong>
        </Text>
        <Text
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "flex",
            "2xl": "none",
          }}
        >
          screen size - <strong>XL</strong>
        </Text>
        <Text
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "none",
            "2xl": "flex",
          }}
        >
          screen size - <strong>2XL</strong>
        </Text>
      </Box>
      {/* screen size display - end  */}

      {/* Nav - Start */}
      <chakra.header id="header">
        <Box
          w="100%"
          // background="whiteAlpha.100"
          background="blackAlpha.100"
          backdropFilter={"blur(40px)"}
          position="fixed"
          zIndex="999"
          boxShadow="sm"
          px={{
            base: "20px",
            sm: "40px",
            lg: "100px",
            xl: "180px",
            "2xl": "250px",
          }}
        >
          <Flex h={20} align="center" justify="space-between">
            <Box>
              <Link
                as={NextLink}
                href="/"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <Flex alignItems="center" gap="10px">
                  <Text
                    display="inline-block"
                    color={"white"}
                    fontWeight={500}
                    fontSize={{ base: "16px", md: "24px" }}
                    lineHeight={"30px"}
                  >
                    OmkarH{" "}
                    <Kbd
                      color={"whiteAlpha.600"}
                      background={"black2"}
                      py={"5px"}
                      px={"8px"}
                      fontSize={"12px"}
                      fontWeight={"200"}
                      letterSpacing={"0.5px"}
                      position={"relative"}
                      top={"-10px"}
                      borderColor={"whiteAlpha.400"}
                    >
                      Portfolio
                    </Kbd>
                  </Text>
                </Flex>
              </Link>
            </Box>
            <Spacer />
            <HStack
              as="nav"
              spacing={{ base: "24px", xl: "22px" }}
              display={{ base: "none", lg: "flex" }}
              // mr={{ base: "24px", xl: "42px" }}
            >
              <Link
                as={NextLink}
                color="white"
                fontWeight="400"
                fontSize="16px"
                background={"whiteAlpha.200"}
                borderRadius={"20px"}
                py={"5px"}
                px={"10px"}
                href="#about"
              >
                about me.
              </Link>
              <Link
                as={NextLink}
                color="white"
                fontWeight="400"
                fontSize="16px"
                background={"whiteAlpha.200"}
                borderRadius={"20px"}
                py={"5px"}
                px={"10px"}
                href="#work"
              >
                work.
              </Link>
              <Link
                as={NextLink}
                color="white"
                fontWeight="400"
                fontSize="16px"
                background={"whiteAlpha.200"}
                borderRadius={"20px"}
                py={"5px"}
                px={"10px"}
                href="#contact"
              >
                contact.
              </Link>
            </HStack>
            <HStack>
              {/* <Link
                bgGradient="linear-gradient(0deg, #7421FC, #7421FC), linear-gradient(92.05deg, #3084FE 3.13%, #1136F9 98.7%)"
                color="white"
                width={{ base: "100%", md: "auto", lg: "auto" }}
                _hover={{
                  backgroundColor: "red",
                }}
                fontSize={{ base: "16px", md: "18px" }}
                lineHeight={{ base: "19px", md: "20px" }}
                fontWeight="400"
                borderRadius={"4px"}
                px={{ base: "8px", md: "32px" }}
                py={{ base: "8px", md: "12px" }}
                // minW={"130px"}
                textAlign={"center"}
                href="/auth/signin"
              >
                Sign in
              </Link> */}

              {/* <Button
                onClick={() => {
                  console.log("ButtonCLocked");
                }}
                color={"white"}
                // background={'transparent'}
                border={"1px"}
                display={{ base: "flex", lg: "none" }}
                p={"10px"}
                _focus={{
                  bg: "transparent",
                }}
                _hover={{ bg: "transparent" }}
              >
                BUTTON
              </Button> */}
            </HStack>
          </Flex>
        </Box>
      </chakra.header>
      {/* Nav - end */}

      <Flex
        // position="relative"
        py="120px"
        w="100%"
        direction="column"
        // justifyContent="flex-start"
        alignItems={"center"}
        px={{
          base: "20px",
          sm: "40px",
          md: "40px",
          lg: "80px",
          xl: "120px",
          "2xl": "180px",
        }}
      >
        {children}
      </Flex>
      {/* Footer - START */}
    </>
  );
};

export default PageLayout;
