// components/sections/1/section1-grid-item1.tsx

import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const Section1GridItem2 = () => {
  const [hoverLinkedIn, setHoverLinkedIn] = useState(false);
  const [hoverTwitter, setHoverTwitter] = useState(false);
  const [hoverGitHub, setHoverGitHub] = useState(false);
  const [hoverIndia, setHoverIndia] = useState(false);

  const handleHoverLinkedIn = () => {
    setHoverLinkedIn(!hoverLinkedIn);
  };

  const handleHoverTwitter = () => {
    setHoverTwitter(!hoverTwitter);
  };

  const handleHoverGitHub = () => {
    setHoverGitHub(!hoverGitHub);
  };

  const handleHoverIndia = () => {
    setHoverIndia(!hoverIndia);
  };

  return (
    <GridItem rowSpan={3} colSpan={1} className="section1-grid-item2">
      <Grid templateRows="repeat(3, 1fr)" gap={"20px"}>
        {/* Inner - Grid 1 - title */}
        <GridItem
          rowSpan={3}
          colSpan={3}
          bg="black2"
          borderRadius={"20px"}
          p={"20px"}
        >
          <Flex>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
            >
              <Text
                color={"whiteAlpha.500"}
                fontSize={"24px"}
                fontWeight={"600"}
                // letterSpacing={"tight"}
              >
                Title
              </Text>
              <Text
                fontSize={"26px"}
                fontWeight={"600"}
                letterSpacing={"tight"}
              >
                Full Stack and <br /> Mobile App Developer
              </Text>
            </Box>
            <Spacer />
            <Center>
              <Image
                src="app-developer.svg"
                alt="Smaint Solution Logo"
                className="developer-image"
              />
            </Center>
          </Flex>
        </GridItem>
        {/* Inner - Grid 2 - LinkedIn */}
        <GridItem rowSpan={1} colSpan={1}>
          <Box
            bg={hoverLinkedIn ? "#0072b1" : "black2"}
            borderRadius={"20px"}
            transition="background-color 0.5s"
            _hover={{
              bg: "#0072b1",
            }}
            onMouseEnter={handleHoverLinkedIn}
            onMouseLeave={handleHoverLinkedIn}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            // height="80px"
            py={"20px"}
          >
            <Center height="100%">
              <Image
                src={
                  hoverLinkedIn ? "linkedin-white.svg" : "linkedin-black.svg"
                }
                alt="LinkedIn Logo"
                transition="all 21s"
                display="block"
                mx="auto"
              />
            </Center>
          </Box>
        </GridItem>
        {/* Inner - Grid 3 - Twitter */}
        <GridItem rowSpan={1} colSpan={1}>
          <Box
            bg={hoverTwitter ? "#1da1f2" : "black2"}
            borderRadius={"20px"}
            transition="background-color 0.5s"
            _hover={{
              bg: "#1da1f2",
            }}
            onMouseEnter={handleHoverTwitter}
            onMouseLeave={handleHoverTwitter}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            // height="80px"
            py={"20px"}
          >
            <Center height="100%">
              <Image
                src={hoverTwitter ? "twitter-white.svg" : "twitter-black.svg"}
                alt="Twitter Logo"
                transition="all 21s"
                display="block"
                mx="auto"
              />
            </Center>
          </Box>
        </GridItem>
        {/* Inner - Grid 4 - GitHub */}
        <GridItem rowSpan={1} colSpan={1}>
          <Box
            bg={hoverGitHub ? "#ffa500" : "black2"}
            borderRadius={"20px"}
            // h="100%"
            transition="background-color 0.5s"
            _hover={{
              bg: "#ffa500",
            }}
            onMouseEnter={handleHoverGitHub}
            onMouseLeave={handleHoverGitHub}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            // height="80px"
            py={"20px"}
          >
            <Center height="100%">
              <Image
                src={hoverGitHub ? "github-white.svg" : "github-black.svg"}
                alt="GitHub Logo"
                transition="all 21s"
                display="block"
                mx="auto"
              />
            </Center>
          </Box>
        </GridItem>
        <GridItem rowSpan={3} colSpan={3} w={"100%"}>
          <Box
            bg="black2"
            borderRadius={"20px"}
            p={"20px"}
            h="100%"
            onMouseEnter={handleHoverIndia}
            onMouseLeave={handleHoverIndia}
            transition="background-color 0.5s"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
          >
            <Flex>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
              >
                <Text
                  color={"whiteAlpha.600"}
                  fontSize={"16px"}
                  fontWeight={"400"}
                  // letterSpacing={"tight"}
                >
                  Based In
                </Text>
                <Text
                  fontSize={"20px"}
                  fontWeight={"400"}
                  letterSpacing={"tight"}
                >
                  {/* Full Stack and <br /> Mobile App Developer */}
                  Mumbai, India
                </Text>
              </Box>
              <Spacer />
              <Center>
                <Box position="relative" width="60px" height="60px">
                  <Image
                    src="India-black.svg"
                    alt="India"
                    opacity={hoverIndia ? 0 : 1}
                    transition="opacity 0.8s" // Transition to apply on opacity change
                    position="absolute"
                    top={0}
                    left={0}
                  />
                  <Image
                    src="India-color.svg"
                    alt="India"
                    opacity={hoverIndia ? 1 : 0}
                    transition="opacity 0.8s" // Transition to apply on opacity change
                    position="absolute"
                    top={0}
                    left={0}
                  />
                </Box>
              </Center>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </GridItem>
  );
};

export default Section1GridItem2;
