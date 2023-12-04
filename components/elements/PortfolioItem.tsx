import {
  Box,
  Heading,
  Text,
  Link,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  CardFooter,
  Spacer,
} from "@chakra-ui/react";

// Function to extract the domain from a URL
const extractDomain = (url: any) => {
  const match = url.match(/^(?:https?:\/\/)?(?:www\.)?(.*?\..*?)(?:\/|$)/);
  return match ? match[1] : url;
};

const ProjectItem = ({
  title,
  objective,
  role,
  approach,
  technologyStack,
  link,
  borderBottomColor,
}: any) => (
  <Card
    borderRadius="20px"
    background={`linear-gradient(270deg, #1a1a1a 0%, ${borderBottomColor} 600%)`}
    h={"100%"}
    className="portfolio-card"
  >
    <CardHeader pb={"0"}>
      <Heading
        as="h3"
        fontSize={{ base: "20px", sm: "22px" }}
        lineHeight={{ base: "28px", sm: "36px" }}
        fontWeight={"500"}
        letterSpacing={0.01}
        color={"white"}
        pb={"5px"}
        borderBottomColor={borderBottomColor}
        borderBottomWidth={"4px"}
        borderBottomStyle={"double"}
        // borderBottomStyle={"solid"}
        width={"fit-content"}
      >
        {title}
      </Heading>
    </CardHeader>
    <CardBody pb={"0"}>
      <Stack
        divider={<StackDivider borderColor="#a1a1a1" w={"90%"} />}
        spacing="4"
      >
        <Box>
          <Text className="sub-title">Objective:</Text>
          <Spacer pb={"5px"} />
          <Text className="sub-text">{objective}</Text>
        </Box>
        <Box>
          <Text className="sub-title">Role and Responsibilities:</Text>
          <Spacer pb={"5px"} />
          <Text className="sub-text">{role}</Text>
        </Box>
        <Box>
          <Text className="sub-title">Approach & Strategy:</Text>
          <Spacer pb={"5px"} />
          <Text className="sub-text">{approach}</Text>
        </Box>

        {technologyStack && (
          <Box>
            <Text className="sub-title">Technology Stack:</Text>
            <Spacer pb={"5px"} />
            <Text className="sub-text">{technologyStack}</Text>
          </Box>
        )}
      </Stack>
    </CardBody>
    <CardFooter justifyContent={{ base: "stretch", md: "flex-end" }}>
      {link && (
        <Link
          my={"15px"}
          w={{ base: "full", md: "auto" }}
          textAlign={"center"}
          href={link}
          isExternal
          // color={borderBottomColor}
          color={"white"}
          fontSize="lg"
          wordBreak={"break-all"}
          border={`2px solid ${borderBottomColor}`}
          bgColor={"transparent"}
          px={3}
          py={2}
          fontWeight={600}
          borderRadius={4}
          transition="all 0.7s"
          _hover={{
            textDecoration: "none",
            backgroundColor: borderBottomColor,
            borderColor: "white",
            color: "white",
          }}
        >
          {extractDomain(link)}
        </Link>
      )}
    </CardFooter>
  </Card>
);

export default ProjectItem;
