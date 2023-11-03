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
      <Box bg="black2" borderRadius={"20px"} p={"20px"} h="100%">
        <Flex>
          <Box
            bg="whiteAlpha.300"
            w={"100px"}
            h={"100px"}
            borderRadius={"full"}
            overflow={"hidden"}
          >
            <Center transform="rotate(-10deg)">
              <Image
                src="/smiling-min.png"
                alt="OmkarH Image"
                borderRadius="full"
                h={"100px"}
              />
            </Center>
          </Box>{" "}
          <Spacer />
          <Center transform="rotate(-90deg)">
            <Image
              src="arrow-to-left.svg"
              alt="arrow svg"
              className="arrow-image"
            />
          </Center>
        </Flex>
        <Spacer p={"10px"} />
        <Text
          fontSize={"44px"}
          fontWeight={"500"}
          lineHeight={"50px"}
          letterSpacing={0.01}
        >
          Your Vision, <br /> My Expertise
        </Text>
        <Spacer p={"10px"} />
        <Text fontSize={"20px"} fontWeight={"400"}>
          Omkar N Hatalkar
        </Text>
        <Text color={"whiteAlpha.600"} fontSize={"16px"} fontWeight={"400"}>
          Full Stack and Mobile App Developer
        </Text>
      </Box>
    </GridItem>
  );
};

export default Section1GridItem1;
