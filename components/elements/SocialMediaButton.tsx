import { Box, Center, Image } from "@chakra-ui/react";

const SocialMediaButton = ({
  href,
  hoverState,
  setHoverState,
  imgSrc,
  bgColor,
  altText,
}: any) => (
  <a href={href} target="_blank">
    <Box
      onMouseEnter={() => setHoverState(!hoverState)}
      onMouseLeave={() => setHoverState(!hoverState)}
      onTouchStart={() => setHoverState(!hoverState)}
      onTouchEnd={() => setHoverState(!hoverState)}
      bg={hoverState ? bgColor : "black2"}
      borderRadius="20px"
      transition="background-color 0.5s"
      // _hover={{ bg: bgColor }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      py={{ base: "20px", sm: "30px", lg: "25px" }}
    >
      <Center height="100%">
        <Image
          src={hoverState ? imgSrc.replace("black", "white") : imgSrc}
          alt={altText}
          transition="all 21s"
          display="block"
          mx="auto"
          boxSize={{
            base: "28px",
            sm: "48px",
            lg: "30px",
            xl: "34px",
            "2xl": "40px",
          }}
        />
      </Center>
    </Box>
  </a>
);

export default SocialMediaButton;
