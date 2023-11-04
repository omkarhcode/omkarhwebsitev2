import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: "#0f0f0f", // Set the default background color to black
        color: "white", // Example: Set default text color to white
      },
    },
  },
  fonts: {
    heading: "Source Code Pro, sans-serif",
    body: "Source Code Pro, sans-serif",
  },
  colors: {
    black: "#0f0f0f",
    black2: "#1a1a1a",
    gray: "#515151",
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
});

export default theme;
