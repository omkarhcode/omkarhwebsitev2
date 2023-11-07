// components/sections/2/section2.tsx

import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";

const Section2 = () => {
  return (
    <Flex direction={"column"} alignItems={"center"}>
      <Image
        src="/beard.svg"
        alt="OmkarH beard"
        borderRadius="full"
        // h={{ base: "45px" }}
        boxSize={"45px"}
      />
      {/* <Spacer p={"5px"} /> */}
      <Text
        as="h2"
        fontSize={{ base: "18px", sm: "18px" }}
        lineHeight={{ base: "26px", sm: "36px" }}
        fontWeight={"500"}
        letterSpacing={0.01}
        color={"gray"}
      >
        ABOUT ME
      </Text>
      <Spacer p={"10px"} />

      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={{
          base: "20px",
          sm: "20px",
        }}
        maxW={"750px"}
        className="section2-flex"
      >
        <Box
          className="about-image-box"
          w={{ base: "100%", md: "100%", lg: "50%" }}
          px={{ base: "20%", lg: "0" }}
          alignContent={"center"}
        >
          <Image src="/frame.avif" alt="OmkarH beard" />
        </Box>
        <Box
          mt={{ base: "15px", lg: "30px" }}
          w={{ base: "100%", md: "100%", lg: "50%" }}
        >
          <Text
            fontSize={{ base: "18px", sm: "22px" }}
            lineHeight={{ base: "26px", sm: "36px" }}
            fontWeight={"500"}
            letterSpacing={0.01}
            color={"white"}
          >
            Omkar N Hatalkar
          </Text>
          <Text
            fontSize={{ base: "18px", sm: "20px" }}
            lineHeight={{ base: "26px", sm: "28px" }}
            fontWeight={"500"}
            letterSpacing={"tighter"}
            color={"whiteAlpha.600"}
          >
            Hello, I&#39;m Omkar N Hatalkar, a gifted and focused Full Stack and
            Mobile App Developer. Proficient in{" "}
            <span className="highlight-text">JavaScript</span>,{" "}
            <span className="highlight-text">Nest.js</span>,{" "}
            <span className="highlight-text">Next.js</span>,{" "}
            <span className="highlight-text">CSS</span> and{" "}
            <span className="highlight-text">Flutter</span>. I specialize in
            crafting dynamic web and mobile-app solutions. I enjoy staying
            updated with the latest technologies to create innovative digital
            experiences.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Section2;
