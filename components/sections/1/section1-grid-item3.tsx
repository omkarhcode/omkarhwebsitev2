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
            <Stack direction="row" spacing={4}>
              <a href="tel:+919820805873" style={{ color: "inherit" }}>
                <Button
                  rightIcon={<PhoneIcon />}
                  variant="solid"
                  bgColor={"#a01fbf"}
                  color={"whiteAlpha.800"}
                  fontSize={"22px"}
                  p={"30px"}
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
                  color={"blackAlpha.800"}
                  fontSize={"22px"}
                  p={"30px"}
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
        <Spacer />
        <Center>
          <Text fontSize={"46px"} fontWeight={"600"} letterSpacing={"tight"}>
            Get in Touch!
          </Text>
        </Center>
        <Spacer />
        <Center>
          <Box position="relative" width="60px" height="60px">
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
