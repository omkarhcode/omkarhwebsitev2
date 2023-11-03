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

const Section1GridItem3 = () => {
  return (
    <GridItem rowSpan={3} colSpan={1}>
      <Box
        bg="black2"
        borderRadius={"20px"}
        p={"20px"}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Text>Box 5</Text>
        <Text>half height</Text>
      </Box>
    </GridItem>
  );
};

export default Section1GridItem3;
