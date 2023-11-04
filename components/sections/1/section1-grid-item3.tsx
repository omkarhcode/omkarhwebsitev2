// components/sections/1/section1-grid-item1.tsx

import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

const Section1GridItem3 = () => {
  const [hoverHand, setHoverHand] = useState(false);
  const handleHoverHand = () => {
    setHoverHand(!hoverHand);
  };

  return (
    <GridItem rowSpan={3} colSpan={1} className="section1-grid-item3">
      <Box
        bg="black2"
        borderRadius={"20px"}
        p={"20px"}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
        onMouseEnter={handleHoverHand}
        onMouseLeave={handleHoverHand}
        transition="background-color 0.5s"
      >
        <Spacer />
        <Center>
          <HStack spacing={"20px"}>
            <Stack
              direction={{ base: "column", lg: "column", xl: "row" }}
              spacing={"20px"}
              alignItems={"center"}
            >
              <a href="tel:+919820805873" style={{ color: "inherit" }}>
                <Button
                  rightIcon={<PhoneIcon />}
                  variant="solid"
                  bgColor={"#a01fbf"}
                  color={"white"}
                  fontSize={{ lg: "18px", xl: "22px" }}
                  py={{ base: "24px", lg: "26px", xl: "26px", "2xl": "30px" }}
                  px={{ base: "20px", lg: "20px", xl: "20px", "2xl": "26px" }}
                  borderRadius={"30px"}
                  _hover={{
                    bgColor: "whiteAlpha.300",
                    color: "#ffffff",
                  }}
                  transition="all 0.3s"
                >
                  Call
                </Button>
              </a>
              <a href="mailto:omkarh.work@gmail.com">
                <Button
                  leftIcon={<EmailIcon />}
                  variant="solid"
                  bgColor={"#00FFFF"}
                  color={"black"}
                  fontSize={{ lg: "18px", xl: "22px" }}
                  py={{ base: "24px", lg: "26px", xl: "26px", "2xl": "30px" }}
                  px={{ base: "20px", lg: "20px", xl: "20px", "2xl": "26px" }}
                  borderRadius={"30px"}
                  _hover={{
                    bgColor: "whiteAlpha.300",
                    color: "#ffffff",
                  }}
                  transition="all 0.3s"
                >
                  Email
                </Button>
              </a>
            </Stack>
          </HStack>
        </Center>
        <Spacer py={{ base: "10px", lg: "0" }} />
        <Center>
          <Text
            fontSize={{ base: "20px", lg: "20px", xl: "30px", "2xl": "38px" }}
            lineHeight={{ xl: "44px", "2xl": "54px" }}
            fontWeight={"600"}
            letterSpacing={"tight"}
          >
            Get in Touch!
          </Text>
        </Center>
        <Spacer py={{ base: "10px", lg: "0" }} />
        <Center>
          <Box
            position="relative"
            width={{ base: "44px", lg: "44px", xl: "60px" }}
            height={{ base: "44px", lg: "44px", xl: "60px" }}
          >
            <Image
              src="GetInTouch-black.svg"
              alt="GetInTouch"
              opacity={hoverHand ? 0 : 1}
              transition="opacity 0.8s"
              position="absolute"
              top={0}
              left={0}
              className="hand-image"
            />
            <Image
              src="GetInTouch-white.svg"
              alt="GetInTouch"
              opacity={hoverHand ? 1 : 0}
              transition="opacity 0.8s"
              position="absolute"
              top={0}
              left={0}
              className="hand-image"
            />
          </Box>
        </Center>
        <Spacer />
      </Box>
    </GridItem>
  );
};

export default Section1GridItem3;
