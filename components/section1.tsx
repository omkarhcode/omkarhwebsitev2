import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Section1 = () => {
  return (
    <>
      <Box>
        <Text
          color="white"
          fontWeight="900"
          fontSize={{
            base: "30px",
            md: "60px",
          }}
          lineHeight={{ base: "38px", md: "72px" }}
          // mb={"14px"}
          // my={"96"}
        >
          Unlock Your Productivity
        </Text>
      </Box>
    </>
  );
};

export default Section1;
