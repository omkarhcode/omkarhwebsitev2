import {
  Box,
  Image,
  Text,
  Grid,
  GridItem,
  Heading,
  Flex,
  Center,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

const TechnologiesSection = () => {
  const technologiesData = [
    {
      id: 1,
      image: "front-end.svg",
      title: "Front-end",
      description: [
        "Experience with ",
        <span key="highlight1" className="highlight-text">
          Next.js
        </span>,
        ", ",
        <span key="highlight1" className="highlight-text">
          React.js
        </span>,
        ", ",
        <span key="highlight1" className="highlight-text">
          Tailwind CSS
        </span>,
        " and ",
        <span key="highlight1" className="highlight-text">
          Chakra UI
        </span>,
      ],
    },
    {
      id: 2,
      image: "back-end.svg",
      title: "Back-end",
      description: [
        "Experience with ",
        <span key="highlight1" className="highlight-text">
          Node.js
        </span>,
        ", ",
        <span key="highlight1" className="highlight-text">
          TypeScript
        </span>,
        ", ",
        <span key="highlight1" className="highlight-text">
          NestJs
        </span>,
        ", ",
        <span key="highlight1" className="highlight-text">
          Redux.js
        </span>,
        ", ",
        <span key="highlight1" className="highlight-text">
          PostgresSQL databases
        </span>,
        " and ",
        <span key="highlight1" className="highlight-text">
          Prisma ORM
        </span>,
      ],
    },
    {
      id: 3,
      image: "mobile-app.svg",
      title: "Mobile App",
      description: [
        "Experience with ",
        <span key="highlight1" className="highlight-text">
          Flutter
        </span>,
        ", ",
        <span key="highlight1" className="highlight-text">
          Dart
        </span>,
        " and ",
        <span key="highlight1" className="highlight-text">
          React Native
        </span>,
      ],
    },
    {
      id: 4,
      image: "dev-ops.svg",
      title: "Dev-ops",
      description: [
        "Experience with ",
        <span key="highlight1" className="highlight-text">
          Vercel
        </span>,
        ", ",
        <span key="highlight1" className="highlight-text">
          Railway
        </span>,
        ", ",
        <span key="highlight1" className="highlight-text">
          Digitalocean
        </span>,
        ", ",
        " and ",
        <span key="highlight1" className="highlight-text">
          pgAdmin 4
        </span>,
      ],
    },
    {
      id: 5,
      image: "version-control.svg",
      title: "Version Control",
      description: [
        "Experience with ",
        <span key="highlight1" className="highlight-text">
          Git
        </span>,
        ", ",
        <span key="highlight1" className="highlight-text">
          managing branches
        </span>,
        ", ",
        " and ",
        <span key="highlight1" className="highlight-text">
          merging code seamlessly
        </span>,
      ],
    },
    {
      id: 6,
      image: "ui-ux.svg",
      title: "UI/UX",
      description: [
        "Experience with tools like ",
        <span key="highlight1" className="highlight-text">
          Figma
        </span>,
        ", ",
        " and ",
        <span key="highlight1" className="highlight-text">
          Framer Motion
        </span>,
      ],
    },
  ];

  return (
    <Flex direction={"column"} alignItems={"center"}>
      <Flex
        direction={"column"}
        mb={"20px"}
        maxW={"750px"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Image
          src="/technologies/technologies.svg"
          alt="technologies"
          boxSize={"60px"}
          mb={"10px"}
        />

        <Text
          as="h2"
          fontSize={{ base: "18px", sm: "22px" }}
          lineHeight={{ base: "26px", sm: "36px" }}
          fontWeight={"500"}
          letterSpacing={0.01}
          color={"white"}
          mb={"5px"}
        >
          TECHNOLOGIES
        </Text>

        <Text
          fontSize={{ base: "18px", sm: "20px" }}
          lineHeight={{ base: "26px", sm: "28px" }}
          fontWeight={"500"}
          letterSpacing={"tighter"}
          color={"whiteAlpha.700"}
        >
          I&#39;ve worked with various web technologies, covering back-end,
          front-end, and mobile app development. Some technologies include:
        </Text>
      </Flex>

      <Spacer p={"10px"} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {technologiesData.map((tech) => (
          <GridItem key={tech.id}>
            <Box
              boxShadow="md"
              borderRadius="20px"
              p={"40px"}
              bgColor={"blackAlpha.900"}
              h={"100%"}
            >
              <Flex mb={"20px"}>
                <Center>
                  <Image
                    src={"/technologies/" + tech.image}
                    alt={tech.title}
                    boxSize={"40px"}
                  />
                  <Spacer px={"10px"} />
                  <Heading
                    as="h3"
                    fontSize={{ base: "18px", sm: "22px" }}
                    lineHeight={{ base: "26px", sm: "36px" }}
                    fontWeight={"500"}
                    letterSpacing={0.01}
                    color={"white"}
                    mt={0.5}
                    mb={0.5}
                  >
                    {tech.title}
                  </Heading>
                </Center>
              </Flex>
              <Text
                fontSize={{ base: "18px", sm: "20px" }}
                lineHeight={{ base: "26px", sm: "28px" }}
                fontWeight={"500"}
                color={"whiteAlpha.600"}
              >
                {tech.description.map((content) =>
                  typeof content === "string"
                    ? content
                    : React.cloneElement(content)
                )}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default TechnologiesSection;
