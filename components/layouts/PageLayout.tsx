import NextLink from "next/link";
import {
  Box,
  Button,
  Flex,
  HStack,
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
          background="whiteAlpha.100"
          backdropFilter={"blur(40px)"}
          position="fixed"
          zIndex="999"
          boxShadow="sm"
        >
          <Flex
            px={{ base: "4", sm: "10", md: "50", lg: "100" }}
            h={20}
            align="center"
            justify="space-between"
          >
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
                    <Box as="span" color={"GrayText"}>
                      Portfolio
                    </Box>
                  </Text>
                </Flex>
              </Link>
            </Box>
            <Spacer />
            <HStack
              as="nav"
              spacing={{ base: "24px", xl: "42px" }}
              display={{ base: "none", lg: "flex" }}
              mr={{ base: "24px", xl: "42px" }}
            >
              <Link
                as={NextLink}
                color="white"
                fontWeight="400"
                fontSize="18px"
                line-height="20px"
                href="/pricing"
              >
                Pricing
              </Link>
              <Link
                as={NextLink}
                color="white"
                fontWeight="400"
                fontSize="18px"
                line-height="20px"
                href="/faq"
              >
                FAQ
              </Link>
              <Link
                as={NextLink}
                color="white"
                fontWeight="400"
                fontSize="18px"
                line-height="20px"
                href="/feedback"
              >
                Feedback
              </Link>
            </HStack>
            <HStack>
              <Link
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
              </Link>

              <Button
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
              </Button>
            </HStack>
          </Flex>
        </Box>
      </chakra.header>
      {/* Nav - end */}

      <Flex
        position="relative"
        py="70px"
        w="100%"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        px={{ base: "40px", md: "180px" }}
        pt={{ base: "200px", sm: "180px", md: "180px" }}
      >
        {children}
      </Flex>
      {/* Footer - START */}
      <Box
        backgroundColor="#451397"
        backgroundSize={"cover"}
        mt={{ base: "80px", md: "100px" }}
        px={{ base: "65px", md: "300px" }}
        py={{ base: "133px", md: "133px" }}
        css={{
          "@media (max-width: 768px)": {
            backgroundColor: "#451397",
          },
        }}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            color={"white"}
            mt="45px"
            mb="60px"
            fontWeight="400"
            fontSize={{ base: "16px", md: "18px" }}
            lineHeight={{ base: "24px", md: "27px" }}
            textAlign={{ base: "center", md: "center" }}
          >
            Stay connected with us on social media
            <Box as="span" display={{ base: "none", md: "inline" }}>
              <br />
            </Box>{" "}
            for the latest news, updates, and behind-the-scenes glimpses of
            AiBoat
          </Text>
          <HStack spacing={{ base: "63px", md: "63px" }}>
            <Link href="https://facebook.com" isExternal>
              {/* <FacebookCircleFillIcon color="#fff" size="24px" /> */}
              FB
            </Link>
            <Link href="https://linkedin.com" isExternal>
              {/* <LinkedinBoxFillIcon color="#fff" size="24px" /> */}
              LI
            </Link>
            <Link href="https://twitter.com" isExternal>
              {/* <TwitterFillIcon color="#fff" size="24px" /> */}X
            </Link>
            <Link href="https://instagram.com" isExternal>
              {/* <InstagramFillIcon color="#fff" size="24px" /> */}
              IN
            </Link>
          </HStack>
        </Flex>
      </Box>
      {/* Footer - END */}
    </>
  );
};

export default PageLayout;
