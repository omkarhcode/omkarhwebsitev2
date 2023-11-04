// components/sections/1/section1-grid-item3.tsx
import {
  Box,
  Button,
  Center,
  Flex,
  GridItem,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import { PhoneIcon, EmailIcon, CopyIcon } from "@chakra-ui/icons";

const Section1GridItem3 = () => {
  const [hoverHand, setHoverHand] = useState(false);

  const handleHoverHand = () => {
    setHoverHand(!hoverHand);
  };

  const copyToClipboard = (content: any) => {
    navigator.clipboard.writeText(content).then(
      () => {
        console.log("Copied to clipboard:", content);
      },
      (err) => {
        console.error("Error copying:", err);
      }
    );
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
          <Stack
            spacing={{ base: "20px", md: "40px", lg: "20px" }}
            direction={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "column",
              xl: "column",
            }}
          >
            <Flex direction={"column"} alignItems={"center"}>
              <a href="tel:+919820805873">
                <Button
                  rightIcon={<PhoneIcon />}
                  variant="solid"
                  bgColor={"#a01fbf"}
                  color={"white"}
                  fontSize={{ sm: "20px", lg: "18px", xl: "22px" }}
                  py={{
                    base: "24px",
                    sm: "30px",
                    lg: "26px",
                    xl: "26px",
                    "2xl": "30px",
                  }}
                  px={{
                    base: "20px",
                    sm: "26px",
                    lg: "20px",
                    xl: "20px",
                    "2xl": "26px",
                  }}
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
              {/* Phone button with phone number */}
              <Button
                rightIcon={<CopyIcon />}
                bgColor={"transparent"}
                color={"white"}
                fontSize={{ base: "16px" }}
                py={{
                  base: "14px",
                }}
                px={{
                  base: "0px",
                }}
                _hover={{
                  textDecoration: "underline",
                  color: "#ffffff",
                }}
                _active={{
                  backgroundColor: "transparent",
                }}
                transition="all 0.3s"
                onClick={() => copyToClipboard("+919820805873")}
              >
                +91-9820-805-873
              </Button>
            </Flex>
            <Flex direction={"column"} alignItems={"center"}>
              <a href="mailto:omkarh.work@gmail.com">
                <Button
                  leftIcon={<EmailIcon />}
                  variant="solid"
                  bgColor={"#00FFFF"}
                  color={"black"}
                  fontSize={{ sm: "20px", lg: "18px", xl: "22px" }}
                  py={{
                    base: "24px",
                    sm: "30px",
                    lg: "26px",
                    xl: "26px",
                    "2xl": "30px",
                  }}
                  px={{
                    base: "20px",
                    sm: "26px",
                    lg: "20px",
                    xl: "20px",
                    "2xl": "26px",
                  }}
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

              <Button
                rightIcon={<CopyIcon />}
                bgColor={"transparent"}
                color={"white"}
                fontSize={{ base: "16px" }}
                py={{
                  base: "14px",
                }}
                px={{
                  base: "0px",
                }}
                _hover={{
                  textDecoration: "underline",
                  color: "#ffffff",
                }}
                _active={{
                  backgroundColor: "transparent",
                }}
                transition="all 0.3s"
                onClick={() => copyToClipboard("omkarh.work@gmail.com")}
              >
                omkarh.work@gmail.com
              </Button>
            </Flex>
          </Stack>
        </Center>
        <Spacer py={{ base: "10px", lg: "10px" }} />
        <Center>
          <Box
            position="relative"
            width={{ base: "44px", sm: "64px", lg: "44px", xl: "60px" }}
            height={{ base: "44px", sm: "64px", lg: "44px", xl: "60px" }}
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
        <Spacer py={{ base: "10px", lg: "0" }} />
        <Center>
          <Text
            fontSize={{
              base: "20px",
            }}
            fontWeight={"600"}
            letterSpacing={"tight"}
          >
            Get in Touch!
          </Text>
        </Center>
      </Box>
    </GridItem>
  );
};

export default Section1GridItem3;
