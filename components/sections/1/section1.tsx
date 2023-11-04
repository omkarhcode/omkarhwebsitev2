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
import Section1GridItem2 from "./section1-grid-item2";
import Section1GridItem3 from "./section1-grid-item3";
import { useState } from "react";

const Section1 = () => {
  return (
    <>
      <Grid
        templateRows={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(1, 1fr)",
        }}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={"20px"}
      >
        <Section1GridItem1 />

        <Section1GridItem2 />

        <Section1GridItem3 />
      </Grid>
    </>
  );
};

export default Section1;
