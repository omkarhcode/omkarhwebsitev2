import React from "react";
import { Box, Text } from "@chakra-ui/react";

export const ScreenSizeDisplay = () => {
  return (
    <Box
      position="fixed"
      zIndex={"99999"}
      color={"white"}
      background="transparent"
      pt={"5px"}
      w={"full"}
      justifyContent={"center"}
      display={
        process.env.NEXT_PUBLIC_ENV === "development" ? "inline-flex" : "none"
      }
    >
      <Text
        display={{
          base: "flex",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "none",
          "2xl": "none",
        }}
      >
        screen size - <strong>BASE</strong>
      </Text>
      <Text
        display={{
          base: "none",
          sm: "flex",
          md: "none",
          lg: "none",
          xl: "none",
          "2xl": "none",
        }}
      >
        screen size - <strong>SM</strong>
      </Text>
      <Text
        display={{
          base: "none",
          sm: "none",
          md: "flex",
          lg: "none",
          xl: "none",
          "2xl": "none",
        }}
      >
        screen size - <strong>MD</strong>
      </Text>
      <Text
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "none",
          "2xl": "none",
        }}
      >
        screen size - <strong>LG</strong>
      </Text>
      <Text
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "flex",
          "2xl": "none",
        }}
      >
        screen size - <strong>XL</strong>
      </Text>
      <Text
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "none",
          "2xl": "flex",
        }}
      >
        screen size - <strong>2XL</strong>
      </Text>
    </Box>
  );
};
