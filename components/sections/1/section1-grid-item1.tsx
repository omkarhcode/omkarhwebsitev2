// components/sections/1/section1-grid-item1.tsx

import {
  Box,
  Center,
  Flex,
  GridItem,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";

const Section1GridItem1 = () => {
  return (
    <GridItem rowSpan={3} colSpan={1} className="section1-grid-item1">
      <Box
        bg="black2"
        borderRadius={"20px"}
        p={"20px"}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height={"100%"}
      >
        <Flex>
          <Box
            bg="whiteAlpha.300"
            w={{ base: "80px", sm: "100px" }}
            h={{ base: "80px", sm: "100px" }}
            borderRadius={"full"}
            overflow={"hidden"}
            className="smiling-image"
          >
            <Center transform="rotate(-10deg)">
              <Image
                src="/smiling-min.png"
                alt="OmkarH Image"
                borderRadius="full"
                h={{ base: "80px", sm: "100px" }}
              />
            </Center>
          </Box>{" "}
          <Spacer />
          <Center pr={"10px"}>
            <Image
              src="app-developer.svg"
              alt="App developer Logo"
              className="developer-image"
              boxSize={{
                base: "48px",
                sm: "52px",
                lg: "50px",
                xl: "56px",
                "2xl": "60px",
              }}
            />
          </Center>
        </Flex>
        <Spacer p={"10px"} />

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          // height="100%"
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
              base: "20px",
              sm: "24px",
              lg: "16px",
              xl: "20px",
              "2xl": "24px",
            }}
            lineHeight={{
              base: "34px",
              sm: "42px",
              lg: "26px",
              xl: "36px",
              "2xl": "38px",
            }}
            fontWeight={"600"}
            letterSpacing={"tight"}
          >
            Full Stack/Generative AI <br />& Mobile-App Developer
          </Text>
        </Box>
        <Spacer p={"10px"} />
        <Text
          fontSize={{ base: "16px", sm: "18px", lg: "20px" }}
          fontWeight={"400"}
          color={"whiteAlpha.800"}
        >
          Omkar N Hatalkar
        </Text>
        {/* <Text color={"whiteAlpha.600"} fontSize={"16px"} fontWeight={"400"}>
          Full Stack/Generative AI and Mobile-App Developer
        </Text> */}
      </Box>
    </GridItem>
  );
};

export default Section1GridItem1;
