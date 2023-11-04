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
            w={{ base: "80px", lg: "100px" }}
            h={{ base: "80px", lg: "100px" }}
            borderRadius={"full"}
            overflow={"hidden"}
          >
            <Center transform="rotate(-10deg)">
              <Image
                src="/smiling-min.png"
                alt="OmkarH Image"
                borderRadius="full"
                h={{ base: "80px", lg: "100px" }}
              />
            </Center>
          </Box>{" "}
          <Spacer />
          <Center display={{ base: "flex", lg: "none" }}>
            <Text
              fontSize={{ base: "18px" }}
              lineHeight={{ base: "26px" }}
              fontWeight={"500"}
              letterSpacing={0.01}
            >
              Your Vision, <br /> My Expertise
            </Text>
          </Center>
          <Center
            transform="rotate(-90deg)"
            display={{ base: "none", lg: "flex" }}
          >
            <Image
              src="arrow-to-left.svg"
              alt="arrow svg"
              className="arrow-image"
              boxSize={{ lg: "56px", xl: "60px", "2xl": "70px" }}
            />
          </Center>
        </Flex>
        <Spacer p={"10px"} display={{ base: "none", lg: "flex" }} />
        <Text
          fontSize={{ lg: "30px", xl: "34px", "2xl": "38px" }}
          lineHeight={{ lg: "44px", xl: "48px", "2xl": "54px" }}
          fontWeight={"500"}
          letterSpacing={0.01}
          display={{ base: "none", lg: "flex" }}
        >
          Your Vision, <br /> My Expertise
        </Text>
        <Spacer p={"10px"} />
        <Text
          fontSize={{ base: "16px", lg: "20px" }}
          fontWeight={"400"}
          color={"whiteAlpha.800"}
        >
          Omkar N Hatalkar
        </Text>
        {/* <Text color={"whiteAlpha.600"} fontSize={"16px"} fontWeight={"400"}>
          Full Stack and Mobile App Developer
        </Text> */}
      </Box>
    </GridItem>
  );
};

export default Section1GridItem1;
