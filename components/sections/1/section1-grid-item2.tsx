// components/sections/1/section1-grid-item1.tsx

import SocialMediaButton from "@/components/elements/SocialMediaButton";
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
                fontSize={{
                  base: "16px",
                  sm: "20px",
                  lg: "16px",
                  xl: "18px",
                  "2xl": "22px",
                }}
                fontWeight={"700"}
                letterSpacing={"tight"}
              >
                Title
              </Text>
              <Text
                fontSize={{
                  base: "16px",
                  sm: "24px",
                  lg: "16px",
                  xl: "22px",
                  "2xl": "24px",
                }}
                lineHeight={{
                  base: "26px",
                  sm: "36px",
                  lg: "26px",
                  xl: "32px",
                  "2xl": "34px",
                }}
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
                alt="App developer Logo"
                className="developer-image"
                boxSize={{
                  base: "32px",
                  sm: "52px",
                  lg: "34px",
                  xl: "42px",
                  "2xl": "50px",
                }}
              />
            </Center>
          </Flex>
        </GridItem>
        {/* Inner - Grid 2 - LinkedIn */}
        <GridItem rowSpan={1} colSpan={1}>
          <SocialMediaButton
            href="https://www.linkedin.com/in/omkarh/"
            hoverState={hoverLinkedIn}
            setHoverState={setHoverLinkedIn}
            imgSrc="linkedin-black.svg"
            bgColor="#0072b1"
            altText="LinkedIn Logo"
          />
        </GridItem>
        {/* Inner - Grid 3 - Twitter */}
        <GridItem rowSpan={1} colSpan={1}>
          <SocialMediaButton
            href="https://twitter.com/OHatalkar"
            hoverState={hoverTwitter}
            setHoverState={setHoverTwitter}
            imgSrc="twitter-black.svg"
            bgColor="#1da1f2"
            altText="Twitter Logo"
          />
        </GridItem>
        {/* Inner - Grid 4 - GitHub */}
        <GridItem rowSpan={1} colSpan={1}>
          <SocialMediaButton
            href="https://github.com/omkarhcode/"
            hoverState={hoverGitHub}
            setHoverState={setHoverGitHub}
            imgSrc="github-black.svg"
            bgColor="#ffa500"
            altText="GitHub Logo"
          />
        </GridItem>
        <GridItem rowSpan={3} colSpan={3} w={"100%"}>
          <Box
            bg="black2"
            borderRadius={"20px"}
            p={"20px"}
            h="100%"
            onMouseEnter={handleHoverIndia}
            onMouseLeave={handleHoverIndia}
            onTouchStart={handleHoverIndia}
            onTouchEnd={handleHoverIndia}
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
                  fontSize={{
                    base: "16px",
                    sm: "18px",
                    lg: "16px",
                    xl: "18px",
                  }}
                  fontWeight={"400"}
                  // letterSpacing={"tight"}
                >
                  Based In
                </Text>
                <Text
                  fontSize={{
                    base: "18px",
                    sm: "22px",
                    lg: "18px",
                    xl: "22px",
                  }}
                  fontWeight={"400"}
                  letterSpacing={"tight"}
                >
                  {/* Full Stack and <br /> Mobile App Developer */}
                  Mumbai, India
                </Text>
              </Box>
              <Spacer />
              <Center>
                <Box
                  position="relative"
                  width={{
                    base: "44px",
                    sm: "54px",
                    lg: "44px",
                    xl: "50px",
                    "2xl": "60px",
                  }}
                  height={{
                    base: "44px",
                    sm: "54px",
                    lg: "44px",
                    xl: "50px",
                    "2xl": "60px",
                  }}
                >
                  <Image
                    src="India-black.svg"
                    alt="India"
                    opacity={hoverIndia ? 0 : 1}
                    transition="opacity 0.8s"
                    position="absolute"
                    top={0}
                    left={0}
                    boxSize={{
                      base: "44px",
                      sm: "54px",
                      lg: "44px",
                      xl: "50px",
                      "2xl": "60px",
                    }}
                  />
                  <Image
                    src="India-color.svg"
                    alt="India"
                    opacity={hoverIndia ? 1 : 0}
                    transition="opacity 0.8s"
                    position="absolute"
                    top={0}
                    left={0}
                    boxSize={{
                      base: "44px",
                      sm: "54px",
                      lg: "44px",
                      xl: "50px",
                      "2xl": "60px",
                    }}
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
