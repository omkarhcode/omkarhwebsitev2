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
  Tooltip,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import { PhoneIcon, EmailIcon, CopyIcon } from "@chakra-ui/icons";

const Section1GridItem3 = () => {
  const [hoverHand, setHoverHand] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [copiedItemPosition, setCopiedItemPosition] = useState({ x: 0, y: 0 });
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  const handleHoverHand = () => {
    setHoverHand(!hoverHand);
  };

  const copyToClipboard = (content: any, e: any) => {
    if (phoneRef.current && emailRef.current) {
      navigator.clipboard.writeText(content).then(
        () => {
          console.log("Copied to clipboard:", content);
          const { pageX, pageY } = e;

          setCopiedItemPosition({ x: pageX, y: pageY });

          setShowCopied(true);
          setTimeout(() => {
            setShowCopied(false);
          }, 1000); // Hide "Copied!" after 2 seconds
        },
        (err) => {
          console.error("Error copying:", err);
        }
      );
    }
  };

  return (
    <GridItem rowSpan={3} colSpan={1}>
      <Box
        className="section1-grid-item3 add-box-shadow"
        bg="black2"
        borderRadius={"20px"}
        p={"20px"}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
        onMouseEnter={handleHoverHand}
        onMouseLeave={handleHoverHand}
        onTouchStart={handleHoverHand}
        onTouchEnd={handleHoverHand}
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
                    transition: "All 0.3s",
                    bgColor: "whiteAlpha.300",
                    color: "#ffffff",
                    boxShadow: "0 0 1.1em 0.10em #a01fbf",
                  }}
                  transition="all 0.3s"
                >
                  Call
                </Button>
              </a>
              {/* Phone button with phone number */}
              <Tooltip
                label="Copy Number"
                aria-label="copy email"
                hasArrow
                bg={"whiteAlpha.900"}
                color={"blackAlpha.600"}
                placement="right"
              >
                <Button
                  ref={phoneRef}
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
                  onClick={(e) => copyToClipboard("+919820805873", e)}
                >
                  +91-9820-805-873
                </Button>
              </Tooltip>
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
                    transition: "all 0.3s",
                    boxShadow: "0 0 1.1em 0.10em #00FFFF",
                    bgColor: "whiteAlpha.300",
                    color: "#ffffff",
                  }}
                  transition="all 0.3s"
                >
                  Email
                </Button>
              </a>

              <Tooltip
                label="Copy Email"
                aria-label="copy email"
                hasArrow
                bg={"whiteAlpha.900"}
                color={"blackAlpha.600"}
                placement="right"
              >
                <Button
                  ref={emailRef}
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
                  onClick={(e) => copyToClipboard("omkarh.work@gmail.com", e)}
                >
                  omkarh.work@gmail.com
                </Button>
              </Tooltip>
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

        {showCopied && (
          <Box
            position="absolute"
            bg="white"
            p="5px 10px"
            borderRadius="4px"
            top={copiedItemPosition.y}
            left={copiedItemPosition.x}
            boxShadow="0 2px 5px 1px rgba(0,0,0,0.2)"
          >
            <Text fontSize="14px" color="green">
              Copied!
            </Text>
          </Box>
        )}
      </Box>
    </GridItem>
  );
};

export default Section1GridItem3;
