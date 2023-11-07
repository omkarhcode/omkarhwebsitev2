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
            <Text
              fontSize={{
                base: "24px",
                sm: "28px",
                lg: "22px",
                xl: "26px",
                "2xl": "34px",
              }}
              lineHeight={{
                base: "36px",
                sm: "42px",
                lg: "34px",
                xl: "38px",
                "2xl": "50px",
              }}
              fontWeight={"500"}
              letterSpacing={0.01}
              // display={{ base: "none", lg: "flex" }}
            >
              Your Vision, <br /> My Expertise
            </Text>
            <Spacer />
            <Center
              transform="rotate(-90deg)"
              // display={{ base: "none", lg: "flex" }}
            >
              <Image
                src="arrow-to-left.svg"
                alt="arrow svg"
                className="arrow-image"
                boxSize={{ lg: "56px", xl: "60px", "2xl": "70px" }}
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
                  {/* Full Stack and <br /> Mobile-App Developer */}
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
