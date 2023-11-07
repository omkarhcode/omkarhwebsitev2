import NextLink from "next/link";
import {
  Box,
  Flex,
  HStack,
  Kbd,
  Link,
  Spacer,
  Text,
  chakra,
} from "@chakra-ui/react";

import React from "react";

const Header = () => {
  return (
    <>
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
            sm: "50px",
            md: "180px",
            lg: "80px",
            xl: "120px",
            "2xl": "180px",
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
                    fontSize={{ base: "22px", sm: "26px", md: "26px" }}
                    lineHeight={"30px"}
                  >
                    OmkarH{" "}
                    <Kbd
                      color={"whiteAlpha.600"}
                      background={"black2"}
                      py={{ base: "3px", sm: "5px" }}
                      px={{ base: "5px", sm: "8px" }}
                      fontSize={{ base: "10px", sm: "12px" }}
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
              display={{ base: "none" }}
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
            <HStack></HStack>
          </Flex>
        </Box>
      </chakra.header>
      {/* Nav - end */}
    </>
  );
};

export default Header;
