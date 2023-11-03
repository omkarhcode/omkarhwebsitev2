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

const Section1GridItem2 = () => {
  return (
    <GridItem rowSpan={3} colSpan={1} className="section1-grid-item2">
      <Grid templateRows="repeat(3, 1fr)" gap={4}>
        <GridItem
          rowSpan={1}
          colSpan={1}
          bg="black2"
          borderRadius={"20px"}
          p={"20px"}
          h="100%"
        >
          <Flex>
            <Box>
              <Text
                color={"whiteAlpha.400"}
                fontSize={"26px"}
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
        <GridItem rowSpan={1} colSpan={1}>
          <Box bg="black2" borderRadius={"20px"} p={"20px"} h="100%">
            <Text>Box 3</Text>
            <Text>2/3</Text>
          </Box>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Box bg="black2" borderRadius={"20px"} p={"20px"} h="100%">
            <Text>Box 4</Text>
            <Text>3/3</Text>
          </Box>
        </GridItem>
      </Grid>
    </GridItem>
  );
};

export default Section1GridItem2;
