// components/sections/1/section1.tsx

import {
  AbsoluteCenter,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Section1GridItem1 from "./section1-grid-item1";

const Section1 = () => {
  return (
    <>
      <Grid
        templateRows={{ md: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        templateColumns={{ md: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={"20px"}
      >
        <Section1GridItem1 />
        <GridItem rowSpan={3} colSpan={1}>
          <Grid templateRows="repeat(3, 1fr)" gap={4}>
            <GridItem rowSpan={1} colSpan={1}>
              <Box bg="black2" borderRadius={"20px"} p={"20px"} h="100%">
                <Text>Box 2</Text>
                <Text>1/3</Text>
              </Box>
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
        <GridItem rowSpan={3} colSpan={1}>
          <Box bg="black2" borderRadius={"20px"} p={"20px"} h="100%">
            <Text>Box 5</Text>
            <Text>half height</Text>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Section1;
